var albatros = SVG.get('albatros');
var enveloppe = SVG.get('mailclosed');
var mailbox = SVG.get('mailbox');
var mail = SVG.get('mailclicked');
var warning = SVG.get('youvgotmail');
var manchot = SVG.get('manchot');
var mailOp = SVG.get('mailOpened');
var message = SVG.get('text');
var swimmingManchot = SVG.get('swim');
console.log(swimmingManchot);


// l'albatros arrive 
function albatrosFlight(){
    albatros.animate(6000,'>', 0).translate(1085);
}
// descente de l'enveloppe
function postingMail(){
    enveloppe.animate(3000, '>', 0).translate(0,200);
}

// l'enveloppe disparaît
function mailInmailBox(){
    enveloppe.attr({'fill-opacity': 0})
}

//l'oiseau repart
function albatrosLeaves(){
    albatros.animate(6000,'>',0).translate(2500);
}

// alerte : vous avez du courrier 
function warningPopUp(){
    warning.attr({display:""})
    warning.animate().rotate(-10)
}

function mailDelivery(){
    albatrosFlight();
    setTimeout(postingMail, 6000);
    setTimeout(mailInmailBox, 8000);
    setTimeout(albatrosLeaves,9000);
    setTimeout(warningPopUp, 12000);   
}
    
mailDelivery();


// au click sur le warning pop up
warning.click(function() {
    mail.animate(500, '<').attr({display:"",}),
    warning.attr({display:"none"})
 })

// animation du manchot
manchot.delay(4000).animate(1500).translate(190, 150).after(function() {
    this.animate(900).rotate(450);
    this.animate(3000).translate(300);
    
  })

  swimmingManchot.delay(8500,'<',0).attr({display:""}).after(function(){
      this.animate(18000, '-', 0).translate(-1800);
  })
// au click sur l'envelope fermée
  mail.click(function() {
    mailOp.attr({display:""}),
    mail.attr({display:"none"})
 })


 