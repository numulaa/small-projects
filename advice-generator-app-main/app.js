let btn = document.querySelector(".btn").addEventListener("click", getAdvice);
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".advice-content").innerText = data.slip.advice;
      document.querySelector("#advice-id").innerText = data.slip.id;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// fetch("https://api.adviceslip.com/advice")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
