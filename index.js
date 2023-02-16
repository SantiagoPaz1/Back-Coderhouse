class ProductManager {
    constructor() {
      this.products = [];
    }
  
    agregarProduct(title, description, price, thumbnail, id, stock) {
      const product = { title, description, price, thumbnail, id, stock };
      this.products.push(product);
    }
  
    removerProduct(id) {
      this.products = this.products.filter(product => product.id !== id);
    }
  
    actualizarProduct(id, updates) {
      const productIndex = this.products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        this.products[productIndex] = { ...this.products[productIndex], ...updates };
      }
    }
  
    getProductById(id) {
      return this.products.find(product => product.id === id);
    }
   
  }
  
  // Chequear que no se repita el campo "id"

  const productoExistente = this.products.find(p => p.id === product.id);
  if (productoExistente) {
    console.error(`El código "${product.id}" ya está en uso`);
    return;
  }

  // Chequear que todos los campos sean obligatorios

  if (!product.title || !product.description || !product.price || !product.thumbnail || !product.id || !product.stock) {
    console.error("No se pueden dejar campos vacíos");
    return;
  }