const url = "https://randomfox.ca/floof/";

let Foxebtn = document.querySelector("#fox-btn");
Foxebtn.addEventListener("click", getfox);

async function getfox(){
    let data = await fetch(url).then((response)=>response.json());
    try{
        let inside = document.querySelector(".inside");
        let time = 5;

        setTimeout(()=>{
            inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
            setTimeout(()=>{
                inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
                setTimeout(()=>{
                    inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
                    setTimeout(()=>{
                        inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
                        setTimeout(()=>{
                            inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
                            setTimeout(()=>{
                                inside.innerHTML = `<h3 class="mt-5">Image of the fox will be displayed in ${time--}</h3>`;
                                setTimeout(()=>{
                                    inside.innerHTML = `<img class="mt-5" src="${data.image}" style="width:500px; height:500px"></img>`;
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
        
    }catch(error){
        console.log(error);
    }
}

let resetbtn = document.querySelector("#fox-btn2");
resetbtn.addEventListener("click", reset);

async function reset(){
    try{
        let inside = document.querySelector(".inside");
        inside.innerHTML = "";
    }catch(error){
        console.log(error);
    }
}
