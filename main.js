const firstNumber = document.getElementById('nbr1');
const secondNumber = document.getElementById('nbr2');
const operator = document.getElementById('operator');
const show = document.getElementById('show');

let result;
let talkToUser;

class MathOperation {
    constructor() {
    }

    FinalMath() {
        const firstValue = parseFloat(firstNumber.value);
        const secondValue = parseFloat(secondNumber.value);
        const selectedOperator = operator.value;

        if (isNaN(firstValue) || isNaN(secondValue)) {
            console.error("Veuillez entrer des valeurs numériques valides");
            result = false;
        } else {
            if (selectedOperator === "+") {
                result = firstValue + secondValue;
            } else if (selectedOperator === "-") {
                result = firstValue - secondValue;
            } else if (selectedOperator === "*" || selectedOperator === "⋅" || selectedOperator === "×") {
                if (secondValue === 0) {
                    console.error("Vous ne pouvez pas diviser par 0");
                    result = false;
                } else {
                    result = firstValue * secondValue;
                }
            } else if (selectedOperator === "/" || selectedOperator === "÷") {
                if (secondValue === 0) {
                    console.error("Vous ne pouvez pas diviser par 0");
                    result = false;
                } else {
                    result = firstValue / secondValue;
                }
            } else {
                console.error("Opérateur non reconnu");
                result = false;
            }
        }

        this.Show();
    }

    Show() {
        if (!result) {
            talkToUser = "Opération invalide";
        } else {
            talkToUser = "Le résultat est " + result;
        }
        show.textContent = talkToUser;
    }
}

const mathInstance = new MathOperation();

operator.addEventListener("change", function() {
    mathInstance.FinalMath();
});