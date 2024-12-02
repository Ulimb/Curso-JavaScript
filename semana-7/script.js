// Selección de elementos del DOM
const productForm = document.getElementById('productForm');
const productTableBody = document.querySelector('#productTable tbody');

// Lista de productos almacenada en localStorage
let products = JSON.parse(localStorage.getItem('products')) || [];

// Función para renderizar los productos en la tabla
function renderProducts() {
  productTableBody.innerHTML = '';
  products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.description}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.stock}</td>
      <td>
        <button class="btn btn-warning btn-sm" onclick="editProduct(${index})">Editar</button>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Eliminar</button>
      </td>
    `;
    productTableBody.appendChild(row);
  });
}

// Función para agregar un nuevo producto
productForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newProduct = {
    name: document.getElementById('productName').value,
    description: document.getElementById('productDescription').value,
    price: parseFloat(document.getElementById('productPrice').value),
    stock: parseInt(document.getElementById('productStock').value, 10),
  };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
  productForm.reset();
});

// Función para eliminar un producto
function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

// Función para editar un producto
function editProduct(index) {
  const product = products[index];
  document.getElementById('productName').value = product.name;
  document.getElementById('productDescription').value = product.description;
  document.getElementById('productPrice').value = product.price;
  document.getElementById('productStock').value = product.stock;

  deleteProduct(index);
}

// Inicializar renderización de productos
renderProducts();