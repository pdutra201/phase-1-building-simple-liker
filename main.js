// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMsg = document.querySelector('#modal')
errorMsg.className = "hidden"

const likeBtn = document.querySelectorAll(".like-glyph")

for(i = 0; i < likeBtn.length; i++){
  likeBtn[i].addEventListener("click", (e) => {
    mimicServerCall()
    .then(() => {
      if(e.target.textContent === EMPTY_HEART){
        e.target.textContent = FULL_HEART
        e.target.className = 'activated-heart'
      }
      else{
        e.target.textContent = EMPTY_HEART
        e.target.className = ''
      }
    })
    .catch(() => {
      errorMsg.className = ''
      setTimeout(function(){
      errorMsg.className = 'hidden'
     }, 300)
    })
    
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
