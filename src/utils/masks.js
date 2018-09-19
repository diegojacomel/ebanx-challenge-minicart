const normalizeCep = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    if (onlyNums.length <= 5) {    
        return onlyNums
    }

    return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`
}

const normalizeCpf = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    if (onlyNums.length <= 3) {    
        return onlyNums
    }
    if (onlyNums.length <= 6) {  
        return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}`
    } 
    if (onlyNums.length <= 9) {
        return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}`
    }

    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(6, 9)}-${onlyNums.slice(9, 11)}`
}

const normalizeText = value => {
    if (!value) {
        return value
    }

    const onlyText = value.replace(/[^A-Za-zç ]/g, '')

    return onlyText
}

const cpfValidation = cpf => {
    cpf = cpf.replace(/\./g, '').replace('-', '');
    var numbers, digits, sum, i, result, digits_equal;
    digits_equal = 1;

    for (i = 0; i < cpf.length - 1; i++) {
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digits_equal = 0;
            break;
        }
    }

    if (!digits_equal) {
        numbers = cpf.substring(0, 9);
        digits = cpf.substring(9);
        sum = 0;

        for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
        }

        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(0)) {
            return false;
        }

        numbers = cpf.substring(0, 10);
        sum = 0;
        for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
        }

        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != digits.charAt(1)) {
            return false;
        }

        return true;
    } else {
        return false;
    }
}

const alphaNumeric = value => {
    if (!value) {
        return value
    }

    const onlyAlphaNumeric = value.replace(/[^a-z0-9A-Z]/g,'');
    return onlyAlphaNumeric;
}

const cardMaks = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    if (onlyNums.length <= 4) {    
        return onlyNums
    }

    if (onlyNums.length <= 8) {  
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)}`
    }

    if (onlyNums.length <= 12) {  
        return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)}`
    }
    
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)} ${onlyNums.slice(12, 16)}`
}

const duoMask = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    if (onlyNums.length <= 2) {    
        return onlyNums
    }

    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`
}

export {
    normalizeCep, 
    normalizeCpf, 
    cpfValidation, 
    alphaNumeric,
    normalizeText,
    cardMaks,
    duoMask
}