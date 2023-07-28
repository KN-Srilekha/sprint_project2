// Initialize a new ProductsController with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Product Form
const newProductForm = document.querySelector('#newProductForm');

// Add the event listener
newProductForm.addEventListener('submit', (event) => {

    event.preventDefault();
    // select the inputs
    const newProductName = document.querySelector('#newProductName');
    const newProductDescription = document.querySelector('#newProductDescription');
    const newProductImageUrl = document.querySelector('#newProductImageUrl');

    // Get the values of the inputs
    const name = newProductName.value;
    const description = newProductDescription.value;
    const imageUrl = newProductImageUrl.value;

    /*
        Validation code here
    */
    // Add the product to the ProductsController
    productsController.addProduct(name, description, imageUrl);


    newProductName.value = '';
    newProductDescription.value = '';
    newProductImageUrl.value = '';
});
