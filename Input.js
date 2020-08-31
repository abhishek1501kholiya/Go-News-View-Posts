class Input {
    constructor(name,inputx,inputy){
        this.input = createInput(name);
        this.inputX = inputx;
        this.inputY = inputy;
        this.input.val = this.input.value();
    }
    hide(){
      this.input.hide();
    }
    display(){
        this.input.position(this.inputX,this.inputY);
        
    }
    show(){
        this.input.show();
    }
}