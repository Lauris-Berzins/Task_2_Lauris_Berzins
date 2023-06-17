var forward_button = document.querySelector(".forward_button");
var back_button = document.querySelector(".back_button");

var paragraph1 = document.querySelector("first_quote");
var paragraph2 = document.querySelector("2_quote");
var paragraph3 = document.querySelector("3_quote");
var paragraph4 = document.querySelector("4_quote");
var paragraph5 = document.querySelector("5_quote");

let revolving = 0

if (revolving===0){
    paragraph1.classList.toggle("drag_in");

}else if (revolving==1){
    paragraph2.classList.toggle("dragin");

}else if (revolving==2){
    paragraph3.classList.toggle("dragin");

}else if (revolving==3){
    paragraph4.classList.toggle("dragin");

}else if (revolving==4){
    paragraph5.classList.toggle("dragin");
}

forward_button.addEventListener("click", function(){
    revolving++
});

if (revolving !==0){
    back_button.classList.toggle("gray_out")
    back_button.addEventListener("click", function(){
        revolving = revolving-1
});

}else if(revolving==0){
    back_button.classList.toggle("gray_in")
}

