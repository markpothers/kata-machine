const partition = (
    array: number[],
    loIndex: number,
    highIndex: number,
    pivot: number,
): number => {
    let insertIndex = loIndex - 1;
    for (let i = loIndex; i < highIndex; i++) {
        if (array[i] <= pivot) {
            insertIndex++;
            const temp = array[insertIndex];
            array[insertIndex] = array[i];
            array[i] = temp;
        }
    }
    insertIndex++;
    array[highIndex] = array[insertIndex];
    array[insertIndex] = pivot;
    return insertIndex;
};

const quickSort = (
    array: number[],
    loIndex: number,
    highIndex: number,
): void => {
    if (loIndex >= highIndex) {
        return;
    }
    const pivot = array[highIndex];
    const pivotIndex = partition(array, loIndex, highIndex, pivot);
    quickSort(array, 0, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, highIndex);
};

/**
 * Quick sort is an improvement over bubble sort.
 * Pick an item in the list (usually the last).  This will be the pivot.
 * 'Partition' the list.  Iterate over it.  If the value is < than the pivot, move it
 * to an earlier position by swapping it with the insertIndex which increments with the loop. Modify in place!
 * Then move the last item (the pivot) into the insertIndex. Everything on the left is now smaller,
 * which everything on the right is now larger.
 * Now recurse with everything before the pivot and also with everything after the pivot.
 * If loIndex and hiIndex are the same, you've reached length = 0 and should return.
 * Best case scenario this is O(log n) but worst case scenario, it's O(n).
 */
export default function quick_sort(arr: number[]): void {
    quickSort(arr, 0, arr.length - 1);
}
