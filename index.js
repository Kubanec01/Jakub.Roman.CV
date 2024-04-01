const smallPhoto = document.getElementById('small-photo');
const overLay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) {
    smallPhoto.addEventListener('click', () => {
        overLay.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        overLay.style.display = 'none';
    });
}

window.addEventListener('beforeunload', function (e) {
    e.preventDefault(); 
    e.returnValue = ''; 
    var confirmationMessage = 'Naozaj chcete opustit tuto stránku?';
    (e || window.e).returnValue = confirmationMessage;
    return confirmationMessage; 
});