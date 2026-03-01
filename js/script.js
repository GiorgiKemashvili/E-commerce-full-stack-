// =======================================
// 🌍 ქვეყნის & ვალუტის არჩევა
// =======================================
function updateCountry(country, currency) {
  const button = document.getElementById("country-btn");
  if (button) {
    button.innerHTML = `<strong>${country} (${currency})</strong>`;
  }
}

// =======================================
// 🎧 HERO კარუსელის გადაფურცვლა (მხოლოდ ინდექსი)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#heroCarousel");
  if (!carousel || !window.bootstrap) return;

  let startX = 0;

  carousel.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  carousel.addEventListener("mouseup", (e) => {
    const endX = e.clientX;
    const diff = startX - endX;
    const bsCarousel = bootstrap.Carousel.getInstance(carousel);

    if (!bsCarousel) return;

    if (diff > 50) {
      bsCarousel.next();
    } else if (diff < -50) {
      bsCarousel.prev();
    }
  });
});

// =======================================
// 🖼 FEATURED COLLECTION CAROUSEL (INDEX)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleCollection");
  const bsCarouselElement = document.querySelector("#collectionCarousel");
  const customCarousel = document.querySelector(".featured-carousel");

  if (!toggleBtn || !bsCarouselElement || !customCarousel || !window.bootstrap)
    return;

  const bsCarousel = new bootstrap.Carousel(bsCarouselElement);
  let showingFirst = true;
  let isDragging = false;
  let startX = 0;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (showingFirst) {
      bsCarousel.next();
      customCarousel.style.transform = "translateX(-100%)";
      toggleBtn.textContent = "Back";
    } else {
      bsCarousel.prev();
      customCarousel.style.transform = "translateX(0)";
      toggleBtn.textContent = "View all Sales";
    }

    showingFirst = !showingFirst;
  });

  // Mouse drag on BS carousel
  bsCarouselElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  bsCarouselElement.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    if (e.pageX < startX - 50) {
      bsCarousel.next();
      isDragging = false;
    } else if (e.pageX > startX + 50) {
      bsCarousel.prev();
      isDragging = false;
    }
  });

  bsCarouselElement.addEventListener("mouseup", () => (isDragging = false));
  bsCarouselElement.addEventListener("mouseleave", () => (isDragging = false));

  // Mouse drag on custom carousel
  customCarousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  customCarousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;

    if (diff < -50 && showingFirst) {
      customCarousel.style.transform = "translateX(-100%)";
      bsCarousel.next();
      toggleBtn.textContent = "Back";
      showingFirst = false;
      isDragging = false;
    } else if (diff > 50 && !showingFirst) {
      customCarousel.style.transform = "translateX(0)";
      bsCarousel.prev();
      toggleBtn.textContent = "View all Sales";
      showingFirst = true;
      isDragging = false;
    }
  });

  customCarousel.addEventListener("mouseup", () => (isDragging = false));
  customCarousel.addEventListener("mouseleave", () => (isDragging = false));
});

// =======================================
// ⏮/⏭ FEATURED SLIDER BUTTONS (INDEX)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slider = document.querySelector(".featured-carousel");
  const slides = document.querySelectorAll(".featured-slide");

  if (!prevButton || !nextButton || !slider || slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSliderPosition() {
    const slideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
  }

  function goToPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
  }

  nextButton.addEventListener("click", goToNextSlide);
  prevButton.addEventListener("click", goToPrevSlide);
});

// =======================================
// 🏷 BRAND SELECTOR (INDEX)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("main-brands");
  const allBrandBoxes = document.querySelectorAll("#all-brands .brand-select");

  if (!mainContainer || allBrandBoxes.length === 0) return;

  allBrandBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const img = box.querySelector("img");
      if (!img) return;

      const imgSrc = img.src;
      const alreadyExists = Array.from(
        mainContainer.querySelectorAll("img")
      ).some((i) => i.src === imgSrc);

      if (!alreadyExists) {
        const newBox = box.cloneNode(true);
        newBox.classList.remove("brand-select");
        mainContainer.appendChild(newBox);
      }
    });
  });
});

