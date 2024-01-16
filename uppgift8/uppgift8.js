document.addEventListener("DOMContentLoaded", function () {
    // Generera ett random tal mellan 1 & 20
    const randomNumber = Math.floor(Math.random() * 20) + 1;
  
    // Be usern att mata in en gissning
    let userGuess = prompt("Gissa ett nummer mellan 1 och 20:");
  
    // Konvertera användarens inmatning till ett heltal
    userGuess = parseInt(userGuess);
  
    // Skriv ut resultatet baserat på om gissningen är korrekt eller inte
    if (!isNaN(userGuess)) {
      const resultMessage = document.createElement("p");
      resultMessage.id = "output";
  
      if (userGuess === randomNumber) {
        resultMessage.textContent = "Bra jobbat! Du gissade rätt nummer.";
      } else {
        resultMessage.textContent = "Tyvärr, gissningen matchade inte random numret. Det rätta numret var " + randomNumber + ".";
      }
  
      // Lägg till meddelandet på sidan
      document.body.appendChild(resultMessage);
    } else {
      alert("Var god ange ett giltigt nummer.");
    }
  });
  