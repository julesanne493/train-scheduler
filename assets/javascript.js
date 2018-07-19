var config = {
    apiKey: "AIzaSyDjw7CLGzX6Vq7TnkYeY65dHdfL4qW2L-Q",
    authDomain: "trainscheduler-f360d.firebaseapp.com",
    databaseURL: "https://trainscheduler-f360d.firebaseio.com",
    projectId: "trainscheduler-f360d",
    storageBucket: "trainscheduler-f360d.appspot.com",
    messagingSenderId: "97787169775"
  };
  
  firebase.initializeApp(config);

  //var trains = [train1, train2, train3, train4, train5, train6, train7];

var database = firebase.database();

var trainfrequency = {
    train1:  10,
    train2:  15,
    train3:  18,
    train4:  20,
    train5: 25,
    train6: 45,
    train7: 60,
}
console.log("Train Frequency 1: " + trainfrequency.train1)
database.ref().push(trainfrequency);

$("#train1freq").append(trainfrequency.train1);
$("#train2freq").append(trainfrequency.train2);
$("#train3freq").append(trainfrequency.train3);
$("#train4freq").append(trainfrequency.train4);
$("#train5freq").append(trainfrequency.train5);
$("#train6freq").append(trainfrequency.train6);
$("#train7freq").append(trainfrequency.train7);



var firstTime = "12:00";

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

var tRemainder1 = diffTime % trainfrequency.train1;
var tRemainder2 = diffTime % trainfrequency.train2;
var tRemainder3 = diffTime % trainfrequency.train3;
var tRemainder4 = diffTime % trainfrequency.train4;
var tRemainder5 = diffTime % trainfrequency.train5;
var tRemainder6 = diffTime % trainfrequency.train6;
var tRemainder7 = diffTime % trainfrequency.train7;

// Minutes Away

var tMinutesTillTrain1 = trainfrequency.train1 - tRemainder1;
$("#train1minutesaway").append(tMinutesTillTrain1)
var tMinutesTillTrain2 = trainfrequency.train2 - tRemainder2;
$("#train2minutesaway").append(tMinutesTillTrain2)
var tMinutesTillTrain3 = trainfrequency.train3 - tRemainder3;
$("#train3minutesaway").append(tMinutesTillTrain3)
var tMinutesTillTrain4 = trainfrequency.train4 - tRemainder4;
$("#train4minutesaway").append(tMinutesTillTrain4)
var tMinutesTillTrain5 = trainfrequency.train5 - tRemainder5;
$("#train5minutesaway").append(tMinutesTillTrain5)
var tMinutesTillTrain6 = trainfrequency.train6 - tRemainder6;
$("#train6minutesaway").append(tMinutesTillTrain6)
var tMinutesTillTrain7 = trainfrequency.train7 - tRemainder7;
$("#train7minutesaway").append(tMinutesTillTrain7)

// Next Arrival

var nextTrain1 = moment().add(tMinutesTillTrain1, "minutes");
$("#train1nextarr").append(moment(nextTrain1).format("HH:mm"));

var nextTrain2 = moment().add(tMinutesTillTrain2, "minutes");
$("#train2nextarr").append(moment(nextTrain2).format("HH:mm"));

var nextTrain3 = moment().add(tMinutesTillTrain3, "minutes");
$("#train3nextarr").append(moment(nextTrain3).format("HH:mm"));

var nextTrain4 = moment().add(tMinutesTillTrain4, "minutes");
$("#train4nextarr").append(moment(nextTrain4).format("HH:mm"));

var nextTrain5 = moment().add(tMinutesTillTrain5, "minutes");
$("#train5nextarr").append(moment(nextTrain5).format("HH:mm"));

var nextTrain6 = moment().add(tMinutesTillTrain6, "minutes");
$("#train6nextarr").append(moment(nextTrain6).format("HH:mm"));

var nextTrain7 = moment().add(tMinutesTillTrain7, "minutes");
$("#train7nextarr").append(moment(nextTrain7).format("HH:mm"));
    
// Add Train


$("#submit").on("click", function(event){
    event.preventDefault();

    var newRow = document.createElement("row id=newRow")

    var trainAdd = $("#train-name").val(); //Add to div for train names//
    var destinationAdd = $("#destination").val(); //add to div for destinations//
    var firstTrainTimeAdd = $("#first-train-time").val();
    var frequencyAdd = $("#frequency").val();

    var diffTime1 = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime1);

    var diffTime1Remainder = diffTime1 % frequencyAdd;
    console.log(diffTime1Remainder);

    var tMinutesTillUserTrain = frequencyAdd - diffTime1Remainder;
    console.log(tMinutesTillUserTrain);

    var nextTrainUser = moment().add(tMinutesTillUserTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrainUser).format("HH:mm"));
})
database.ref().push(trainfrequency);


