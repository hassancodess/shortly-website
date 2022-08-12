// Mobile Menu
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

// Form
const errMsg = document.getElementById('err-msg')
const linkForm = document.getElementById('link-form')
const linkInput = document.getElementById('link-input')

linkForm.addEventListener('submit', formSubmit)
menuBtn.addEventListener('click', navToggle)

// on Menu Click
function navToggle() {
  console.log(123)
  console.log(menu)
  console.log(menuBtn)
  menuBtn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}

// Form Submit
function formSubmit(e) {
  e.preventDefault()

  if (linkInput.value == '') {
    errMsg.innerText = 'Please enter something'
    linkInput.classList.add('border-red-500')
  }
}
