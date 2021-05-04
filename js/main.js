import {spanish, english} from './languages.js'

window.document.addEventListener("DOMContentLoaded", () => {
    alert('init');

});

const setSpanish = () => {
    window.document.getElementById(spanish.profile.rol.id).textContent = spanish.profile.rol.value;
    window.document.getElementById(spanish.profile.tittle.id).textContent = spanish.profile.tittle.value;
    window.document.getElementById(spanish.profile.content.id).textContent = spanish.profile.content.value;

    window.document.getElementById(spanish.languaje.contact.id).textContent = spanish.languaje.contact.value;
    window.document.getElementById(spanish.languaje.country.id).textContent = spanish.languaje.country.value;

    window.document.getElementById(spanish.schlolarship.tittle.id).textContent = spanish.schlolarship.tittle.value;
    window.document.getElementById(spanish.schlolarship.licence.id).textContent = spanish.schlolarship.licence.value;
    window.document.getElementById(spanish.schlolarship.schoolInfoId).innerHTML = buildSchoolTemplateSpanish();

    window.document.getElementById(spanish.hobbies.guitar.id).textContent = spanish.hobbies.guitar.value;
    window.document.getElementById(spanish.hobbies.gym.id).textContent = spanish.hobbies.gym.value;
    window.document.getElementById(spanish.hobbies.code.id).textContent = spanish.hobbies.code.value;

    window.document.getElementById(spanish.aboutMe.tittle.id).textContent = spanish.aboutMe.tittle.value;
    window.document.getElementById(spanish.aboutMe.content.id).textContent = spanish.aboutMe.content.value;
}

const setEnglish = () => {
    window.document.getElementById(english.profile.rol.id).textContent = english.profile.rol.value;
    window.document.getElementById(english.profile.tittle.id).textContent = english.profile.tittle.value;
    window.document.getElementById(english.profile.content.id).textContent = english.profile.content.value;

    window.document.getElementById(english.languaje.contact.id).textContent = english.languaje.contact.value;
    window.document.getElementById(english.languaje.country.id).textContent = english.languaje.country.value;

    window.document.getElementById(english.schlolarship.tittle.id).textContent = english.schlolarship.tittle.value;
    window.document.getElementById(english.schlolarship.licence.id).textContent = english.schlolarship.licence.value;
    window.document.getElementById(spanish.schlolarship.schoolInfoId).innerHTML = buildSchoolTemplateEnglish();

    window.document.getElementById(english.hobbies.guitar.id).textContent = english.hobbies.guitar.value;
    window.document.getElementById(english.hobbies.gym.id).textContent = english.hobbies.gym.value;
    window.document.getElementById(english.hobbies.code.id).textContent = english.hobbies.code.value;

    window.document.getElementById(english.aboutMe.tittle.id).textContent = english.aboutMe.tittle.value;
    window.document.getElementById(english.aboutMe.content.id).textContent = english.aboutMe.content.value;


}

const buildSchoolTemplateSpanish = () => {
    let html = '';
    spanish.schlolarship.schoolInfo.forEach(s => {
        html += `<h5>${s.name}</h5> <h6>${s.tittle}</h6> <p>${s.date}</p> <br>`
    })
    return html
}

const buildSchoolTemplateEnglish = () => {
    let html = '';
    english.schlolarship.schoolInfo.forEach(s => {
        html += `<h5>${s.name}</h5> <h6>${s.tittle}</h6> <p>${s.date}</p> <br>`
    })
    return html
}
window.setSpanish = setSpanish;
window.setEnglish = setEnglish;

