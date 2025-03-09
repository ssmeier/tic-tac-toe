class GameBoard {
    constructor() {
        this.gameBoardStatus = [
            ['*','*','*'],
            ['*','*','*'],
            ['*','*','*']
        ]
        this.currentTurn = 0;
        this.humanPlayer = null;
        this.cpu = null;
    }

    getBoardStatus() {
        return this.gameBoardStatus
    }

    getCurrentTurn(){
        return this.currentTurn;
    }

    incrementTurn(){
        this.currentTurn++;
    }

    placePiece(player, square) {
        var boardState = this.getBoardStatus();
        var marker = "";
        if(player == 'player_1'){
            marker = 'X';
        }
        else {marker = 'O'}
        if(this.checkValidMove(square, boardState)){
            this.gameBoardStatus[square[0]][square[1]] = marker;
            return true;
        }
        else return false;

    }

    checkValidMove(square, boardState) {
        var x = square[0]; var y = square[1]
        let realSquare = boardState[x][y];
        if(realSquare == '*'){
            return true;
        }
        else return false;
    }

    checkWin() {
        var board = this.getBoardStatus()
        var topRow = board[0];
        var middleRow = board[1];
        var bottomRow = board[2];


    }



}

var TicTac = new GameBoard;
console.log(TicTac.getBoardStatus());
TicTac.placePiece('player_1', [1,1]);
TicTac.placePiece('player_2', [0,1]);
TicTac.placePiece('player_1', [0,0]);
TicTac.placePiece('player_2', [2,1]);
TicTac.placePiece('player_1', [2,2]);
console.log(TicTac.getBoardStatus())
