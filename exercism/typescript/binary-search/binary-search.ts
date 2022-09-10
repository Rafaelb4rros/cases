export function find<T>(haystack: T[], needle: T): number | Error {
    let size = haystack.length - 1, left = 0, right = size, mid = 0;

    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (haystack[mid] === needle) return mid;
        if (needle > haystack[mid]) left = mid + 1;
        else right = mid - 1;
    }

    throw new Error("Value not in array");
}
