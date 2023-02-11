
// button for additional information 
const moreInfo = document.querySelector('.more-info');
const additionalInfo = document.querySelector('.additional-info');
const addResume = document.querySelector('.add-resume');

moreInfo.addEventListener('click',()=>{
   
  additionalInfo.classList.add('active');
  addResume.classList.add('add-active-resume');
})

function getUser(){
    fetch('https://resume.redberryinternship.ge/api/degrees').then(res=>{
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
getUser();

// sending input values to the resume side


// function saveInput(){
//  // first page

//     const inputName = document.getElementById('input-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const aboutMe = document.getElementById('input-about-me').value; 
//     const inputMail = document.getElementById('input-mail').value;
//     const inputNumber = document.getElementById('input-number').value;
//    // first page

//     document.getElementById('resume-name').innerHTML = inputName;
//     document.getElementById('resume-last-name').innerHTML = lastName;
//     document.getElementById('resume-mail').innerHTML = inputMail;
//     document.getElementById('resume-number').innerHTML = inputNumber;
//     document.getElementById('resume-my-bio').innerHTML = aboutMe; 
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