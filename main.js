// Grab the input form element
   let inputElement = document.querySelector('.js-input');
    inputElement.value = '';

 // Display our result on the web-page using dom
   const result = document.querySelector('.js-para')

// Function to invoke the grade button using onclick
    function checkGrade () {
        if (inputElement.value >= 0 && inputElement.value <= 40) {
            result.innerText = `your score is ${inputElement.value}, your grade is F, 
        you Failed 😥😥😥`
        } else if (inputElement.value > 40 && inputElement.value <= 49) {
            result.innerText = `your score is ${inputElement.value}, your grade is P, 
            you Passed 😌😌😌`
        } else if (inputElement.value > 49 && inputElement.value <= 69) {
            result.innerText = `your score is ${inputElement.value}, your grade is C, 
            Big Credit to you: pls hit the subscribe button 😀😀😀`
        } else if (inputElement.value > 69 && inputElement.value <= 100) {
            result.innerText = `your score is ${inputElement.value}, your grade is A, 
            Big Alpha to you: pls hit the subscribe button 😍😍😍`
        } else {
            result.innerText = 'Sorry: your score is beyound the scope'
        }

        if (inputElement.value === '')  {
            result.innerText =  'Hi student!👨‍👨‍👦‍👦 input your score '
        }
           inputElement.value = ''; 
    };

// Grab the subscribe button
    const buttonElement = document.querySelector('.js-subscribe');

// Add eventlistener
    buttonElement.addEventListener('click', () => {
        if (buttonElement.innerText === 'Subscribe') {
            buttonElement.innerText = 'Subscribed';
            buttonElement.classList.add('newsub');
        } else {
            buttonElement.innerText = 'Subscribe'
            buttonElement.classList.remove('newsub')
        }
    });





