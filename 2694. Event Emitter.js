class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    subscribe(event, cb) {
        if (!Array.isArray(this.events[event])) {
            this.events[event] = [];
        }
        this.events[event].push(cb);

        return {
            unsubscribe: () => {
                this.events[event].splice(this.events[event].indexOf(cb),1);
            }
        };
    }

    emit(event, args = []) {
        let result = [];
        if (this.events[event]) {
            for (let e of this.events[event]) {
                result.push(e(...args));
            }
        }
        
        return result;
    }
}
