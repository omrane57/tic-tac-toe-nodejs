class Player{
    constructor(name,symbol){
        this.name=name;
        this.symbol=symbol;
    }
    getPlayerName(){
        return this.name
    }
    getPlayerSymbol(){
        return this.symbol
    }
}
module.exports=Player;