// =======================================
// 🖼 PRODUCT THUMBNAILS + COLOR SWATCHES
// =======================================
function activateThumbnailClicks() {
  document.querySelectorAll(".product-thumbs img").forEach((thumb) => {
    thumb.addEventListener("click", function () {
      const mainImage = document.getElementById("main-image");
      if (mainImage) {
        mainImage.src = this.src;
      }

      document
        .querySelectorAll(".product-thumbs img")
        .forEach((img) => img.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Run once for existing thumbs
  activateThumbnailClicks();

  // Color swatches -> change images
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", function () {
      document
        .querySelectorAll(".color-swatch")
        .forEach((s) => s.classList.remove("active"));
      this.classList.add("active");

      const mainImageSrc = this.getAttribute("data-main");
      const thumbImageSrcs = this.getAttribute("data-thumbs");
      const mainImage = document.getElementById("main-image");

      if (mainImage && mainImageSrc) {
        mainImage.src = mainImageSrc;
      }

      const thumbsContainer = document.querySelector(".product-thumbs");
      if (thumbsContainer && thumbImageSrcs) {
        const newThumbs = thumbImageSrcs.split(",");
        thumbsContainer.innerHTML = "";

        newThumbs.forEach((src, index) => {
          const img = document.createElement("img");
          img.src = src.trim();
          img.alt = "thumb";
          if (index === 0) img.classList.add("active");
          thumbsContainer.appendChild(img);
        });

        activateThumbnailClicks();
      }
    });
  });
});

// =======================================
// ➕/➖ QUANTITY (PRODUCT PAGE)
// =======================================
function updateQty(change) {
  const qtyInput = document.getElementById("quantity");
  if (!qtyInput) return;

  let qty = parseInt(qtyInput.value || "1", 10);
  qty += change;
  if (qty < 1) qty = 1;
  qtyInput.value = qty;
}

// =======================================
// 🔍 IMAGE ZOOM (PRODUCT PAGE)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".zoom-container");
  if (!container) return;

  const image = container.querySelector(".zoom-image");
  if (!image) return;

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / container.offsetWidth) * 100;
    const yPercent = (y / container.offsetHeight) * 100;

    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    image.style.transform = "scale(2)";
  });

  container.addEventListener("mouseleave", () => {
    image.style.transformOrigin = "center center";
    image.style.transform = "scale(1)";
  });
});

