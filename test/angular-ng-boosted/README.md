# Angular Boosted Starter

This project is a starter project, an example of how to build and configure an Angular application along with [ODS/Boosted](https://boosted.orange.com/) and use some additional tools like [ng-bootstrap](https://ng-bootstrap.github.io/), [ODS Charts](https://ods-charts.netlify.app/) and [Solaris Icons Finder](https://oran.ge/icons).
It is used also to demonstrate that all Boosted V5 JS components are compatible with Angular.

It is made and maintained by the ODS/Boosted team (please find the contacts at the end).

This project has been build from angular v17 with default standalone components.

## Table of Contents

<ol>
  <li>Getting Started</li>
  <li>Tips and Good Practices
    <ol>
      <li>Directory Structure</li>
      <li>AppComponent Structure</li>
    </ol>
  </li>
  <li>Boosted Integration
    <ol>
        <li>Install Boosted</li>
        <li>SCSS Import and Optimization</li>
        <li>JS Import</li>
        <li>Header Implementation</li>
        <li>Footer Implementation</li>
        <li>Override Boosted Styles</li>
        <li>Manage Light/Dark Mode</li>
    </ol>
  </li>
  <li>ODS Charts Integration
    <ol>
      <li>Install ODS Charts</li>
      <li>ODS Charts Usage</li>
    </ol>
  </li>
  <li>ng-bootstrap Integration
    <ol>
      <li>Install ng-bootstrap</li>
      <li>Ng-bootstrap Components Usage</li>
      <li>Additional SCSS</li>
    </ol>
  </li> 
  <li>Icons Usage</li>
  <li>Community</li>
  <li>Contributing</li> 
  <li>Authors</li> 
  <li>License</li>
</ol>

## Getting Started

To launch the project locally, clone this project, install dependencies and run project:

```bash
git clone https://gitlab.tech.orange/ods/angular-boosted-starter.git
npm install
npm run start
```

Then navigate to http://localhost:4200. To facilitate maintenance and documentation, the home page is a copy of the README file.

## Tips and Good Practices

### Directory Structure

Here we offer a directory structure example, experienced on real projects, which is effective for managing files in a development team.

```
PROJECT /* Entry point and configuration files */
│   .gitignore
|   .gitlab-ci.yml
│   angular.json
|   CHANGELOG.md
|   CONTRIBUTING.md
|   MAINTAINERS
│   package.json
│   package.lock.json
│   README.md
|   tsconfig.app.json
│   tsconfig.json
|   tsconfig.spec.json
│
└───src /* Source files */
    |   favicon.ico
    │   index.html
    │   main.ts
    │
    ├───app /* The app root containing the AppComponent */
    |   |   app.component.html
    |   |   app.component.scss
    |   |   app.component.spec.ts
    |   |   app.component.ts
    |   |   app.config.ts
    |   |   app.routes.ts /* Define the routes of your app */
    |   |
    |   ├───components /* Reusable components all over your web app */
    |   |   ├───footer
    |   |   └───header
    |   |
    |   ├───pages /* The different pages (which are also components) of your web app */
    |   |   ├───home
    |   |   ├───icons
    |   |   ├───ng-bootstrap-components
    |   |   └───ods-charts
    |   |
    |   └───services /* Angular services that can be injected in your components */
    |       └───color-mode
    |
    └───assets /* All static assets to the server, as images, styles and more... */
        ├───images /* All the static images you need */
        |       orange-logo.svg
        |       svg-sprite.svg /* Single SVG file containing all needed icons for your project, see below */
        |
        └───styles /* All the global CSS/SCSS styles */
                custom-boosted.scss /* Optimized imports of Boosted SCSS files, see below */
                additional-ng-bootstrap.scss /* Basic styling offered for additional ng-bootstrap components, see below */
                styles.scss /* Your specific project's styles */
```

### AppComponent

The AppComponent is the root of your web application. We recommend a structure like this (but it is to be adapted to
your project's context and needs):

```html
<div class="min-vh-100" ...>
  <app-header ...></app-header>
  <main class="container-xxl">
    <router-outlet> </router-outlet>
  </main>
  <app-footer></app-footer>
</div>
```

This structure ensures that:

- header and footer are always the same along the pages,
- all web app content is inside a `<main>` tag with always the same `container-xxl` class (you can use another container class, but the same class should be used in header, footer and main, see [Boosted documentation on containers](https://boosted.orange.com/docs/layout/containers/)).

## Boosted Integration

As an example and a demo, this projects imports Boosted and offers a page with all the available Boosted components.
You can go to this "Boosted components" page from the header.

### Install Boosted

To add Boosted to your project, you can use npm:

`npm install boosted`

### SCSS Import and Optimization

To make Boosted components displayed correctly, you have to import corresponding SCSS.
They are many ways to do this, but we recommend using import through [`angular.json`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/angular.json) file, which:

- best manages all CSS/SCSS imports of the project,
- allows developers to use Sass as well in their own style files.

In a necessary eco-design approach, we also recommend a CSS custom/optimized build: create a `custom-boosted.scss` file in your project, and inside import needed components:

- you can start from our [`custom-boosted.scss`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/assets/styles/custom-boosted.scss) example and remove all unused components,
- you can refer to [Boosted documentation on optimizing Sass imports](https://boosted.orange.com/docs/customize/optimize/#lean-sass-imports).

```json
{
  ...
  "projects": {
    "angular-boosted": {
      ...
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/boosted/dist/css/orange-helvetica.min.css",
              "src/assets/styles/custom-boosted.scss",
              ...
            ],
            "scripts": [
              ...
            ]
          }
        }
      }
    }
  }
}
```

### JS Import

<div class="alert alert-warning mb-3" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p class="alert-heading h4">It is to be noted, that if you have no JS components in your project, you will have to import focus-visible anyway. </p>
</div>

Some Boosted components include dynamic behaviors implemented in JS, which list is available on
[Boosted JS components documentation](https://boosted.orange.com/docs/5.3/getting-started/introduction/#js-components)
To make them work, you have to import the corresponding JS, meaning:

- if no JS components, import focus-visible (minified version)
- if only JS components not using Popper (like Dropdowns, Popovers and Tooltips), import boosted.js (minified version)
- if JS components using Popper, import boosted.bundle.js (minified version)

They are many ways to import JS in an Angular project, but we recommend using import through [`angular.json`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/angular.json) file, which best manages all JS imports of the project.

```json
{
  ...
  "projects": {
    "angular-boosted": {
      ...
      "architect": {
        "build": {
          "options": {
            "styles": [
              ...
            ],
            "scripts": [
              ...,
              "node_modules/boosted/dist/js/boosted.bundle.min.js"
            ]
          }
        }
      }
    }
  }
}
```

If an access to JS API is needed to interact with components (especially initialization), you'll have to declare Boosted
as a constant in the Typescript part of your Angular component.

```js
declare const boosted: any;

@Component({
 ...
})
export class BoostedComponentsComponent implements OnInit {
  ngOnInit() {
    // Boosted tooltip initialization
    ...
    return new boosted.Tooltip(tooltipTriggerEl);
  }
}
```

### Header Implementation

The first component you probably want to add in your project is a header, which is called Orange navbar in Boosted.
Header implementation can be isolated in a specific Angular component to make main AppComponent more readable.
From [Orange navbar documentation in Boosted](https://boosted.orange.com/docs/components/orange-navbar/) and/or [Orange navbars Boosted examples](https://boosted.orange.com/docs/examples/navbars/), you can select exactly the needed elements of your header and put them together by copy/paste.

Don't forget:

- test minimizing behavior for breakpoints from md to xxl and make sure the logo and header are minimized when scrolling down the page,
- test responsive behavior and make sure burger menu appears correctly on small screens,
- if your header contains a menu linking to other pages of your web app, when a `<a class="nav-link">` item becomes active:
  - add `active` class (to remove when it becomes inactive),
  - set attribute `aria-current="true"` (to remove when it becomes inactive).

See our header example: [`header.component.html`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/components/header/header.component.html).

See below to know more about how to manage light/dark mode.

### Footer Implementation

Another essential building block of your front-end is the footer. Its implementation can be isolated in a specific Angular component to make main AppComponent more readable.
From [Footer documentation in Boosted](https://boosted.orange.com/docs/components/footer/) and/or [Footer Boosted examples](https://boosted.orange.com/docs/examples/footers/), you can pick exactly the needed footer bars and put them together by copy/paste.
You juste have to add a separator between each bar of the final footer. Note that your footer should contain at least the mandatory terms and conditions bar.

At the beginning of projects, pages are mostly empty and projects often want to have a footer sticky at the bottom.
But when they start to fill, they want to have footer at the end of the browser window (viewport).

We propose in this starter such a hybrid footer by adding this CSS:

```scss
html,
body {
  min-height: 100vh;
}

footer {
  position: sticky;
  top: 100vh;
}
```

Note that this code will work, if there is no HTML tag between `<body>` and `<footer>`. In other words, each HTML parent of the `<footer>` should have `min-height: 100vh;` attribute in its style.
You also should avoid using `fixed-bottom` class on `<footer>`.

Don't forget:

- test responsive behaviour of each footer bar,
- if your footer contains a navigation bar linking to other pages of your web app, when a `<a class="nav-link">` item becomes active:
  - add `active` class (to remove when it becomes inactive),
  - set attribute `aria-current="true"` (to remove when it becomes inactive).

### Override Boosted Styles

If you need it, you can override Boosted styles, but it has to be done with discernment since Boosted is a guaranty of compliance with the brand and web standards.
If you are quite sure of what you are doing, note that:

- overriding Boosted styles from an Angular component's styles won't work; you have to put your styles in your main styles file,
- in the [`angular.json`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/angular.json) file, you have to import first Boosted styles, and then your own main styles file.

### Manage Light/Dark Mode

Coming with Boosted v5.3.3, color modes (themes) are now available.

We chose to manage the color mode in AppComponent. This management is based on two variables:

- `selectedMode`, that can be `light`, `dark` or `auto`,
- `currentMode`, that can be `light` or `dark`, deducted from selectedMode and user preferences.

In the [`app.component.html`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/app.component.html),
`currentMode` is set on the encompassing `div`, and `selectedMode` is passed as an input to the HeaderComponent
(to update the mode selector), and as an output (when user changes the selected mode).

In the [`app.component.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/app.component.ts),
`selectedMode` is initialized with `localStorage` with a default value set to `auto`. `currentMode` is defined by `selectedMode`,
`auto` value defaults to user preferences. When `selectedMode` is updated (and received from HeaderComponent, see
[`header.component.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/components/header/header.component.ts)),
`currentMode` is updated as well by the AppComponent. Then, its value is registered in a BehaviourSubject inside a service
called [`color-mode.service.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/services/color-mode.service.ts).

If you have a page or component that needs to know what is the current color mode, it only has to subscribe to ColorModeService
to be notified when the `currentMode` value changes. That's what we have done in
[`ods-charts.component.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/ods-charts/ods-charts.component.ts)).

## ODS Charts Integration

As an example and a demo, you can see some charts made with ODS charts on "ODS charts" page from the header.
To make a chart, you'll need Boosted CSS, ODS Charts JS and ngx-echarts to used charts as Angular components.

### Install ODS Charts

To use ODS Charts in your project,you'll have to install `echarts`, `ngx-echarts` and `ods-charts`.

`npm install echarts ngx-echarts ods-charts`

### ODS Charts Usage

In your local component, you have to import the needed elements from `echarts` (like `ECharts` and `EChartsOption`), `ODS Charts` and `ngx-echarts` (like `NgxEchartsDirective` and `provideEcharts`).
See our example in [`ods-charts.component.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/ods-charts/ods-charts.component.ts) and [`ods-charts.component.html`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/ods-charts/ods-charts.component.html), and refer to [ODS Charts](https://ods-charts.netlify.app/) documentation for more details.

## ng-bootstrap Integration

As an example and a demo, you can see some ng-bootstrap components on "ng-bootstrap components" page from the header.
Since all Boosted V5 components work fine with Angular, we propose here only components not implemented by Boosted, and that could be useful, that is Date picker, Pagination and Time picker.

### Install ng-bootstrap

To add ng-bootstrap to your project, you can use npm:

`npm install @ng-bootstrap/ng-bootstrap`

Please refer to [ng-bootstrap 'Getting started'](https://ng-bootstrap.github.io/#/getting-started) for more documentation.

### Ng-bootstrap Components Usage

In your local component, you only have to import the needed module (ex: `NgbDatepickerModule` for a date picker) and then refer to [ng-bootstrap](https://ng-bootstrap.github.io/) documentation to use the component.

Keep in mind that, in an eco-design approach, you should only import ng-bootstrap components that you need (see [ng-bootstrap documentation about imports](https://ng-bootstrap.github.io/#/getting-started#imports)).

See our example in [`ng-bootstrap-components.component.ts`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/ng-bootstrap-components/ng-bootstrap-components.component.ts) and [`ng-bootstrap-components.component.html`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/ng-bootstrap-components/ng-bootstrap-components.component.html).

### Additional SCSS

In this starter, we offer you some basic styling for these additional ng-bootstrap components, provided as an example of how to style them.

The SCSS files must be imported in [`angular.json`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/angular.json):

```json
{
  ...
  "projects": {
    "angular-boosted": {
      ...
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/boosted/dist/css/orange-helvetica.min.css",
              "src/assets/styles/custom-boosted.scss",
              "src/assets/styles/additional-ng-bootstrap.scss",
              ...
            ]
          }
        }
      }
    }
  }
}
```

Refer to the source of the [additional ng-bootstrap SCSS file](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/assets/additional-ng-bootstrap.scss).

## Icons Usage

In the "Icons" page, we only gather an example of how to use a SVG sprite in a project.
Please refer to [`icons.component.html`](https://gitlab.tech.orange/ods/angular-boosted-starter/-/blob/main/src/app/pages/icons/icons.component.html),
[Boosted documentation about icons](https://boosted.orange.com/docs/extend/icons/) and to the tool [Solaris Icons Finder](https://oran.ge/icons) and its documentation.

## Community

You can chat with the core team on [FoODS Teams/ODS Web browsing](https://teams.microsoft.com/l/channel/19%3aed6a64c0c22d4b2084d304d0e33a1168%40thread.tacv2/05-ODS%2520Web%2520browsing?groupId=a9581e9e-6775-46f5-9e4a-3ce57096e6be&tenantId=90c7a20a-f34b-40bf-bc48-b9253b6f5d20).

## Contributing

Please read CONTRIBUTING.md for details on our process for submitting merge requests to us.

## Authors

- **Hannah Issermann** - [@hannah.issermann](https://gitlab.tech.orange/hannah.issermann)
- **Louis-Maxime Piton** - [@louismaxime.piton](https://gitlab.tech.orange/louismaxime.piton)

## License

This project is licensed under MIT License - see the [LICENSE](LICENSE.md) file for details.
