let imageDiv = document.getElementById('image')

// api url - https://dog.ceo/api/breeds/image/random

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        imageDiv.innerHTML = `<img src="${json.message}" alt="random dog image" />`
    })