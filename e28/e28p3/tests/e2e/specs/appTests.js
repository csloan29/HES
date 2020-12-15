// https://docs.cypress.io/api/introduction/api.html

let testProduct1 = {
	"id": 3,
	"title": "Peak Design Travel Backpack 45L",
	"price": 299.95,
	"tagline": "A versatile, durable, and beautiful carry-on travel backpack driven by a simple truth: no two trips are the same.",
	"description": "Features top, side, front and rear access via intuitively placed weatherproof zips. Meets international carry-on size requirements, but expands to be a 45L gear-hauler and collapses to be a 35L day bag, making it unmatched for 1-bag travel. Tons of internal and external pockets, plus a main cavity that’s divisible via a zippered mesh sleeve.",
	"image": "https://cdn.shopify.com/s/files/1/2986/1172/products/DA4A9360_43514804811_o_979db792-a40b-4c45-ba82-d73c80c67e1d_1024x1024.jpg?v=1598564801",
	"link": "https://www.peakdesign.com/products/travel-backpack/"
};

let testProduct2 = {
	"id": 9,
	"title": "WANDRD HEXAD Access Duffel Backpack",
	"price": 259.00,
	"tagline": "Built for 3-5 day trips, this bag is weather-resistant, durable, and extremely functional.",
	"description": "The HEXAD Access Duffel Backpack is a carry-on sized backpack/duffel hybrid that features a clamshell opening and is the perfect travel bag, whether you're a photographer or not.",
	"image": "https://cdn.shopify.com/s/files/1/0255/0218/7600/products/access_standing_straps_out_2000x_318a5f62-3ff0-4999-a446-678f09cd2032_600x.png?v=1575923652",
	"link": "https://www.wandrd.com/products/hexad-access-duffel#"
};

let testUser = {
	name: 'Carter Sloan',
	email: 'carter@gmail.com',
	password: 'asdfasdf'
};

describe('App Bar Tests', () => {

	it('Visits the home page from the appbar', () => {
		cy.visit('/cart');
		cy.get('[data-test="appbar-home"]').click();
		cy.contains('h1', 'Featured Packs');
	});

	it('Visits the cart page from the appbar', () => {
		cy.visit('/');
		cy.get('[data-test="appbar-cart"]').click();
		cy.contains('h1', 'Your Cart');
	});

});

describe('Home Page Tests', () => {

	//test visiting home page and successful load
	it('Visits the home page', () => {
		cy.visit('/');
		cy.contains('[data-test="home-page-title"]', 'Featured Packs');
	});

	//test display of all featured products
	it('shows all featured products', () => {
		cy.visit('/');
		cy.get('[data-test="product-card-title"]').should('have.length', 9);
		cy.contains('[data-test="product-card-title"]', testProduct1.title);
	});

	//test navigation to product page
	it('contains product cards that can navigate to product page', () => {
		cy.get('[data-test="product-card-image"]').contains(testProduct1.title).click();
		cy.contains('[data-test="product-page-title"]', testProduct1.title);
	});

});

describe('Product Page Tests', () => {

	it('visits the product page', () => {
		cy.visit('/product/' + testProduct1.id);
		cy.contains('[data-test="product-page-title"]', testProduct1.title);
	});

	it('adds product to cart', () => {
		cy.visit('/product/' + testProduct1.id);
		cy.get('[data-test="product-page-add-to-cart-button"]').click();
		cy.contains('[data-test="appbar-cart-badge"]', 1);
	});
});

describe('Cart Page Tests', () => {

	it('adds items to cart and removes them with decrement button when quantity is 1', () => {

		// Add to cart from product page
		cy.visit('/product/' + testProduct1.id);
		cy.get('[data-test="product-page-add-to-cart-button"]').click();
		cy.contains('[data-test="appbar-cart-badge"]', 1);

		// Confirm cart shows product
		cy.get('[data-test="appbar-cart"]').click();
		cy.contains('[data-test="cart-product-title"]', testProduct1.title);

		// Remove from cart
		cy.get('[data-test="cart-product-decrement-button"]').click();
		cy.contains('[data-test="cart-subtotal"]', 0);
	});

	it('increments items in cart', () => {
		// Add to cart from product page
		cy.visit('/product/' + testProduct1.id);
		cy.get('[data-test="product-page-add-to-cart-button"]').click();
		cy.contains('[data-test="appbar-cart-badge"]', 1);

		// Confirm cart shows product
		cy.get('[data-test="appbar-cart"]').click();
		cy.contains('[data-test="cart-product-title"]', testProduct1.title);

		// Remove from cart
		cy.get('[data-test="cart-product-increment-button"]').click();
		cy.contains('[data-test="cart-subtotal"]', testProduct1.price * 2);
	});

	it('decrements items in cart', () => {
		// Add to cart from product page
		cy.visit('/product/' + testProduct1.id);
		cy.get('[data-test="product-page-add-to-cart-button"]').click();
		cy.contains('[data-test="appbar-cart-badge"]', 1);

		// Confirm cart shows product
		cy.get('[data-test="appbar-cart"]').click();
		cy.contains('[data-test="cart-product-title"]', testProduct1.title);

		// Remove from cart
		cy.get('[data-test="cart-product-increment-button"]').click();
		cy.contains('[data-test="cart-subtotal"]', testProduct1.price * 2);
	});
});
