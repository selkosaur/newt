
$(document).ready(function () {
var totalBGs = 6;
var rnd = Math.floor(Math.random() * totalBGs) + 1; // 1 - 15
  $("body").css({ backgroundImage: "url(bgs/" + rnd + ".webp)" });
});
//"C:\Users\sophi\OneDrive\Documents\2 not school things\jw\formulas and script\chrome ext\so's new tab\bgs\1.webp"
