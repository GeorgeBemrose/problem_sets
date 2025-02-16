function caesarCipher(s, k) {
    return(Array.from(s,(char) =>{
        let index = (char.charCodeAt(0));
        if(index >=65 && index <= 90 || index >= 97 && index <= 122){ //check if a letter
            let conversion = index <=90 ? 65: 97;
            
            let addition = (index - conversion + k)%26;
            return (String.fromCharCode(conversion+addition));   
        } else {
            return char;
        }
    })).join('');
}

console.log(caesarCipher('Hello_World!',4))
console.log('_'.charCodeAt(0));

// console.log('A'.charCodeAt(0)) //65
    // console.log('Z'.charCodeAt(0)) //90 if >=65 && <=90
    // console.log('a'.charCodeAt(0)) //97 if >=97 && <=122
    // console.log('z'.charCodeAt(0)) //122


// function caesarCipher(s, k) {
//     let encrypted = []; //inefficient use of memory?
//     for(let i = 0; i < s.length; i++){
//         let index = (s.charCodeAt(i));

//         if(index >=65 && index <= 90 || index >= 97 && index <= 122){ //check if a letter
//             let conversion = index <=90 ? 65: 97;
            
//             let addition = (index - conversion + k)%26;
//             encrypted.push(String.fromCharCode(conversion+addition));   
//         } else {
//             encrypted.push(s[i])
//         }
        
//     }
    
//     return encrypted.join('');  
// }