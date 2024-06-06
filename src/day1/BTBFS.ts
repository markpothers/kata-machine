/**
 * A breadth first search looks layer by layer through the tree.
 * Create an array to contain your queue of nodes to check
 * Check the value of the current node for a match and 'shift' it from the array
 * Push the current nodes children into the array
 * Repeat for the next node in the array
 */
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length > 0) {
        const nextItem = q.shift();

        if (nextItem?.value === needle) {
            return true;
        }

        if (nextItem?.left) {
            q.push(nextItem.left);
        }

        if (nextItem?.right) {
            q.push(nextItem.right);
        }
    }

    return false;
}
