document.querySelector('.burger').onclick = function() {
    document.querySelector('.menu ul').classList.add('mobile-active');
}

document.querySelector('#closeBtn').onclick = function() {
    document.querySelector('.menu ul').classList.remove('mobile-active');
}