function Create(){
    let Utext , Utag , CE , AC , Result
    Utag = document.getElementById("select").value;
    Utext = document.getElementById("input").value;
    Result = document.getElementById("result");

    AC = document.createElement(Utag)
    CE = document.createTextNode(Utext)
    AC.appendChild(CE);
    
    Result.appendChild(AC)
}