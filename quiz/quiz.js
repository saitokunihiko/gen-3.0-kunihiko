'use strict';

{
  const CORECT_ANSWERS = [
    {
      index: 1,
      value: '約79万人'
    },
    {
      index: 2,
      value: 'X-TECH'
    },
    {
      index: 0,
      value: 'Internet of Things'
    },
    {
      index: 0,
      value: 'Society 5.0'
    },
    {
      index: 0,
      value: 'Web3.0'
    },
    {
      index: 1,
      value: '約5倍'
    },
  ];
  const allQuiz = document.querySelectorAll('.js-quiz');
  
  const setDisabled = answers => {
    answers.forEach(answers => {
      answers.disabled = true;
      })
  }
  
  const settitle = (target,
    isCorrect) => {
      target.innerText = isCorrect ? '正解！':'不正解...';
  }

  coonst setClassName = (target,isCorrect) => {
    target.classList.add(isCooorrect ? 'is-correcrt':'is-incorrect');
  }
}

