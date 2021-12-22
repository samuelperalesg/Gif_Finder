// constants
const URL = `https://api.giphy.com/v1/gifs/search?api_key=nINz5xXnq2CwNwZIhFlSaBI6KdAadvqt&q=`

// element references
const $form = $('form');
const $input = $('input[type="text"]');

$form.on('submit', getGiphy);