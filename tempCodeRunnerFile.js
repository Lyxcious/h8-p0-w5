gensAnagram (word, anagram = "", anagrams = []){
    if (!word){
        anagrams.push(anagram)
        return anagrams
    }
    for (var i = 0; i < word.length; i++){
        anagram += word[i];
        gensAnagram (word.slice(0, i) + word.slice (i+1), anagram, anagrams);
        anagram = anagram.slice(0, anagram.length-1)
    }
    return [...new Set(anagrams)]
}

console.log(gensAnagram("abc"))