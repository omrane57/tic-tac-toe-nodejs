const Cell = require("./Cell");

class Board{
    constructor(){
        this.cells=[new Cell(),new Cell(),new Cell(),
                    new Cell(),new Cell(),new Cell(), 
                    new Cell(),new Cell(),new Cell()
                    ]
     
    }
    isCellEmpty(cellNumber){
        if(this.cells[cellNumber].isEmpty()){
            return true;
        }
        return false
    }
     markCell(cellNumber,symbol){
        return this.cells[cellNumber].markCell(symbol)
     }
    printBoard(){
         console.log(this.cells)
    }
    isDraw(){
        for(let k=0;k<this.cells.length;k++){
                if(this.cells[k].isEmpty()){
                   return false;
                }
               
               }
               return true
    }
    analyserFunction(){
        if(this.cells[0].getMark()==this.cells[1].getMark()&&
           this.cells[0].getMark()==this.cells[2].getMark()&&
           !this.cells[0].isEmpty()){
            return [this.cells[0].getMark(),"Winner"]
           }
        if(this.cells[3].getMark()==this.cells[4].getMark()&&
        this.cells[3].getMark()==this.cells[5].getMark()&&
        !this.cells[3].isEmpty()){
            return [this.cells[3].getMark(),"Winner"]
        }
        if(this.cells[6].getMark()==this.cells[7].getMark()&&
           this.cells[6].getMark()==this.cells[8].getMark()&&
           !this.cells[6].isEmpty()){
            return [this.cells[6].getMark(),"Winner"]
           }
           if(this.cells[0].getMark()==this.cells[3].getMark()&&
           this.cells[0].getMark()==this.cells[6].getMark()&&
           !this.cells[0].isEmpty()){
            return [this.cells[0].getMark(),"Winner"]
           }
           if(this.cells[1].getMark()==this.cells[4].getMark()&&
           this.cells[1].getMark()==this.cells[7].getMark()&&
           !this.cells[1].isEmpty()){
            return [this.cells[1].getMark(),"Winner"]
           }
           if(this.cells[2].getMark()==this.cells[5].getMark()&&
           this.cells[2].getMark()==this.cells[8].getMark()&&
           !this.cells[2].isEmpty()){
            return [this.cells[2].getMark(),"Winner"]
           }
           if(this.cells[0].getMark()==this.cells[4].getMark()&&
           this.cells[0].getMark()==this.cells[8].getMark()&&
           !this.cells[0].isEmpty()){
            return [this.cells[0].getMark(),"Winner"]
           }
           if(this.cells[2].getMark()==this.cells[4].getMark()&&
           this.cells[2].getMark()==this.cells[6].getMark()&&
           !this.cells[2].isEmpty()){
            return [this.cells[2].getMark(),"Winner"]
           }
           if(this.isDraw()){
            return ["Draw","Game is Draw"]
           }
           else{
            return ["continue","Continue Playing....."]
           }
        
    }
}
module.exports=Board;