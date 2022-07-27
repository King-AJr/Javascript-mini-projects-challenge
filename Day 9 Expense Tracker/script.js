const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('moneyPlus')
const moneyMinus = document.getElementById('moneyMinus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

const Tx = [
    {id:1, text: 'Books', amount: -250},
    {id:2, text: 'salary', amount: 4000},
    {id:3, text: 'Fees', amount: -2500}
]

const init = () => {
    list.innerHTML='';
    for(let i=0;i<=Tx.length;i++){
        const sign = Tx[i].amount < 0 ? '-' : '+';
    const item = document.createElement('li')
   
    item.classList.add(Tx[i].amount < 0 ? 'minus' : 'plus');

    item.innerHTML=`${Tx[i].text} <span>${sign}${Math.abs(Tx[i].amount)}
    </span><button class="delete-btn>x</button>`
    list.appendChild(item);
    }
    const amount = Tx.map((trx) => trx.amount);

    const total = amount.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const income = amount.filter(item > 0)
    .reduce((acc,item)=> (acc+=item),0).toFixed(2);
    console.log(moneyPlus.innerText);
}

init();