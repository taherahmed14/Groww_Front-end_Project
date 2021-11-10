let prin = document.getElementById('pr');
let inte = document.getElementById('in');
let time = document.getElementById('ti');

prin.addEventListener('input', () => calculate(prin, inte, time));
inte.addEventListener('input', () => calculate(prin, inte, time));
time.addEventListener('input', () => calculate(prin, inte, time));

function calculate(prin, inte, time) {
    let p = prin.value;
    let i = inte.value;
    let t = time.value;

    document.getElementById('prV').innerHTML = p;
    document.getElementById('inV').innerHTML = i;
    document.getElementById('tiV').innerHTML = t;
    //console.log(p, i, t);

    //console.log((p * i * t) / 100);

    document.getElementById('amount').innerHTML = (p * i * t) / 100;

}