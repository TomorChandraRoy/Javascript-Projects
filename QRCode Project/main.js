const qrInput = document.getElementById("qr-input");
const qrImage = document.getElementById("qr-img");
const qrButton = document.getElementById("qr-button");
// console.log(qrInput, qrImage, qrButton);

qrButton.addEventListener("click", () => {
    const inputValue = qrInput.value;
    if(!inputValue) {
        alert("Input is empty");
        return;
    }
    else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImage.alt=`QR Code for ${inputValue}`;
    }
});
