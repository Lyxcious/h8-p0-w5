function gensAnagram (word, anagram = "", anagrams = []){
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

function gensUniqAnagram (word, anagram2 = "", anagrams2 = []){
    if (!word){
        anagrams2.push(anagram2)
        return anagrams2
    }
    for (var i = 0; i < word.length; i++){
        anagram2 += word[i];
        gensUniqAnagram (word.slice(0, i) + word.slice (i+1), anagram2, anagrams2);
        anagram2 = anagram2.slice(0, anagram2.length-1)
    }
    var uniq = [...new Set(anagrams2)]
    return uniq[Math.floor(Math.random()*uniq.length)]
}

console.log(gensUniqAnagram("abc"))