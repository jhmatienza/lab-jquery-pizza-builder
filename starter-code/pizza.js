/// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
  
  //Change button styles

  $("button").click(function() {
    $(this).toggleClass("active");
  });

  //Total price

  var totalPrice = 21;

  //Prices of each product

  var prices = {
    pepperoni: 1,
    mushroom: 1,
    greenPeppers: 1,
    sauce: 3,
    crust: 5
  };

  //Peperonni

  $("button.btn-pepperonni").click(function() {
    $("section.pep").toggle();
    $("li:contains(pepperonni)").toggle();

    if (!$("button.btn-pepperonni").hasClass("active")) {
      totalPrice -= prices.pepperoni;
      $(".price strong").text("$" + totalPrice);
    } else {
      totalPrice += prices.pepperoni;
      $(".price strong").text("$" + totalPrice);
    }
  });

  //Mushrooms

  $("button.btn-mushrooms").click(function() {
    $("section.mushroom").toggle();
    $("li:contains(mushrooms)").toggle();

    if (!$("button.btn-mushrooms").hasClass("active")) {
      totalPrice -= prices.mushroom;
      $(".price strong").text("$" + totalPrice);
    } else {
      totalPrice += prices.mushroom;
      $(".price strong").text("$" + totalPrice);
    }
  });

  //Green peppers

  $("button.btn-green-peppers").click(function() {
    $("section.green-pepper").toggle();
    $("li:contains(green peppers)").toggle();

    if (!$("button.btn-green-peppers").hasClass("active")) {
      totalPrice -= prices.greenPeppers;
      $(".price strong").text("$" + totalPrice);
    } else {
      totalPrice += prices.greenPeppers;
      $(".price strong").text("$" + totalPrice);
    }
  });

  //White souce

  $("button.btn-sauce").click(function() {
    $("section.sauce-white").toggle();
    $("li:contains(white sauce)").toggle();

    if (!$("button.btn-sauce").hasClass("active")) {
      totalPrice -= prices.sauce;
      $(".price strong").text("$" + totalPrice);
    } else {
      totalPrice += prices.sauce;
      $(".price strong").text("$" + totalPrice);
    }
  });

  //Gluten free crust

  $("button.btn-crust").click(function() {
    $("section.crust").toggleClass("crust-gluten-free");
    $("li:contains(gluten-free crust)").toggle();

    if (!$("button.btn-crust").hasClass("active")) {
      totalPrice -= prices.crust;
      $(".price strong").text("$" + totalPrice);
    } else {
      totalPrice += prices.crust;
      $(".price strong").text("$" + totalPrice);
    }
  });
});
