

(function(){
   'use strict';
   var header=document.querySelector("h3")
   var footer=document.querySelector("h5")
  var answer= document.getElementById("answer")
  var convert=document.getElementById("convert")
   document.addEventListener('keydown',function(eventt){
   var key=eventt.code;
   if(key=="KeyK"){
      header.textContent="kilometer to miles converter"
      footer.textContent="press M to miles to kilometer converter"
      convert.addEventListener('click',function(event){
         event.preventDefault();
         var distance=document.getElementById('kilometer').value;
        var calculation = (distance*1.6).toFixed(2); 
         answer.innerHTML=calculation + " miles"
         
        })
   }
  else if(key=="KeyM"){
      header.textContent="miles to kilometer converter"
      footer.textContent="press K kilometer to miles converter"
      convert.addEventListener('click',function(event){
         event.preventDefault(); 
         var distance=document.getElementById('kilometer').value;
        console.log(distance)
        var calculation = (distance*0.621).toFixed(2);  
        answer.innerHTML=calculation + " kilometer"
        
        }) 
   }
   })
})();