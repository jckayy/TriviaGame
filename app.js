
$(document).ready(function() {

    var correct=0;
    var incorrect=0;
    var unanswered=8;

    var clockRunning = true;
    var intervalId;
    var TimeLimit = 30;
    
    $('#Submit').click(function(){
        clearInterval(intervalId);
        TimeLimit=0;
        clockRunning = false;
        answercheck();
        console.log("Submitted!");
        $("#mainbody").empty();
       
        var alldonediv = $("<div>");
        var correctdiv = $("<div>");
        var incorrectdiv = $("<div>");
        var unanswereddiv = $("<div>");
             
        alldonediv.text("All done!");
        correctdiv.text("Correct: " + correct);
        incorrectdiv.text("Incorrect: " + incorrect);
        unanswereddiv.text("Unanswered: " + unanswered);
 
        $("#mainbody").append (alldonediv);
        $("#mainbody").append (correctdiv);
        $("#mainbody").append (incorrectdiv);
        $("#mainbody").append (unanswereddiv);
                       
    });


    if (clockRunning) {
        intervalId = setInterval(function(){
        TimeLimit --;
        if (TimeLimit <= 0) {
            clearInterval(intervalId); 
            clockRunning = false;
            console.log("time's up!");
            console.log("run answer check");
            answercheck();
            $("#mainbody").empty();

        var alldonediv = $("<div>");
        var correctdiv = $("<div>");
        var incorrectdiv = $("<div>");
        var unanswereddiv = $("<div>");
             
        alldonediv.text("All done!");
        correctdiv.text("Correct: " + correct);
        incorrectdiv.text("Incorrect: " + incorrect);
        unanswereddiv.text("Unanswered: " + unanswered);
 
        $("#mainbody").append (alldonediv);
        $("#mainbody").append (correctdiv);
        $("#mainbody").append (incorrectdiv);
        $("#mainbody").append (unanswereddiv);
        
        }

        else {
            console.log("Time left:"+TimeLimit);
        }



        $("#display").text("Time left:" + TimeLimit); 
        }, 1000);

    
    
    }


// check answer function to be called 
function answercheck(){
   
    if ($('[name="ElfelTower"]').is(':checked')) {
        console.log (" ElfelTower checked");
        var radioValue = $("[name='ElfelTower']:checked").val();
        console.log(radioValue);
        if (radioValue == "300M"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("ElfelTower not checked");
    }
    
    if ($('[name="Saipan"]').is(':checked')) {
        console.log (" Saipan checked");
        var radioValue = $("[name='Saipan']:checked").val();
        console.log(radioValue);
        if (radioValue == "USA"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Saipan not checked");
    }
    
    if ($('[name="Quebec"]').is(':checked')) {
        console.log (" Quebec checked");
        var radioValue = $("[name='Quebec']:checked").val();
        console.log(radioValue);
        if (radioValue == "French"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Quebec not checked");
       }

    
    if ($('[name="LowTemperature"]').is(':checked')) {
        console.log (" LowTemperature checked");
        var radioValue = $("[name='LowTemperature']:checked").val();
        console.log(radioValue);
        if (radioValue == "Antarctica"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("LowTemperature not checked");
       }



    if ($('[name="Kungfu"]').is(':checked')) {
        console.log (" Kungfu checked");
        var radioValue = $("[name='Kungfu']:checked").val();
        console.log(radioValue);
        if (radioValue == "China"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Kungfu not checked");
       }


    if ($('[name="Population"]').is(':checked')) {
        console.log (" Population checked");
        var radioValue = $("[name='Population']:checked").val();
        console.log(radioValue);
        if (radioValue == "Asia"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Population not checked");
       }



    if ($('[name="Tenochtitlan"]').is(':checked')) {
        console.log (" Tenochtitlan checked");
        var radioValue = $("[name='Tenochtitlan']:checked").val();
        console.log(radioValue);
        if (radioValue == "MexicoCity"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Tenochtitlan not checked");
       }
       

    if ($('[name="Equator"]').is(':checked')) {
        console.log (" Equator checked");
        var radioValue = $("[name='Equator']:checked").val();
        console.log(radioValue);
        if (radioValue == "Ecuador"){
            correct++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
        else{
            incorrect++;
            unanswered--;
            console.log("Correct: " + correct);
            console.log("Incorrect: " + incorrect);
            console.log("Unanswered: " + unanswered);
        }
    } 
    else {
        console.log("Equator not checked");
       }




}













});


