const errMsg = document.getElementById('err-msg')
const linkForm = document.getElementById('link-form')
const linkInput = document.getElementById('link-input')

linkForm.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()

  if (linkInput.value == '') {
    errMsg.innerText = 'Please enter something'
    linkInput.classList.add('border-red-500')
  }
}
