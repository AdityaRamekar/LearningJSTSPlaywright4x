let b = 20;// Global Scope
console.log(b);//20

function printHello(){
    console.log("Hello TheTestingAcademy");
    let a =30;//Local Scope
    console.log(a); // 30
    if(true){
        let a = 5;
        console.log(a); //5
    }
    console.log("let ->" ,a); // 30
}

printHello();