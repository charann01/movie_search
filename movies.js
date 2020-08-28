var button = document.getElementById('search_button')
var search = document.getElementById('search_box')


let searchMovie = function () {
  movieName = search.value
  search.value=''
  let url = ''.concat('https://api.themoviedb.org/3/', 'search/movie?api_key=','20c915997a901c68b645cafb4cfc0856', '&query=', movieName);
  fetch(url)
  .then(result=>result.json())
  .then((data)=>{
      var i;
      var move = "";
      for(i=0;i< Object.keys(data['results']).length;i++){
        move = move + data['results'][i]['title'] + " , ";
      }
      console.log(move)
      document.getElementById('output').innerHTML = move
  })
}


button.addEventListener("click",searchMovie)