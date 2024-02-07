let input = '';
let encrypt = '';

document.querySelector('#encrypt').onclick = function () {
    input = document.querySelector('#encryptText');
    encrypt = document.querySelector('#text').value;

    if (verifiedInput(encrypt)) {
        dynamicContent();
        encryptingMessage(input, encrypt);
    }
};

document.querySelector('#decrypt').onclick = function () {
    input = document.querySelector('#encryptText');
    encrypt = document.querySelector('#text').value;

    if (verifiedInput(encrypt)) {
        dynamicContent();
        decryptingMessage(input, encrypt);
    }
};

document.querySelector('#clipboard').onclick = function () {
    navigator.clipboard.writeText(input.innerHTML).then(
        () => {
            alert('Texto "' + input.innerHTML + ' " copiado en el clipboard');
        },
        () => {
            alert('Algo ha fallado');
        }
    );
};

function encryptingMessage(input, encrypt) {
    let inputEncrypting = '';

    inputEncrypting = encrypt.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    input.innerHTML = inputEncrypting;
}

function decryptingMessage(input, encrypt) { 
    let inputEncrypting = '';

    inputEncrypting = encrypt.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    input.innerHTML = inputEncrypting;
}

function dynamicContent() {
    document.querySelector('.mediaContent').style.display = 'none';
    document.querySelector('.mediaContent2').style.removeProperty('display');
}

function verifiedInput(encrypt) {
    const regex = /[A-ZÁÉÍÓÚáéíóú123456789ñÑ!@#$%^&*()\-=+_{}\[\]|;:'",.<>\/?\\]/;

    if (!regex.test(encrypt) && !(encrypt == '')) {
        return true;
    } else {
        alert('No cumple las condiciones');
        return false;
    }
}
