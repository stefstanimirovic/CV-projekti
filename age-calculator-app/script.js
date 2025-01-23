let daysInput = document.getElementById('day');
let monthsInput = document.getElementById('month');
let yearsInput = document.getElementById('year');

document.getElementById('dugme').addEventListener('click', function () {
  const inputs = document.querySelectorAll('.inputs');
  document.querySelectorAll('.error-message').forEach(msg => msg.remove());
  let allFilled = true;

  inputs.forEach(input => {
    let inputName = input.getAttribute('name');
    let parentDiv = input.parentNode;
    const label = input.previousElementSibling;
    input.style.borderColor = '';
    label.style.color = '';

    let dayValue = daysInput.value.trim();
    let numberDValue = Number(dayValue);
    let monthValue = monthsInput.value.trim();
    let numberMValue = Number(monthValue);
    let yearValue = yearsInput.value.trim();
    let numberYValue = Number(yearValue);
    

    if (input.value === "") {
      allFilled = false;
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = "This field is required";
      input.style = `border-color:hsl(0, 100%, 67%);`
      label.style = `color:hsl(0, 100%, 67%);`
      parentDiv.appendChild(errorMessage);
    }
    switch (inputName) {

      case 'day':
        if (isNaN(numberDValue) || dayValue > 31) {
          allFilled = false;
          const errorMessage = document.createElement('p');
          errorMessage.classList.add('error-message');
          errorMessage.textContent = "Must be a valid day";
          input.style = `border-color:hsl(0, 100%, 67%);`
          label.style = `color:hsl(0, 100%, 67%);`
          parentDiv = daysInput.parentNode;
          parentDiv.appendChild(errorMessage);
        }
        else if (numberDValue > 30) {
          switch (numberMValue) {
            case 2:
            case 4:
            case 6:
            case 9:
            case 11:
              allFilled = false;
              const errorMessage = document.createElement('p');
              errorMessage.classList.add('error-message');
              errorMessage.textContent = "Must be a valid date";
              input.style = `border-color:hsl(0, 100%, 67%);`;
              label.style = `color:hsl(0, 100%, 67%);`;
              document.querySelector('label[for="day"]').style = `color: hsl(0, 100%, 67%)`;
              document.getElementById('month').style = `border-color: hsl(0, 100%, 67%);`;
              document.querySelector('label[for="month"]').style = `color: hsl(0, 100%, 67%)`;
              document.getElementById('year').style = `border-color: hsl(0, 100%, 67%);`
              document.querySelector('label[for="year"]').style = `color: hsl(0, 100%, 67%)`;
              parentDiv.appendChild(errorMessage);
              break;
          }
        }

      case 'month':


        if (isNaN(numberMValue) || monthValue > 12) {
          const errorMessage = document.createElement('p');
          errorMessage.classList.add('error-message');
          errorMessage.textContent = "Must be a valid month";
          input.style = `border-color:hsl(0, 100%, 67%);`
          label.style = `color:hsl(0, 100%, 67%);`
          parentDiv = monthsInput.parentNode;
          parentDiv.appendChild(errorMessage);
        } break;

      case 'year':
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        if (isNaN(numberYValue) || numberYValue > currentYear) {
          const errorMessage = document.createElement('p');
          errorMessage.classList.add('error-message');
          errorMessage.textContent = "Must be int the past";
          input.style = `border-color:hsl(0, 100%, 67%);`
          label.style = `color:hsl(0, 100%, 67%);`
          parentDiv = yearsInput.parentNode;
          parentDiv.appendChild(errorMessage);
        } break;
    }
  });

  if (allFilled) {

    let dayValue = daysInput.value.trim();
    let numberDValue = Number(dayValue);
    let monthValue = monthsInput.value.trim();
    let numberMValue = Number(monthValue);
    let yearValue = yearsInput.value.trim();
    let numberYValue = Number(yearValue);
    /*alert("All input fields are filled.");*/
    let birthday = `${numberMValue} ${numberDValue} ${numberYValue}`;
    console.log(typeof birthday);


    let birthdayDate = new Date(birthday);
    let currentDate = new Date();
    const totalSeconds = (currentDate - birthdayDate) / 1000;

    const diffTime = currentDate - birthdayDate;
    const diffDays = Math.ceil(diffTime / (1000*60*60*24));
    
    let _years = Math.floor(diffDays/365);
    let remainingDays = diffDays % 365;
    let _months = Math.floor(remainingDays /30);
    let _days = remainingDays % 30;

    const days = (currentDate.getDay() + birthdayDate.getDay());
    const months = Math.floor((totalSeconds / 3600 / 24 / 365) / 12);
    const years = Math.floor(totalSeconds / 3600 / 24 / 365);


    let yearsFinal = document.querySelector('#years');
    yearsFinal.innerHTML = `<span>${_years}</span> years`;

    let monthsFinal = document.querySelector('#months');
    monthsFinal.innerHTML = `<span>${_months}</span> months`;

    let daysFinal = document.querySelector('#days');
    daysFinal.innerHTML = `<span>${_days}</span> days`;



  }

});