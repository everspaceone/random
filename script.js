function random(min,max) {
    return Math.floor(Math.random()*(max+1-min)+min)
}
let misollar = +prompt('nechta misol yechishni xohlaysiz ?')
for (let i = 1; i <= misollar; i++) {
    let son1 = random(100,500)
    let son2 = random(1,100)
    let symvol = random(1,4)
    if (symvol == 1) {
        let misol = prompt(`${i} - misolni yeching ${son1} + ${son2} = ?`)

        if (misol == (son1+son2)) {
            console.log(`${i} - misolning javobi ${son1} + ${son2} = ${misol}, sizning javob to'g'ri`);
        } else {
            console.log(`${i} - misolning javobi ${son1} + ${son2} = ${son1+son2}, sizning javob noto'g'ri`);
        }
    }
    if (symvol == 2) {
        let misol = prompt(`${i} - misolni yeching ${son1} - ${son2} = ?`)

        if (misol == (son1-son2)) {
            console.log(`${i} - misolning javobi ${son1} - ${son2} = ${misol}, sizning javob to'g'ri`);
        } else {
            console.log(`${i} - misolning javobi ${son1} - ${son2} = ${son1-son2}, sizning javob noto'g'ri`);
        }
    }
    if (symvol == 3) {
        let misol = prompt(`${i} - misolni yeching ${son1} * ${son2} = ?`)

        if (misol == (son1*son2)) {
            console.log(`${i} - misolning javobi ${son1} * ${son2} = ${misol}, sizning javob to'g'ri`);
        } else {
            console.log(`${i} - misolning javobi ${son1} * ${son2} = ${son1*son2}, sizning javob noto'g'ri`);
        }
    }
    if (symvol == 4) {
        let misol = prompt(`${i} - misolni yeching ${son1} / ${son2} = ?`)

        if (misol == (son1/son2)) {
            console.log(`${i} - misolning javobi ${son1} / ${son2} = ${misol}, sizning javob to'g'ri`);
        } else {
            console.log(`${i} - misolning javobi ${son1} / ${son2} = ${son1/son2}, sizning javob noto'g'ri`);
        }
    }


    

   
}