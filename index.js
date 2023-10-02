function toSentenceCase(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);;
} 

console.log(toSentenceCase('bassajjasubi kamir')); 

module.exports ={toSentenceCase};