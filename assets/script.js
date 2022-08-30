let enquiryForm = document.querySelector("#submit");
let nameInputEl = document.querySelector("#name-input");
let telephoneInputEl = document.querySelector("#telephone-input");
let emailInputEl = document.querySelector("#email-input");

enquiryForm.addEventListener("click", formSubmitHandler);

function formSubmitHandler(){
    event.preventDefault();

    let name = nameInputEl.value;
    let telephone = telephoneInputEl.value;
    let email = emailInputEl.value;

    if (name === "" || telephone === "" || email === ""){
        $('#modal').modal("show");
    } else {
        $('#modal').modal('hide')
    }
       
}
  