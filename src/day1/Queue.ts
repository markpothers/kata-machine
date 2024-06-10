type Node<T> = {
    value: T;
    next: Node<T> | undefined;
};

export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode = {
            value: item,
            next: undefined,
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        if (this.head && this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    deque(): T | undefined {
        if (this.head) {
            this.length--;
            const temp = this.head;
            this.head = this.head.next;
            temp.next = undefined;

            if (this.length === 0) {
                this.tail = undefined;
            }
            return temp.value;
        }

        return undefined;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
