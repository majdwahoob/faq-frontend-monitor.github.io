const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    const btn = question.querySelector(".question__button");
    const txt = question.querySelector(".question__title .question__title__text");

    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if(question !== item) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });

    txt.addEventListener("click", () => {
        questions.forEach((item) => {
            if(question !== item) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

