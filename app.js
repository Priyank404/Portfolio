const links=document.getElementsByClassName("tabLink");
const contents=document.getElementsByClassName("tabContents");
const menu=document.getElementById("slidemenu")

function opentab(tabname){
    for(link of links){
        link.classList.remove("activelink");
    }
    for(content of contents){
        content.classList.remove("activetab");
    }
    
    event.currentTarget.classList.add("activelink")
    document.getElementById(tabname).classList.add("activetab")
}

function openmenu(){
    menu.style.right="0";
}

function closemenu(){
    menu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwVXPZNJTqPfWEXsVYO4LUURW9AAwRxVrrf31MyVamb_eaWCPXlWeoRyw9aqOR_9oaJNg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset();
      })
      .catch(error => console.error('Error!',error.message))
  })


