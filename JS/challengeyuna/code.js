function convertisseur (){
    let value=prompt("Entrez la note à convertir")

    if(value>=18){
        alert("A+ excellent ")
    }

    if(value<=15&&value>=17){
        alert("A bravo ")

    }
    if(value==14){
        alert("B bien")
    }

    if (value>12&&value<=13){
        alert("C moyen")
    }

    if (value>=10&&value<=12){
        alert ("D passable")
    }

    if (value>=8&&value<=9){
        alert ("E insuffisant")
    }

    if (value>=5&&value<=7){
        alert ("F Très insuffisant")
    }

    if (value>=0&&value<=5){
        alert ("G Non acceptable")
    }
    
}
