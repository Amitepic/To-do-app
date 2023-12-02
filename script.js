const text = document.getElementById('input-text')
const add = document.getElementById('ele')


function addTask () {
    if(text.value === ''){
        alert("enter task")
    }else{
        console.log(text.value);
        let li = document.createElement("li");
        li.innerHTML = text.value;
        add.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "❌";
        li.appendChild(span);
        saveData();
        
    }
    text.value = '';
}

add.addEventListener("click", function (e){
   
   if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
    saveData();
   }else if (e.target.tagName === 'SPAN'){    
     e.target.parentElement.remove();
     saveData();
   }
}, false)

// sorting dat in localStorage

function saveData() {
     localStorage.setItem("data", add.innerHTML);
}

function showData(){
    add.innerHTML = localStorage.getItem("data")
}
showData();

// i thing recording is on
// i thing noe is recording ho rahi hai    fainailly we got the recordings
