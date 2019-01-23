
export {Rolldice,move};

let player1=1;

function Rolldice(){
   let x = Math.floor(Math.random() * 6) + 1;
   return x;
}

function move(){
    document.getElementById("roll").addEventListener("click",function(){
        let val3="";
        let element = document.getElementById("coin");
        element.parentNode.removeChild(element);
        let val1=Rolldice();
        player1+=val1;

        document.getElementById("output").innerHTML=val1;

        document.getElementById(player1+val3).innerHTML+= "<lable id=coin>?</lable>";
        console.log(val1);
    });
}