

function calculate(){
    const principle = document.getElementById('principle');
    const rate = document.getElementById('rate');
    const year = document.getElementById('year');
    const total = document.getElementById('total');

    let principleNum = Number(principle.value);
    let rateNum = Number(rate.value / 100);
    let yearNum = Number(year.value);

    if (principleNum<0 || isNaN(principleNum)){
        principleNum=0;
        principle.value=0;
    }

    if (rateNum<0 || isNaN(rateNum)){
        rateNum=0;
        rateNum.value=0;
    }

    if (yearNum<0 || isNaN(yearNum)){
        yearNum=0;
        yearNum.value=0;

    }

    const result = principleNum * Math.pow((1 + rateNum/1 ), 1*yearNum);
    total.textContent=result.toLocaleString(undefined,{ style:'currency',
    currency:'INR'
    });
}

