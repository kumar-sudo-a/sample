const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() { // When you use await inside a function you have to label it async.
  const config = { // storing in a variable 
    headers: { // Object
      Accept: 'application/json', // "Accept" is the key and "application.JSON" is the value.
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config) 
  //response

  //"fetch" is async so we have to await until its done fetching so use the "await" keyword as it returns promise.

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// // USING .then()
// function generateJoke() {
//   const config = {  // storing in a variable
//     headers: {  // Object
//       Accept: 'application/json',  // "Accept" is the key and "application.JSON" is the value.
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json()) // Will give JSON when fetching is finished
//     .then((data) => { // Will give data 
//       jokeEl.innerHTML = data.joke
//     }) 
// }

// Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

