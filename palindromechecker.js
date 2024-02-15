// palindrome
function isPalindrome (sentence) {
    const sentenceArray = sentence.split('')
    for (i=0,j=sentenceArray.length-1;i<j;i++,j--) {
        const temp = sentenceArray[i] 
        sentenceArray[i] = sentenceArray[j]
        sentenceArray[j] = temp
    }
    const sentenceReverse = sentenceArray.join('')
   console.log(sentenceReverse === sentence)
}
isPalindrome("aibohphobia")
isPalindrome("rahul")