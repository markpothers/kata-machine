const isOpen = (
    maze: string[],
    wall: string,
    position: Point,
    previousPositions: Point[],
) => {
    // if is outside of maze
    if (
        position.x < 0 ||
        position.x > maze[0].length ||
        position.y < 0 ||
        position.y > maze.length
    ) {
        return false;
    }

    // is a wall
    if (maze[position.y][position.x] === wall) {
        return false;
    }

    //if you've moved back to the previous position
    const previousVisit = previousPositions.find(
        (pos) => pos.x === position.x && pos.y === position.y,
    );
    if (previousVisit) {
        return false;
    }

    return true;
};

function recurse(
    maze: string[],
    wall: string,
    end: Point,
    previousPositions: Point[],
): Point[] {
    const currentPosition = previousPositions[previousPositions.length - 1];
    const choices = [
        { x: currentPosition.x, y: currentPosition.y - 1 },
        { x: currentPosition.x + 1, y: currentPosition.y },
        { x: currentPosition.x, y: currentPosition.y + 1 },
        { x: currentPosition.x - 1, y: currentPosition.y },
    ];

    const isEnd = choices.find(
        (choice) => choice.x === end.x && choice.y === end.y,
    );
    if (isEnd) {
        return [currentPosition, end];
    }

for(let i = 0; i<choices.length;i++){

}

    const nextStep = choices.find((choice) =>
        isOpen(maze, wall, choice, previousPositions),
    );

    if (nextStep) {
        return [
            currentPosition,
            ...recurse(maze, wall, end, [...previousPositions, nextStep]),
        ];
    } else{
      return [previousPositions[previousPositions.length - 1], ...recurse(maze, wall, end, [...previousPositions.slice(-2)])];
    }
    return [];
}

/**
 * Recursively try directions and push a new point until you find the end.
 * From your current point, calculate the movement options (n, e, s, w).
 * In order, check if each space is open (not a wall, and not seen before). If it is, push and recurse.
 * if the new point is the end, return.
 * If no point is available pop the last coordinate of the array and continue the recursion with untried
 * movement options.
 */
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    return recurse(maze, wall, end, [start]);
}
