import ArrayList from "@code/ArrayList";
import flatten from "@code/Flatten";
import { test_list } from "./ListTest";

test("flatten", function () {
    const testArray = ['mark', 'lauren', ['samuel', [4], 'owen', [1]]];
    expect(flatten(testArray)).toEqual(['mark', 'lauren', 'samuel', 4, 'owen', 1])
});

