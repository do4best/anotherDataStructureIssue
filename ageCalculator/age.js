

const ageCalculatorForm = document.getElementById("ageCalculator")
ageCalculatorForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    claculateAge();
})

function claculateAge(){
    const today = new Date()
    const birthdateInput = document.getElementById("birthday").value;
    const birthdateParts = birthdateInput.split("-");
    const birthDay = birthdateParts[0];
    const birthdayMonth = birthdateParts[1 ]-1
    const birthdayYear = birthdateParts[2];
    const birthDate = new Date(birthdayYear,birthdayMonth,birthDay)
 
    const isValidDate =(date)=>{
        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
        );
    };
    if(!isValidDate((birthDate))){
        alert("Invalid Date format: Please Enter a valid date in DD-MM-YYYY format.")
        return;
    }
    const ageMillisecond = today - birthDate;
    const ageInSeconds = Math.floor(ageMillisecond/1000);
    const ageInMinute = Math.floor(ageInSeconds/60);
    const ageInHour = Math.floor(ageInMinute/60);
    const ageInDays = Math.floor(ageInHour/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInDays/365.25);

    const resultContainer = document.getElementById("resultContainer")
    const result = document.getElementById("result")

    result.innerHTML =`
        <div class="result" >
        <div>
            <h3>Age:</h3>
            <p>${ageInYears} Year ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>
    </div>`;

    resultContainer.style.display="block";}