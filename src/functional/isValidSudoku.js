class HashMap {
    constructor() {
        this.map = {
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
    }

    isSeen(v) {
        if (v === '.') return false;
        if (!this.map[v]) {
            this.map[v] = true;
            return false;
        }
        return true;
    }
    clear() {
        this.map = {
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
    }
}
var isValidRows = function (board) {
    const hm = new HashMap();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (hm.isSeen(board[i][j])) return false;
        }
        hm.clear();
    }
    return true;
};
var isValidCols = function (board) {
    const hm = new HashMap();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (hm.isSeen(board[j][i])) return false;
        }
        hm.clear();
    }
    return true;
};
var isValidSubBoxs = function (board) {
    var isValidSubBox = function (board, rowStart, colStart) {
        const hm = new HashMap();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (hm.isSeen(board[rowStart + i][colStart + j])) return false;
            }
        }
        return true;
    };

    for (let r = 0; r < 9; r += 3) {
        for (let c = 0; c < 9; c += 3) {
            if (!isValidSubBox(board, r, c)) return false;
        }
    }

    return true;
};

var isValidSudoku = function (board) {
    if (isValidRows(board) && isValidCols(board) && isValidSubBoxs(board)) return true;

    return false;
};

export default isValidSudoku;
