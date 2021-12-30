/**
 * Convert a string value to boolean value.
 * This is mainly used to convert enviroment variables to boolean.
 *
 * @param value Input value to convert to truthy/falsy value
 * @returns boolean value if input belongs to ['true', 'on', 1]
 */
export const bool = (value: string | undefined | null): boolean =>
    compareStrings(value, 'true') ||
    compareStrings(value, 'on') ||
    compareStrings(value, '1');

/**
 * Compares the equality of two strings.
 * Case sensitivity of comparison can be controlled by caseInsensitive parameter.
 *
 * @param stringOne Input String
 * @param stringTwo Input String to compare with stringOne
 * @param caseInSensitive Whether comparison should be case insensitive or not [default: true]
 * @returns true if stringOne and stringTwo are equal
 */
export const compareStrings = (
    stringOne: string | undefined | null,
    stringTwo: string | undefined | null,
    caseInSensitive: boolean = true
): boolean => {
    if (!stringOne || !stringTwo) {
        return false;
    }

    return caseInSensitive
        ? stringOne.toLowerCase() === stringTwo.toLowerCase()
        : stringOne === stringTwo;
};

export default {};
