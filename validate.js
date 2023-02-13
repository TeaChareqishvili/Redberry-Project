const namePerson = document.getElementById("input-name");
const surname = document.getElementById("last-name");
const email = document.getElementById("input-mail");
const phoneNumber = document.getElementById("input-number");
const aboutMe = document.getElementById("input-about-me");
const position = document.getElementById("input-position");
const employer = document.getElementById("input-work");
const description = document.getElementById("description-input");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const education = document.getElementById("input-education");
const degree = document.getElementById("select-education");
const graduateDate = document.getElementById("input-education-graduate-date");
const graduationDescription = document.getElementById(
  "input-education-description"
);
// const iconMail = document.getElementById("icon-mail");
// const iconPhone = document.getElementById("icon-phone");

const regGeo = /^[ა-ჰ]+$/;
const regPhone = /^(\+?995)?(79\d{7}|5\d{8})$/;

function checkAllInputs() {
  checkNames(namePerson);
  checkNames(surname);
  checkAboutMe(aboutMe);
  checkEmail(email);
  checkPhone(phoneNumber);
}

function checkWorkInputs() {
  checkWorkplace(employer);
  checkWorkplace(position);
  checkDescription(description);
  checkDate(startDate);
  checkDate(endDate);
}

function checkDate(target) {
  if (target.value === "") {
    target.classList.add("input-not-valid");
  } else {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  }
}

function checkSelect() {
  const e = document.getElementById("select-education");
  // e.options[e.selectedIndex].text;
  console.log(e.selectedIndex);
  if (e.selectedIndex !== 0) {
    e.classList.remove("input-not-valid");
    e.classList.add("input-valid");
  } else {
    e.classList.remove("input-valid");
    e.classList.add("input-not-valid");
  }
}

function onFocus(target) {
  target.select();
}

function checkNames(target) {
  if (
    target.value.length < 2 ||
    target.value === "" ||
    !regGeo.test(target.value)
  ) {
    target.classList.remove("input-valid");
    target.classList.add("input-not-valid");
  } else {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  }
}

function checkWorkplace(target) {
  if (target.value.length < 2 || target.value === "") {
    target.classList.remove("input-valid");
    target.classList.add("input-not-valid");
  } else {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  }
}

function checkAboutMe(target) {
  target.classList.add("input-valid");
}

function checkDescription(target) {
  if (target.value === "") {
    target.classList.add("input-not-valid");
  } else {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  }
}

function checkEmail(target) {
//   displayResumee(target);
  if (
    target.value !== "" &&
    target.value.includes("@redberry.ge") &&
    target.value.length > 12
  ) {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  } else {
    target.classList.remove("input-valid");
    target.classList.add("input-not-valid");
  }
}
function checkPhone(target) {
//   displayResumee(target);
  if (regPhone.test(target.value)) {
    target.classList.remove("input-not-valid");
    target.classList.add("input-valid");
  } else {
    target.classList.remove("input-valid");
    target.classList.add("input-not-valid");
  }
}

