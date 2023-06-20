var forward_button = document.querySelector(".forward_button");
var back_button = document.querySelector(".back_button");

var paragraph1 = document.querySelector(".first_quote");
var paragraph2 = document.querySelector(".second_quote");
var paragraph3 = document.querySelector(".third_quote");
var paragraph4 = document.querySelector(".forth_quote");
var paragraph5 = document.querySelector(".f_quote");

var variable_list = [paragraph1,paragraph2,paragraph3,paragraph4,paragraph5]

let revolving = 0;


forward_button.addEventListener("click", function() {
    // Remove "dragin" and "dragout" classes from all paragraphs
    for (let i = 0; i < variable_list.length; i++) {
      variable_list[i].classList.remove("dragin", "dragout");
    }
  
    // Add "dragout" class to the current paragraph
    variable_list[revolving].classList.add("dragout");
  
    revolving++;
    if (revolving >= variable_list.length) {
      revolving = 0;
    }
  
    // Add "dragin" class to the new paragraph
    variable_list[revolving].classList.add("dragin");
  
    // Update the quote number
    quoteNumber.textContent = revolving + 1;
  });
  
  back_button.addEventListener("click", function() {
    // Remove "dragin" and "dragout" classes from all paragraphs
    for (let i = 0; i < variable_list.length; i++) {
      variable_list[i].classList.remove("dragin", "dragout");
    }
  
    // Add "dragout" class to the current paragraph
    variable_list[revolving].classList.add("dragout");
  
    revolving--;
    if (revolving < 0) {
      revolving = variable_list.length - 1;
    }
  
    // Add "dragin" class to the new paragraph
    variable_list[revolving].classList.add("dragin");
  
    // Update the quote number
    quoteNumber.textContent = revolving + 1;
  });


