
function handelSubmit(event){
    event.preventDefault();
    console.log("success")
    document.getElementById("emailadd").innerHTML = "";
        document.getElementById("numd").innerHTML = "";
    const email=document.querySelector("#email").value
    const num=document.querySelector("#num").value
    const code = document.querySelector("#coun").value

    if (!num && !email) {
        document.getElementById("emailadd").innerHTML = "EmailId Required";
        document.getElementById("numd").innerHTML = "MobileNumber Required";
      } else if (!num) {
        document.getElementById("numd").innerHTML = "Please Enter your mobile Number";
      } else if (!email) {
        document.getElementById("emailadd").innerHTML = "Please Enter your Email";
      } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailadd").innerHTML = "You have entered an invalid email address";
      } else if (num.length > 10 || num.length < 10) {
        document.getElementById("numd").innerHTML = "You have entered an invalid Mobile number";
      }
      else{
    console.log(email,num,code)
    
    localStorage.setItem("data",JSON.stringify({email,num,code}))
    window.location.href="./talk.html"
    }

}
