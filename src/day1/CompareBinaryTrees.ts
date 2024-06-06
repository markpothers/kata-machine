/**
 * if you want to compare trees, then a depth first search is the way to go since by checking if there's a child,
 * you maintain the structure of the tree.
 * For the current node:
 * - are we both null - same
 * - is one of us null - different
 * - are our values different
 * - recurse on the left side and recurse on the right side.
 */
export default function compare(
    a: BinaryNode<number> | null,
    b: BinaryNode<number> | null,
): boolean {
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
