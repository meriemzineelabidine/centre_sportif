
document.getElementById("login-form").addEventListener("submit",function(e){
  e.preventDefault()
    
    
    var inputname=document.getElementById("nom");
    console.log(inputname);
    var inputemail=document.getElementById("email");
    var inputbb= document.getElementById("object");
    var inputmessage=document.getElementById("message") ; 
    var err= document.getElementById("err")
    console.log(err);
  if(inputname.value.length==0){
   var erreur='entrez votre nom';
   err.innerHTML=err.innerHTML+erreur;
   
 }
 if(inputemail.value.length==0){
    var erreur='entrez votre email';
    err.innerHTML=err.innerHTML+erreur;
    
  }
  if(inputbb.value.length==0){
    var erreur='entrez votre object';
    err.innerHTML=err.innerHTML+erreur;
    
  }
  if(inputbb.value.length==0){
    var erreur='entrez votre Message';
    err.innerHTML=err.innerHTML+erreur;
    
  }
  else{
    alert('le formulaire envoye');
  }
  
})









