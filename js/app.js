const nairaInput = document.querySelector('#nairaInput');
const dolEl = document.getElementById('dolel');
const poundEl = document.getElementById('ponel');
const euroEl = document.getElementById('euel');
const cadEl = document.getElementById('cael');
const kroEl = document.getElementById('kroel');
const outputs = document.querySelectorAll('.output')

outputs.forEach(output => output.style.visibility = 'hdden')

nairaInput.addEventListener('input', convertNaira)

function convertNaira() {
    outputs.forEach(output => output.style.visibility = 'visible')
    dolEl.textContent = nairaInput.value / 409.84;
    poundEl.textContent = nairaInput.value / 564.5;
    euroEl.textContent = nairaInput.value / 475.45;
    cadEl.textContent = nairaInput.value / 331.05;
    kroEl.textContent = nairaInput.value  / 63.96;
}

