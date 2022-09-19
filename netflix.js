// const age = -12;

// if (age>=0 && age < 5  || age ==65) {
//     console.log("$10");
    
// }else if(age>=5 && age<20){
//     console.log("$20")

// }else if(age>=20 && age<65){
//     console.log("$50")
// } 
// else if(age<0){
//     console.log("you dont exist yet")
// }else{
//     console.log("you are yoo old")
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for(let i = 0; i < people.length; i++){
//     console.log(people[i].toLocaleUpperCase())



for (let i = 0; i < document.querySelectorAll('.faq-div').length; i++) {
    // const element = array[i];
    document.querySelectorAll('.faq-div')[i].addEventListener('click', buttonClick)
    let answer = document.querySelectorAll('#main')[i];


function buttonClick(){

if (answer.classList == 'closed') {
    answer.classList.add('open');
    answer.classList.remove('closed');
    console.log('chop')
}else{
    answer.classList.add('closed');
    answer.classList.remove('open');
}
}
}