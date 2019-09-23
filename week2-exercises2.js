// solutions for exercises in
// https://dc-codecamp.herokuapp.com/course/fullstack/april2017/week5/day4/aa.javascript-exercises.exercise.md

function hello(name) {
  console.log("Hello " + name);
}

//hello('Mustache');

//--------------------------------

function hello2(name) {
  if (name == undefined) {
    console.log("Hello World");
  } else {
    console.log("Hello " + name);
  }
}

//hello2();

//--------------------------------

function madLib(name, subject) {
  return name + "'s favorite subject in school is " + subject + ".";
}

//console.log(madLib("Luis", "art"));

//--------------------------------

function tipAmount(billAmount, levelOfService) {
  if (levelOfService == "good") {
    return billAmount * 0.2;
  } else if (levelOfService == "fair") {
    return billAmount * 0.15;
  } else if (levelOfService == "bad") {
    return billAmount * 0.1;
  }
}

//console.log(tipAmount(10, "good"));

//--------------------------------

function totalAmount(billAmount, levelOfService) {
  return billAmount + tipAmount(billAmount, levelOfService);
}

//console.log(totalAmount(10, "good"));

//--------------------------------

function splitAmount(billAmount, levelOfService, numberOfPeople) {
  return totalAmount(billAmount, levelOfService) / numberOfPeople;
}

//console.log(splitAmount(100, "good", 5));

//--------------------------------
function printNumbers1(number1, number2) {
  for (i = number1; i <= number2; i++) {
    console.log(i);
  }
}

//printNumbers1(2, 6);

//--------------------------------
function printNumbers2(number1, number2) {
  number = number1;

  while (number <= number2) {
    console.log(number);
  }
}

//printNumbers1(2, 6);

//--------------------------------

function printSquare(size) {
  for (i = 0; i < size; i++) {
    let asterisks = "";
    for (j = 0; j < size; j++) {
      asterisks += "*";
    }
    console.log(asterisks);
  }
}

//printSquare(5);

//--------------------------------

function printBox(width, height) {
  for (i = 0; i < height; i++) {
    let asterisks = "";

    for (j = 0; j < width; j++) {
      if (i == 0 || i == height - 1) {
        asterisks += "*";
      } else if (j == 0 || j == width - 1) {
        asterisks += "*";
      } else {
        asterisks += " ";
      }
    }
    console.log(asterisks);
  }
}

//printBox(4, 5);

//--------------------------------

function printBanner(someText) {
  let bannerLength = someText.length + 4;
  let asterisk = "*";
  let bannerLine = asterisk.repeat(bannerLength);

  console.log(bannerLine);
  console.log("* " + someText + " *");
  console.log(bannerLine);
}

//printBanner("Digital Crafts");

//--------------------------------

function factors(num) {
  factorsArray = [];
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      factorsArray.push(i);
    }
  }

  return factorsArray;
}

//console.log(factors(12));

//--------------------------------

function cipherDecipher(someString, offset) {
  const ALPHABET_STRING = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  const ALPHABET_ARRAY = ALPHABET_STRING.split(",");
  let result = "";

  for (let i = 0; i < someString.length; i++) {
    let character = someString[i];
    let isUpperCaseCharacter = character == character.toUpperCase();
    let lowerCaseCharacter = character.toLowerCase();
    let characterIndex = ALPHABET_ARRAY.indexOf(lowerCaseCharacter);

    if (characterIndex == -1) {
      // character is not in the alphabet, so don't cypher it
      result += someString[i];
    } else {
      let newCharacterIndex = characterIndex + offset;

      if (newCharacterIndex >= 26) {
        // we are ciphering and went past the end of the alphabet
        newCharacterIndex = newCharacterIndex - 26;
      } else if (newCharacterIndex < 0) {
        // we are deciphering and went past the beginning of the alphabet
        newCharacterIndex = 26 + newCharacterIndex;
      }

      let newCharacter = ALPHABET_ARRAY[newCharacterIndex];
      if (isUpperCaseCharacter) {
        newCharacter = newCharacter.toUpperCase();
      }
      result += newCharacter;
    }
  }

  return result;
}

function cipher(someString, offset) {
  return cipherDecipher(someString, offset);
}

//console.log(cipher("Genius without education is like silver in the mine", 13));

//--------------------------------

function decipher(someString, offset) {
  return cipherDecipher(someString, -offset);
}

/*
console.log(
  decipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", -13)
);

console.log(
  decipher(cipher("This string will got ciphered and then deciphered!", 13), 13)
);
*/

//--------------------------------

