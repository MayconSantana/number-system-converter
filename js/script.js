// Select Elements
const btnConvert = document.querySelectorAll('button');
const divInsertNum = document.querySelector('.insert-num');
const divResultNum = document.querySelector('.result-num');
const input = document.querySelector('.input');
const result = document.querySelector('#result');
const p_type = document.querySelector('#p_type');

// Functions
const switchScreens = () => {
    divInsertNum.classList.toggle('hide');
    divResultNum.classList.toggle('hide');

    if(divResultNum.classList.contains('hide'))
        location.reload()
    
}

const consultRadioValue = () => {
    const resultRadio = document.getElementsByName('opcoes_1');
    
    for (let i = 0; i < resultRadio.length; i++) {
        if (resultRadio[i].checked) {
            return resultRadio[i].value;
        }
    }

    return undefined;
}

const consultRadioValue2 = () => {
    const resultRadio = document.getElementsByName('opcoes_2');
    
    for (let i = 0; i < resultRadio.length; i++) {
        if (resultRadio[i].checked) {
            return resultRadio[i].value;
        }
    }

    return undefined;
}

const decimal_binario = (value) => {
    const binaryNumber = Number(value).toString(2);
    return binaryNumber;
}

const decimal_octal = (value) => {
    const octalNumber = Number(value).toString(8);
    return octalNumber;
}

const decimal_hexadecimal = (value) => {
    const hexNumber = Number(value).toString(16);
    return hexNumber;
}

const binario_decimal = (value) => {
    const decimalNumber = parseInt(Number(value), 2);
    return decimalNumber;
}

const binario_octal = (value) => {
    const decimalNumber = parseInt(Number(value), 2);
    const octalNumber = decimalNumber.toString(8);
    return octalNumber;
} 

const binario_hexadecimal = (value) => {
    const decimalNumber = parseInt(Number(value), 2);
    const hexNumber = decimalNumber.toString(16);
    return hexNumber;
}

const octal_decimal = (value) => {
    const decimalNumber = parseInt(Number(value), 8);
    return decimalNumber;
}

const octal_binario = (value) => {
    const decimalNumber = parseInt(Number(value), 8);
    const binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
}

const octal_hexadecimal = (value) => {
    const decimalNumber = parseInt(Number(value), 8);
    const hexNumber = decimalNumber.toString(16);
    return hexNumber;
}

const hexadecimal_decimal = (value) => {
    const decimalNumber = parseInt(value, 16);
    return decimalNumber;
}

const hexadecimal_binario = (value) => {
    const decimalNumber = parseInt(value, 16);
    const binaryNumber = decimalNumber.toString(2);
    return binaryNumber;
}

const hexadecimal_octal = (value) => {
    const decimalNumber = parseInt(value, 16);
    const octalNumber = decimalNumber.toString(8);
    return octalNumber;
}


const naoPertenceANenhumSistema = (valor) => {
    valor = valor.replace(/\s/g, '');

    // Verifica se o valor não é um número decimal válido
    if (!/^\d+$/.test(valor)) {
        // Verifica se o valor não é um número binário válido
        if (!/^[01]+$/.test(valor)) {
            // Verifica se o valor não é um número octal válido
            if (!/^[0-7]+$/.test(valor)) {
                // Verifica se o valor não é um número hexadecimal válido
                if (!/^[0-9A-Fa-f]+$/.test(valor)) {
                    return true; // O valor não pertence a nenhum sistema conhecido
                }
            }
        }
    }

    return false; // O valor pertence a pelo menos um sistema conhecido
}

// Events
btnConvert.forEach((e) => {
    e.addEventListener('click', () => {
        const radioInsert = consultRadioValue();
        const radioResult = consultRadioValue2();
        const num = document.querySelector('.input').value;

        switch(radioInsert){
            case "decimal":
                switch(radioResult){
                    case "decimal":
                        result.textContent = num;
                        p_type.textContent = `${num} (decimal) para decimal:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "binario":
                        result.textContent = decimal_binario(num);
                        p_type.textContent = `${num} (decimal) para binário:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "octal":
                        result.textContent = decimal_octal(num);
                        p_type.textContent = `${num} (decimal) para octal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "hexadecimal":
                        result.textContent = decimal_hexadecimal(num);
                        p_type.textContent = `${num} (decimal) para hexadecimal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    default:
                        return;
                }
            break;

            case "binario":
                switch(radioResult){
                    case "decimal":
                        result.textContent = binario_decimal(num);
                        p_type.textContent = `${num} (binário) para decimal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "binario":
                        result.textContent = num;
                        p_type.textContent = `${num} (binário) para binário:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "octal":
                        result.textContent = binario_octal(num);
                        p_type.textContent = `${num} (binário) para octal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "hexadecimal":
                        result.textContent = binario_hexadecimal(num);
                        p_type.textContent = `${num} (binário) para hexadecimal:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    default:
                        return;
                }
            break;

            case "octal":
                switch(radioResult){
                    case "decimal":
                        result.textContent = octal_decimal(num);
                        p_type.textContent = `${num} (octal) para decimal:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "binario":
                        result.textContent = octal_binario(num);
                        p_type.textContent = `${num} (octal) para binário:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "octal":
                        result.textContent = num;
                        p_type.textContent = `${num} (octal) para octal:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "hexadecimal":
                        result.textContent = octal_hexadecimal(num);
                        p_type.textContent = `${num} (octal) para hexadecimal:`;

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    default:
                        return;
                }
            break;

            case "hexadecimal":
                switch(radioResult){
                    case "decimal":
                        result.textContent = hexadecimal_decimal(num);
                        p_type.textContent = `${num} (hexadecimal) para decimal:`;
                        
                        console.log(result.textContent)

                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "binario":
                        result.textContent = hexadecimal_binario(num);
                        p_type.textContent = `${num} (hexadnumecimal) para binário:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "octal":
                        result.textContent = hexadecimal_octal(num);
                        p_type.textContent = `${num} (hexadecimal) para octal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    case "hexadecimal":
                        result.textContent = num;
                        p_type.textContent = `${num} (hexadecimal) para hexadecimal:`;
                        
                        if(naoPertenceANenhumSistema(num)){
                            result.innerHTML = `<h2 style="margin:0 auto; width: 80%; font-size: 1.2rem; text-align: center;">"${num}" não está em nenhum dos sistemas: decimal, binário, octal ou hexadecimal, pois não contém apenas números de 0-9 e letras de A-F.<h2>`
                        }
                    break;
        
                    default:
                        return;
                }
            break;

            default:
                return;
        }

        switchScreens();
    })
})