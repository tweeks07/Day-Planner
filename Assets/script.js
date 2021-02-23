//Header should display current date and time 
$("#currentDay").text(moment().format("dddd, LL"));

//Create function to color time blocks according to past, present and future availability
    //Time blocks are separated into 1hr intervals
    //24hr time clock; 9-hr work day
    //Access time- are designated blocks <, >, = the current time?
function colorTimeBlocks() {
    $(".user-event-input").each(function() {
        console.log($(this).attr("id"))
        if (moment().hour() == $(this).attr("id")) {
            $(this).addClass("present");   
        }
        else if (moment().hour() > $(this).attr("id")) {
            $(this).addClass("past");
        }
        else { 
            if (moment().hour() < $(this).attr("id")) {
                $(this).addClass("future");
        }
        }
    })
    
}
colorTimeBlocks();


//Create click event to open text
//Add text area to time blocks for user input

//Create function for Save Button to save user input for each time block in local storage:
$('#saveBtn').on('click', function() {
    localStorage.setItem(' ')


//})




//Save user input for each time block to local storage
//Save user input so when the page refreshes the information is still available