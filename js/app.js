let words = document.querySelectorAll(".skill-set");

words.forEach((skill) => {
  let letter = skill.textContent.split("");
  skill.textContent = "";
  letter.forEach((ele) => {
    let span = document.createElement("span");
    span.textContent = ele;
    span.className = "letter";
    skill.append(span);
  });
});

let currWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currWordIndex].style.opacity = "1";

let changeText = () => {
  let currWord = words[currWordIndex];
  let nextWord =
    currWordIndex === maxWordIndex ? words[0] : words[currWordIndex + 1];
  Array.from(currWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind"
    setTimeout(() => {
      letter.className = "letter in";
    },340+  i * 80);
  });
  currWordIndex = currWordIndex === maxWordIndex ? 0 : currWordIndex+1;
};

changeText();
setInterval(changeText , 3000)
