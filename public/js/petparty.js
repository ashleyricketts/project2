//using btn clicks to display sign in, update/delete event, and profile modal.
$("#submit").on("click", function () {
  $("#myModal").on("shown.bs.modal");
});

$("#profile").on("click", function () {
  $("#profileModal").on("shown.bs.modal");
});

$(".updateBtn").on("click", function () {
  $("#eventUpdate").on("shown.bs.modal");
});

$("id").on("click", function (event) {
  event.preventDefault();
  var newUser = {
    user_name: $().val().trim(),
    user_photto: $().val().trim(),
    email: $().val().trim(),
  };

// post request to create a new user. 

$.ajax("api/users", {
  type: "POST",
  data: newUser
}).then(function(data){
  console.log("New user created: " + data);
  // reload the page 
  location.reload();
});
});

