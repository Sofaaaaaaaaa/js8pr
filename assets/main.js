"use strict"

//Задание 1
let btnOne = document.getElementById('btnOne');
btnOne.addEventListener('click', function () {
    btnOne.style.background = '#f3d5df';
})


let btnTwo = document.getElementById('btnTwo');
btnTwo.addEventListener('mouseenter', function () {
    btnTwo.style.background = '#f3d5df';
})

btnTwo.addEventListener('mouseleave', function () {
    btnTwo.style.background = 'transparent';
})


let btnTree = document.getElementById('btnTree');
btnTree.addEventListener('mouseleave', function () {
    btnTree.style.background = '#f3d5df';
})

btnTree.addEventListener('mouseenter', function () {
    btnTree.style.background = 'transparent';
})
