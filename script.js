let navbar = document.querySelector('.header .flex .navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    navbar.classList.remove('active')
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength)
    }
})

// dropdown 

let dropdown_items = document.querySelectorAll(".job-filter form .dropdown-container .dropdown .lists .items");

dropdown_items.forEach(items => {
    items.onclick = () => {
        item_parent = items.parentElement.parentElement;
        let output = item_parent.querySelector('.output');
        output.value = items.innerText
    }
})