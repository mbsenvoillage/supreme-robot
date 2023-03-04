function name (){
    let name1 =prompt("Quel est ton nom")
    alert(name1+' '+'est ton nom')

}
name()

function math(){

    const v1=Math.random()
    let v2=Math.random();
    let v3 =Math.random()
    let v4 =Math.random()
    let a = p=prompt( v1+"x10");

    if (a=v1*10) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est "+v1*10); 
    }

    let b = prompt ( v2+"x10");
    if (b==v2*10) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est "+v2*10);
    }

    let c = prompt ( v3+"x10");
    if (b==7) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est "+v3*10);
    }

    let d = prompt ( v4+"x10");
    if (d==v4*10) {
        alert("Bonne réponse!!");
    } else {
        alert("La réponse est " +v4*10);
    }

    let results =4;

  if(a!=v1*10){
results=results-1 


  }
  if(b!=v2*10){
    results=results-1

  };
  if(c!=v3*10)
{
results=results-1

}
if (d!=v4*10){
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
    if(value>=13&&value==14){
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

