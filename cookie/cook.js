let text = document.querySelector("#text");
let email = document.querySelector("#email");
let area = document.querySelector("#area");
let Myform = document.querySelector(".form-box");
let Result = document.querySelector("#result");
 
Myform.addEventListener("submit" , (e)=>{
    e.preventDefault();

    if(text.value ==="" || email.value ==="" ){
        Result.innerHTML= "    لطفا فیلد های اجباری را پر کنید  "
        Myform.classList.add("error")
    }else{
    document.cookie =`MyName = ${text.value} ; expires = wed,  18  11 2026` 
    confirm("اطلاعات شما ثبت شد")
    Myform.classList.remove("error")
    Myform.classList.add("succes")
    Result.innerHTML= `your name is : ${text.value} and your emali is : ${email.value}`
    }
    setTimeout(() => {
        Result.innerHTML=""
    }, 5000);
})
 