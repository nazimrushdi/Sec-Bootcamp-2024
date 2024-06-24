// const testValue = "hello world";

// const testPromise = new Promise((resolve, reject) => {
//   if (testValue === "hello world") {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });
// testPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const form = document.querySelector("#searchForm");
const searchedWord = document.querySelector("#searchedWord");
const wordDefinition = document.querySelector("#wordDefinition");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const word = event.target[0].value;
  console.dir(word);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const def = data[0].meanings[2].definitions[0].definition;
      searchedWord.innerText = word;
      wordDefinition.innerText = def;
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});
