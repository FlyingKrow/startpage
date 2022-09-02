function get_search_text() {
    var search = document.getElementById('search-text');
    if (!search.value) {
        search.style.border= '2px solid red';
        return null;
    }
    return search.value;
}

function search_google() {
    var search = get_search_text();
    if (!search) return
    var uri = encodeURIComponent(search);
    window.location.href = `https://google.com/search?q=${uri}`;
}

function search_yandex() {
    var search = get_search_text();
    if (!search) return
    var uri = encodeURIComponent(search);
    window.location.href = `https://yandex.ru/search/?text=${uri}`;
}

function search_youtube() {
    var search = get_search_text();
    if (!search) {
        window.location.href = 'https://www.youtube.com/';
        return
    }
    var uri = encodeURIComponent(search);
    window.location.href = `https://www.youtube.com/results?search_query=${uri}`;
}