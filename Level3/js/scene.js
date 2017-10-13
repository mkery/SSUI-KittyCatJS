
document.addEventListener("DOMContentLoaded", function(event) {
  var katnis = new Cat();
  katnis.addListeners();

  var ground = document.getElementsByClassName("ground")[0];

  var block1 = new MoonBlock("30%", "-60px");
  ground.appendChild(block1.getDiv());

  var block2 = new MoonBlock("30%", "-120px");
  ground.appendChild(block2.getDiv());

  var block3 = new MoonBlock("60%", "-20px");
  ground.appendChild(block3.getDiv());
});
