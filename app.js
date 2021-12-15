

const btnChange = document.querySelector('.change-box-button');
const inputColor = document.querySelector('.color');


const changeBackground = function() {
    let x = inputColor.value
    document.body.style.backgroundColor = `${x}`
    console.log(x)
};


btnChange.addEventListener('click', changeBackground);

