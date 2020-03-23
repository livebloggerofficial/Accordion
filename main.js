const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    let answer = question.nextElementSibling;
    let questionIcon = question.previousElementSibling;

    answer.classList.toggle("active");
    questionIcon.classList.toggle("active");
  });
});
