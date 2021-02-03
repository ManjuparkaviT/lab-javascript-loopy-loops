// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Prograd_1 = prompt("Enter Driver's name")
console.log("The driver's name is "+Prograd_1)
var Prograd_2=prompt("Enter Navigator's name")
console.log("The Navigator's name is "+Prograd_2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if(Prograd_1.length>Prograd_2.length){
    console.log("The driver has the longest name, it has "+Prograd_1.length+" characters.")
}
else if(Prograd_1.length<Prograd_2.length){
    console.log("It seems that the navigator has the longest name, it has "+Prograd_2.length+" characters.")
}
else{
    console.log("Wow, you both have equally long names,"+Prograd_1.length+" characters!.")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function checkVowel(name) {
    var i;
    var vowel = ""
    var index = ""
    for (i of name) {
      if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
        vowel += i + " "
        index += name.indexOf(i) + " "
      }
    }
    console.log(name + " " + vowel + " " + index)
  }
checkVowel(Prograd_1)
checkVowel(Prograd_2)

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

function checkCase(name){
    var upper=0,lower=0;
    for(let char of name){
        if (char>='A' && char<='Z')upper+=1
        if(char>='a' && char<='z')lower+=1
    }
    console.log("the number of upper case characters in "+name+" is "+upper)
    console.log("the number of lower case characters in "+name+" is "+lower)
}
checkCase(Prograd_1)
checkCase(Prograd_2)
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

var driver=""
for(let char of Prograd_1){
    driver+=char.toUpperCase()
    driver+=" "
}
console.log(driver)

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

var reverse="",index=Prograd_2.length-1;
while(index>=0){
    reverse+=Prograd_2.charAt(index)
    index--
}
console.log(reverse)
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
console.log(Prograd_2+" "+Prograd_1)
// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Prograd_1 === Prograd_2) {
    console.log("What?! You both have the same name?");
  } else if (Prograd1 < Prograd2) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.")
  }
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
