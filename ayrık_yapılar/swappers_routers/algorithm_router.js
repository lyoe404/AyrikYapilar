//ALGORITHMROUTER PREPEARES PARAMS AND SELECTS ALGORRITHMS AND CALLS 
//MAIN ALGORITHMS

import * as step_engine from "../util/step_output_adder.js";
import * as RSA from "../algorithms/rsa_algorithm.js";
import * as output_parser from "../util/output_parser.js";
import * as viegene from "../algorithms/viegenere_algorithm.js"
import * as DH from "../algorithms/diffie-helman_algorithm.js"
// ALGORITHM ROUTER
export function algorithmRouter(algorithm,method){

  if (algorithm == "RSA") {
      if (method == "encrypt") {
     // GETTING PARAMS AND CLEANING UI    
        const prime1 = document.getElementById("asal1").value;
        const prime2 = document.getElementById("asal2").value;
        const text = document.getElementById("input_box").value;
        const output_area = document.getElementById("output_text");
        output_area.innerHTML = "Şifreli Mesaj : " ; 
        const steps_area = document.getElementById("steps_area");
        steps_area.innerHTML = "" ; 


     // ui_step_adder which is visualizing returned object
        step_engine.step_output_Adder(RSA.encryptRSA(prime1,prime2,text,method)) ;

        }
   
      if (method == "decrypt"){
        var key1 = document.getElementById("key1").value;
        var key2 = document.getElementById("key2").value; 
        var text = document.getElementById("input_box").value;
        text = output_parser.outputparserRSA(text); 
        RSA.decryptRSA(key1,key2,text);

      } 


  }
  if (algorithm == "Diffie-Helman") {
    if (method === "encrypt") {
      const prime = parseInt(document.getElementById("asal1").value); // Ortak asal sayı
      const generator = parseInt(document.getElementById("asal2").value); // Ortak taban
      const privateKey = parseInt(document.getElementById("key1").value); // Gizli anahtar
      const message = document.getElementById("input_box").value; // Mesaj

      // DH hesaplama fonksiyonu ile ortak anahtarı hesapla
      const result = DH.calculateDH(prime, generator, privateKey, "encrypt", null, message);

      // Adımları ve şifreli mesajı ekle
      document.getElementById("steps_area").innerHTML = result.steps
        .map((step) => `<div>${step}</div>`)
        .join("");
      document.getElementById("output_text").innerHTML += result.crypted_text.join(", ");
    }

    if (method === "decrypt") {
      const prime = parseInt(document.getElementById("asal1").value); // Ortak asal sayı
      const publicKey = parseInt(document.getElementById("key2").value); // Diğer kişinin ortak anahtarı
      const privateKey = parseInt(document.getElementById("key1").value); // Kendi gizli anahtarınız
      const encryptedMessage = document.getElementById("input_box").value; // Şifreli mesaj

      // DH hesaplama fonksiyonu ile ortak anahtarı hesapla
      const result = DH.calculateDH(prime, null, privateKey, "decrypt", publicKey, encryptedMessage);

      // Adımları ve çözülmüş mesajı ekle
      document.getElementById("steps_area").innerHTML = result.steps
        .map((step) => `<div>${step}</div>`)
        .join("");
      document.getElementById("output_text").innerHTML += result.decrypted_text.join("");
    }

  }
  if (algorithm == "Viegenere") {
    if (method == "encrypt") {
        var anahtar = document.getElementById("asal1").value ;
        var text = document.getElementById("input_box").value;
        const steps_area = document.getElementById("steps_area");
        steps_area.innerHTML = "" ; 
        viegene.encryptViegenere(anahtar,text,method);

    }
if (method == "decrypt"){
      console.log("geldidecrypt");
      var anahtar = document.getElementById("asal1").value ;
        var text = document.getElementById("input_box").value;
        const steps_area = document.getElementById("steps_area");
        steps_area.innerHTML = "" ; 
        viegene.decryptViegenere(anahtar,text,method);
} 

  }
}