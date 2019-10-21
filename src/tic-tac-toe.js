class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
        this.noTurns = false;
        this.draw = false;
        this.finished = false;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
        }
        if (this.matrix[0][0] === 'x' && this.matrix[0][1] === 'x' && this.matrix[0][2] === 'x' ||
        this.matrix[1][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[1][2] === 'x' ||
        this.matrix[2][0] === 'x' && this.matrix[2][1] === 'x' && this.matrix[2][2] === 'x' ||
        this.matrix[0][0] === 'x' && this.matrix[1][0] === 'x' && this.matrix[2][0] === 'x' ||
        this.matrix[0][1] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][1] === 'x' ||
        this.matrix[0][2] === 'x' && this.matrix[1][2] === 'x' && this.matrix[2][2] === 'x' ||
        this.matrix[0][0] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][2] === 'x' ||
        this.matrix[0][2] === 'x' && this.matrix[1][1] === 'x' && this.matrix[2][0] === 'x') {
            this.winner = 'x';
        } else if (this.matrix[0][0] === 'o' && this.matrix[0][1] === 'o' && this.matrix[0][2] === 'o' ||
        this.matrix[1][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[1][2] === 'o' ||
        this.matrix[2][0] === 'o' && this.matrix[2][1] === 'o' && this.matrix[2][2] === 'o' ||
        this.matrix[0][0] === 'o' && this.matrix[1][0] === 'o' && this.matrix[2][0] === 'o' ||
        this.matrix[0][1] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][1] === 'o' ||
        this.matrix[0][2] === 'o' && this.matrix[1][2] === 'o' && this.matrix[2][2] === 'o' ||
        this.matrix[0][0] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][2] === 'o' ||
        this.matrix[0][2] === 'o' && this.matrix[1][1] === 'o' && this.matrix[2][0] === 'o') {
            this.winner = 'o';
        }
        this.noTurns = !this.matrix[0].includes(null) && !this.matrix[1].includes(null) && !this.matrix[2].includes(null);
    }

    isFinished() {
        this.finished = this.winner !== null || this.noTurns;
        return this.finished;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        this.noTurns = !this.matrix[0].includes(null) && !this.matrix[1].includes(null) && !this.matrix[2].includes(null);
        return this.noTurns;
    }

    isDraw() {
        this.draw = this.noTurns && this.winner === null;
        return this.draw;

    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

