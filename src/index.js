function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  n = n % slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";  
  dots[n].className += " active";
}

function alternateSlides(slideDuration=10){
  let slideIndex = 0;
  showSlides(slideIndex);
  setInterval(() => {
    showSlides(++slideIndex);
  }, slideDuration * 1000);
}

function addVacationRequestCard(name, submittionDate, duration, salary){
    let el = document.createElement("div");
    classes = "card w-10/12 max-w-[320px] h-fit bg-white p-4 flex flex-col items-center rounded-sm".split(" ");
    classes.forEach(c=>el.classList.add(c))
    el.innerHTML = 
    `
      <img class="rounded-full aspect-square" src="image.png" width="128" height="128" alt="" srcset="">
      <p class="name text-black mt-2">Ahmad Attar</p>
      <div class="w-full">
        <p class="text-[12px] text-gray-400 mt-2">Submitted on:</p>
        <p name="submitDate" class="submitDate text-sm text-black">1/3/2040</p>
        
        <p class="text-[12px] text-gray-400 mt-2">Duration:</p>
        <p name="duration" class="duration text-sm text-black">2 Week (1/4/2023 - 14/4/2023)</p>
        
        <p class="text-[12px] text-gray-400 mt-2">Salary:</p>
        <p name="salary" class="salary text-sm text-black mb-2">1,000 AED</p>
      </div>
      <div class="flex flex-wrap justify-center gap-2 w-full">
          <button class="w-32 px-10 py-1 text-sm h-fit text-green-500 border-solid border border-green-500 bg-white transition rounded-sm">Decline</button>
          <button class="w-32 px-10 py-1 text-sm h-fit text-white border-solid border bg-green-500 transition rounded-sm">Approve</button>
      </div>
    `
    let newEl = el.cloneNode(true);
    newEl.querySelector(".name").innerText = name;
    newEl.querySelector(".submitDate").innerText = submittionDate;
    newEl.querySelector(".duration").innerText = duration;
    newEl.querySelector(".salary").innerText = salary;
    document.getElementById("vacation-request-card-container").append(newEl);
    return newEl
}

function searchVacationRequests(name=null){

    let wrapper = document.getElementById("vacation-request-card-container");
    if (!name){
        name = wrapper.parentElement.querySelector("input").value;
    }
    
    let cards = wrapper.querySelectorAll(".card");
    cards.forEach(card => {
        if(card.querySelector(".name").innerText.includes(name))
            card.style.display = "flex";
        else
            card.style.display = "none";
        console.log(card.style.display)
    });
}

function strGen(len){
    let chars = "qwertyuiopasdfghjklzxcvbnm";
    let str = "";
    for (let i=0;i<len;i++)
        str += chars[Math.floor(Math.random() * chars.length)]

    return str
}

function showMoreVacationCards(){
    for(let i=0;i<12;i++)
        addVacationRequestCard(strGen(12), "1/12/2022", "3 weeks", "10,000 AED");
}

alternateSlides(10);
  
for(let i=0;i<4;i++)
  addVacationRequestCard(strGen(12), "1/12/2022", "3 weeks", "10,000 AED");