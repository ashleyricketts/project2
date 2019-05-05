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

//this collects user data on click
$("#addUser").on("click", function(event) {
  event.preventDefault();
  //userData
  var userData = {
    name: $("#uName").val(),
    photo: $("#uPhoto").val(),
    email: $("#uEmail").val(),
    petNames: $("#uPets").val(),
    petTypes: $("#petType").val()
  };
  //sending userData to userTables
  $.ajax("/user/create", {
    type: "POST",
    data: userData
  }).then(function() {
    //console.log("created new user");
    location.reload();
  });
  console.log(userData);
});

//this collects eventData on click
$("#addEvent").on("click", function(event) {
  event.preventDefault();
  //eventData
  var eventData = {
    eventName: $("#eName").val(),
    eventDate: $("#eDate").val(),
    eventTime: $("#etime").val(),
    eventAddress: $("#eAdd").val(),
    addressLink: $("#eLink").val(),
    partyType: $("#partyType").val(),
    hostName: $("#hName").val(),
    hostEmail: $("#hEmail").val()
  };
  //sending eventData to eventTables
  $.ajax("/event/create", {
    type: "POST",
    data: eventData
  }).then(function() {
    location.reload();
  });
  console.log(eventData);
});

//id's current url
//var currentURL = window.location.origin;

//loads eventData to eventCards @ #eventArea onload
$.get("/api/table", function(data) {
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

// onClick #signIn validates email then populates profileData & myEvents
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
    $.ajax(currentURL + "/api/", userData, function(data) {
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
