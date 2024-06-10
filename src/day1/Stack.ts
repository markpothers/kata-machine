type Node<T> = {
    value: T;
    previous: Node<T> | undefined;
};

export default class Stack<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    push(item: T): void {
        const newNode = {
            value: item,
            previous: undefined,
        } as Node<T>;

        this.length++;

        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        if (this.head && this.tail) {
            newNode.previous = this.tail;
            this.tail = newNode;
        }
    }

    pop(): T | undefined {
        if (this.tail) {
            const temp = this.tail;
            this.tail = this.tail.previous;
            temp.previous = undefined;
            this.length--;

            if (this.length === 0) {
                this.head = undefined;
            }

            return temp?.value;
        }

        return undefined;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}
