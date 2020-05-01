var email = document.getElementById("email");
var confirm = document.getElementById("confirm");
var password = document.getElementById("password");
var day = document.getElementById("day");
var year = document.getElementById("year");

function fbvalidator() {
    if (document.getElementById("iknow_1").checked === false) {
        document.getElementById("fbvalidation").innerHTML = "Please accept this to continue.";
        document.getElementById("fb").removeAttribute("href");
    } else {
        document.getElementById("fbvalidation").innerHTML = "";
        document.getElementById("fb").setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
    }
}

function validator() {
    if (emailCheck(email)) {
        if (confirmCheck()) {
            if (passwordCheck(password)) {
                if (dayCheck(day)) {
                    if (yearCheck(year)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function emailCheck(email) {
    var checkemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(checkemail)) {
        document.getElementById("emailvalidation").innerHTML = "";
        return true;
    } else {
        document.getElementById("emailvalidation").innerHTML = "The email address you supplied is invalid.";
    }
}

function confirmCheck() {
    if (email.value === confirm.value) {
        document.getElementById("confirmvalidation").innerHTML = "";
        return true;
    } else {
        document.getElementById("confirmvalidation").innerHTML = "Email address doesn't match.";
    }
}

function passwordCheck(password) {
    var checkpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (password.value.match(checkpassword)) {
        document.getElementById("passwordvalidation").innerHTML = "";
        return true;
    } else {
        document.getElementById("passwordvalidation").innerHTML = "Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters.";
    }
}

function dayCheck(day) {
    var checkDay = /^[0-9]+$/;
    if (day.value.match(checkDay)) {
        if (day.value > 0 && day.value < 32) {
            document.getElementById("dayvalidation").innerHTML = "";
            return true;
        } else {
            document.getElementById("dayvalidation").innerHTML = "Please enter a valid day of the month.";
        }
    } else {
        document.getElementById("dayvalidation").innerHTML = "Please enter a valid day of the month.";
    }
}

function yearCheck(year) {
    var checkYear = /^[0-9]+$/;
    if (year.value.match(checkYear)) {
        if (year.value >= 1920 && year.value <= 2020) {
            document.getElementById("yearvalidation").innerHTML = "";
            return true;
        } else {
            document.getElementById("yearvalidation").innerHTML = "Please enter a valid year.";
        }
    } else {
        document.getElementById("yearvalidation").innerHTML = "Please enter a valid year.";
    }
}