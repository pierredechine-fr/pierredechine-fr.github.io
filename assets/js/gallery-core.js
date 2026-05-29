function loadGallery(jsonPath, containerId) {
  fetch(jsonPath)
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById(containerId);
      if (!container) return;

      container.innerHTML = '';
      renderProducts(container, products);
    })
    .catch(err => console.error(err));
}

function renderProducts(container, products) {
  if (products.length <= 4) {
    products.forEach(p => container.appendChild(createCard(p)));
    return;
  }

  container.appendChild(createSlider(products));
}

function createSlider(products) {
  const slider = document.createElement('div');
  slider.className = 'product-slider';

  products.forEach(p => {
    const item = document.createElement('div');
    item.className = 'product-slide';
    item.innerHTML = cardHTML(p);
    slider.appendChild(item);
  });

  return slider;
}

function createCard(product) {
  const col = document.createElement('div');
  col.className = 'col-md-3 col-sm-6';
  col.innerHTML = cardHTML(product);
  return col;
}

function cardHTML(p) {
  return `
    <div class="product-item">
      <div class="product-image-wrapper">
        <img src="./assets/images/products/${p.image}" alt="${p.name}">
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-description">${p.description}</div>
    </div>
  `;
}