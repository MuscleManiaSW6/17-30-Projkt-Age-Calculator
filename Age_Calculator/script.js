const btnEl = document.querySelector(".btn");
const dobEl = document.getElementById("dob");
const resultEl = document.getElementById("result");

btnEl.addEventListener("click", calculateAge);

function calculateAge() {

    const birthdayValue = dobEl.value;
    if(birthdayValue === "") {
        alert("Please enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        resultEl.textContent = `You are ${age} ${age > 1 ? "years" : "year"} old!`
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return age;
}