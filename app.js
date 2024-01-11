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

  for (x = 0; x < 9; x++) {
    let idx = x
    $('.gif').each(function(idx){
      $(this).attr("src", gifData.data[idx].images.original.url)})
    }
}

