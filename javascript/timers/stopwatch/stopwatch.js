/**
 * Interval Exercise (follow the instructions below).
 **/

// This code will run as soon as the page loads.
window.onload = function(){
    // Click events are done for you:
    $('#lap').click(stopwatch.recordLap);
    $('#stop').click(stopwatch.stop);
    $('#reset').click(stopwatch.reset);
    $('#start').click(stopwatch.start);
};

// Our stopwatch object.
var stopwatch = {
    time:0,
    lap:1,
    reset: function () {
        stopwatch.time = 0;
        stopwatch.lap = 1;
        // TODO: Change the "display" div to "00:00."
        $('#display').html(00:00);
        
    },
    start: function(){
        // TODO: Use setInterval to start the count here.
        counter = setInterval(stopwatch.count, 1000);
    },
    stop: function(){
        // TODO: Use clearInterval to stop the count here.
        clearInterval(counter);

    },
    recordLap: function() {
        // TODO: Get the current time, pass that into the stopwatch.timeConverter function, 
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
            result var = currentTime;
        // TODO: Add the current lap and time to the "laps" div.
        $('#laps').html(stopwatch.lap()) + (stopwatch.time());
        // TODO: Increment lap by 1. Remember, we can't use "this" here.
        function increment() {
            stopwatch.lap++;
        }
    },
    count: function(){
        // TODO: increment time by 1, remember we can't use "this" here.
        stopwatch.time++;
        // TODO: Get the current time, pass that into the stopwatch.timeConverter function, 
        //       and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);
        // TODO: Use the variable you just created to show the converted time in the "display" div.
        $('#display').html(converted);
    },

    // THIS FUNCTION IS DONE FOR YOU!
    // You do not need to touch it.
    timeConverter: function(t){
        // Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};
