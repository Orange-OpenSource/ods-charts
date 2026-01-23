import { z } from 'zod';
import packageJson from '../../../package.json';

// The config schema used to validate the config file content and ensure all values required by the site are valid.
const configSchema = z.object({
  docs_version: z.string(),
  lib_version: z.string(),
  echarts_version: z.string().optional(),
});

let config: Config | undefined;

// A helper to get the config loaded fom the `config.yml` file. If the config does not match the `configSchema`, an
// error is thrown to indicate that the config file is invalid and some action is required.
export function getConfig(): Config {
  if (config) {
    // Returns the config if it has already been loaded.
    return config;
  }

  try {
    config = {
      echarts_version: packageJson.devDependencies.echarts.replace(/^[\^~]/, ''),
      lib_version: packageJson.version,
      docs_version: packageJson.version.substring(0, packageJson.version.lastIndexOf('.')),
    };

    return config;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('The `config.yml` file content is invalid:', error.issues);
    }

    throw new Error('Failed to load configuration from `config.yml`', { cause: error });
  }
}

type Config = z.infer<typeof configSchema>;
