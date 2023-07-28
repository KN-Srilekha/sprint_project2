// Create an ProductsController class
class ProductsController {
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
        this.loadProductsFromLocalStorage();
    }
    // create the addProduct method
    addProduct(name, description, imageUrl) {
        const product = {
            id: this.currentId++, //Increment the currentId
            name: name,
            description: description,
            imageUrl: imageUrl
        };

        // push the product to the products
        this.products.push(product);

        localStorage.setItem("products", JSON.stringify(this.products));
    }

    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products")
        if (storageProducts) {
            const products = JSON.parse(storageProducts)
            for (var i = 0, size = products.length; i < size; i++) {
                const product = products[i];
                this.products.push(product);
            }
        }
    }
}
