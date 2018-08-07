const resultText = document.querySelector('.result-pane');
const buttonsWrapper = document.querySelector('.section-buttons')

buttonsWrapper.addEventListener('click', (e) => {
    resultText.innerText = e.target.innerText;
})

