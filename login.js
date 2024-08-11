let form=document.querySelector("form")
// console.log(form)
form.addEventListener("submit",(event)=>{
  event.preventDefault()
let username=document.getElementById("username").value
let password=document.getElementById("password").value
let login_id=localStorage.getItem("username")
let login_password=localStorage.getItem("password")
if(username==login_id && password==login_password){
    open("http://127.0.0.1:5501/homepage.html","_Self")

}else{
    alert("PLEASE CHECH THE PASSWORD & USRNAME")
}

})


