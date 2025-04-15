let form = document.querySelector("form");
form.addEventListener("submit" ,(e) => {
    
    if(form.checkValidity()){
    alert("form is submit");
    }
    else{
    e.preventDefault();

        console.log("hii");
    }
});