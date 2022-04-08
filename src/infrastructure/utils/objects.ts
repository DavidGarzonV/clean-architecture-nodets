/*
 * Deep copy of source object into target object.
 * It does not overwrite properties.
 */
export const assignObject = (target: { [x: string]: any; }, source: { [x: string]: any; }) => {
  if (target && typeof target === 'object' && source && typeof source === 'object') {
    Object.keys(source).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === undefined) {
        target[key] = source[key];
      } else {
        exports.assignObject(target[key], source[key]);
      }
    });
  }
  return target;
};