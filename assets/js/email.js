const fullName =  document.getElementById("fullname");
const emailAddress = document.getElementById("emailaddress");
const request = document.getElementById("request");

function sendMail(contactForm) {
    emailjs.send("gmail", "cocktailContact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "request": contactForm.request.value
    })
    .then(
        function(response) {
            alert("Email successfully sent");
            fullName.value = "";
            emailAddress.value = "";
            request.value = "";
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
    
}

(function(){
    emailjs.init("user_QYskVycifaK0UqgrfkXIi");
})();

