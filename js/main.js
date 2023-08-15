const majorSpan = document.getElementsByClassName('mentor-major');
const nameSpan = document.getElementsByClassName('mentor-name');

for(let index in data.mentors){
    majorSpan[index].innerHTML = data.mentors[index].major;
    nameSpan[index].innerHTML = data.mentors[index].name;
    console.log(data.mentors[index].major)
}