class Link {
    constructor(){
    this.message = createElement('h2');
    this.link = createA("index2.html","Home","_onblank");
    }
    hide(){
        this.message.hide(); 
        this.link.hide();
    }
    display(){
        this.message.html("Kindly press home to go to the another window")
        this.message.position(400,560);
        this.link.position(750,570);
        this.link.mousePressed(()=>{
            gameState = "home";
        })
    }
    show(){
        this.message.show();
        this.link.show();
    }
}