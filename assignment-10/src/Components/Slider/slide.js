
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

if (next && prev) {
    next.addEventListener('click', function () {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            document.querySelector('.skild').appendChild(items[0]);
        }
    });

    prev.addEventListener('click', function () {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            document.querySelector('.skild').prepend(items[items.length - 1]);
        }
    });
} else {
    console.error("Next or Previous button not found in the DOM.");
}
