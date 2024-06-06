const inOrder = (head: BinaryNode<number>, result: number[]): number[] => {
    if (head.left) {
        inOrder(head.left, result);
    }

    result.push(head.value);

    if (head.right) {
        inOrder(head.right, result);
    }

    return result;
};

/**
 * For a lot of recursive functions, it's easier to create a result and then modify it in place
 * and probably quicker as well.
 * Here we're pushing nodes into array in 'in-order'
 * This is left to right ordering of a tree where root is top and branhes go down.
 * Push my left child (all the way down), push myself (middle), push my right child (all the way down).
 */
export default function in_order_search(head: BinaryNode<number>): number[] {
    return inOrder(head, []);
}
