var quiz = [
  {
    question1: "Q1 : Which language is markup language",
    a: "HTML",
    b: "CSS",
    C: "Javascript",
    d: "React",
    ans: "ans1",
  },
  {
    question1: "Q2 : Which language is style language",
    a: "HTML",
    b: "CSS",
    C: "Javascript",
    d: "React",
    ans: "ans2",
  },
  {
    question1: "Q3 : Which language is interactive language",
    a: "HTML",
    b: "CSS",
    C: "Javascript",
    d: "React",
    ans: "ans4",
  },
  {
    question1: "Q4 : For each loop can be used on",
    a: "String",
    b: "Array",
    C: "Object",
    d: "Number",
    ans: "ans2",
  },
  {
    question1: "Q5 : For changing text in HTML we use",
    a: "innerHTML",
    b: "innerText",
    C: "Queryselector",
    d: "QueryselectorAll",
    ans: "ans2",
  }
];

const question = document.querySelector(".question");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const submit = document.querySelector(".submit-btn");
const answeres = document.querySelectorAll(".answere");
const marks = document.querySelector(".score");

let questionCount = 0;
let score = 0;

const questionLoader = () => {
  question.innerHTML = quiz[questionCount].question1;
  option1.innerHTML = quiz[questionCount].a;
  option2.innerHTML = quiz[questionCount].b;
  option3.innerHTML = quiz[questionCount].C;
  option4.innerHTML = quiz[questionCount].d;
};
questionLoader();

const getCheckAnsere = () => {
  let answere;
  answeres.forEach((answereRec) => {
    if (answereRec.checked) {
      answere = answereRec.id;
    }
  });
  return answere;
  console.log(answereRec);
};

submit.addEventListener("click", () => {
  const checkAnswere = getCheckAnsere();
  if (checkAnswere === quiz[questionCount].ans) {
    score++;
  }
  questionCount++;
  if (questionCount < quiz.length) {
    questionLoader();
  }
  else {
    marks.innerHTML=`Your score is ${score}/${quiz.length}`
  }
});
