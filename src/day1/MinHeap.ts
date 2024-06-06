/**
 * this structure works for a priority queue
 * you can add items in any order but they
 * come out in the right order through the process of 'heapification'.
 * The heap is a tree where the smallest number is at the top and every number below in tree must
 * be bigger than the last.  This is 'weak' ordering.  As numbers are added, you iteratively move them up
 * the tree by swapping them with larger numbers above them.
 * As the process continues, the smallest number is always at the top waiting to come out
 */
export default class MinHeap {
    // length is tracked separately to avoid having to recalculate it all the time
    public length: number;
    public data: number[];

    constructor() {
        this.length = 0;
        this.data = [];
    }

    /**
     * to insert, simply add the value at the end of the array and allow it to bubble up
     */
    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    /**
     * to delete a value, or remove the first from the queue,
     * grab it, then place the very last number at the front of the queue
     * and allow it to bubble down to its rightful position. This ensures that
     * the next smallest number is always first.
     * Don't forget to -- the length
     */
    delete(): number {
        const output = this.data[0];

        const lastValue = this.data.pop();
        if (lastValue) {
            this.data[0] = lastValue;
            this.heapifyDown(0);
            this.length--;
        }

        return output;
    }

    /**
     * the bubbling process
     * if you aren't at the top, find your parent. If you are smaller than your parent
     * swap with it.
     * Recursively do this on the parent's index to move up as high as needed
     */
    private heapifyUp(index: number) {
        const myValue = this.data[index];
        const parentIndex = this.parentIndex(index);
        const parentValue = this.data[parentIndex];

        if (parentIndex < 0) {
            return;
        }

        if (myValue < parentValue) {
            this.data[index] = parentValue;
            this.data[parentIndex] = myValue;
        } else {
            return;
        }

        this.heapifyUp(parentIndex);
    }

    /**
     * find your value and the value of your left and right children
     * swap with the smaller of the 2 children and recurse with the
     * child's index to bubble down to your final position
     */
    private heapifyDown(index: number) {
        const myValue = this.data[index];
        const leftChildIndex = this.leftChildIndex(index);
        const leftChildValue = this.data[leftChildIndex];
        const rightChildIndex = this.rightChildIndex(index);
        const rightChildValue = this.data[rightChildIndex];

        if (!leftChildValue && !rightChildValue) {
            return;
        }

        if (myValue > leftChildIndex && leftChildValue <= rightChildValue) {
            this.data[leftChildIndex] = myValue;
            this.data[index] = leftChildValue;
            this.heapifyDown(leftChildIndex);
        }

        if (myValue > rightChildValue && rightChildValue <= leftChildValue) {
            this.data[rightChildIndex] = myValue;
            this.data[index] = rightChildValue;
            this.heapifyDown(rightChildIndex);
        }
    }

    /**
     * in a binary tree, as an array, your parent is always Math.floor(index-1)/2
     */
    private parentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    /**
     * in a binary tree, as an array, your left child is always (2*index)+1
     */
    private leftChildIndex(index: number) {
        return 2 * index + 1;
    }

    /**
     * in a binary tree, as an array, your right child is always (2*index)+2
     */
    private rightChildIndex(index: number) {
        return 2 * index + 2;
    }
}
