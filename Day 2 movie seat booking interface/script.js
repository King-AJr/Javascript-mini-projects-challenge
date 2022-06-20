const showcase = document.getElementById('showcase');
const seats = document.querySelector('row.seat:not(.occupied)');
const container = document.querySelector('.container');
const movie = document.getElementById('movie');
const count = document.getElementById('count');
const total = document.getElementById('money');



/*populateUI=()=> {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedseats'));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }
}

populateUI();*/
let ticketPrice = +movie.value;


updateSelected=()=> {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
const selectedSeatsCount = selectedSeats.length;
count.innerText = selectedSeatsCount;
money.innerText = selectedSeatsCount * ticketPrice;
let seatsIndex = [...selectedSeats].map(function(seat){
    return seat.getAttribute('name');}
)
seatsIndex.shift();
/*localStorage.setItem('selectedseats', JSON.stringify(seatsIndex));*/

}    
//movie select event
movie.addEventListener('change', e => {
ticketPrice = +e.target.value;
 
  
/*setMovieData=(movieIndex, moviePrice)=>{
    localStorage.setItem('selected movie index', movieIndex);
    localStorage.setItem('selected movie price', moviePrice)
}
setMovieData(e.target.selectedIndex,e.target.value)*/
updateSelected();
})




//Seat click event
container.addEventListener('click', function(e){
if(e.target.classList.contains('seat')
 && !e.target.classList.contains('occupied'))
{
    e.target.classList.toggle('selected');
    updateSelected();
    
}
    
})
