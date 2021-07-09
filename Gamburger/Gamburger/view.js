'use scrict';

let $size = document.querySelectorAll('.size')
let $staff = document.querySelectorAll('.staff')
let $submit = document.querySelector('.submit')
let $summ = document.querySelector('.summ')
let $clear = document.querySelector('.clear')

let choice = [];

$size.forEach( item => {
    item.addEventListener('click',(event) => {
        choice.push(String(event.target.getAttribute('data-size')))
        event.target.style.background = 'green'
        console.log(choice)
    })
})

$staff.forEach( item => {
    item.addEventListener('click',(event) => {
        choice.push(String(event.target.getAttribute('data-stuff')))
        event.target.style.background = 'green'
        console.log(choice)
    })
})

$clear.addEventListener('click',() => {
    $summ.textContent = '';
})

$submit.addEventListener('click',() => {
    const firstGumb = new Gamburger(choice[0],choice[1]);
    firstGumb.render($summ);
    console.log(firstGumb.getSize());
    console.log(firstGumb.getStuffing());
    console.log(firstGumb.calculatePrice());
    $size.forEach(item => item.style.background = 'white') ;
    $staff.forEach(item => item.style.background = 'white') ;
    choice = [];
});



const twoGumb = new Gamburger('small','salad')
//console.log(twoGumb.getSize())
//console.log(twoGumb.getStuffing())
const threeGumb = new Gamburger('big','potate') 