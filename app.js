
const refs =[
{value: document.querySelector(".js-feedback-name")},
{value: document.querySelector(".js-feedback-email")},
{value: document.querySelector(".js-feedback-comment")}, 
]
const formRefs = document.querySelector(".js-feedback-form");

const inputArray =[];

refs.forEach( ({value}) =>{
    value.addEventListener('input', getInputValue);
    inputArray.push(value)
});
formRefs.addEventListener("submit", onFormSubmit);

inputArray.forEach(el => getFromLocalStorage(el.name, el));

function onFormSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;

inputArray.forEach((el) => {
    if (localStorage.getItem(el.name)) {
        localStorage.removeItem(el.name);}       
})
form.reset();
}

function getInputValue(evt) {
    let inputText = evt.target.value;
    saveToLS(evt.target.name, inputText);
}

function saveToLS(key, itemValue) {
    localStorage.setItem(key, itemValue);
}

function getFromLocalStorage(key, obj) {
    const keyFromLS = localStorage.getItem(key);
    if (key) {
    obj.value = keyFromLS;
    }
}

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     // console.log('submit');
//     // console.log(form.elements);
//     // console.log(form.elements.message.value);
//     const form = evt.target;
//     const getLocal = localStorage.getItem("message");

//     if (getLocal) {
//         localStorage.removeItem("message");
//         form.reset();
//     }
// }

// function onTextareaInput(evt) {
//     console.log(evt.target.value);
//     const textValue = evt.target.value;
//     localStorage.setItem("message", textValue);
//     // console.log(evt.target.name);
//     // console.log(evt.target.placeholder);
//     // console.log(evt.target.cols);
// }


// function getFromLocalStorage() {
//     const message = localStorage.getItem("message");
//     if (message) {
//         textAreaRef.textContent = message;
//     }
// }


// textAreaRef.addEventListener("input", onTextareaInput);