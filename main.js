const moreInfo = document.querySelector(".more-info");
const goBack = document.querySelectorAll(".back-btn");
const additionalInfo = document.querySelector(".additional-info");
const addResume = document.querySelector(".add-resume");
const storePersonalInfo = localStorage.getItem("personal-info");
const storeExperience = localStorage.getItem("experience");
const storeEducation = localStorage.getItem("education");
const addResumeBio = document.querySelector(".add-resume-bio");
const resumeImg = document.getElementById("resume-img-output");
const selectedDegree = document.getElementById("select-education");
const uploadImg = document.getElementById("upload-img");
const storageImage = localStorage.getItem("storage-img");

//ეს ფუნცცია გასატანია ცალკე
// moreInfo.addEventListener('click',()=>{
//   additionalInfo.classList.add('active');
//   addResume.classList.add('add-active-resume');
//   addResumeBio.classList.add('add-active-resume')
// })

// function submit(){
//     resForm.addEventListener('submit',(e)=>{
//         e.preventDefault;
//         const user = {

//         }
//     })
// }
// submit();

function getUser() {
  fetch("https://resume.redberryinternship.ge/api/degrees", {
    method: "GET",
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function postResume(form) {
  axios
    .post("https://resume.redberryinternship.ge/api/cvs", form)
    .then((response) => {
      //   const addedUser = response.data;
      console.log(`POST: user is added`, response);
      //   // append to DOM
      //   appendToDOM([addedUser]);
    })
    .catch((error) => console.error(error));
}

const regForm = document.getElementById("form-personal-info");

const submitInputName = document.getElementById("input-name");
const submitLastName = document.getElementById("last-name");
const submitemail = document.getElementById("input-mail");
const submitPhoneNumber = document.getElementById("input-number");
const submitExperiences = document.getElementById("add-input-position");

// postResume();

getUser();

function clearStorage() {
  localStorage.clear();
}
function save(key, arr) {
  localStorage.setItem(key, arr);
}
function sendToStorage(arr, func, key) {
  const myarr = arr;
  func(myarr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    newArr.push(";");
  }
  newArr.pop();
  save(key, newArr);
}

function addInfoInResume(arr) {
  document.getElementById("resume-name").innerHTML = arr[0];
  document.getElementById("resume-last-name").innerHTML = arr[1];
  document.getElementById("resume-my-bio").innerHTML = arr[2];
  document.getElementById("resume-mail").innerHTML = arr[3];
  document.getElementById("resume-number").innerHTML = arr[4];
  addImg(storageImage);
  displayResume(arr[3], arr[4], arr[2]);
}
function addExperienceInResumee(arr) {
  document.getElementById("resume-position").innerHTML = arr[0];
  document.getElementById("resume-work").innerHTML = arr[1];
  document.getElementById("resume-start-date").innerHTML = arr[2];
  document.getElementById("resume-end-date").innerHTML = arr[3];
  document.getElementById("resume-my-exp").innerHTML = arr[4];
  displayResumeExperience(arr[0], arr[1], arr[2], arr[3], arr[4]);
}
function addEducationResumee(arr) {
  document.getElementById("resume-univercity").innerHTML = arr[0];
  document.getElementById("resume-degree").innerHTML =
    selectedDegree.options[arr[1]].innerText;
  document.getElementById("resume-degree-date").innerHTML = arr[2];
  document.getElementById("resume-education-desc").innerHTML = arr[3];
  displayResumeEducation(arr[0], arr[2], arr[3]);
}
function handleResumee(key, data, func) {
  if (data) {
    localStorage.getItem(key);
    const myarr = data.replaceAll(",", "");
    const splitted = myarr.split(";");
    func(splitted);
    return splitted;
  }
}

function getAllForms(key, data) {
  if (data) {
    localStorage.getItem(key);
    let myarr = data.replaceAll(",", "");
    return myarr.split(";");
  }
}

function getPersonalInfo() {
  const splitted = handleResumee(
    "personal-info",
    storePersonalInfo,
    addInfoInResume
  );
  console.log({ storePersonalInfo });
  if (splitted !== undefined) {
    document.getElementById("input-name").value = splitted[0];
    document.getElementById("last-name").value = splitted[1];
    document.getElementById("input-about-me").value = splitted[2];
    document.getElementById("input-mail").value = splitted[3];
    document.getElementById("input-number").value = splitted[4];
    addImg(storageImage);
    // document.getElementById("upload-img").src = splitted[5];
  }
}
const iconMail = document.getElementById("icon-mail");
const iconPhone = document.getElementById("icon-phone");
const aboutTitle = document.getElementById("resume-about-me");
const resumeBorder = document.getElementById("border-resume");
const resumeExperience = document.getElementById("resume-experience");
const resumeExperienceBorder = document.getElementById(
  "resume-experience-border"
);
const resumeEducation = document.getElementById("resume-education");

function savePersonalInfo(img) {
  const inputName = document.getElementById("input-name").value;
  const lastName = document.getElementById("last-name").value;
  const aboutMe = document.getElementById("input-about-me").value;
  const inputMail = document.getElementById("input-mail").value;
  const inputNumber = document.getElementById("input-number").value;
  const arr = [inputName, lastName, aboutMe, inputMail, inputNumber, img];
  //   displayResume(inputMail, inputNumber);
  addInfoInResume(arr);
  sendToStorage(arr, addInfoInResume, "personal-info");
}

function displayResume(mail, phone, about) {
  if (mail === "") {
    iconMail.classList.remove("show");
    iconMail.classList.add("hide");
  } else {
    iconMail.classList.remove("hide");
    iconMail.classList.add("show");
  }
  if (phone === "") {
    iconPhone.classList.remove("show");
    iconPhone.classList.add("hide");
  } else {
    iconPhone.classList.remove("hide");
    iconPhone.classList.add("show");
  }
  if (about === "") {
    aboutTitle.classList.remove("show");
    aboutTitle.classList.add("hide");
    resumeBorder.classList.add("hide");
    resumeBorder.classList.remove("show");
  } else {
    aboutTitle.classList.remove("hide");
    aboutTitle.classList.add("show");
    resumeBorder.classList.remove("hide");
    resumeBorder.classList.add("show");
  }
}
function displayResumeExperience(x, y, a, b) {
  if (x === "" && y === "" && a === "" && b === "") {
    resumeExperience.classList.remove("show");
    resumeExperience.classList.add("hide");
    resumeExperienceBorder.classList.remove("show");
    resumeExperienceBorder.classList.add("hide");
  } else {
    resumeExperience.classList.remove("hide");
    resumeExperience.classList.add("show");
    resumeExperienceBorder.classList.remove("hide");
    resumeExperienceBorder.classList.add("show");
  }
}
function displayResumeEducation(x, a, b) {
  if (x === "" && a === "" && b === "") {
    resumeEducation.classList.remove("show");
    resumeEducation.classList.add("hide");
  } else {
    resumeEducation.classList.remove("hide");
    resumeEducation.classList.add("show");
  }
}

function getExperience() {
  handleResumee("personal-info", storePersonalInfo, addInfoInResume);
  const splitted = handleResumee(
    "experience",
    storeExperience,
    addExperienceInResumee
  );
  console.log({ splitted });
  if (splitted !== undefined) {
    document.getElementById("input-position").value = splitted[0];
    document.getElementById("input-work").value = splitted[1];
    document.getElementById("start-date").value = splitted[2];
    document.getElementById("end-date").value = splitted[3];
    document.getElementById("description-input").value = splitted[4];
  }
}

function saveExperience() {
  const inputPosition = document.getElementById("input-position").value;
  const inputWork = document.getElementById("input-work").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const descriptionInput = document.getElementById("description-input").value;
  const arr = [inputPosition, inputWork, startDate, endDate, descriptionInput];
  addExperienceInResumee(arr);
  sendToStorage(arr, addExperienceInResumee, "experience");
}

function getFullResumee() {
  handleResumee("personal-info", storePersonalInfo, addInfoInResume);
  handleResumee("experience", storeExperience, addExperienceInResumee);
  handleResumee("education", storeEducation, addEducationResumee);
}

function getEducation() {
  handleResumee("personal-info", storePersonalInfo, addInfoInResume);
  handleResumee("experience", storeExperience, addExperienceInResumee);
  const splitted = handleResumee(
    "education",
    storeEducation,
    addEducationResumee
  );
  if (splitted !== undefined) {
    console.log({ splitted });
    document.getElementById("input-education").value = splitted[0];
    const e = document.getElementById("select-education");
    e.selectedIndex = Number(splitted[1]);
    document.getElementById("input-education-graduate-date").value =
      splitted[2];
    document.getElementById("input-education-description").value = splitted[3];
  }
}

function submitForm() {
  const info = getAllForms("personal-info", storePersonalInfo);
  const exp = getAllForms("experience", storeExperience);
  const educ = getAllForms("education", storeEducation);

  const formObject = {
    name: info[0],
    surname: info[1],
    email: info[3],
    phone_number: info[4],
    experiences: [exp[0], exp[1], exp[2]],
    educations: [educ[0], educ[1], educ[2]],
    about_me: info[4],
    image: storageImage,
  };

  postResume(formObject);
}

function saveEducationInfo() {
  const inputEducation = document.getElementById("input-education").value;
  const inputEducationGraduateDate = document.getElementById(
    "input-education-graduate-date"
  ).value;
  const inputEducationDescription = document.getElementById(
    "input-education-description"
  ).value;

  const e = document.getElementById("select-education");
  const inputEducationDegree = e.selectedIndex;
  const arr = [
    inputEducation,
    inputEducationDegree,
    inputEducationGraduateDate,
    inputEducationDescription,
  ];
  console.log({ inputEducationDegree });
  addEducationResumee(arr);
  sendToStorage(arr, addEducationResumee, "education");
}

function addImg(img) {
  console.log({ img }, "dnskjdnjks");
  if (img) {
    resumeImg.setAttribute("src", img);
  } else {
    resumeImg.setAttribute("src", "");
  }
}

function closePopup() {
  document.getElementById("pop-up").classList.add("hide");
}
window.addEventListener("load", function () {
  uploadImg.addEventListener("change", (event) => {
    console.log({ storageImage }, "storageImage");
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      localStorage.setItem("storage-img", reader.result);
      savePersonalInfo(storageImage);
    });
  });
});

window.addEventListener("load", function () {
  selectedDegree &&
    selectedDegree.addEventListener("change", function () {
      saveEducationInfo();
    });
});
