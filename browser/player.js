function Player(node, initialPos){
    this.node = node;
    this.initialPos = initialPos;
    this.currentPos = this.initialPos;

    this.setPosition = () => {
        this.node.style.top = this.currentPos[0] + "px";
        this.node.style.left = this.currentPos[1] + "px";
    }

    this.setPosition();
}

Player.prototype.positionUpdate = function(speed){
    this.currentPos[0] += speed;

    this.node.style.top =  this.currentPos[0] + "px";
    this.node.style.left =  this.currentPos[1] + "px";
}