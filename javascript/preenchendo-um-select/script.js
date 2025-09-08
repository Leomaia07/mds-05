const container = document.getElementById('app');

// criar label

const label = document.createElement('label');
label.htmlFor = 'frutas-select';
label.textContent = 'Escolha uma fruta: ';
label.style.fontWeight = 'bold';
label.classList.add('form-label');
label.classList.add('m-1');


// // criar select

const select = document.createElement('select');
select.id = 'frutas-select';
select.className = 'form-select';


const fruits = ['maçã','Banana', 'Laranja', 'Uva', 'Abacaxi'];

const criarH1 = document.createElement('h1');
criarH1.innerText('Texto H1')

fruits.forEach((fruit) => {
    const option = document.createElement('option');
    option.value = fruit.toLowerCase();
    option.textContent = fruit;
    select.appendChild(option);
});


container.appendChild(label);
label.appendChild(criarH1)

container.appendChild(select);


