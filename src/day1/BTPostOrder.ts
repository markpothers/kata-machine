const postOrder = (head: BinaryNode<number>, result: number[]): number[] => {
    if (head.left) {
        postOrder(head.left, result);
    }

    if (head.right) {
        postOrder(head.right, result);
    }

    result.push(head.value);

    return result;
};

/**
 * For a lot of recursive functions, it's easier to create a result and then modify it in place
 * and probably quicker as well.
 * Here we're pushing nodes into array in 'post-order'
 * This is left to right ordering of a tree where root is top and branches go down.
 * This is left to right, then up. Push left child (all the way down), push right child (all the way down), push myself.
 */
export default function post_order_search(head: BinaryNode<number>): number[] {
    return postOrder(head, []);
}
