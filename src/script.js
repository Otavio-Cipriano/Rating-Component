var currentRate;

const ratesEl = document.querySelectorAll("span[class='rate']")
const submitBtn = document.querySelector("button")
const cardsEl = document.getElementsByClassName("card")
const selectedEl = document.querySelector(".selected")
const thankCardEl = cardsEl[1]
const normalCardEl = cardsEl[0]

console.log(selectedEl)

ratesEl.forEach(rateEl =>{

    rateEl.addEventListener("click", ()=>{
        setCurrentRate(rateEl.innerHTML, rateEl)
        console.log(currentRate)
    }, false)

})

submitBtn.addEventListener('click', ()=>{submitFeedback()}, false)

const setCurrentRate = (value, el) =>{
    if(!currentRate){
        currentRate = value;
        el.classList.add('active')
        return
    }

    ratesEl[currentRate - 1].classList.remove('active')
    currentRate = value
    el.classList.add('active')
}

const submitFeedback = () =>{
    if(currentRate){
        normalCardEl.classList.add("hide")
        selectedEl.innerHTML = `You selected ${currentRate} out of 5`
        thankCardEl.classList.remove("hide")
    }
}