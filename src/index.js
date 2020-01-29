document.addEventListener('DOMContentLoaded', function() {
  fetchAllDogs()
  fetchDogBreeds()
})


function fetchAllDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(jsonData =>
    renderDogs(jsonData));
}

function renderDogs(jsonData) {
  const dogContainer = document.getElementById('dog-image-container')
  jsonData.message.forEach((imageUrl) => {
    const img = document.createElement('img')
    img.src = `${imageUrl}`
    dogContainer.appendChild(img)
    })
}

function fetchDogBreeds(){
  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(jsonBreedData => {

    let breeds = Object.keys(jsonBreedData.message); //used this line to replace repetitive code in renderDogBreeds and renderBySelectedLetter
    renderDogBreeds(breeds);
    filterBreedsByLetter(breeds);
  });
}

function renderDogBreeds(breeds) {
  const dogBreedsContainer = document.getElementById('dog-breeds')

  breeds.forEach((breed) => {
    const li = document.createElement('li')
    li.textContent = `${breed}`
    dogBreedsContainer.appendChild(li)

    li.addEventListener('click', function(e) {
      e.target.style.color = 'white'
    })

  })

}

function filterBreedsByLetter(breeds){
  const dropDownMenu = document.getElementById('breed-dropdown')
  dropDownMenu.addEventListener('change', function(event){
    let letterToFilterBy = event.target.value
    let results = breeds.filter(breed => breed.startsWith(letterToFilterBy))
    let list = document.getElementById('dog-breeds')
        list.innerText = ""

    results.forEach(result => {
      const li = document.createElement('li')
      li.textContent = `${result}`
      list.appendChild(li)
    })
  })
}



///TRASH CODE
// const breedsHash = jsonBreedData.message
// const breeds = Object.keys(breedsHash)

  // from fetchDogBreeds
    //filterBySelectedLetter(breeds);
  //from renderDogBreeds
    //dropDownMenu.addEventListener('change', function(e){
        //let selectedLetter = (e.target.value)
        //})
        // breeds.filter(breed => breed.startsWith(selectedLetter));
