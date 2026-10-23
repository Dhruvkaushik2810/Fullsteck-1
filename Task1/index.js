
const question = "JavaScript ka use kis liye hota hai?";

const options = [
    "Website ko interactive banane ke liye",
    "Sirf website ka colour badalne ke liye",
    "Computer ko charge karne ke liye",
    "Sirf image banane ke liye"
];


document.getElementById("question").textContent = question;


const optionsContainer = document.getElementById("options");

for (let i = 0; i < options.length; i++) {
    const button = document.createElement("button");

    button.textContent = options[i];

    optionsContainer.appendChild(button);
}
