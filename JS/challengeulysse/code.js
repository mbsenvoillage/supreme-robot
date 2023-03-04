function name (){
    let name1 =prompt("Quel est ton nom")
    alert(name1+' '+'est ton nom')

}
name()

function math(){

    const v1=Math.random()
    let a = p=prompt("4+4");

    if (a=4) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est "+4); 
    }

    let b = prompt ("Q2 : 3 + 3 = ?");
    if (b==6) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est 6!!");
    }

    let c = prompt ("Q2 : 4 + 3 = ?");
    if (b==7) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est 7!!");
    }

    let d = prompt ("Q2 : 0 + 3 = ?");
    if (b==3) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est 3!!");
    }

    let results =4;

  if(a!=4){
results=results-1 


  }
  if(b!=6){
    results=results-1

  };
  if(c!=7)
{
results=results-1

}
if (d!=3){
results=results-1

}
alert(" ta note est de " + results+ "/4")
function convertisseur (){
    let value=prompt("Entrez la note à convertir")
    if(value>=18){
        alert("A+")
    }
    if(value>=15&&value==17){
        alert("A")
    }
    if(value>=13&&value<=14){
        alert("B")
    }
    
}
if (value>=10&&value<=12){
    alert("12")
}
if(value>=8&&value<=9){
    alert("F")
}
if (value==0&&value<5){
    alert("G")
}
};

