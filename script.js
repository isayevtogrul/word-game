function startGame() {
    const words = ["togrul", "frontend", "javascript", "telefon", "tesla"]; // Sözləri saxlayır.
    const word = words[Math.floor(Math.random() * words.length)];//Təsadüfi bir söz seçir.
    let hiddenWord = "_".repeat(word.length); //Sözün gizli görünüşünü yaradır.
    let lives = 3; //Oyunçunun şanslarını məhdudlaşdırır.
    let guessedLetters = []; // Təxminləri izləyir.
  
    
    alert(`The word is ${word.length} letters long!`); //Bu sətir, istifadəçiyə oyunun başında seçilən sözün uzunluğunu bildirir.
  
  
    for (let i = 0; lives > 0 && hiddenWord.includes("_"); i++) { //Həyat qaldığı müddətcə və əgər hələ bütün hərflər tapılmayıbsa dövr davam edəcək.
      const guess = prompt(`Word: ${hiddenWord}\nLives: ${lives}\nGuess a letter:`).toLowerCase().trim(); // funksiyası istifadəçidən hərf təxmin etməsini istəyir.
  
    
      if (guess.length === 1 && /^[a-z]$/i.test(guess)) { // İstifadəçi yalnız bir hərf daxil etməlidir.
        if (guessedLetters.includes(guess)) { // İstifadəçi daha əvvəl bu hərfi təxmin edibmi, yoxlayır
          alert("You've already guessed this letter! Try a different one.");
        } else {
          guessedLetters.push(guess); // Əgər bu, yeni təxmindirsə, guessedLetters.push(guess) ilə təxmin edilən hərf guessedLetters massivinə əlavə edilir.
  
          
          if (word.includes(guess)) { // Təxmin edilən hərf doğru olarsa, bu şərt doğru olacaq.
            let newHiddenWord = "";
  
            
            for (let j = 0; j < word.length; j++) {
              newHiddenWord += (word[j] === guess) ? guess : hiddenWord[j]; // Əgər təxmin olunan hərf doğruysa, gizli sözü yeniləmək lazımdır.
            }
  
            hiddenWord = newHiddenWord; // Bu, gizli sözü yeniləyir.
          } else {
            lives--; // Əgər təxmin səhvdirsə, lives dəyişəni 1 azalır. 
          }
        }
      } else {
        alert("Please enter a single valid letter!"); // Əgər istifadəçi düzgün bir hərf daxil etməzsə ona xəbərdarlıq edilir.
      }
    }
  
  
    if (hiddenWord === word) {
      alert("Congratulations! You've guessed the word: " + word); // Əgər gizli söz tam olaraq doğru sözə bərabərdirsə,istifadəçiyə təbrik mesajı verilir.
    } else {
      alert("You lost! The correct word was: " + word); // Əgər doğru sözü tapmamışsa, oyunçuya doğru söz göstərilir.
    
    }
  
    
    if (confirm("Do you want to play again?")) {
      startGame(); //Əgər istifadəçi "bəli" desə, startGame() funksiyası yenidən çağırılır və oyun təkrarlanır.
    }else{
      confirm("Thank you for playing the game!") 
      
    }
  }
  
  
  startGame(); // Funksiya çağırılır.
  

