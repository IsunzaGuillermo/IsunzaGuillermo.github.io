const screens = {
    input: document.querySelector('#input'),
    output: document.querySelector('#output')
}

const user_inputs = {
    encrypt: document.querySelector('#encrypt'),
    decrypt: document.querySelector('#decrypt'),
    copy: document.querySelector('#copy')
}

screens.input.focus();

function encrypt() {
    let message = [];
    let received_message = screens.input.value;
    for (let char of received_message) {
        if (char == 'a') {
            char = 'ai';
        }
        if (char == 'e') {
            char = 'enter';
        }
        if (char == 'i') {
            char = 'imes';
        }
        if (char == 'o') {
            char = 'ober';
        }
        if (char == 'u') {
            char = 'ufat';
        }
        message.push(char);
    }
    screens.output.innerHTML = message.join('');
    screens.input.value = '';
}

function decrypt() {
    let received_message = screens.input.value;
    let decrypted = received_message.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    screens.output.innerHTML = decrypted;
    screens.input.value = '';
}

function copy() {
    message = screens.output;
    message.select();
    message.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(message.value);
}

user_inputs.encrypt.addEventListener('click', encrypt);
user_inputs.decrypt.addEventListener('click', decrypt);
user_inputs.copy.addEventListener('click', copy);