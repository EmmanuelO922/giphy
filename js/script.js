$(".search-button").click(function () {
  let userInput = $("input").val();
  let apilink = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;

  fetch(apilink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let num = Math.floor(Math.random() * data.data.length);
      console.log(data.data.length);
      console.log(num);
      let display = data.data[num].images.original.url;
      $(".display").html(`<img src="${display}">`);
    });
});

/*$("contact").click(function () {
  window.location.href =
    "mailto:address@dmail.com&subject=Hello there&body=This is the body";
});*/

