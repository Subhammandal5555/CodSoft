var tabLinks = document.getElementsByClassName('tab-links');
var tabContents = document.getElementsByClassName('tab-contents');

function openTab(tabName) {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-300px";
}
// For Google form Summit
const scriptURL = 'https://script.google.com/macros/s/AKfycbysVAeCZTgW3028XThrB5iLr98EDoYqkblx4oykuOaK64fSh01Q-CQbFc1ymLIC_5_YTw/exec'
const form = document.forms['submit-to-google-sheet']
const confirm = document.getElementById("confirm")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            confirm.innerHTML = "Message Sent Successfully"
            setTimeout(function () {
                confirm.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
