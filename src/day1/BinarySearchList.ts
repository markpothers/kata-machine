/**
 * A binary search is good for ordered data! By splitting the array in 2, you can keep
 * halving the search area until you find the value or run out of data and in doing so
 * achieve O(log n)
 * Find the center item in the array. If larger than value, recurse with the smaller side
 * if smaller than value, recurse with the larger side.
 */
export default function bs_list(haystack: number[], needle: number): boolean {
    const middleIndex = Math.floor(haystack.length / 2);
    const middleValue = haystack[middleIndex];

    if (middleValue === needle) {
        return true;
    }
    if (middleValue > needle) {
        return bs_list(haystack.slice(0, middleIndex), needle);
    }

    if (middleValue < needle) {
        return bs_list(haystack.slice(middleIndex + 1), needle);
    }

    return false;
}
