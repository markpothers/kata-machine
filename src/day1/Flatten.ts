function recursiveFlatten(array: any[], result: any[]) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            recursiveFlatten(array[i], result);
        } else {
            result.push(array[i]);
        }
    }
}

export default function flatten(array: any[]) {
    const result: any[] = [];
    recursiveFlatten(array, result);
    return result;
}
