function updateDateTime() {
  const now = new Date();

  const options = {  day: '2-digit' };
  const date = now.toLocaleDateString('ru-RU', options);

  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const time = now.toLocaleTimeString('ru-RU', timeOptions);

  const formattedDateTime = `${date} : ${time}`;
  document.getElementById('datetime').textContent = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();  // Initial call to display the time immediately





document.getElementById("languageSelect").addEventListener("change", function() {
    var selectedLanguage = this.value;
    
    // Здесь можно добавить логику для изменения языка на странице
  });