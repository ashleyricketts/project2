$(document).ready(function() {
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
  // this triggers userUpdate modal
  $("#updateUser").on("click", function() {
    $("#profileUpdate").on("shown.bs.modal");
  });

  //loads eventData to eventCards @ #eventArea onload
  $.get("/api/events", function(eventData) {
    if (data.length !== 0) {
      for (var i = 0; i < eventData.length; i++) {
        //creates eventCard for each event from eventsTable
        var eventCard = $("<div>");
        eventCard.addclass("card");
        eventCard.addid(eventData[i].id);
        eventCard.append("<h4>").text(eventData[i].name);
        eventCard.append("<h5>").text(eventData[i].date);
        eventCard.append("<h5>").text(eventData[i].time);
        eventCard.append("<h5>").text(eventData[i].address);
        eventCard.append("<a>").attr("href=" + "'" + eventData[i].link + "'");
        //adds events to div
        $("#eventArea").prepend(eventCard);
      }
    }
  });

  //this move events cards from events div to myEvents div
  $(".going").on("click", function() {
    $("#id1").prependTo($("#myEvent"));
  });
  //this moves events from myEvents to Events
  $(".notGoing").on("click", function() {
    //this needs to move event cards from events div to Events div
    $("#id1").prependTo($("#eventArea"));
  });

  //this collects userData on click
  $("#addUser").on("click", function() {
    //userData
    var userData = {
      name: $("#uName").val(),
      photo: $("#uPhoto").val(),
      email: $("#uEmail").val(),
      petNames: $("#uPets").val(),
      petTypes: $("#petType").val()
    };
    // sending userData to userTables
    $.ajax("/users", {
      type: "POST",
      data: userData
    }).then(function() {
      //console.log("created new user");
      console.log(userData);
      location.reload();
    });
  });

  //this collects eventData on click
  $("#addEvent").on("click", function() {
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
    $.ajax("/events", {
      type: "POST",
      data: eventData
    }).then(function() {
      console.log(eventData);
      location.reload();
    });
  });

  //this updates userData
  $("#updateUser").on("click", function(userData) {
    $.ajax({
      method: "PUT",
      url: "/api/users",
      data: userData
    }).then(function() {
      location.reload();
    });
  });

  //this updates eventData
  $("#updateEvent").on("click", function(eventData) {
    $.ajax({
      method: "PUT",
      url: "/api/events",
      data: eventData
    }).then(function() {
      location.reload();
    });
  });

  //this deletes eventData
  $("#deleteEvent").on("click", function(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/events/" + id
    }).then(function() {
      location.reload();
    });
  });

  // onClick #signIn validates email then populates profileData & myEvents
  // $("#signIn").on("click", function() {
  //   //function using username & email find define userName.ID accessing userData emailAddress.id accesing eventData
  //   var userSignin = userData.name.val();
  //   var emailSignin = userData.email.val();
  //   //loops through user finding log in
  //   for (i = 0; i < userData.length; i++) {
  //     if (
  //       userSignin === userData[i].name &&
  //       emailSignin === userData[i].email
  //     ) {
  //       console.log(userSignin, emailSignin);
  //       loadMyData();
  //     } else {
  //       console.log("Please Check your info or create a member profile");
  //     }
  //   }
  //   function loadMyData() {
  //     //this populates data in profile modal
  //     $.ajax(currentURL + "/api/", userData, function(data) {
  //       $("#userName").text(userData.name);
  //       $("#userPhoto").attr("src", userData.photo);
  //       $("#userEmail").text(userData.email);
  //       $("#petType").text(userData.petType);
  //       $("#petNames").text(userData.petNames);
  //     });
  //   }
  // });
});
