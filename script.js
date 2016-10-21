// Here's the item I already added

//var hamSandwhich = {
//  name: "ham sanwhich",
//  price: 10,
//  weight: "2lbs",
//  picture: "https://cbswingbowl2.files.wordpress.com/2012/01/gentleman-jerry-1.jpg?w=709",
//  rating: "4.5"
//}

//addListItem("product-list", hamSandwhich)

onNewListItem("product-list", function(product) {
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src")

  $(".product-list-container").append(nameHeader, priceHeader, image, detailsList)
})