document.getElementById("myForm").addEventListener("submit", function(e){
    e.preventDefault(); // جلوگیری از رفرش صفحه

    let Xhtml = new XMLHttpRequest();
    let input = document.getElementById("inputField").value;
    let result = document.getElementById("result");

    if (input === ""){
        result.innerHTML = "please write your name!!!";
    } else {
        Xhtml.onload = () => {
            result.innerHTML = Xhtml.responseText;
        }

        Xhtml.open("GET", "data.php?UserName=" + input);
        Xhtml.send();
    }
});
