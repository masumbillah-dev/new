// console.log("Srcipt Loaded")

// let text = $ ("input").val();
// $ ("button").click(function(){
//  let inputvalue = $("input").val();
//  $("h4").text(inputvalue);
// });

let text = $("input").val();

$("input").keyup(function(){
 let inputvalue = $("input").val();
 $("h4").text(inputvalue);
});

$("button").click(function () {

    let text = $("#name").val();

    if (text === "") {
        $("#error").text("Input field is required");
        $("h1").text("");
    } else {
        $("#error").text("");
        $("h1").text(text);
    }

});