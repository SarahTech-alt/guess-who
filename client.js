console.log('Here are all the available people:', people);


$(document).ready(readyNow)


// show people index.html
// find a random person display the name
// save that name in a variable
// when a photo is clicked, match with that variable

function readyNow() {
    showPeople();
    getRandomPerson();
    $('.user-image').on('click', photoClicked);
}

let targetPerson;

function showPeople() {
    // onclick ="photoClicked()"
    for (let persons of people) {
        $('#peopleInfo').append(`
        <img 
        class="user-image" 
        data-name= "${persons.name}" 
        src="https://github.com/${persons.githubUsername}.png?size=250" alt="Profile image of ${persons.name}">
        `);
    }
}

function photoClicked(){
   let targetPersonClicked = $(this).data('name');
   console.log(targetPersonClicked);

   if (targetPersonClicked === targetPerson) {
       alert('Found it!');
   }
   else {
       alert('Try again');
       readyNow();
   }
}

function getRandomPerson() {
    targetPerson = people[randomNumber(0, people.length-1)].name;
    console.log(targetPerson)
    // display on DOM
    $('#showRandomPerson').text(`${targetPerson}`);
}



function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

