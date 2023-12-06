// Grab our input
   let inputElement = document.querySelector('.js-input');
    inputElement.value = '';
 // Display our result on the web-page using dom
   const result = document.querySelector('.js-para')
       
    function checkGrade () {
        if (inputElement.value >= 0 && inputElement.value <= 40) {
            result.innerText = `your score is ${inputElement.value}, your grade is F, 
        you fail`
        } else if (inputElement.value > 40 && inputElement.value <= 49) {
            result.innerText = `your score is ${inputElement.value}, your grade is P, 
            you Pass`
        } else if (inputElement.value > 49 && inputElement.value <= 69) {
            result.innerText = `your score is ${inputElement.value}, your grade is C, 
            Big credit to you: pls hit the subscibe button`
        } else if (inputElement.value > 69 && inputElement.value <= 100) {
            result.innerText = `your score is ${inputElement.value}, your grade is A, 
            Big Alpha to you: pls hit the subscribe button`
        } else {
            result.innerText = 'Sorry: your score is beyound the scope'
        }

        if (inputElement.value === '')  {
            result.innerText =  'Hi student! input your score'
        }
           inputElement.value = ''; 
    };

