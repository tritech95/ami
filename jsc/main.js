let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');



//intro
let intro1=["Hello,What do want to know about Covid-19?"];
let ans1=[" Coronavirus disease 2019 (COVID-19) is a respiratory illness that can spread from person to person. COVID-19 is a new disease, caused by a novel (or new) coronavirus that has not previously been seen in humans."];
let ans2=[" COVID-19 is thought to spread mainly through close contact from person-to-person. Some people without symptoms may be able to spread the virus. We are still learning about how the virus spreads and the severity of illness it causes"];
let ans3=["Wash your hands,Cover your mouth and nose,Avoid crowds and practice social distancing (stay at least 6 feet apart from others)"];
let ans4=["People with COVID-19 should receive supportive care to help relieve symptoms. People with mild symptoms are able to recover at home. If you experience a medical emergency such as trouble breathing, call 911 and let the operator know you may have COVID-19. Never take a prescription medicine or drug if it is not prescribed for you by your doctor for your health condition."];
let ans5=["The best way to prevent the spread of infections and decrease the risk of getting sick is by washing your hands with plain soap and water, advises the CDC. Washing hands often with soap and water for at least 20 seconds is essential, especially after going to the bathroom; before eating; and after coughing, sneezing, or blowing one’s nose. If soap and water are not available, CDC recommends consumers use an alcohol-based hand sanitizer that contains at least 60% alcohol. "];

let ans6=["Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected."];
let ans7=["Someone who is actively sick with COVID-19 can spread the illness to others. Once a person with COVID-19 has been released from isolation and is no longer showing symptoms without the aid of medication (fever-reducers, cough suppressants), they are no longer considered able to spread the COVID-19 virus"];
let ans8=["It is possible that people infected with COVID-19 may be infectious before showing symptoms.More detailed studies are being done to determine whether people acquire COVID-19 from those without symptoms. "];
let ans9=["Older adults and people who have serious chronic medical conditions are at higher risk for serious illness.Underlying medical conditions that can increase risk for severe illness from COVID-19 can be found"];
let ans10=["In general, for diagnostic tests, samples are collected from a person’s nose and/or throat using swabs or other collection devices by a healthcare provider in a health care setting. A health care professional swabbing the back of the nasal cavity through the nostril is the preferred way to collect a sample to test for COVID-19."];
let ans11=["The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but don’t develop any symptoms and don't feel unwell. Most people (about 80%) recover from the disease without needing special treatment."]
let ans12=["No. The symptoms of COVID-19 are similar in children and adults"];
let ans13=["The time from exposure to COVID-19 to the moment when symptoms begin is, on average, 5-6 days and can range from 1-14 days. "];
let ans14=["Infected people are unlikely to be re-infected shortly after they recover. However, because the immune response to COVID-19 is not yet understood, it is not yet known whether similar immune protection will be observed for patients who have recovered from COVID-19"];
let ans15=["It’s best not to make unnecessary trips, but if you need to go to a grocery store, it’s important to maintain social and physical distancing as you shop, and to clean your hands often while shopping and as soon as you get home."];
let ans16=["There is a very small number of pets around the world reported to be infected with the virus that causes COVID-19 after having contact with a person with COVID-19. There is currently no evidence that animals are a source of COVID-19 infection in the United States."];
let ans17=["It is not known yet if weather and temperature changes impact or has any connection with COVID-19. At this time, it is not clear or known if the spread of COVID-19 will decrease when the weather becomes warmer."];
let ans18=["Studies suggest that coronaviruses may persist on surfaces for a few hours or up to several days."];
let ans19=["People who have the flu will typically experience symptoms within 1–4 days. The symptoms for COVID-19 can develop between 1–14 days. However, according to 2020 research, the median incubation period for COVID-19 is 5.1 days. As a point of comparison, the incubation period for a cold is 1–3 days.  Common cold can make you feel miserable, but compared to the novel coronavirus, the symptoms are usually mild and may include: Runny or stuffed nose, sneezing and cough."];
let ans20=["There is no evidence to date of viruses that cause respiratory illnesses being transmitted via food or food packaging. Coronaviruses cannot multiply in food; they need an animal or human host to multiply."];
//end and thanks
 let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am doing awesome", "i am fine, what about you",  "i am doing good"];
