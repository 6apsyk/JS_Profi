'use strict';

const $button = document.querySelector('.button')

const arr = [
    {
        regexp : /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/,
        $name : document.querySelector('.name')
    },
    {
        regexp: /^\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/,
        $name : document.querySelector('.tel')
    },
    {
        regexp: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,
        $name : document.querySelector('.email')
    },
]
$button.addEventListener('click',()=>{
    arr.forEach(item => {
        if(item.regexp.test(item.$name.value)){
            item.$name.classList.remove('colorRed')
            item.$name.classList.add('colorGreen')
        }else{
            item.$name.classList.remove('colorGreen')
            item.$name.classList.add('colorRed')
        }
    })
})


$button.addEventListener('click',()=>{
    let count = 0;
    arr.forEach(item => {
        if(item.$name.classList.contains('colorGreen')){
            count++;
            if (count === arr.length){
                document.querySelector('.msg').textContent = 'Данные введены корректно!'    
            }else{
                document.querySelector('.msg').textContent = 'Данные введены не корректно!'
            }
        }
    })
})
