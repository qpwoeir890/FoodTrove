// let days = document.getElementById("deys")
let hrs = document.getElementById("hrs");
let minut = document.getElementById("minut");
let second = document.getElementById("second");

setInterval(()=>{
  let currenTime = new Date();
// days.innerHTML = currenTime.getHours();  
hrs.innerHTML = currenTime.getHours();
minut.innerHTML = currenTime.getMinutes();
second.innerHTML = currenTime.getSeconds();
},1000)




document.getElementById("languageSelect").addEventListener("change", function() {
    var selectedLanguage = this.value;
    
    // Здесь можно добавить логику для изменения языка на странице
  });