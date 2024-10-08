// JavaScript

const btnA = document.querySelector('#btn-a');
const btnB = document.querySelector('#btn-b');
const btnC = document.querySelector('#btn-c');
const btnD = document.querySelector('#btn-d');
const btnR = document.querySelector('#btn-r');

const themes = ['color-a', 'color-b', 'color-c', 'color-d'];
let currentThemeIndex = 0;

window.addEventListener('load', () => {
    setInterval(() => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const themeColors = {
            'color-a': 'orange',
            'color-b': 'green',
            'color-c': 'navy',
            'color-d': 'red'
        };

        btnR.style.backgroundColor = themeColors[themes[currentThemeIndex]];
    }, 500);
});

btnA.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme','color-a');
});

btnB.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme','color-b');
});

btnC.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme','color-c');
});

btnD.addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme','color-d');
});

btnR.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.documentElement.setAttribute('data-theme', themes[currentThemeIndex]);
});