// =======================================
// 🔍 SEARCH BAR (DESKTOP + MOBILE)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const mobileSearchInput = document.getElementById("searchInputMobile");
  const mobileSearchButton = document.getElementById("searchButtonMobile");

  function bindSearch(input, button) {
    if (!input || !button) return;
    button.addEventListener("click", () => {
      const query = input.value.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(
          query
        )}`;
      }
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") button.click();
    });
  }

  bindSearch(searchInput, searchButton);
  bindSearch(mobileSearchInput, mobileSearchButton);
});

// =======================================
// 🛒პროდუქტების ჩატვირთვა (გამოიყენება ღილაკების + ძიების მიერ)
// =======================================
async function loadProducts(category = "", search = "") {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    let products = await response.json();

    // გაფილტრო კატეგორიის მიხედვით
    if (category) {
      const cat = category.toLowerCase();
      products = products.filter(
        (p) => p.category && p.category.toLowerCase() === cat
      );
    }

    // გაფილტრო საძიებო სიტყვების მიხედვით
    if (search) {
      const s = search.toLowerCase();
      products = products.filter((p) => {
        const name = p.name ? p.name.toLowerCase() : "";
        const cat = p.category ? p.category.toLowerCase() : "";

        return (
          name.includes(s) ||
          cat.includes(s) ||
          (s === "tv" && cat === "tvs") ||
          (s === "tvs" && cat === "tvs") ||
          (s === "speaker" && cat === "speakers") ||
          (s === "speakers" && cat === "speakers") ||
          (s === "headphone" && cat === "headphones") ||
          (s === "headphones" && cat === "headphones")
        );
      });
    }

    const productList = document.getElementById("product-list");
    if (!productList) return;

    productList.innerHTML = "";

    if (products.length === 0) {
      productList.innerHTML = `
        <div class="text-center mt-5">
          <h4 class="text-danger fw-bold">No products found</h4>
          <p class="text-muted">Try another search or category.</p>
        </div>
      `;
      return;
    }

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "card m-2";
      card.style.width = "18rem";

      card.innerHTML = `
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price}</p>
          <button class="btn btn-info purchase-btn text-white">Add to Cart</button>
        </div>
      `;

      productList.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading products:", err);
  }
}

// When on products.html, auto-load using URL params
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  if (!productList) return; // not on products page

  const params = new URLSearchParams(window.location.search);
  const search = params.get("search") || "";
  const category = params.get("category") || "";

  loadProducts(category, search);
});

// =======================================
// ✉ წერილის გამოწერა (INDEX)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.querySelector(".subscribe-btn");
  const subscribeStatus = document.getElementById("subscribe-status");

  if (!subscribeBtn || !subscribeStatus) return;

  // მიიღე მომხმარებლის სახელი ადგილობრივი საცავიდან
  const username = localStorage.getItem("username");

  //  უნიკალური გასაღების შექმა მომხმარებლისთვის
  const userKey = username ? `newsletter_${username}` : "newsletter_guest";

  // ჩატვირთე სტატუსი ადგილობრივი საცავიდან
  if (localStorage.getItem(userKey) === "true") {
    subscribeBtn.disabled = true;
    subscribeBtn.innerHTML = "Joined ✅";
    subscribeStatus.style.display = "inline";
  }

  // დაწკაპუნების დამუშავება
  subscribeBtn.addEventListener("click", () => {
    subscribeBtn.disabled = true;
    subscribeBtn.innerHTML = "Joined ✅";
    subscribeStatus.style.display = "inline";

    localStorage.setItem(userKey, "true");
  });
});


// =======================================
// 🔐 LOGIN / SIGNUP MODAL + ACCOUNT POPUP
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeModal = document.getElementById("closeModal");
  const accountLink = document.querySelector(".my-account");
  const accountPopup = document.getElementById("accountPopup");
  const displayUsername = document.getElementById("displayUsername");

  if (!modal || !loginBtn || !closeModal) return;

  // Open modal
  loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Signup
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.getElementById("signupUsername").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        modal.style.display = "none";
        localStorage.setItem("username", username);
        if (displayUsername) displayUsername.textContent = username;
      }
    });
  }

  // Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      alert(data.message);

      if (data.success) {
        modal.style.display = "none";
        localStorage.setItem("username", data.username);
        if (displayUsername) displayUsername.textContent = data.username;
      }
    });
  }

  // Account popup
  if (accountLink && accountPopup && displayUsername) {
    accountLink.addEventListener("click", (e) => {
      e.preventDefault();
      const username = localStorage.getItem("username");

      if (username) {
        displayUsername.textContent = username;
        accountPopup.style.display =
          accountPopup.style.display === "block" ? "none" : "block";
      } else {
        alert("Please login first!");
      }
    });

    const saved = localStorage.getItem("username");
    if (saved) displayUsername.textContent = saved;
  }
});

// =======================================
// 🛒 CART COUNTER + CLEAR BUTTON
// =======================================
let cartItems = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cartCount = document.getElementById("cart-count");
  const clearBtn = document.getElementById("clear-cart");

  cartItems = parseInt(localStorage.getItem("cartItems") || "0", 10);

  if (cartCount) {
    cartCount.textContent = cartItems;
  }

  if (clearBtn) {
    clearBtn.style.display = cartItems > 0 ? "inline-block" : "none";
  }

  // Global click handler for all .purchase-btn
  document.addEventListener("click", (e) => {
    const btn =
      e.target.classList.contains("purchase-btn") ?
        e.target :
        e.target.closest(".purchase-btn");

    if (!btn || !cartCount) return;

    cartItems++;
    cartCount.textContent = cartItems;
    localStorage.setItem("cartItems", String(cartItems));

    if (clearBtn) {
      clearBtn.style.display = "inline-block";
    }
  });

  if (clearBtn && cartCount) {
    clearBtn.addEventListener("click", () => {
      cartItems = 0;
      localStorage.setItem("cartItems", "0");
      cartCount.textContent = "0";
      clearBtn.style.display = "none";

      clearBtn.innerHTML = "Cleared ✓";
      setTimeout(() => {
        clearBtn.innerHTML = "Clear";
      }, 1000);
    });
  }
});

// =======================================
// 🌐 NAVBAR FADE & SMOOTH SCROLL (INDEX)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("navMenu");
  const toggler = document.querySelector(".navbar-toggler");

  if (!navMenu || !toggler || !window.bootstrap) return;

  navMenu.classList.add("fade-enabled");
  const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });

  toggler.addEventListener("click", () => {
    if (navMenu.classList.contains("show")) {
      navMenu.classList.add("is-fading");
      const onEnd = (ev) => {
        if (ev.propertyName !== "opacity") return;
        navMenu.removeEventListener("transitionend", onEnd);
        navMenu.classList.remove("is-fading");
        bsCollapse.hide();
      };
      navMenu.addEventListener("transitionend", onEnd);
    } else {
      bsCollapse.show();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(
    '.navbar-nav .nav-link[href^="#"]'
  );
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const offset = 100;

  if (!navLinks.length || !navbarCollapse || !window.bootstrap) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        const topPos =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          offset;
        window.scrollTo({ top: topPos, behavior: "smooth" });
      }

      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});

// =======================================
// ℹ მეტის წაკითხვა / დახურვა (ჩვენს შესახებ)
// =======================================
document.addEventListener("DOMContentLoaded", () => {
  const readMoreBtn = document.getElementById("readMoreBtn");
  const closeMoreBtn = document.getElementById("closeMore");
  const moreInfo = document.getElementById("moreInfo");

  if (!readMoreBtn || !closeMoreBtn || !moreInfo) return;

  readMoreBtn.addEventListener("click", () => {
    moreInfo.classList.add("show");
    readMoreBtn.style.display = "inline-block";
  });

  closeMoreBtn.addEventListener("click", () => {
    moreInfo.classList.remove("show");
    readMoreBtn.style.display = "inline-block";
  });
});
