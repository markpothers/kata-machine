const preOrder = (head: BinaryNode<number>, result: number[]): number[] => {
    result.push(head.value);

    if (head.left) {
        preOrder(head.left, result);
    }

    if (head.right) {
        preOrder(head.right, result);
    }

    return result;
};

/**
 * For a lot of recursive functions, it's easier to create a result and then modify it in place
 * and probably quicker as well.
 * Here we're pushing nodes into array in 'pre-order'
 * This is depth first ordering.
 * Push myself, push my left child all the way down, push right child all the way down
 */
export default function pre_order_search(head: BinaryNode<number>): number[] {
    return preOrder(head, []);
}
