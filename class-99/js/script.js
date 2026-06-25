// console.log("Srcipt Loaded")

// let text = $ ("input").val();
// $ ("button").click(function(){
//  let inputvalue = $("input").val();
//  $("h4").text(inputvalue);
// });
const form = $('form');
form.submit(function(e){
    e.preventDefault();
    let inputValue = $("input").val();
    if(inputValue == "") {
        $('small').text("Input is required").css('color', 'red');
    } else {
         $('small').text(inputValue);
         this.submit();    
         alert("Form submitted")   
    }
});

