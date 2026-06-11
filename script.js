document.addEventListener("DOMContentLoaded", function () {

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

if (answer.style.display === "block") {
answer.style.display = "none";
} else {

document.querySelectorAll(".faq-answer").forEach(item => {
item.style.display = "none";
});

answer.style.display = "block";
}

});

});

});
