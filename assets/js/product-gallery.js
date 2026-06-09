document.addEventListener('DOMContentLoaded', function () {
  loadGallery('./assets/data/products.json', 'product-gallery-row', 'achieves');
  loadGallery('./assets/data/countertops.json', 'countertop-gallery-row', 'countertops');
  loadGallery('./assets/data/ladders.json', 'ladder-gallery-row', 'ladders');
  loadGallery('./assets/data/tables.json', 'table-gallery-row', 'tables');
  loadGallery('./assets/data/bathrooms.json', 'bathroom-gallery-row', 'bathrooms');
});

function loadGallery(jsonPath, containerId, imageFolder) {
  fetch(jsonPath)
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = '';

      renderProducts(container, products, imageFolder);
    })
    .catch(err => console.error('Error loading gallery:', err));
}

function renderProducts(container, products, imageFolder) {
  if (products.length <= 4) {
    products.forEach(p => container.appendChild(createCard(p, imageFolder)));
    return;
  }

  const slider = createSlider(products, imageFolder);
  container.appendChild(slider);
}

function createSlider(products, imageFolder) {
  const slider = document.createElement('div');
  slider.className = 'product-slider';

  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'product-slide';

    item.innerHTML = cardHTML(p, imageFolder);
    slider.appendChild(item);
  });

  return slider;
}

function createCard(product, imageFolder) {
  const col = document.createElement('div');
  col.className = 'col-md-3 col-sm-6';
  col.innerHTML = cardHTML(product, imageFolder);
  return col;
}

function cardHTML(p, imageFolder) {
  return `
    <div class="product-item">
      <div class="product-image-wrapper">
        <img src="./assets/images/products/${imageFolder}/${p.image}" alt="${p.name}">
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-description">${p.description}</div>
    </div>
  `;
}