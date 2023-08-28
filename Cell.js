class Cell{
    constructor()
    {
        this.mark="E"
    }
    isEmpty(){
        if(this.mark==="E"){
            return true;
        }
        return false;
    }
    getMark(){
        return this.mark;
    }
    markCell(symbol){
        this.mark=symbol;
    }
}
module.exports=Cell;