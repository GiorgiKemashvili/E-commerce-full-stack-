// js/vue-app.js
const { createApp } = Vue;

createApp({
  data() {
    return {
      products: [],
      newProduct: { name: '', price: 0, image: '' },
      loading: false,
      error: null
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.loading = true;
      fetch('/api/products')
        .then(r => r.json())
        .then(data => {
          this.products = data;
          this.loading = false;
        })
        .catch(err => {
          console.error(err);
          this.error = 'Failed to load products';
          this.loading = false;
        });
    },
    addProduct() {
      if (!this.newProduct.name) return;
      fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.newProduct)
      })
      .then(r => r.json())
      .then(p => {
        if (p.error) throw new Error(p.error);
        this.products.push(p);
        this.newProduct = { name: '', price: 0, image: '' };
      })
      .catch(err => {
        console.error(err);
        this.error = 'Failed to add product';
      });
    }
  }
}).mount('#app');


