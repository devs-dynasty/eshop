const productContainer = document.querySelector('#product-container');

// Function to fetch products from API
const fetchProduct = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);

    data.forEach((product) => {
    // Create a div element for each product

      const productDiv = document.createElement('div');
      const productImg = document.createElement('img');
      const productTitle = document.createElement('h4');
      const productPrice = document.createElement('li');
      const productRate = document.createElement('li');

      //   Add a class to the div element
      productDiv.className = 'products';
      productImg.className = 'product-img';
      productTitle.className = 'product-name';
      productPrice.className = 'product-price';
      productRate.className = 'product-rate';

      //   Add the product to the div element
      productImg.src = product.image;
      productTitle.textContent = product.title;
      productPrice.textContent = product.price;
      productRate.textContent = product.rating.rate;

      //   Append the div element to the product container
      productContainer.appendChild(productDiv);
      productDiv.appendChild(productImg);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productRate);
    });
  } catch (error) {
    // Create div for error message
    const errorDiv = document.createElement('div');
    errorDiv.textContent = `An error occurred while fetching products: ${error.message}`;
    errorDiv.classList.add('error');

    // Append errorDiv to productContainer
    productContainer.appendChild(errorDiv);
  }
};

fetchProduct();