import isValidSudoku from './isValidSudoku';

var findEmptyCells = function (board) {
    // get empty cells' coordinates (row, col)
    const emptyCells = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') emptyCells.push([i, j]);
        }
    }
    return emptyCells;
};

var listAllCandidates = function (coord, board) {
    let candidates = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };
    let rowStart = 0,
        colStart = 0;

    for (let i = 0; i < 9; i++) {
        const value = board[i][coord[1]];
        if (value === '.' || candidates[value]) continue;
        candidates[value] = true;
    }
    for (let i = 0; i < 9; i++) {
        const value = board[coord[0]][i];
        if (value === '.' || candidates[value]) continue;
        candidates[value] = true;
    }

    if (coord[0] >= 3 && coord[0] < 6) rowStart = 3;
    else if (coord[0] >= 6) rowStart = 6;
    if (coord[1] >= 3 && coord[1] < 6) colStart = 3;
    else if (coord[1] >= 6) colStart = 6;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = board[rowStart + i][colStart + j];
            if (value === '.' || candidates[value]) continue;
            candidates[value] = true;
        }
    }

    const candidatesList = [];

    for (const [key, value] of Object.entries(candidates)) {
        if (!value) candidatesList.push(key);
    }

    return candidatesList;
};
var solveSudoku = function (board) {
    if (!isValidSudoku(board)) return false;

    const emptyCells = findEmptyCells(board);

    var fill = function (coordIndex) {
        if (coordIndex >= emptyCells.length) return true;

        const coord = emptyCells[coordIndex];
        const candidates = listAllCandidates(coord, board);

        for (let i = 0; i < candidates.length; i++) {
            board[coord[0]][coord[1]] = candidates[i];
            if (fill(coordIndex + 1)) return true;
        }
        board[coord[0]][coord[1]] = '.';
        return false;
    };

    return fill(0);
};

export default solveSudoku;
