const productContainer = document.querySelector('#product-container');

// Function to fetch products from API
const fetchProduct = async () => {
  try {
    // Check if data is already cached in local storage
    const cachedData = localStorage.getItem('cachedProducts');
    let data;

    if (cachedData) {
      // If data is cached, parse it
      data = JSON.parse(cachedData);
    } else {
      // Fetch data from the API
      const response = await fetch('https://fakestoreapi.com/products');
      data = await response.json();

      // Cache the data in local storage
      localStorage.setItem('cachedProducts', JSON.stringify(data));
    }

    // Loop through the data and create product elements
    data.forEach((product) => {
      // Create a div element for each product
      const productDiv = document.createElement('div');
      const productImg = document.createElement('img');
      const productTitle = document.createElement('h4');
      const productPrice = document.createElement('li');
      const productRate = document.createElement('li');

      // Add classes to the elements
      productDiv.className = 'product';
      productImg.className = 'product-img';
      productTitle.className = 'product-name';
      productPrice.className = 'product-price';
      productRate.className = 'product-rate';

      // Set content for the elements
      productImg.src = product.image;
      productTitle.textContent = product.title;
      productPrice.textContent = `Price: $${product.price}`;
      productRate.textContent = `Rating: ${product.rating.rate}`;

      // Append elements to the product container
      productContainer.appendChild(productDiv);
      productDiv.appendChild(productImg);
      productDiv.appendChild(productTitle);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productRate);
    });
  } catch (error) {
    // Handle errors
    const errorDiv = document.createElement('div');
    errorDiv.textContent = `An error occurred while fetching products: ${error.message}`;
    errorDiv.classList.add('error');
    productContainer.appendChild(errorDiv);
  }
};

fetchProduct();
