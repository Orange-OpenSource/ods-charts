export enum MainAxisType {
  category = 'category',
  time = 'time',
}

export function isMainAxis(axis: { data?: any; type?: MainAxisType | string }) {
  return axis && (axis.data || (axis.type && Object.values(MainAxisType).includes(axis.type as MainAxisType)));
}
