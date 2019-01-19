
export {Rolldice,move};


function Rolldice(){
   let x = Math.floor(Math.random() * 6) + 1;
   return x;
}

function move(){
    document.getElementById("3").innerHTML += "<lable id=coin>?</lable>";
}