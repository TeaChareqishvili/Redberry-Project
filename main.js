
// button for additional information 
const moreInfo = document.querySelector('.more-info');
const goBack = document.querySelectorAll('.back-btn');
const additionalInfo = document.querySelector('.additional-info');
const addResume = document.querySelector('.add-resume');
const storePersonalInfo = localStorage.getItem('personal-info');
const storeExperience = localStorage.getItem('experience');
const storeEducation = localStorage.getItem('education');
const addResumeBio = document.querySelector('.add-resume-bio');
const resumeImg = document.getElementById('resume-img-output');
const uploadImage = document.getElementById('upload-img');

//ეს ფუნცცია გასატანია ცალკე 
// moreInfo.addEventListener('click',()=>{
//   additionalInfo.classList.add('active');
//   addResume.classList.add('add-active-resume');
//   addResumeBio.classList.add('add-active-resume')
// })


// const FormPersonalInfo = document.getElementById('form-personal-info');
// const FormExperience = document.getElementById('form-experience');
// const FormEducation = document.getElementById('form-education');

// function submit(){
//     resForm.addEventListener('submit',(e)=>{
//         e.preventDefault;
//     })
// }
// submit();
function getUser(){
    fetch('https://resume.redberryinternship.ge/api/degrees', {
        method:'GET'
    }).then(res=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
      
    })
    .catch((error)=>{
        console.log(error);
    })
}

function postResume(){
     fetch('https://resume.redberryinternship.ge/api/cvs',{
        method:'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify()
     })
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
     })
}
// postResume();


getUser();

function clearStorage(){
    localStorage.clear();
}
function save(key,arr){
  localStorage.setItem(key, arr);
}
function sendToStorage(arr, func, key) {
    const myarr = arr
    func(myarr)
    let newArr =[]
    for (let i =0; i < arr.length;  i++){
        newArr.push(arr[i])
        newArr.push(';')
    }
    newArr.pop()
    save(key, newArr)
}


function addInfoInResume(arr){
    document.getElementById('resume-name').innerHTML = arr[0];
    document.getElementById('resume-last-name').innerHTML = arr[1];
    document.getElementById('resume-my-bio').innerHTML = arr[2]; 
    document.getElementById('resume-mail').innerHTML = arr[3];
    document.getElementById('resume-number').innerHTML = arr[4];
}
function addExperienceInResumee(arr){
    document.getElementById('resume-position').innerHTML = arr[0];
    document.getElementById('resume-work').innerHTML = arr[1];
    document.getElementById('resume-start-date').innerHTML = arr[2];
    document.getElementById('resume-end-date').innerHTML =  arr[3];
    document.getElementById('resume-my-exp').innerHTML = arr[4];
}
function addEducationResumee(arr){
    document.getElementById('resume-univercity').innerHTML = arr[0];
    document.getElementById('resume-degree').innerHTML = arr[1];
    document.getElementById('resume-degree-date').innerHTML = arr[2];
    document.getElementById('resume-education-desc').innerHTML =  arr[3];
}
function handleResumee (key,data, func){
    localStorage.getItem(key);
    const myarr = data.replaceAll(',', '')
    const splitted = myarr.split(';')
    func(splitted)
    return splitted
}

function getPersonalInfo(){
    const splitted =  handleResumee('personal-info', storePersonalInfo, addInfoInResume)
    console.log({splitted})
    document.getElementById('input-name').value = splitted[0];
    document.getElementById('last-name').value = splitted[1];
    document.getElementById('input-about-me').value = splitted[2]; 
    document.getElementById('input-mail').value = splitted[3];
    document.getElementById('input-number').value = splitted[4];
}

function savePersonalInfo() {
    const inputName = document.getElementById('input-name').value;
    const lastName = document.getElementById('last-name').value;
    const aboutMe = document.getElementById('input-about-me').value; 
    const inputMail = document.getElementById('input-mail').value;
    const inputNumber = document.getElementById('input-number').value;
    const arr = [inputName, lastName,  aboutMe, inputMail, inputNumber]
    addInfoInResume(arr)
    sendToStorage(arr, addInfoInResume, 'personal-info')
}
function getExperience(){
    handleResumee('personal-info', storePersonalInfo, addInfoInResume)
    const splitted =  handleResumee('experience', storeExperience, addExperienceInResumee)
    console.log({splitted})
    document.getElementById('input-position').value=splitted[0]
    document.getElementById('input-work').value=splitted[1]
    document.getElementById('start-date').value=splitted[2]
    document.getElementById('end-date').value=splitted[3]
    document.getElementById('description-input').value=splitted[4]
}

