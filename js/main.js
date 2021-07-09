import {spanish, english} from './languages.js'

const setSpanish = () => {
    window.document.getElementById(spanish.profile.rol.id).textContent = spanish.profile.rol.value;
    window.document.getElementById(spanish.profile.tittle.id).textContent = spanish.profile.tittle.value;
    window.document.getElementById(spanish.profile.content.id).textContent = spanish.profile.content.value;

    window.document.getElementById(spanish.experience.id).textContent = spanish.experience.value;
    
    window.document.getElementById(spanish.languaje.contact.id).textContent = spanish.languaje.contact.value;
    window.document.getElementById(spanish.languaje.country.id).textContent = spanish.languaje.country.value;
    window.document.getElementById(spanish.languaje.id).textContent = spanish.languaje.value;

    window.document.getElementById(spanish.schlolarship.tittle.id).textContent = spanish.schlolarship.tittle.value;
    window.document.getElementById(spanish.schlolarship.licence.id).textContent = spanish.schlolarship.licence.value;
    window.document.getElementById(spanish.schlolarship.schoolInfoId).innerHTML = buildSchoolTemplateSpanish();

    window.document.getElementById(spanish.hobbies.guitar.id).textContent = spanish.hobbies.guitar.value;
    window.document.getElementById(spanish.hobbies.gym.id).textContent = spanish.hobbies.gym.value;
    window.document.getElementById(spanish.hobbies.code.id).textContent = spanish.hobbies.code.value;

    window.document.getElementById(spanish.aboutMe.tittle.id).textContent = spanish.aboutMe.tittle.value;
    window.document.getElementById(spanish.aboutMe.content.id).textContent = spanish.aboutMe.content.value;

    window.document.getElementById(spanish.work.timelineId).innerHTML = buildWorkTemplateSpanish();
}

const setEnglish = () => {
    window.document.getElementById(english.profile.rol.id).textContent = english.profile.rol.value;
    window.document.getElementById(english.profile.tittle.id).textContent = english.profile.tittle.value;
    window.document.getElementById(english.profile.content.id).textContent = english.profile.content.value;

    window.document.getElementById(english.experience.id).textContent = english.experience.value;

    
    window.document.getElementById(english.languaje.contact.id).textContent = english.languaje.contact.value;
    window.document.getElementById(english.languaje.country.id).textContent = english.languaje.country.value;
    window.document.getElementById(english.languaje.id).textContent = english.languaje.value;

    window.document.getElementById(english.schlolarship.tittle.id).textContent = english.schlolarship.tittle.value;
    window.document.getElementById(english.schlolarship.licence.id).textContent = english.schlolarship.licence.value;
    window.document.getElementById(spanish.schlolarship.schoolInfoId).innerHTML = buildSchoolTemplateEnglish();

    window.document.getElementById(english.hobbies.guitar.id).textContent = english.hobbies.guitar.value;
    window.document.getElementById(english.hobbies.gym.id).textContent = english.hobbies.gym.value;
    window.document.getElementById(english.hobbies.code.id).textContent = english.hobbies.code.value;

    window.document.getElementById(english.aboutMe.tittle.id).textContent = english.aboutMe.tittle.value;
    window.document.getElementById(english.aboutMe.content.id).textContent = english.aboutMe.content.value;

    window.document.getElementById(english.work.timelineId).innerHTML = buildWorkTemplateEnglish();
}

const buildSchoolTemplateSpanish = () => {
    let html = '';
    spanish.schlolarship.schoolInfo.forEach(s => {
        html += `<h5>${s.name}</h5> <h6>${s.tittle}</h6> <p class="date-school">${s.date}</p> <br>`
    });
    return html
}

const buildSchoolTemplateEnglish = () => {
    let html = '';
    english.schlolarship.schoolInfo.forEach(s => {
        html += `<h5>${s.name}</h5> <h6>${s.tittle}</h6> <p class="date-school">${s.date}</p> <br>`
    });
    return html
}

const buildWorkTemplateSpanish = () => {
    let html = '';
    spanish.work.timeline.forEach(s => {
        html += `<p class="timeline-tittle">${s.tittle}</p>
        <div class="timeline"> 
        <p class="timeline-date">${s.date}</p>
        </div> <div class="timeline-info"> 
        <p> ${s.description} </p> </div>`
    });
    return html;
}


const buildWorkTemplateEnglish = () => {
    let html = '';
    english.work.timeline.forEach(s => {
        html += `<p class="timeline-tittle">${s.tittle}</p>
        <div class="timeline"> 
        <p class="timeline-date">${s.date}</p>
        </div> <div class="timeline-info"> 
        <p> ${s.description} </p> </div>`
    });

    return html;
}

window.setSpanish = setSpanish;
window.setEnglish = setEnglish;

