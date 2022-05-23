
this.EventController = function(){
    this.subscribers = {};
}

EventController.prototype.on = function(stream, listener){
    if(!this.subscribers[stream]) this.subscribers[stream] = [];        //stream: string que indica el canal de comunicacion
                
    this.subscribers[stream].push(listener);
}

EventController.prototype.emit = function(stream){

    if(!this.subscribers[stream]) return;

    let args = [].slice.call(arguments, 1);

    this.subscribers[stream].forEach(listener => {
        listener.apply(null, args);
    });
}
