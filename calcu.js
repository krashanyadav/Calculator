let inp = document.querySelector("#input");
let btns = document.querySelectorAll("button")
let string ="";
let arr = Array.from(btns);
arr.forEach(btns =>{
    btns.addEventListener('click',(e)=>{
         if(e.target.innerHTML == "="){
            string = eval(string);
            inp.value=string;
         }

         else if(e.target.innerHTML=="AC"){
            string ="";
            inp.value=string;
         }

         else if(e.target.innerHTML=="DE"){
            string =string.substring(0,string.length-1);
            inp.value=string;
         }

         else{
            string+=e.target.innerHTML;
            inp.value=string;
         }

    })    

   

    
})