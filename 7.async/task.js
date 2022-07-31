class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) throw new Error('id is not set')
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('id already exists');
        } else {
            this.alarmCollection.push({id, time, callback})
        }
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id)
    }

    getCurrentFormattedTime() {
        const date = new Date();
        return date.getHours() + ':' + date.getMinutes()
    } 

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        } 

        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
        }     
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(alarm.id, alarm.time))
    }

    clearAlarms() {
        this.stop();
		this.alarmCollection = [];
    }
}

// function testCase() {
//     alarm1 = new AlarmClock();
//     let t = alarm1.getCurrentFormattedTime()
//     alarm1.addClock(t, () => console.log("Wake up!"), 1);
//     alarm1.addClock(t, () => console.log("Wake up!"), 1); // check id error
    
//     alarm1.addClock(t, () => {
//         console.log("Grab a brush and put a little make-up")
//         alarm1.removeClock(2)
//     }, 2);
//     alarm1.addClock(t, () => {
//         console.log("Hide the scars to fade away the shake-up")
        
//         alarm1.clearAlarms();
//         alarm1.printAlarms()
        
//     }, 3);
//     alarm1.printAlarms();
//     alarm1.start()
//     alarm1.printAlarms()
// }

// testCase();