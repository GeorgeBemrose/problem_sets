//Stats Service in Function & Class


// Writing it as a Function

function getStatsService() {
    const events = [];

    function ingest(event){ //O(1)
        events.push(event);
    }

    function sum(){ //O(N)
        return events.reduce((acc,item) => acc + item.amount, 0);
    }

    function average(){ //O(N)
        let n = events.length;
        let ave = n > 0 ? sum()/n : "No events exist";
        return ave;
    }

    function min(){ //Time O(N)
        if(events.length === 0){
            return "No events exist";
        }
        let minimum = +Infinity;
        for(let i =0; i < events.length; i++){
            if(events[i].amount < minimum){
                minimum = events[i].amount;
            }
        }
        return minimum;
    }


    function max(){ //Time O(N)
        if(events.length === 0){
            return "No events exist";
        }

        let maximum = -Infinity;
        for(let i =0; i < events.length; i++){
            if(events[i].amount > maximum){
                maximum = events[i].amount;
            }
        }
        return maximum;
    }

    return {
        ingest,
        sum,
        average,
        min,
        max
    }
}


// Writing it as a Class

class StatsServiceC{
    constructor(){
        this.events = [];
    }

    ingest(event){
        this.events.push(event);
    }

    sum(){
        if(this.events.length === 0) return "No events ingested";
        return this.events.reduce((acc,event) => acc + event.amount, 0);
    }

    min(){
        if(this.events.length === 0) return "No events ingested";
        return Math.min(...this.events.map(event => event.amount));
    }
    
    max(){
        if(this.events.length === 0) return "No events ingested";
        return Math.max(...this.events.map(event => event.amount));
    }

    average(){
        if(this.events.length === 0) return "No events ingested";
        return this.sum()/this.events.length;
    }

}

// let service = getStatsService();
let service = new StatsServiceC();

console.log(service.sum())
console.log(service.average())
console.log(service.min())
console.log(service.max())

service.ingest({amount: 42, timestamp: 1})
service.ingest({amount: 1, timestamp: 1})

console.log(service.sum())
console.log(service.average())
console.log(service.min())
console.log(service.max())
