// Load product gallery dynamically
document.addEventListener('DOMContentLoaded', function() {
  loadProductGallery();
});

function loadProductGallery() {
  fetch('./assets/data/products.json')
    .then(response => response.json())
    .then(products => {
      const galleryRow = document.getElementById('product-gallery-row');
      if (!galleryRow) return;
      
      // Clear existing content
      galleryRow.innerHTML = '';
      
      // Create gallery items
      products.forEach(product => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-3 col-sm-6';
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'product-item';
        
        const img = document.createElement('img');
        img.src = `./assets/images/products/${product.image}`;
        img.alt = product.name;
        img.className = 'img-responsive';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'product-name';
        nameDiv.textContent = product.name;
        
        const descDiv = document.createElement('div');
        descDiv.className = 'product-description';
        descDiv.textContent = product.description;
        
        itemDiv.appendChild(img);
        itemDiv.appendChild(nameDiv);
        itemDiv.appendChild(descDiv);
        colDiv.appendChild(itemDiv);
        galleryRow.appendChild(colDiv);
      });
    })
    .catch(error => console.error('Error loading products:', error));
}
