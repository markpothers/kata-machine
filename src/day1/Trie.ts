type Node = {
    value: string | null;
    isWord: boolean;
    children: Record<string, number>;
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphaSplit = [...alphabet];

// this structure works for something like an autocomplete
export default class Trie {
    public data: Node[];
    public length: number;

    constructor() {
        this.data = [
            {
                value: null,
                isWord: false,
                children: {},
            },
        ];
        this.length = 0;
    }

    get head() {
        return this.data[0];
    }

    // start at the head and the first letter
    // iterate through the item's letters
    // if the currentNode has a child of that letter, move to it and the next letter
    // otherwise, create a node, add it to the data array and a reference in the current node
    // then move to it and continue adding the letters
    // for the last letter, don't forget to set isWord to true
    insert(item: string): void {
        let currentNode = this.head;

        for (let i = 0; i < item.length; i++) {
            const currentLetter = item[i];

            if (currentNode.children[currentLetter]) {
                currentNode = this.data[currentNode.children[currentLetter]];
            } else {
                const newNode = {
                    value: currentLetter,
                    isWord: i === item.length - 1,
                    children: {},
                } as Node;
                this.length++;
                this.data.push(newNode);
                currentNode.children = {
                    ...currentNode.children,
                    [currentLetter]: this.length,
                };
                currentNode = this.data[currentNode.children[currentLetter]];
            }
        }
    }

    // find the last letter of the word
    // set isWord to false
    delete(item: string): void {
        let currentNode = this.head;

        for (let i = 0; i < item.length; i++) {
            const currentLetter = item[i];
            const indexOfLetter = currentNode.children[currentLetter];
            currentNode = this.data[indexOfLetter];
        }
        currentNode.isWord = false;
    }

    // first find the last letter of the partial
    // the recursively dfs for all other words,
    // adding to the tracking string and pushing them
    // into the result array
    find(partial: string): string[] {
        const output: string[] = [];

        let startingIndex = 0;
        let currentNode = this.head;

        for (let i = 0; i < partial.length; i++) {
            const currentLetter = partial[i];
            if (currentNode.children[currentLetter]) {
                const nextNodeIndex = currentNode.children[currentLetter];
                currentNode = this.data[nextNodeIndex];
            } else {
                return output;
            }
        }

        this.recurse(currentNode, partial, output);

        return output;
    }

    // dfs down from the current node and find all
    // descendents who are words
    private recurse(
        currentNode: Node,
        currentString: string,
        result: string[],
    ) {
        if (currentNode.value) {
            if (currentNode.isWord) {
                result.push(currentString);
            }

            if (Object.keys(currentNode.children).length === 0) {
                return;
            }

            for (let i = 0; i < alphaSplit.length; i++) {
                const nextLetter = alphaSplit[i];
                if (currentNode.children[nextLetter]) {
                    const nextLetterIndex = currentNode.children[nextLetter];
                    const updatedString = currentString.concat(nextLetter);
                    this.recurse(
                        this.data[nextLetterIndex],
                        updatedString,
                        result,
                    );
                }
            }
        }
    }
}
