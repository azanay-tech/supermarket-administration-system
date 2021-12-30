/**
 * Convert a string value to boolean value.
 * This is mainly used to convert enviroment variables to boolean.
 *
 * @param value Input value to convert to truthy/falsy value
 * @returns boolean value if input belongs to ['true', 'on', 1]
 */
export const bool = (value: string | undefined | null): boolean =>
    !!value &&
    (value.toLowerCase() === 'true' ||
        value.toLowerCase() === 'on' ||
        value.toLowerCase() === '1');

export default {};
