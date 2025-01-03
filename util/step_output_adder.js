// STEPADDER VISUALIZES RETURNING OBJECT
// 
export function step_output_Adder(result_object) {
  for (let i = 0 ; i < result_object.steps.length ; i++) {

    let step = document.createElement('div');
    step.className = "steps";
    step.innerHTML = result_object.steps[i];
    document.getElementById("steps_area").appendChild(step);
  } 
  
  for (let i = 0 ; i < result_object.crypted_text.length ; i++) {
    let output_area = document.getElementById("output_text");
    output_area.innerHTML += result_object.crypted_text[i];
    if (i< result_object.crypted_text.length - 1 )output_area.innerHTML += "-";
  }
    var key_text = document.getElementById("key_text");
    key_text.innerHTML = `Açık Anahtar = (${result_object.keys[0]},${result_object.keys[1]})`;
    key_text.innerHTML += ` Özel Anahtar = (${result_object.keys[2]},${result_object.keys[1]})`;
}

export function step_output_Adder_viegenere(result_object,method) {
  for (let i = 0 ; i < result_object.steps.length ; i++) {

    let step = document.createElement('div');
    step.className = "steps";
    step.innerHTML = result_object.steps[i];
    document.getElementById("steps_area").appendChild(step);
  } 
  if (method == "encrypt")  document.getElementById("output_text").innerHTML = "Şifrelenmiş Mesaj: " ; 

  if (method == "decrypt")  document.getElementById("output_text").innerHTML = "Deşifrelenmiş Mesaj: " ;

  for (let i = 0 ; i < result_object.crypted_text.length ; i++) {
    let output_area = document.getElementById("output_text");
    output_area.innerHTML += result_object.crypted_text[i];
    if (i< result_object.crypted_text.length - 1 )output_area.innerHTML += "";

  }
  var key_text = document.getElementById("key_text");
  key_text.innerHTML = `Anahtarımız: ${result_object.keys}`;
    
}

