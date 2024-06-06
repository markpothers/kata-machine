function isOpen(
    nextPosition: Point,
    maze: string[],
    wall: string,
    path: Point[],
) {
    // if outside the maze - false
    if (
        nextPosition.x < 0 ||
        nextPosition.x >= maze[0].length ||
        nextPosition.y < 0 ||
        nextPosition.y >= maze.length
    ) {
        return false;
    }

    // if is a wall - false
    if (maze[nextPosition.y][nextPosition.x] === wall) {
        return false;
    }

    // if is in path - false
    if (
        path.some(
            (step) => step.x === nextPosition.x && step.y === nextPosition.y,
        )
    ) {
        return false;
    }

    return true;
}

function walk(maze: string[], wall: string, end: Point, path: Point[]) {
    const currentPosition = path[path.length - 1];

    if (currentPosition.x === end.x && currentPosition.y === end.y) {
        return true;
    }

    const moveOptions = [
        { x: currentPosition.x, y: currentPosition.y - 1 },
        { x: currentPosition.x + 1, y: currentPosition.y },
        { x: currentPosition.x, y: currentPosition.y + 1 },
        { x: currentPosition.x - 1, y: currentPosition.y },
    ];

    for (let i = 0; i < moveOptions.length; i++) {
        if (isOpen(moveOptions[i], maze, wall, path)) {
            path.push(moveOptions[i]);
            const reachedEnd = walk(maze, wall, end, path);
            if (reachedEnd) {
                return true;
            } else {
                path.pop();
            }
        }
    }

    return false;
}

/**
 * Recursively try directions and push a new point until you find the end.
 * From your current point, calculate the movement options (n, e, s, w).
 * In order, check if each space is open (inside the maze, not a wall, and not seen before). If it is, push and recurse.
 * if the new point is the end, return.
 * Check to see if the recursion returned true. If it did you made it.  return.
 * If it didn't 'pop' path, allowing previous loops to continue.
 */
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [start];

    walk(maze, wall, end, path);
    return path;
}
