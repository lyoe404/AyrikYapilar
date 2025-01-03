//ALGORITHM METHOD_UI SWAPPER 
export function algorithm_swapper(algorithm,RsaBackUp,method) {
  if (algorithm == "RSA"){
        if  (method == "encrypt") {
  document.getElementById("main_column_1").innerHTML = RsaBackUp;
    document.getElementById("output_text").innerHTML = "" ; 
    document.getElementById("steps_area").innerHTML = "";
        }
        if (method == "decrypt") {
          document.getElementById("main_column_1").innerHTML = RsaBackUp;
          
        document.getElementById("input_description").innerHTML="Keyi giriniz";
        var key1desc = document.getElementById("input_name_1");
        var key1val = document.getElementById("asal1");
        var key2desc = document.getElementById("input_name_2");
        var key2val = document.getElementById("asal2");
        key1desc.innerHTML = "Key1" ; 
        key1val.id = "key1";
        key2desc.innerHTML  = "Key2";
        key2val.id = "key2";
        }
      }

      if (algorithm == "Diffie-Helman"){

        if (method === "encrypt") {
          document.getElementById("main_column_1").innerHTML = RsaBackUp;
          document.getElementById("input_name_1").innerHTML = "Modulus (p)";
          document.getElementById("input_name_2").innerHTML = "Base (g)";
          document.getElementById("input_description").innerHTML = "Özel anahtarınızı (private key) girin.";
          document.getElementById("output_text").innerHTML = "";
          document.getElementById("steps_area").innerHTML = "";
        }
        if (method === "decrypt") {
          document.getElementById("input_name_1").innerHTML = "Modulus (p)";
          document.getElementById("input_name_2").innerHTML = "Public Key";
          document.getElementById("input_description").innerHTML = "Özel anahtarınızı (private key) girin.";
        }
      

      }
        if (algorithm == "Viegenere"){

          if (method == "encrypt") {
          document.getElementById("main_column_1").innerHTML = RsaBackUp ;
          document.getElementById("output_text").innerHTML = "" ; 
          document.getElementById("input_description").innerHTML="Şifrelemek istediğiniz metni ve anahtarınızı giriniz:";
          document.getElementById("input_name_1").innerHTML = "Anahtar:";
          document.getElementById("steps_area").innerHTML = "";
          document.getElementById("asal2").remove() ;  
          document.getElementById("input_name_2").remove();
          document.getElementById("key_text").innerHTML = "" ; 
          

          }
          if (method == "decrypt") {
            
            document.getElementById("input_description").innerHTML="Çözmek istediğiniz metni ve anahtarınızı giriniz: ";
            document.getElementById("input_name_1").innerHTML = "Anahtar:";
            if (document.getElementById("key2") != null ) document.getElementById("key2").remove();
            document.getElementById("steps_area").innerHTML = "";
            if (            document.getElementById("input_name_2")!= null
          )             document.getElementById("input_name_2").remove();


          }
       
      };
} ; 