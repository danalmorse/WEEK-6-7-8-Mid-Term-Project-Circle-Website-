/*------------------------------JS Contact Us form -------------------------*/

const form = document.querySelector('form');
console.log(form);

const contador = document.getElementById('contador')

/*-------------Declaration of variables retriving from html-----------*/
const nametag = document.getElementById("name");
const emailtag = document.getElementById("email");
const phonetag = document.getElementById("number");
const messagetag = document.getElementById("message");
const submittag = document.getElementById("submitbutton");

const nameforms = document.getElementById("nameform");
const emailforms = document.getElementById("emailform");
const phoneforms = document.getElementById("phone");
const messageforms = document.getElementById("messageform");
const errordisplay = document.getElementById("errordisplay");


/*form.addEventListener('submit', (event) => {
    alert();
    event.preventDefault()
    contador.innerHTML = Number(contador.innerHTML) + 1;
});*/

submittag.addEventListener("pointerup", (event2) => {
    event2.preventDefault();
    contador.innerHTML = Number(contador.innerHTML) + 1;
    
    /*---other variables------------------------------------------------------------------------------------------------*/
    let errors = "";
    let proceedd = false;
    let regexjscheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; /*Email Validation Regex Javascript*/ 
    

    /*---Full Name check in box-------------------------------------------------------------------------------------*/
    if (nametag.value.length <= 0) {
        nameforms.innerHTML ='<label for="name" class="name-letter" id="nameform">Full Name *</label>';
        nametag.style.border = "1px solid blue";
        errors += "Error: invalid name not correct <br>";
        proceedd = true;
      } 
      else {
        nameforms.innerHTML = '<label for="name" class="name-letter" id="nameform">Full Name *</label>';
        nametag.style.border = "0px solid transparent";
      }
    
    /*---email check in box with regex email check JS----------------------------------------------------------------*/
    if (!regexjscheck.test(emailtag.value)) {
        emailforms.innerHTML = '<label for="email" class="email-letter" id="emailform">Email</label>';
        emailtag.style.border = "1px solid blue";
        errors += "Error: invalid email<br>";
        proceedd = true;
      } 
      else {
        emailforms.innerHTML = '<label for="email" class="email-letter" id="emailform">Email</label>';
        emailtag.style.border = "0px solid transparent";
      }
    
    /*---phone check in box ---------------------*--------------------------------------------------------------------*/
    
    if (phonetag.value[0] !== "+") {
        phoneforms.innerHTML = '<label for="phone" class="phone-letter" id="phone">Phone</label>';
        phonetag.style.border = "1px solid blue";
        errors += "Error: invalid information, start '+'<br>";
        proceedd = true;
      } 
      else {
        phoneforms.innerHTML = '<label for="phone" class="phone-letter" id="phone">Phone</label>';
        phonetag.style.border = "0px solid transparent";
      }
    
    /*---Message check in box ---------------------*--------------------------------------------------------------------*/
   
    if (messagetag.value.length < 50) {
        messageforms.innerHTML = '<label for="message" class="message-letter" id="messageform">Message</label>';
        messagetag.style.border = "1px solid blue";
        errors += "Error: invalid message, minimum 50 characters <br>";
        proceedd = true;
      } 
      else {
        messageforms.innerHTML ='<label for="message" class="message-letter" id="messageform">Message</label>';
        messagetag.style.border = "0px solid transparent";
      }
    
      /*---check in proceeds or not and clean form------------------------------------------------------------------*/
   
      if (proceedd) {
        errordisplay.style.color = "#072AC8";
        errordisplay.innerHTML = errors;
      } 
        else {
        nametag.style.border = "0px solid transparent";
        nameforms.innerHTML = '<label for="name" class="name-letter" id="nameform">Full Name *</label>';
        messagetag.style.border = "0px solid transparent";
        messageforms.innerHTML ='<label for="message" class="message-letter" id="messageform">Message</label>';
        phoneforms.innerHTML = '<label for="phone" class="phone-letter" id="phone">Phone</label>';
        phonetag.style.border = "0px solid transparent";
        emailtag.style.border = "0px solid transparent";
        emailforms.innerHTML = '<label for="email" class="email-letter" id="emailform">Email</label>';



    /*----------FETCH API----------------------------------------------------------------------------------*/
    const url = 'https://database.deta.sh/v1/a0wwnrex/contactmessages/items';

    const datos = {
        name: nametag.value,
        email: emailtag.value,
        phone: phonetag.value,
        message: messagetag.value
    };
        
    const body = { item: datos };
        
    const fetchParams = {
        method: 'POST',
        headers: {
           "Accept": 'application/json',
           "Content-Type": 'application/json',
            "X-API-Key": 'a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H'
        },
        body: JSON.stringify(body)
    };
        fetch(url, fetchParams)
            .then(response => {
                if (response.ok) return response.json();
            })
            .then(json => {
                console.log(json);
            });
    
   }
});

        
