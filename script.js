// 2.калкулятор
// let number1 = +prompt("Enter a Number:");
// let symbol = prompt("Enter a arithmetic symbol:");
// let number2 = +prompt("Enter a second Number:");
// let result;

// if (symbol == "+") {
//   result = number2 + number1;
//   console.log(result);
// } else if (symbol == "-") {
//   result = number1 - number2;
//   console.log(result);
// } else if (symbol == "*") {
//   result = number1 * number2;
//   console.log(result);
// } else if (symbol == "/") {
//   result = number1 / number2;
//   console.log(result);
// } else {
//   console.log("enter a correct symbol");
// }

// 4 Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д

let firstNumber = [3, 4, 5, 6, 7, 8];
let secondNumber = [0, 1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < firstNumber.length; i++) {
  for (let j = 0; j < secondNumber.length; j++) {
    console.log(`${firstNumber[i]}${secondNumber[j]}`);
  }
}

// 1.Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная - 10 баллов
// const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// const consonants = [
//   "б",
//   "в",
//   "г",
//   "д",
//   "ж",
//   "з",
//   "й",
//   "к",
//   "л",
//   "м",
//   "н",
//   "п",
//   "р",
//   "с",
//   "т",
//   "ф",
//   "х",
//   "ц",
//   "ч",
//   "ш",
//   "щ",
// ];
// const letter = prompt("Enter a letter:");

// for (let i = 0; i < vowels.length; i++) {
//   if (vowels[i] == letter.toLowerCase()) {
//     console.log("гласная буква");
//   }
// }
// for (let i = 0; i < consonants.length; i++) {
//   if (consonants[i] == letter.toLowerCase()) {
//     console.log("согласная буква");
//   }
// }
