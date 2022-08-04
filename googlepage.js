const query = document.querySelector('.query ');
const search = document.querySelector('.search ');
search.onclick = function() {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url, ' _self ');
}
