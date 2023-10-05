## sentense-changer

The sentence-changer is a javascript library that can be used to change the first 
letter of a sentence from lowercase to Uppercase

## installation
You can install the sentence-changer using npm:
npm install sentence-changer

## Usage
function toSentenceCase(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);;
} 

console.log(toSentenceCase('bassajjasubi kamir')); 

//output: 'Bassajjasubi kamir'

## functionalty
    * To do this take the first character charAt(0) of the string and convert it to uppercase toUpperCase and then simply append the rest of the string str.slice(1) to the first already capitalized letter.

    * Example:

function toSentenceCase(str){
    return str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);;
} 

console.log(toSentenceCase('eugene katusime')); 

//output: 'Eugene katusime'

## contribution
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

