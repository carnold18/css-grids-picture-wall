pictureDiv = document.querySelector('.pictures');

function fetchPictures() {
  fetch("https://picsum.photos/v2/list?page=2&limit=100")
    .then(resp => resp.json())
    .then(data => createDivs(data))
}

function createDivs(data) {
    for (item of data) {
        console.log(item["download_url"]);
    }
}

fetchPictures();