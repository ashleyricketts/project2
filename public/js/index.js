//this triggers the sign in modal
$("#submit").on("click", function() {
  $("#myModal").on("shown.bs.modal");
});
// this triggers the profile modal
$("#profile").on("click", function() {
  $("#profileModal").on("shown.bs.modal");
});
// this triggers the update/delete event modal
$(".updateBtn").on("click", function() {
  $("#eventUpdate").on("shown.bs.modal");
});
//id's current url
var currentURL = window.location.origin;

//loads eventData to eventCards @ #eventArea onload
$.get("/api/~insertRoute~", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      //creates eventCard for each event from eventsTable
      var eventCard = $("<div>");
      eventCard.addclass("card eventCard");
      eventCard.append("<h4>").text(data[i].name);
      eventCard.append("<h5>").text(data[i].date);
      eventCard.append("<h5>").text(data[i].time);
      eventCard.append("<h5>").text(data[i].address);
      eventCard.append("<a>").attr("href=" + "'" + data[i].link + "'");
      //adds events to div
      $("#eventArea").prepend(eventCard);
    }
  }
});

//this collects user data on click
$("#userSub").on("click", function(event) {
  event.preventDefault();
  //userData
  var userData = {
    name: $("#uName").val(),
    photo: $("#uPhoto").val(),
    email: $("#uEmail").val(),
    petNames: $("#uPets").val(),
    petTypes: [
      $("#dog").val(),
      $("#cat").val(),
      $("#reptile").val(),
      $("#bird").val(),
      $("#fish").val(),
      $("#ark").val()
    ]
  };
  console.log(userData);
  //insert into userTable
  $.post("/api/~insert route~", userData, function(data) {
    console.log(data);
  });
});

//this collects eventData on click
$("eventSub").on("click", function(event) {
  event.preventDefault();

  //eventData
  var eventData = {
    eventName: $("#eName").val(),
    eventDate: $("#eDate").val(),
    eventTime: $("#etime").val(),
    eventAddress: $("#eAdd").val(),
    addressLink: $("#eLink").val(),
    hostName: $("#hName").val(),
    hostEmail: $("#hEmail").val()
  };
  console.log(eventData);
  //insert into eventTable
  $.post("/api/(insert route)", eventData, function(data) {
    console.log(data);
  });
});

//onClick #signIn validates email then populates profileData & myEvents
$("#signIn").on("click", function(event) {
  event.preventDefault();
  //function using username & email find define userName.ID accessing userData emailAddress.id accesing eventData
  var userSignin = data.name.val();
  var emailSignin = data.email.val();

  for (i = 0; i < data.length; i++) {
    if (userSignin === data[i].name && emailSignin === data[i].email) {
      console.log(userSignin, emailSignin);
      loadMyData();
    } else {
      console.log("Please Check your info or create a member profile");
    }
  }
  function loadMyData() {
    //this populates data in profile modal
    $.ajax(currentURL + "/api/~insert route~", userData, function(data) {
      $("#userName").text(data.name);
      $("#userPhoto").attr("src", data.photo);
      $("#userEmail").text(data.email);
      $("#petType").text(data.petType);
      $("#petNames").text(data.petNames);
    });
    //loads MYeventData to MYeventCards @ #myeventArea
    $.get("/api/~insertRoute~", function(data) {
      if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
          var myeventCard = $("<div>");
          myeventCard.addclass("card eventCard");
          myeventCard.append("<h4>").text(data[i].name);
          myeventCard.append("<h5>").text(data[i].date);
          myeventCard.append("<h5>").text(data[i].time);
          myeventCard.append("<h5>").text(data[i].address);
          myeventCard.append("<a>").attr("href=" + "'" + data[i].link + "'");
          //adds Myevents to div
          $("#myeventArea").prepend(myeventCard);
        }
      }
    });
  }
});
