const texts = ['web developeur. 👨🏿‍💻', 'ui designer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.typing').textContent = letter
    if (currentText.length === index) {
        count++;
        index = 0;
    }

    setTimeout(type, 300)
})();
