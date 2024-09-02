function addVacationRequestCard(name, submittionDate, duration, salary){
    let el = document.createElement("label");
    classes = "card w-10/12 max-w-[320px] h-fit bg-white p-4 flex flex-col items-center rounded-sm border border-gray-400".split(" ");
    classes.forEach(c=>el.classList.add(c))
    el.innerHTML = 
    `
    <input type="checkbox" class="mr-auto" name="card-checkbox" onclick="trackAllSelector()"/>
    <img class="rounded-full aspect-square" src="image.png" width="128" height="128" alt="" srcset="">
    <p class="name text-black mt-2">${name}</p>
    <div class="w-full">
    <p class="text-[12px] text-gray-400 mt-2">Submitted on:</p>
    <p name="submitDate" class="submitDate text-sm text-black">${submittionDate}</p>
    
    <p class="text-[12px] text-gray-400 mt-2">Duration:</p>
    <p name="duration" class="duration text-sm text-black">${duration}</p>
    
    <p class="text-[12px] text-gray-400 mt-2">Salary:</p>
    <p name="salary" class="salary text-sm text-black mb-2">${salary}</p>
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

function trackAllSelector(){
    document.getElementById("selectAll").checked = false;
}

function changeSelectionAllCards(){
    let cards = document.getElementById("vacation-request-card-container").querySelectorAll(".card");
    
    if (document.getElementById("selectAll").checked)
        cards.forEach(e=>{
            e.querySelector("input[type=\"checkbox\"]").checked = true;
        });
    else
        cards.forEach(e=>{
            e.querySelector("input[type=\"checkbox\"]").checked = false;
        });
}

showMoreVacationCards();