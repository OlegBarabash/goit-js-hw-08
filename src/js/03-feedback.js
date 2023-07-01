import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const emailForm = document.querySelector('INPUT')
const messageForm = document.querySelector('TEXTAREA')
const KEY = "feedback-form-state"
const msgObj = {
    email: '',
    message: '',
}

form.addEventListener("input", throttle(handlerFormInput, 500))
form.addEventListener("submit", handlerFormSubmit)

isContinue()
console.log(msgObj);
function isContinue() {
    const storage = JSON.parse(localStorage.getItem(KEY))
    if (!storage) {
        return
    } 
    msgObj.email = storage.email
    msgObj.message = storage.message

    emailForm.value = msgObj.email
    messageForm.value = msgObj.message
}

function handlerFormInput(eve) {
    const msg = eve.target.value
    if (eve.target.name === 'email') {
        msgObj.email = msg
    }else if (eve.target.name === 'message') {
        msgObj.message = msg
    }
    localStorage.setItem(KEY, JSON.stringify(msgObj))
}

function handlerFormSubmit(eve) {
    eve.preventDefault()
    console.log(msgObj);
    eve.currentTarget.reset()
    msgObj.email = ''
    msgObj.message = ''
    localStorage.removeItem(KEY)
}