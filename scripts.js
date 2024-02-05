const womanOption = document.getElementById("womanOption")
const manOption = document.getElementById("manOption")
const bodyWeight = document.getElementById("bodyWeight")
const bodyHeight = document.getElementById("bodyHeight")
const age = document.getElementById("age")
const btn = document.getElementById("btn")
const resultKcal = document.getElementById("result")

const ppm = document.getElementById("ppm")
const cpm = document.getElementById("cpm")

const work = document.getElementById("work")

function calculate(manOrWoman) {
	const weight = parseFloat(bodyWeight.value)
	const height = parseFloat(bodyHeight.value)
	const userAge = parseFloat(age.value)

	let result
	if (manOrWoman === "man") {
		result = 66.47 + 13.7 * weight + 5.0 * height - 6.76 * userAge
	} else if (manOrWoman === "woman") {
		result = 655.1 + 9.567 * weight + 1.85 * height - 4.68 * userAge
	} else {
		console.error("Invalid input for manOrWoman. Use 'man' or 'woman'.")
		return
	}

	if (isNaN(weight) || isNaN(height) || isNaN(userAge)) {
		resultKcal.textContent = "Uzupełnij wszystkie pola"
	} else {
		resultKcal.textContent = `${result} kcal`
	}
}

btn.addEventListener("click", function () {
	if (manOption.selected) {
		calculate("man")
	} else if (womanOption.selected) {
		calculate("woman")
	}
})



function choice() {
	if (ppm.checked) {
		work.textContent = ""
	} else if (cpm.checked) {
		work.innerHTML = `
		<label>Tryb pracy:</label>
        <select id='workContainer' for="">
        <option id="zeroWork" name="workType" type="radio">0 aktywności</option>
        <option id="oneWork" name="workType" type="radio">1-2 razy w tygodniu</option>
        <option id="threeWork" name="workType" type="radio">3-4 razy w tygodniu</option>
        <option id="everyDayWork" name="workType" type="radio">Codziennie</option>
        </select>`
	}
}
