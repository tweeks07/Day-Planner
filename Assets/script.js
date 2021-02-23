//Header should display current date and time 
$("#currentDay").text(moment().format("dddd, LL"));

//Create function to color time blocks according to past, present and future availability
    //Time blocks are separated into 1hr intervals
    //24hr time clock; 9-hr work day
    //Access time- are designated blocks <, >, = the current time?
function colorTimeBlocks() {
    $(".user-event-input").each(function() {    //For loop to run through each user-event class
        console.log($(this).attr("id"))         //Logs id for each time block
        if (moment().hour() == $(this).attr("id")) {
            $(this).addClass("present");        //If the current time is equal to time block id the block will turn red
        }
        else if (moment().hour() > $(this).attr("id")) {
            $(this).addClass("past");        //If the current time is greater than time block id the block will turn gray
        }
        else { 
            if (moment().hour() < $(this).attr("id")) {
                $(this).addClass("future");//If the current time is less than time block id the block will turn green  
        }
        }
        var local = localStorage.getItem("user-input" + $(this).attr("id"));//variable set to retrieve user input on time block
        if (local){
            $(this).val(local); //if true there is info in the local storage of the time block it will show its value
        } 
    })
    
}
colorTimeBlocks();


//Create click event to open text
//Add text area to time blocks for user input

//Create function for Save Button to save user input for each time block in local storage:

$('.saveBtn').on('click', function() {
    var hourTime = parseInt($(this).attr("data-hour")); 
    if(hourTime < 6){ //if hour is less than 6 to 24 hour clock
        hourTime += 12;
    }
    var textContent = $("#"+hourTime).val()
    console.log(hourTime, textContent) //logs value in time block
    localStorage.setItem("user-input" + hourTime, textContent)//stores text content in time block
})




//Save user input for each time block to local storage
//Save user input so when the page refreshes the information is still available