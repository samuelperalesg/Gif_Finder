// constants
const URL = `https://api.giphy.com/v1/gifs/search?api_key=nINz5xXnq2CwNwZIhFlSaBI6KdAadvqt&q=`

// element references
const $form = $('form');
const $input = $('input[type="text"]');
let $category = $('button')

$form.on('submit', getGiphy);

$category.click(function(){
  let categoryInput = this.innerText
  $.ajax(URL + categoryInput).then(function(data) {
    render(data)})
  
})



// functions


function getGiphy(evt) {
  evt.preventDefault();

  const userInput = $input.val()



  if(!userInput) return

  $.ajax(URL + userInput).then(function(data) {
    render(data)
  
  },  function(error) {
    return (error, 'something went wrong')
  })
}

function render(gifData) {
  function getRandomIdx(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }
  randIdx = getRandomIdx(0, 20)

  $('#imageBox').html(`<img src="${gifData.data[randIdx].images.original.url}">`)
}