function saveExperience() {
    const inputPosition =document.getElementById('input-position').value
    const inputWork = document.getElementById('input-work').value
    const startDate = document.getElementById('start-date').value
    const endDate = document.getElementById('end-date').value
    const descriptionInput = document.getElementById('description-input').value
    const arr = [inputPosition, inputWork,  startDate, endDate, descriptionInput]
    addExperienceInResumee(arr)
    sendToStorage(arr, addExperienceInResumee, 'experience')
}

function getEducation(){
    handleResumee('personal-info', storePersonalInfo, addInfoInResume)
    handleResumee('experience', storeExperience, addExperienceInResumee)
    const splitted =  handleResumee('education', storeEducation, addEducationResumee)
    document.getElementById('input-education').value = splitted[0];
    const e = document.getElementById("select-education");
    e.options[e.selectedIndex].text = splitted[1];
    document.getElementById('input-education-graduate-date').value = splitted[2];
    document.getElementById('input-education-description').value = splitted[3];
}


function saveEducationInfo(){
    const inputEducation = document.getElementById('input-education').value;
    const inputEducationGraduateDate = document.getElementById('input-education-graduate-date').value;
    const inputEducationDescription = document.getElementById('input-education-description').value;

    const e = document.getElementById("select-education");
    const inputEducationDegree = e.options[e.selectedIndex].text;
    // const inputEducationDegree = document.getElementById("select-education").options[selectedIndex].text;
    const arr = [inputEducation, inputEducationDegree,  inputEducationGraduateDate, inputEducationDescription]
    addEducationResumee(arr)
    sendToStorage(arr, addEducationResumee, 'education')
}


// function displayImage() {
//     let images = ""
//       images += `<div class="resume-img">
//                   <img src="${URL.createObjectURL(image)}" alt="image">
//                 </div>`
//      resumeImg.innerHTML = images
// }
// let imagesArray = []

window.addEventListener('load', function() {
    console.log('oe')
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        console.log({resumeImg})

        if (this.files && this.files[0]) {
            console.log({resumeImg})
            // var img = document.getElementById('resumeImg');
            resumeImg.onload = () => {
                URL.revokeObjectURL(resumeImg.src);  // no longer needed, free memory
            }
  
            resumeImg.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
// function uploadImg() {
//     console.log('djcnksjdnckjsndckjs')
//     const file = input.files
//     imagesArray.push(file[0])
//     displayImage()
// }

// function secondPage(){
//     const inputPosition =document.getElementById('input-position').value
//     const inputWork = document.getElementById('input-work').value
//     const startDate = document.getElementById('start-date').value
//     const endDate = document.getElementById('end-date').value
//     const descriptionInput = document.getElementById('description-input').value

//     document.getElementById('resume-position').innerHTML = inputPosition;
//     document.getElementById('resume-work').innerHTML = inputWork;
//     document.getElementById('resume-start-date').innerHTML = startDate;
//     document.getElementById('resume-end-date').innerHTML =  endDate;
//     document.getElementById('resume-my-exp').innerHTML = descriptionInput;

//     // additional info 

//     const inputPositionAdd =document.getElementById('add-input-position').value
//     const inputWorkAdd =document.getElementById('add-input-work').value
//     const startDateAdd =document.getElementById('add-start-date').value
//     const endDateAdd =document.getElementById('add-end-date').value
//     const addDescription = document.getElementById('add-resume-my-exp').value

//     document.getElementById('add-resume-position').innerHTML = inputPositionAdd;
//     document.getElementById('add-resume-work').innerHTML =  inputWorkAdd;
//     document.getElementById('add-resume-start-date').innerHTML =  startDateAdd;
//     document.getElementById('add-resume-end-date').innerHTML =  endDateAdd;
//     document.getElementById('add-resume-my-exp').innerHTML = addDescription;

    
// }


// saveInput();
// secondPage();