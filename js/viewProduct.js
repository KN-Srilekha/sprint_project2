const productsController = new ProductsController(0);

// Creating a function 
function addProductCard(product) {
    const productHTML = '<div class=col-4>\n' +
        '<div class="card" style="width: 15rem;">\n' +
        '    <img src="' + product.imageUrl + '" alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + product.name + '</h5>\n' +
        '        <p class="card-text">' + product.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<br/>';
    const productsContainer = document.getElementById("list-products");
    productsContainer.innerHTML += productHTML;
    //i++; // i = i+1;
    //i+=2; // i = i + 2;
    //str += s; // str = str + s;
    //innerHTML = innerHTML + itemHTML;
}

// function loadStorageSampleData(){
//     if(!localStorage.getItem("items")){
//         const sampleItems = [{'name':'Juice',
//         'img':'https://www.gs1india.org/media/Juice_pack.jpg',
//         'description':'Orange and Apple juice fresh and delicious'},
//         {'name':'Ruffles Chicken',
//         'img':'https://s3-ap-southeast-1.amazonaws.com/www8.fairprice.com.sg/fpol/media/images/product/XL/13086598_LXL1.jpg',
//         'description':'Ruffles Potato Chips - Chicken'}];
//         localStorage.setItem("items", JSON.stringify(sampleItems));
//     }
// }

function loadCardsListFromProductsController() {
    console.log('start');
    for (var i = 0, size = productsController.products.length; i < size; i++) {
        const product = productsController.products[i];
        addProductCard(product);
    }
}

// loadStorageSampleData();
// productsController.loadProductsFromLocalStorage();
loadCardsListFromProductsController();