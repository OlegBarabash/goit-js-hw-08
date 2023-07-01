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

isContinue(msgObj)

function isContinue({email,message}) {
    if (!localStorage.length) {
        return
    }
    const storage = JSON.parse(localStorage.getItem(KEY)) 
    email = storage.email
    message = storage.message

    emailForm.value = email
    messageForm.value = message
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
    localStorage.removeItem(KEY)
}