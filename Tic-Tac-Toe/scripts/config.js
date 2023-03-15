function openPlayerConfig(event) {
  modal.style.display = "block";
  backdrop.style.display = "block";

  //dataset can be used to access different properties defined using data- in HTML.
  editedPlayer = +event.target.dataset.playerid; //+ is used to convert obtaineed string to number.
}

function closeOpenPlayerConfig() {
  modal.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

/*
//Learning formsubmission handling with JS.

With this fxn we need to prevent form submission because whenever our form is submitted all the loaded data is again reloaded and will be lost.
because at this point of time we don't know how to handle backend. That's why we are offered with a pre defined function to prevent pre default
rules of browser.

we added event listener to form but this can also be done to the confirm button.

*****
SUPER IMP NEW CONCEPT RELATED TO FORM SUBMISSION USING JS IN-BUILT FXN

FormData gives us a blueprint of extracted data in the form of objects. It automatically analyzes any form that has an added event listener and extracts all the 
values from the fields whichever has any name attribute added with it.

FormData has another pre defined fxn namely get() used with dot operator that accepets name used in html as parameter.

*****

*/
function avoidFormSubmissionAndSettingUserName(event) {
  event.preventDefault();
  const formData = new FormData(event.target); //another predefined fxn that takes a form as parameter and extracts its value automatically.
  //The formed Blueprint gets associated with formData inour case in the form of object concept. Therefore we can treat formData as object.
  //event.target evaluates to complete form section.
  const enteredUserName = formData.get("playername").trim();

  if (!enteredUserName) {
    event.target.firstElementChild.classList.add("error");
    //i.e. if we enter any empty string. Then our variable will evaluates to falsy value and adding a not operator converts to truthy value.
    //So this if condition is about what will happen if our user enters an empty string.
    errorOutputElement.textContent = "Oops! Enter a valid user name.";
    return;
  }
  const whichH2ShouldBeTargeted = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  whichH2ShouldBeTargeted.children[1].textContent = enteredUserName; //displays username in that h2 field

  players[editedPlayer - 1].name = enteredUserName; //setting playername in the array so that we can use that in future to declare winnername
  closeOpenPlayerConfig(); //Since the addEventListner is of type submit here so this fxn doesn't starts executing until we hit confirm button.
}
