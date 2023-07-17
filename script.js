/* Location  GPS*/

let current_location = document.getElementById("location");
const success = (position) => {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  
  current_location.textContent = `Longitute = ${longitude} \n latitude = ${latitude}`;
}
const error = (error) => {
  current_location.textContent = `Couldn't access your location \n Reason: ${PositionError.message}`;
}
const getLocation = () => {
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(success,error);
  else 
    current_location.textContent = `Your browser does not support this feature`;
}


function added(){
   document.getElementById("add").style.opacity = '1';
}

/* Slides*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  

}


/* Filter From Here*/
function search() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("products-id");
  const product = document.querySelectorAll(".product-container");
  const pname = document.getElementsByTagName("h2");

   for(var i = 0; i < pname.length; i++){
      let match = product[i].getElementsByTagName('h2')[0];

      if(match){
        let textvalue = match.textContent || match.innerHTML;

        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
              product[i].style.display = "";
        }else{
          product[i].style.display = "none";
        }
      }

   }

}

/* Pop Up Script */
function signinpopup(){
  window.open("pop.html",'about',"width=900,height=700,scrollbars");
}