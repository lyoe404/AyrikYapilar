import * as util from '../util/output_parser.js';
import * as text_parser from "../util/text_parser.js"
import * as step_output_adder from "../util/step_output_adder.js"

var decrypted_text = [] ; 
var steps_text = [] ; 
var crypted_text = [] ; 
var keys = [] ; 

let object = {
  steps : steps_text,
  crypted_text: crypted_text,
  keys : keys,
  decrypted_text : decrypted_text 
};

export function encryptViegenere(anahtar,text,method,){

  const letters2= text_parser.textParser(text);
  console.log("text:", letters2);

  var letters3 = text_parser.textParser(anahtar);
  console.log("anahtar:", letters3); 
const toplamlar = [];

for (let i = 0; i < letters2.length; i++) {
  const indexShortArray = i % letters3.length;
  const toplam = letters2[i] + letters3[indexShortArray];
  toplamlar.push(toplam);
  object.steps.push(`Index ${i} : ${letters2[i]} + ${letters3[indexShortArray]} = ${toplam}`)
}
  
console.log("Toplamlar:", toplamlar);

var harfler = text_parser.getIndexofAlphabeth(toplamlar);
object.crypted_text = harfler ; 
object.keys.push(anahtar);
console.log("Harfler:", harfler);
    step_output_adder.step_output_Adder_viegenere(object);
};


export function decryptVeigenere(method, anahtar1, text1){


}