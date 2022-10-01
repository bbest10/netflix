const answers = document.querySelectorAll('#main')[i];

// I think this should work. Creating an array of the non selected 
//  answers, and doing class actions on them when the button is toggled to open
function buttonClick(index){
    const answer = answers[index]
    const otherAnswers = answers.filter((a, i) => i !== index)
    if (answer.classList.contains('closed')) {
        answer.classList.remove('closed');
        answer.classList.add('open');
        otherAnswers.map(oa => {
            oa.classList.remove('open')
            oa.classList.add('closed')
        })
        console.log('chop')
    } else {
        answer.classList.remove('open');
        answer.classList.add('closed');
    }
}


for (let i = 0; i < document.querySelectorAll('.faq-div').length; i++) {
    // const element = array[i];
    document.querySelectorAll('.faq-div')[i].addEventListener('click', () => buttonClick(i))
}
