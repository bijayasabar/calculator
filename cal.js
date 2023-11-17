// Make M+ and M- and MC functional
let string='';
let buttons=document.querySelectorAll(".button");
let input=document.querySelector('input')

Array.from(buttons).forEach( (x)=> {
  x.addEventListener('click', (event)=> {
    
    if(event.target.innerHTML === '='){
      string=eval(string);
      input.value=string;
      
    }
      else if(event.target.innerHTML == 'C'){
      string='';
     input.value=string;
      
    }
    else{
    console.log(event.target);
    string= string+ event.target.innerHTML;
    input.value=string;
      
    }
  })
});
// if we don't use the event parameter inside a func in addEventListener
// it will one print ' u clicked the buton', we won't know the which button we pressed and how many times we clicked
// let string='';
// let tribeni= document.getElementById('lol').addEventListener('click', (r)=>{
//   console.log(r.target);
// string= string+ r.target.innerHTML
//   document.querySelector('input').value=string;
// })
// let aditi= document.getElementById('mumphali').addEventListener('click', (k)=>{
//  // console.log(k.target);
//   // console.log(k.target.innerHTML);
//   string= string+ k.target.innerHTML
//   document.querySelector('input').value=string;
// })