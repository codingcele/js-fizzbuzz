
const contenitore = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
    if (i%3 == 0 && i%5 == 0) {
        const element = `<div class="box box35">fizzbuzz</div>`;
        contenitore.innerHTML += element;
    }
    else {
        if (i%3 == 0) {
            const element = `<div class="box box3">fizz</div>`;
            contenitore.innerHTML += element;
        }
        else if (i%5 == 0) {
            const element = `<div class="box box5">fizz</div>`;
            contenitore.innerHTML += element;
        }
        else {
            const element = `<div class="box">${i}</div>`;
            contenitore.innerHTML += element;
        }
    }
}