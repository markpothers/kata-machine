/**
 * a depth first search checks if the node matches the needle, if not, it checks the left
 * (or other ordered branch) first and then checks the right.  If there is no child,
 * return false
 */
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    if (head.value === needle) {
        return true;
    }

    if (head.value < needle && head.right) {
        return dfs(head.right, needle);
    }

    if (head.value > needle && head.left) {
        return dfs(head.left, needle);
    }

    return false;
}
