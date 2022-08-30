let enquiryForm = document.querySelector("#submit");
let nameInputEl = document.querySelector("#name-input");
let telephoneInputEl = document.querySelector("#telephone-input");
let emailInputEl = document.querySelector("#email-input");

function formSubmitHandler(){
    event.preventDefault();

    let name = nameInputEl.value;
    let telephone = telephoneInputEl.value;
    let email = emailInputEl.value;

    if (name === "" || telephone === "" || email === ""){
        $('#modal').modal("show");
    } else {
        $('#modal').modal('hide');
    }
}

enquiryForm.addEventListener("click", formSubmitHandler);

// COUNTDOWN

let countDownDate = new Date("Dec 5, 2022 09:00:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "";
  }
}, 1000);