let basic=["You have got viral fever"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
  let output = '';
  output += `<div class="chatarea-inner user">${usermsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
  let output = '';
  output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function chatbotvoice(message){

  const speech = new SpeechSynthesisUtterance();
  speech.text = "Can you please repeat!";
//intro
  if(message.includes('hello Ami')){
      let finalresult = intro1[Math.floor(Math.random() * intro1.length)];
      speech.text = finalresult;
  }


    if(message.includes('hai' || 'hay')){
      let finalresult = intro1[Math.floor(Math.random() * intro1.length)];
      speech.text = finalresult;
  }
  if(message.includes('hello' )){
      let finalresult = intro1[Math.floor(Math.random() * intro1.length)];
      speech.text = finalresult;
  }
//// QUESTION: stage 1
if(message.includes('what is coronavirus')){
    let finalresult = ans1[Math.floor(Math.random() * ans1.length)];
    speech.text = finalresult;
}
if(message.includes('what is covid-19')){
    let finalresult = ans1[Math.floor(Math.random() * ans1.length)];
    speech.text = finalresult;
}
if(message.includes('how does covid-19 spread')){
    let finalresult = ans2[Math.floor(Math.random() * ans2.length)];
    speech.text = finalresult;
}
if(message.includes('how does coronavirus spread')){
    let finalresult = ans2[Math.floor(Math.random() * ans2.length)];
    speech.text = finalresult;
}
if(message.includes('how can I prevent covid-19 ')){
    let finalresult = ans3[Math.floor(Math.random() * ans3.length)];
    speech.text = finalresult;
}
if(message.includes('how can I prevent coronavirus')){
    let finalresult = ans3[Math.floor(Math.random() * ans3.length)];
    speech.text = finalresult;
}
if(message.includes('what treatments are availabe for covid-19 ')){
    let finalresult = ans4[Math.floor(Math.random() * ans4.length)];
    speech.text = finalresult;
}
if(message.includes(' what treatments are available for coronavirus')){
    let finalresult = ans4[Math.floor(Math.random() * ans4.length)];
    speech.text = finalresult;
}
if(message.includes('is hand sanitizer effective against covid-19 ')){
    let finalresult = ans5[Math.floor(Math.random() * ans5.length)];
    speech.text = finalresult;
}
if(message.includes('is hand sanitizer effective against coronavirus ')){
    let finalresult = ans5[Math.floor(Math.random() * ans5.length)];
    speech.text = finalresult;
}
if(message.includes('what is community spread')){
    let finalresult = ans6[Math.floor(Math.random() * ans6.length)];
    speech.text = finalresult;
}
if(message.includes('can someone who has recovered from covid-19 spread the illness to others')){
    let finalresult = ans7[Math.floor(Math.random() * ans7.length)];
    speech.text = finalresult;
}
if(message.includes(' can a person spread the covid-19 virus even if they have no symptoms')){
    let finalresult = ans8[Math.floor(Math.random() * ans8.length)];
    speech.text = finalresult;
}
if(message.includes(' who is at higher risk for serious illness from covid-19')){
    let finalresult = ans9[Math.floor(Math.random() * ans9.length)];
    speech.text = finalresult;
}
if(message.includes('who is at higher risk for serious illness from coronavirus')){
    let finalresult = ans9[Math.floor(Math.random() * ans9.length)];
    speech.text = finalresult;
}
if(message.includes('how people are tested for coronavirus')){
    let finalresult = ans10[Math.floor(Math.random() * ans10.length)];
    speech.text = finalresult;
}
if(message.includes('how people are tested for covid-19')){
    let finalresult = ans10[Math.floor(Math.random() * ans10.length)];
    speech.text = finalresult;
}
if(message.includes('what are symptoms of covid-19')){
    let finalresult = ans11[Math.floor(Math.random() * ans11.length)];
    speech.text = finalresult;
}
if(message.includes('are symptoms change from kids to adults')){
    let finalresult = ans12[Math.floor(Math.random() * ans12.length)];
    speech.text = finalresult;
}

if(message.includes('how long will it take to develop symptom')){
    let finalresult = ans13[Math.floor(Math.random() * ans13.length)];
    speech.text = finalresult;
}
if(message.includes('are people recovered from covid-19 get infected again')){
    let finalresult = ans14[Math.floor(Math.random() * ans14.length)];
    speech.text = finalresult;
}
if(message.includes('is shopping safe during covid-19 pandemic')){
    let finalresult = ans15[Math.floor(Math.random() * ans15.length)];
    speech.text = finalresult;
}
if(message.includes('can I get covid-19 from animals')){
    let finalresult = ans16[Math.floor(Math.random() * ans16.length)];
    speech.text = finalresult;
}
if(message.includes('does environmental temperature has effect in spread of covid-19')){
    let finalresult = ans17[Math.floor(Math.random() * ans17.length)];
    speech.text = finalresult;
}
if(message.includes('how many hours can the covid-19 virus stay on surface')){
    let finalresult = ans18[Math.floor(Math.random() * ans18.length)];
    speech.text = finalresult;
}
if(message.includes('how will I know if I have common cold flu or covid-19')){
    let finalresult = ans19[Math.floor(Math.random() * ans19.length)];
    speech.text = finalresult;
}
if(message.includes('can covid-19 spread through food stuff')){
    let finalresult = ans20[Math.floor(Math.random() * ans20.length)];
    speech.text = finalresult;
}
//thanks
  if(message.includes('thank you' || 'thank you so much')){
      let finalresult = thank[Math.floor(Math.random() * thank.length)];
      speech.text = finalresult;
  }
  if(message.includes('talk to you' || 'talk')){
      let finalresult = closing[Math.floor(Math.random() * closing.length)];
      speech.text = finalresult;
  }


  window.speechSynthesis.speak(speech);
  chatareamain.appendChild(showchatbotmsg(speech.text));



}



recognition.onresult=function(e){
  let resultIndex = e.resultIndex;
  let transcript = e.results[resultIndex][0].transcript;
  chatareamain.appendChild(showusermsg(transcript));
  chatbotvoice(transcript);
  console.log(transcript);
}
recognition.onend=function(){
  mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
  mic.style.background='#39c81f';
  recognition.start();
  console.log("Activated");
})
