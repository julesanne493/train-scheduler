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

var train1frequency = 10;
var train2frequency = 15;
var train3frequency = 18;
var train4frequency = 20;
var train5frequency = 25;
var train6frequency = 45;
var train7frequency = 60;

var firstTime = "12:00";

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");

console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

var tRemainder1 = diffTime % train1frequency;
var tRemainder2 = diffTime % train2frequency;
var tRemainder3 = diffTime % train3frequency;
var tRemainder4 = diffTime % train5frequency;
var tRemainder5 = diffTime % train6frequency;
var tRemainder6 = diffTime % train1frequency;
var tRemainder7 = diffTime % train1frequency;

// Minutes Away

var tMinutesTillTrain1 = train1frequency - tRemainder1;
var tMinutesTillTrain2 = train2frequency - tRemainder2;
var tMinutesTillTrain3 = train3frequency - tRemainder3;
var tMinutesTillTrain4 = train4frequency - tRemainder4;
var tMinutesTillTrain5 = train5frequency - tRemainder5;
var tMinutesTillTrain6 = train6frequency - tRemainder6;
var tMinutesTillTrain7 = train7frequency - tRemainder7;

console.log(tMinutesTillTrain1);
console.log(tMinutesTillTrain2);
console.log(tMinutesTillTrain3);
console.log(tMinutesTillTrain4);
console.log(tMinutesTillTrain5);
console.log(tMinutesTillTrain6);
console.log(tMinutesTillTrain7);

// Next Arrival

var nextTrain1 = moment().add(tMinutesTillTrain1, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain1).format("HH:mm"));

var nextTrain2 = moment().add(tMinutesTillTrain2, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain2).format("HH:mm"));

var nextTrain3 = moment().add(tMinutesTillTrain3, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain3).format("HH:mm"));

var nextTrain4 = moment().add(tMinutesTillTrain4, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain4).format("HH:mm"));

var nextTrain5 = moment().add(tMinutesTillTrain5, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain5).format("HH:mm"));

var nextTrain6 = moment().add(tMinutesTillTrain6, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain6).format("HH:mm"));

var nextTrain7 = moment().add(tMinutesTillTrain7, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain7).format("HH:mm"));
    
// Add Train


$("#submit").on("click", function(event){
    event.preventDefault();

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

