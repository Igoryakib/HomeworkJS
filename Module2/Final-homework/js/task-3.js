const findLongestWord = function(string) {
    const array = string.split(' ');
    let word = array[0];

    for(let i = 1; i < array.length; i +=1) {
        if(array[i].length > word.length) {
           word = array[i];
        }
    }
    return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 