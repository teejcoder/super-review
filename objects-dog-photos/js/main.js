//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(data => data.json())
    .then(data => console.log(data))
    .catch((error) => console.error(error))