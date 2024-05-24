let date = document.getElementById('date');
date.max = new Date().toISOString().split('T')[0];

function agecalc() {
    let birthdate = new Date(date.value);
    let today = new Date();

    if (isNaN(birthdate.getTime())) {
        document.getElementById('output').innerText = 'Please select a valid date';
        return;
    }

    let D1 = birthdate.getDate();
    let M1 = birthdate.getMonth() + 1;
    let Y1 = birthdate.getFullYear();

    let D2 = today.getDate();
    let M2 = today.getMonth() + 1;
    let Y2 = today.getFullYear();

    let D3, M3, Y3;

    Y3 = Y2 - Y1;

    if (M2 >= M1) {
        M3 = M2 - M1;
    } else {
        Y3--;
        M3 = 12 + M2 - M1;
    }

    if (D2 >= D1) {
        D3 = D2 - D1;
    } else {
        M3--;
        D3 = getMonthDays(Y1, M1) + D2 - D1;
    }

    if (M3 < 0) {
        M3 = 11;
        Y3--;
    }

    document.getElementById('output').innerHTML = `You are <span>${Y3}</span> years, <span>${M3}</span> months, and <span>${D3}</span> days old.`;
}

function getMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
}
