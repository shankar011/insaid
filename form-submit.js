if (document.getElementById("contact-form")) {
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("messsage").value;
    var output = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Message: " + message;
    document.getElementById("output").innerHTML =output;
  });
}




