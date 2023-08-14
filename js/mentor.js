let id = Number(new URL(location.href).searchParams.get('id'))

const profileImg = document.getElementsByClassName('profile-img')[0];
const nameSpan = document.getElementsByClassName('name')[0];
const affilationSpan = document.getElementsByClassName('affiliation')[0];
const majorSpan = document.getElementsByClassName('major')[0];
const summarySpan = document.getElementsByClassName('summary')[0];
const contentSpan = document.getElementsByClassName('content')[0];

let mentorData;
for(let mentorOne of mentor.mentors){
    if(id === mentorOne.id) {
        mentorData = mentorOne;
        break;
    }
}

profileImg.src = mentorData.img
nameSpan.innerHTML = mentorData.name;
affilationSpan.innerHTML = mentorData.affiliation;
majorSpan.innerHTML = mentorData.major;
summarySpan.innerHTML = mentorData.summary;
contentSpan.innerHTML = mentorData.content;