function leetSpeak(someText) {
  let newText = "";
  for (let i = 0; i < someText.length; i++) {
    let character = someText[i];
    switch (character.toLowerCase()) {
      case "a": {
        character = "4";
        break;
      }
      case "e": {
        character = "3";
        break;
      }
      case "g": {
        character = "6";
        break;
      }
      case "l": {
        character = "1";
        break;
      }
      case "o": {
        character = "0";
        break;
      }
      case "s": {
        character = "5";
        break;
      }
      case "t": {
        character = "7";
        break;
      }
    }
    newText += character;
  }

  return newText;
}

//console.log(leetSpeak("leet"));

//--------------------------------

function longLongVowels(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (
      character == "a" ||
      character == "e" ||
      character == "i" ||
      character == "o" ||
      character == "u"
    ) {
      character = character.repeat(5);
    }
    newText += character;
  }
  return newText;
}

//console.log(longLongVowels("long vowel"));

//---------------------

function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

//console.log(sumNumbers([1,2,3,4,5]));

//---------------------

function positiveNumbers(numbers) {
  positives = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positives.push(numbers[i]);
    }
  }
  return positives;
}

//console.log(positiveNumbers([3,-1,-2,0,1,2]));

//---------------------

// matrixA and MatrixB are two-dimensional arrays
function matrixAdd(matrixA, matrixB) {
  resultMatrix = [];
  let numRows = matrixA[0].length;
  let numColumns = matrixA.length;

  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    resultMatrix[rowIndex] = [];
    for (let columnIndex = 0; columnIndex < numColumns; columnIndex++) {
      resultMatrix[rowIndex][columnIndex] =
        matrixA[rowIndex][columnIndex] + matrixB[rowIndex][columnIndex];
    }
  }

  return resultMatrix;
}

//console.log(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

//---------------------

// matrixA and MatrixB are two-dimensional arrays of size 2x2
function matrixMultiply(matrixA, matrixB) {
  var resultMatrix = [];

  for (var rowIndex = 0; rowIndex < 2; rowIndex++) {
    resultMatrix[rowIndex] = [];
    for (var columnIndex = 0; columnIndex < 2; columnIndex++) {
      var sum = 0;
      for (var sumIndex = 0; sumIndex < 2; sumIndex++) {
        sum += matrixA[rowIndex][sumIndex] * matrixB[sumIndex][columnIndex];
      }
      resultMatrix[rowIndex][columnIndex] = sum;
    }
  }
  return resultMatrix;
}

//console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));

//---------------------

function rockPaperScissors(player1, player2) {
  if (player1 == player2) {
    return "draw";
  } else if (
    (player1 == "rock" && player2 == "scissors") ||
    (player1 == "paper" && player2 == "rock") ||
    (player1 == "scissors" && player2 == "paper")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}

//console.log(rockPaperScissors('rock','paper'));
//console.log(rockPaperScissors('scissors','paper'));

//---------------------

function ticTacToeWinner(XsAndOs) {
  if (XsAndOs == "XXX") {
    return "X";
  } else if (XsAndOs == "OOO") {
    return "O";
  } else {
    return null;
  }
}

function ticTacToe(game) {
  let winner = null;

  // check for row winner
  for (let i = 0; i < 3; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += game[i][j];
    }
    winner = ticTacToeWinner(row);
    if (winner !== null) {
      return winner;
    }
  }

  // check for column winner
  for (let i = 0; i < 3; i++) {
    let column = "";
    for (let j = 0; j < 3; j++) {
      column += game[j][i];
    }
    winner = ticTacToeWinner(column);
    if (winner !== null) {
      return winner;
    }
  }

  // check for diagonal (top left to bottom right) winner
  let diagonal = "";
  for (let i = 0; i < 3; i++) {
    diagonal += game[i][i];
  }
  winner = ticTacToeWinner(diagonal);
  if (winner !== null) {
    return winner;
  }

  // check for diagonal (top right to bottom left) winner
  diagonal = "";
  let columnIndex = 2;
  for (let i = 0; i < 3; i++) {
    diagonal += game[i][columnIndex--];
  }
  winner = ticTacToeWinner(diagonal);
  if (winner !== null) {
    return winner;
  }

  // if we get here, we didn't find a winner
  return null;
}

/*
console.log(ticTacToe([
    ["O", "O", "O"], 
    ["X", null, "X"], 
    [null, "X", null]]));

console.log(ticTacToe([
    ["O", "X", "O"], 
    ["O", "X", null], 
    [null, "X", null]]));

console.log(ticTacToe([
    ["X", "O", null], 
    [null, "X", "O"], 
    [null, null, "X"]]));

console.log(ticTacToe([
    [null, "X", "O"], 
    [null, "O", "X"], 
    ["O", null, null]]));

console.log(ticTacToe([
    ["O", "O", "X"], 
    [null, "X", "O"], 
    ["X", null, "X"]]));

console.log(ticTacToe([
    ["O", "X", "O"], 
    ["O", "O", null], 
    [null, "X", "X"]]));
 */   
