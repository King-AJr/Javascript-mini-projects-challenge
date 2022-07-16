const main = document.getElementById('main')
const addUser = document.getElementById('addUser')
const double = document.getElementById('double')
const sort = document.getElementById('sort')
const calcWealth = document.getElementById('calcWealth')
const showMillionaires = document.getElementById('showMillionaires')

let data = []

const getUsers = async() => {
    const res = await fetch('https://randomuser.me/api')
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser);
}

getUsers()
getUsers()
getUsers()

const addData = (obj) => {
    data.push(obj);
    updateDOM();
}

const updateDOM = (x = data) => {
   main.innerHTML='<h2><strong>Person\'s</strong> Wealth</h2>';
   x.forEach((item) => {
    const elem = document.createElement('div')
    elem.classList.add('person');
    elem.innerHTML = `<strong>${item.name}</strong>
    ${formatMoney(item.money)}`
    main.appendChild(elem)
    console.log('updated')
   })
}

const doubleMoney = () => {
data = data.map((user) => {
    return {...user, money: user.money * 2}
})
updateDOM()
}

const sortByRiches = () => {
    data = data.sort((a,b)=>{
        return b.money - a.money;
    })
    updateDOM()
}

const onlyMillionaires = () => {
    
    data = data.filter(user => user.money > 1000000);
    updateDOM();
}

const totalMoney = () => {
    const total = data.reduce((acc, user) => {
        return acc += user.money
    }, 0)

    const totalElem = document.createElement('div')
    totalElem.innerHTML = `<h3> Total wealth :
    <strong> ${formatMoney(total)} </strong> </h3>`
    main.appendChild(totalElem)
}


function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
addUser.addEventListener('click', getUsers)
double.addEventListener('click', doubleMoney)
sort.addEventListener('click', sortByRiches)
showMillionaires.addEventListener('click', onlyMillionaires)
calcWealth.addEventListener('click', totalMoney)