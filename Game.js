const Board = require("./Board");
const Player = require("./Player");

class Game{
    constructor(player1Name,player2Name){
        this.board=new Board()
        this.players=[new Player(player1Name,"X"),new Player(player2Name,"O")]
        this.turn=0;
    }
    static newGame(player1Name,player2Name){
        if(typeof player1Name != "string"||typeof player2Name != "string"||player1Name==player2Name){
            return [null,"Invalid Player Names"]
        }
        return [new Game(player1Name,player2Name),"Players Created Succesfully"]
    }
    isGameEnded(){
        if(this.turn==-1){
           return true; 
        }
        return false;
    }
    play(cellNumber){
        if(this.isGameEnded()){
            return [null,"Game Has Ended Already"]
        }
        if(typeof cellNumber!="number"){
            return [null,"Invalid Cell Number"]
        }
        if(cellNumber<0||cellNumber>8){
            return [null,"Please Enter Valid Cell Number"]
        }
        if(!this.board.isCellEmpty(cellNumber)){
            return [null,"Selected Cell Is Not Empty"]
        }
        let currentPlayer=this.players[this.turn % 2];
        this.turn++;
       this.board.markCell(cellNumber,currentPlayer.getPlayerSymbol())
        this.board.printBoard()
        let [symbol,Winner]=this.board.analyserFunction()
        if(symbol=="X"){
            this.turn=-1;
            return this.players[0].getPlayerName()
           
        }
        if(symbol=="O"){
            this.turn=-1;
            return this.players[1].getPlayerName()
        }
        if(symbol=="Draw"){
            this.turn=-1;
            return "Game is Draw"
        }
        if(symbol=="continue"){
            return "Continue Playing....."
        }

    }
}
module.exports=Game;