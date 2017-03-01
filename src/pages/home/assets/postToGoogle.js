/*
 Google Forms sending
*/

var succes_msg = "<h4>Thank you! We'll be in touch soon.</h4>",
    failure_msg = "<span class='invalid'>Oh no! There was an error. Please try again.</span>",
    validation_msg = "<span class='invalid'>Please provide a valid email address.</span>";

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    console.log('Validating email!' + email);
}

function postContactToGoogle() {
    console.log('Posting Contact to Google!');
    var fullName = $('#full-name').val();
    var company = $('#company').val();
    var role = $('#role').val();
    var help = $('#help').val();

    var $email = $('#email'),
        $notification = $('#form-notification'),
        form_id = "1PIH9Yc4OB-bHuNbdOzJYyjbtKEv-DZ7m3ckDXQ6W6ZU";

    if (($email.val() !== "") && (validateEmail($email.val()))) {
        $.ajax({
            url: "https://docs.google.com/forms/d/" + form_id + "/formResponse",
            data: {
                "entry.728223514": fullName,
                "entry.1170273525": $email.val(),
                "entry.1731463525": company,
                "entry.346706491": role,
                "entry.361413502": help
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $email.val("");
                    $('#full-name').val("");
                    $('#company').val("");
                    $('#role').val("");
                    $('#help').val("");
                    $('#contact-form').fadeOut();
                    $notification.html(succes_msg);
                },
                200: function () {
                    $email.val("");
                    $('#full-name').val("");
                    $('#company').val("");
                    $('#role').val("");
                    $('#help').val("");
                    $('#contact-form').fadeOut();
                    $notification.html(succes_msg);
                },
                404: function () {
                    $notification.html(failure_msg);
                }
            }
        });
    } else if (($email.val() == "") || (!validateEmail($email.val()))) {
        $notification.html(validation_msg);
        console.log('Valid!');
    } else {
        $notification.html(failure_msg);
        console.log('Invalid!');
    }
}
/* Handle the form submit */
$(document).ready(function () {
    var $contact = $("#contact-form");
    $contact.submit(function (e) {
        e.preventDefault();
        postContactToGoogle();
        console.log('Post Contact to Google!');
    });
});







