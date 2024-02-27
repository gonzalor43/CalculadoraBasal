const calcular = document.getElementById('calcular');
const error = document.getElementById('error');
const flu = document.getElementById('flu');
const man = document.getElementById('man');
const m2m = document.getElementById('m2m');
calcular.addEventListener('click', () => {
    let peso = document.getElementById('peso').value;
    let resultado;
    if (peso > 0){
        if (peso <= 30){
            resultado = calculo1(peso);
        } else{
            resultado = calculo2(peso);
        }
        mant = resultado / 24;
        aux = mant * 1.5;
        console.log(resultado, mant, m2m);
        error.style.display = 'none';
        flu.innerHTML =  ' cc: ' + resultado;
        man.innerHTML = ' cc/hr: '+ Math.round(mant);
        m2m.innerHTML = 'm+m/2: '+ Math.round(aux);
        flu.style.display = 'block';
        man.style.display = 'block';
        m2m.style.display = 'block';
    } else{
        error.style.display = 'block'
        flu.style.display = 'none';
        man.style.display = 'none';
        m2m.style.display = 'none';
    }

})

function calculo1 (peso) {
    let vol_d;
    if (peso <= 10){
        vol_d = peso * 100;
    } else if(peso <= 20 && peso > 10){
        vol_d = 10 * 100 + (peso-10)*50;
    } else {
        vol_d = 10*100+10*50+(peso-20)*20;
    }
    return vol_d;
}

function calculo2(peso) {
    let sup_c;
    let vol_d;
    sup_c = ((peso*4)+7)/(peso+90);
    vol_d = sup_c * 2000;
    return vol_d;
}