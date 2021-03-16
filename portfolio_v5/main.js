const texts = ['web developeur. 👨🏿‍💻', 'ui designer.'];
const contents = document.querySelectorAll('section .content');
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

function scrollApear() {  
    contents.forEach(function (content) {
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight /2;

        if (contentPosition < screenPosition) {
            content.classList.add('content-appear');
        }
    })


}
window.addEventListener('scroll',scrollApear);

window.addEventListener('load',function () {
    contents[0].classList.add('content-appear');
})

window.addEventListener('mousemove',(e)=>{
    const img = document.querySelector('img');
    img.style.transform = `translateY(${e.clientY/120}px) translateX(${e.clientX/400}px)`;
})