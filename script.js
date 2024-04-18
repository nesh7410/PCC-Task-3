const box = document.querySelector('.container');
const submitbtn = document.querySelector('.submit');
const rate = document.querySelectorAll('.buttons');

const box2 = document.querySelector('.container2');
const ratinginfo = document.querySelector('.rating-info')

var rating = null;

function makeClicked(event) {
    rating=event.target.getAttribute("value");
}

rate.forEach(rateEle => {
    rateEle.addEventListener("click", makeClicked);
});



submitbtn.addEventListener("click",()=>{
    if(rating!=null){
        box.style.display="none";
        box2.style.display="flex";
        ratinginfo.innerText = "You selected " + rating + " out of 5";
    }
});