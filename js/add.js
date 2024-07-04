// document.getElementById("languageSelect").addEventListener("change", function() {
//     var selectedLanguage = this.value;
    
//     // Здесь можно добавить логику для изменения языка на странице
//   });

document.addEventListener('DOMContentLoaded',  ()  =>  {

    const mediaFiles = document.querySelectorAll('img');
    let i = 0
  
    Array.from(mediaFiles).forEach((file, index) => {
      file.onload = () => {
        i++

        percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)
  
        if(i === mediaFiles.length) {
          preloader.classList.add('preloader--hide')
          percents.innerHTML = 100
        }
  
      }
  
    })
  
   })
  

// function updateProgress(percent) {
//     const rangeElement = document.querySelector('.range');
//     const labelElement = rangeElement.querySelector('.range__label');
//     rangeElement.style.setProperty('--p', `${percent}%`);
//     labelElement.textContent = `${percent}%`;
// }