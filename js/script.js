$(".search-button").click(function () {
  let num = Math.floor(Math.random() * 50);
  let userInput = $("input").val();
  let apilink = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;

  fetch(apilink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.data[num].images.original.url);
      $(".display").html(`<img src="${data.data[num].images.original.url}">`);
    });
});
