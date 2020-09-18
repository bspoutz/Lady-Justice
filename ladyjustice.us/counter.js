

var counter = 0


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function updateVisitCount(){
    
    await fetch("https://api.countapi.xyz/update/ladyjustice.us/BrianSpoutz/?amount=1").then(res => res.json()).then(res => {
        counter = res.value
    })
    
}


$(document).ready(function(){

$('.counter').each( async function() {
  var $this = $(this),
      newc = await updateVisitCount()
      countTo = counter + 2212;

    console.log(counter)
    
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(  numberWithCommas(Math.floor(this.countNum)) );
    },
    complete: function() {
      $this.text(      numberWithCommas(this.countNum)      );
        updateCounter()
    }
  });
});
});


async function updateCounter(){
    
    while(true){
        
        await fetch("https://api.countapi.xyz/get/ladyjustice.us/BrianSpoutz").then(res => res.json()).then(res => {
            counter = res.value
        })
        
        await sleep(8000);
        
        c =  document.getElementById("count");
        
        c.innerHTML =   numberWithCommas(counter + 2212)

        console.log(counter)
        
    }
        
        
    
    
}
