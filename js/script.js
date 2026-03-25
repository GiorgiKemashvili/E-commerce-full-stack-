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
// 🌐 ენის გადართვა
// =======================================
const translations = {
  ka: {
    country_currency: "ქვეყანა/ვალუტა",
    language: "ენა",
    free_return: "უფასო დაბრუნება 30 დღის განმავლობაში!",
    subscribe_newsletter: "გამოიწერეთ ჩვენი საინფორმაციო ბიულეტენი",
    subscribed: "გამოწერილია",
    search_products: "პროდუქტების ძიება...",
    login: "შესვლა",
    register: "რეგისტრაცია",
    my_account: "ჩემი ანგარიში",
    login_register: "შესვლა / რეგისტრაცია",
    username: "მომხმარებელი",
    email: "ელ.ფოსტა",
    password: "პაროლი",
    clear_cart: "წაშლა",
    home: "მთავარი",
    collection: "კოლექცია",
    about_us: "ჩვენს შესახებ",
    georgia: "საქართველო (GEL ლ)",
    germany: "გერმანია (EUR €)",
    usa: "ამერიკა (USD $)",
    uk: "დიდი ბრიტანეთი (GPB £)",
    read_more_content: "ონლაინ შოპინგის ხელახლა განსაზღვრის ხედვით დაარსებული <strong>Tech Market</strong>გახდა სანდო ადგილი მომხმარებლებისთვის, რომლებიც აფასებენ ინოვაციას, ხარისხსა და დიზაინს. ჩვენ გვჯერა, რომ მომავალი მათ ეკუთვნის, ვინც ტექნოლოგიას იყენებს — და ჩვენი მიზანია, რომ ეს მომავალი ყველასთვის ხელმისაწვდომი გავხადოთ.<br><br>ჩვენი კოლექციის ყველა პროდუქტი — ჭკვიანი მოწყობილობებიდან და აქსესუარებიდან  დაწყებული თანამედროვე ცხოვრების წესისთვის აუცილებელი ნივთებით დამთავრებული — საგულდაგულოდ არის შერჩეული, რაც უზრუნველყოფს მუშაობას, საიმედოობას და ინოვაციურ დიზაინს. ჩვენ ვთანამშრომლობთ წამყვან გლობალურ ბრენდებთან, რომლებიც იზიარებენ ჩვენს გატაცებას ინოვაციებისა და მომხმარებელთა კმაყოფილების მიმართ.<br><br>პროდუქტებს მიღმა, Tech Market წარმოადგენს მოაზროვნეების, შემქმნელებისა და ყოველდღიური მომხმარებლების საზოგადოებას, რომლებსაც სჯერათ,რომ ჩვენი ტექნოლოგიები ცხოვრებას გააუმჯობესებს. ჩვენი გუნდი მუდმივად აუმჯობესებს მომხმარებლის გამოცდილებას სწრაფი მიწოდების, უსაფრთხო გადახდების და რეაგირებადი მხარდაჭერის შეთავაზებით.<br><br><strong>Tech Market-ში ჩვენ მხოლოდ ტექნოლოგიებს არ ვყიდით — ჩვენ ადამიანებს უფრო ჭკვიანურ ცხოვრებასთან ვაკავშირებთ, შთაგონებასა და ინოვაციას ვაკავშირებთ.</strong>",
    jbl_speaker: "JBL პორტის CLIP 5 დინამიკი",
    store1_address: "76 აკაკი წერეთლის გამზირი, თბილისი",
    weekdays_1: "ორშაბათი - პარასკევი: 09:00 - 20:00",
    saturday_1: "შაბათი: 09:00 - 18:00",
    store2_address: "26 ყაზბეგის გამზირი, თბილისი",
    weekdays_2: "ორშაბათი - პარასკევი: 10:00 - 20:00",
    saturday_2: "შაბათი: 11:00 - 21:00",
    sunday: "კვირა: დაკეტილია",
    in_stock_text: "● In stock, {number} quantity",
    hurry_text: "● Hurry! Only {number} left",
    hero1_title: "იგრძენით რიტმი ისე, როგორც არასდროს",
    hero1_desc: "გაეცანით ჩვენს ბრენდულ ყურსასმენებს",
    hero1_btn: "ყურსასმენების შეძენა",
    hero2_title: "ახალი JBL პორტის დინამიკები",
    hero2_desc: "აღმოაჩინეთ ახალი JBL ბრენდის დინამიკები",
    hero2_btn: "დინამიკების შეძენა",
    hero3_title: "წარმოგიდგენთ ახალი ბრენდის ტელევიზორებს",
    hero3_desc: "აღმოაჩინეთ თქვენთვის სასურველი ტელევიზორები",
    hero3_btn: "ტელევიზორების შეძენა",
    welcome: "მოგესალმებით",
    new_tvs: "ახალი ტელევიზორები",
    new_tvs_desc: "ისარგებლეთ<strong>$100 დოლარამდე </strong>ფასდაკლებით ბოლო 4K მოდელებზე.<br><strong>რაოდენობა შეზღუდულია</strong>.",
    buy_tvs: "ტელევიზორები",
    headphones: "ყურსასმენები",
    headphones_desc: "გამოსცადეთ ჩვენი ყურსასმენები პრემიუმ კლასის ჟღერადობით, შექმნილია მუსიკის მოყვარულთათვის.",
    buy_headphones: "ყურსასმენები",
    speakers: "დინამიკები",
    speakers_desc: "აღმოაჩინეთ ჩვენს მიერ შემოთავაზებული მაღალი კლასის დინამიკები",
    buy_speakers: "დინამიკები",
    our_collection: "ჩვენი კოლექცია",
    view_all: "ყველას დათვალიერება",
    android_tvs: "Android ტელევიზორები",
    gaming_headphones: "Gaming ყურსასმენები",
    bluetooth_speakers: "Bluetooth დინამიკები",
    smart_tvs: "Smart ტელევიზორები",
    music_unites: "მუსიკა გვაერთიანებს",
    music_desc: "განიცადე უსაზღვრო სიამოვნება მუსიკის მოსმენით",
    shop_now: "შეიძინეთ ახლავე",
    new_brand_tvs: "ახალი ბრენდის ტელევიზორები",
    tvs_desc: "შთამბეჭდავი ვიზუალებით და გრაფიკით აღფრთოვანებული დარჩებით",
    about_techmarket: "Tech Market-ის შესახებ",
    about_text: "<strong>Tech Market-ში </strong>გვსურს, ტექნოლოგიებისა და ცხოვრების სტილის პროდუქტების უახლესი ინოვაციები პირდაპირ თქვენს ხელში მოგაწოდოთ.ჩვენი მოგზაურობა მარტივი იდეით დაიწყო - მოწინავე ტექნოლოგიები ყველასთვის ხელმისაწვდომი, საიმედო და შთამაგონებელი გაგვეხადა.მძლავრი სმარტფონებიდან და ლეპტოპებიდან დაწყებული, ჭკვიანი სახლის მოწყობილობებითა და ყოველდღიური აქსესუარებით დამთავრებული, ჩვენ ვცდილობთ შემოგთავაზოთ პროდუქტები, რომლებიც აერთიანებს თანამედროვე დიზაინს, ხანგრძლივად მუშაობას და მდგრად ხარისხს.",
    read_more: "წაიკითხეთ მეტი",
    close: "დახურვა",
    our_brands: "ჩვენი ბრენდები",
    view_all_brands: "ყველა ბრენდის ნახვა",
    all_brands: "ყველა ბრენდი",
    new_tvs_title: "ახალი ტელევიზორები",
    new_tvs_subtitle: "აღმოაჩინეთ ტოპ ხარისხის მოდელების ტელევიზორები, რეკომენდებულია ნამდვილი პროფესიონალების მიერ",
    buy_tvs_now: "ტელევიზორების შეძენა",
    in_stock: "მარაგშია",
    hurry: "იჩქარეთ",
    left: "დარჩა",
    most_demanded: "ყველაზე მოთხოვნადი პროდუქტი",
    zoom_hint: "დააკვირდი გამოსახულებას უკეთესად",
    color: "ფერი",
    price: "ფასი",
    add_to_cart: "კალათაში დამატება",
    our_stores: "ჩვენი მაღაზიები",
    visit_main_branch: "ეწვიეთ ჩვენ მთავარ ფილიალს",
    our_second_branch: "ჩვები მეორე ფილიალი",
    show_directions: "მიმართულებების ჩვენება",
    most_searched: "ყველაზე ხშირად მოძიებული პროდუქტები",
    free_delivery: "უფასო მიტანის სერვისი $1000+ შეკვეთებზე",
    delivery_desc: "We deliver in 48 hours max!",
    satisfaction: "კმაყოფილების განცდა ან უკან დაბრუნება და ანაზღაურება",
    return_desc: "უფასო დაბრუნება 14 დღეში!",
    support: "ხელმისაწვდომები ვართ 24/7ზე",
    support_desc: "დაგვიკავშირდით ფოსტაზე, ან მობილურ ტელეფონზე",
    secure_payment: "100% დაცული გადახდა",
    payment_desc: "Visa, Mastercard, Amex, PayPal",
    additional_info: "დამატებითი ინფორმაცია",
    additional_text: "ისარგებლეთ ონლაინ შოპინგით ჩვენ ვებ-გვერდზე ან ესტუმრეთ ჩვენს ფილიალებს თბილისში, სადაც ჩვენი პროფესიონალი გუნდი დაგეხმარებათ საუკეთესო პროდუქტის არჩევაში.",
    sponsors: "მადლობა ჩვენს სპონსორებს",
    copyright: "© 2025 Tech Market<br>Powered by Google",
    popular_collection: "პოპულარული კოლექცია",
    speakers_list: "დინამიკები",
    audio_devices: "Audio მოწყობილობები",
    headphones_list: "ყურსასმენები",
    mini_studio: "მინი სტუდია",
    gaming_headphones_list: "Gaming ყურსასმენები",
    branded_tvs: "ბრენდული ტელევიზორები",
    more_info: "შემდეგი ინფორმაცია",
    more_info_text: "Tech Market წარმოადგენს თანამედროვე ონლაინ მაღაზიას, სადაც შეგხვდებათ მაღალი ხარისხის ტექნიკა — ყურსასმენები, დინამიკები, ტელევიზორები და სხვა სმარტ მოწყობილობები. ჩვენი მიზანია მომხმარებელს შევთავაზოთ საუკეთესო ფასები, სწრაფი მიწოდება და კომფორტული მომსახურება.",
    newsletter: "საინფორმაციო ბიულეტენი",
    newsletter_desc: "გამოიწერეთ ბიულეტენი რომ არ გამოგეპაროთ სიახლეები ახალ პროდუქტებზე.",
    your_email: "Your email",
    subscribe: "გამოწერა",
    accepted: "ჩვენთვის მისაღებია",
    products: "პროდუქტები"
  },
  en: {
    country_currency: "Country/Currency",
    language: "Language",
    free_return: "Free return within 30 days!",
    subscribe_newsletter: "Subscribe to our newsletter",
    subscribed: "Subscribed",
    search_products: "Search for products...",
    login: "Login",
    register: "Register",
    my_account: "My Account",
    login_register: "Login / Register",
    username: "Username",
    email: "Email",
    password: "Password",
    clear_cart: "Clear Cart",
    hero1_title: "Feel the rhythm like never before",
    hero1_desc: "Discover our branded headphones",
    hero1_btn: "Buy Headphones",
    hero2_title: "New JBL Portable Speakers",
    hero2_desc: "Discover new JBL brand speakers",
    hero2_btn: "Buy Speakers",
    hero3_title: "Introducing new brand TVs",
    hero3_desc: "Discover the TVs you desire",
    hero3_btn: "Buy TVs",
    welcome: "Welcome",
    new_tvs: "New TVs",
    new_tvs_desc: "Enjoy <strong>up to $100 </strong>off on the latest 4K models.<br><strong>Limited quantity</strong>.",
    buy_tvs: "TVs",
    headphones: "Headphones",
    headphones_desc: "Try our headphones with premium sound quality, designed for music lovers.",
    buy_headphones: "Headphones",
    speakers: "Speakers",
    speakers_desc: "Discover the high-class speakers we offer",
    buy_speakers: "Speakers",
    our_collection: "Our Collection",
    view_all: "View All",
    android_tvs: "Android TVs",
    gaming_headphones: "Gaming Headphones",
    bluetooth_speakers: "Bluetooth Speakers",
    smart_tvs: "Smart TVs",
    music_unites: "Music Unites Us",
    music_desc: "Experience unlimited pleasure listening to music",
    shop_now: "Shop Now",
    new_brand_tvs: "New Brand TVs",
    tvs_desc: "You will be amazed by impressive visuals and graphics",
    about_techmarket: "About Tech Market",
    about_text: "<strong>At Tech Market</strong>, we want to deliver the latest innovations in technology and lifestyle products directly into your hands. Our journey started with a simple idea - advanced technologies accessible, reliable and inspiring to everyone. From powerful smartphones and laptops to smart home devices and everyday accessories, we strive to offer products that combine modern design, long-lasting performance and sustainable quality.",
    read_more: "Read More",
    close: "Close",
    our_brands: "Our Brands",
    view_all_brands: "View All Brands",
    all_brands: "All Brands",
    new_tvs_title: "New TVs",
    new_tvs_subtitle: "Discover top-quality TV models recommended by real professionals",
    buy_tvs_now: "Buy TVs",
    in_stock: "მარაგშია",
    hurry: "იჩქარეთ",
    left: "დარჩა",
    quantity: "რაოდენობა",
    most_demanded: "Most Demanded Product",
    zoom_hint: "Look at the image better",
    color: "Color",
    price: "Price",
    add_to_cart: "Add to Cart",
    our_stores: "Our Stores",
    visit_main_branch: "Visit Our Main Branch",
    our_second_branch: "Our Second Branch",
    show_directions: "Show Directions",
    most_searched: "Most Searched Products",
    free_delivery: "Free Delivery Service on Orders $1000+",
    delivery_desc: "We deliver in 48 hours max!",
    satisfaction: "Satisfaction Guarantee or Return and Refund",
    return_desc: "Free return within 14 days!",
    support: "We are available 24/7",
    support_desc: "Contact us by email or mobile phone",
    secure_payment: "100% Secure Payment",
    payment_desc: "Visa, Mastercard, Amex, PayPal",
    additional_info: "Additional Information",
    additional_text: "Take advantage of online shopping on our website or visit our branches in Tbilisi, where our professional team will help you choose the best product.",
    sponsors: "Thanks to our sponsors",
    copyright: "© 2025 Tech Market<br>Powered by Google",
    popular_collection: "Popular Collection",
    speakers_list: "Speakers",
    audio_devices: "Audio Devices",
    headphones_list: "Headphones",
    mini_studio: "Mini Studio",
    gaming_headphones_list: "Gaming Headphones",
    branded_tvs: "Branded TVs",
    more_info: "More Information",
    more_info_text: "Tech Market is a modern online store where you will find high-quality technology - headphones, speakers, TVs and other smart devices. Our goal is to offer customers the best prices, fast delivery and comfortable service.",
    newsletter: "Newsletter",
    newsletter_desc: "Subscribe to the newsletter so you don't miss out on news about new products.",
    your_email: "Your email",
    subscribe: "Subscribe",
    accepted: "Accepted by us",
    products: "Products",
    home: "Home",
    collection: "Collection",
    about_us: "About Us",
    georgia: "Georgia (GEL ₾)",
    germany: "Germany (EUR €)",
    usa: "USA (USD $)",
    uk: "UK (GBP £)",
    read_more_content: "Founded with a vision to redefine online shopping, <strong>Tech Market</strong> has become a trusted destination for customers who value innovation, quality, and design. We believe the future belongs to those who use technology—and our mission is to make that future accessible to everyone.<br><br>All products in our collection—from smart devices and accessories to essentials for modern living—are carefully selected to ensure performance, reliability, and innovative design. We collaborate with leading global brands that share our passion for innovation and customer satisfaction.<br><br>Beyond products, Tech Market represents a community of thinkers, creators, and everyday users who believe our technologies will improve lives. Our team continuously improves the customer experience with fast delivery, secure payments, and responsive support.<br><br><strong>At Tech Market, we don't just sell technology—we connect people with smarter living, inspiration, and innovation.</strong>",
    jbl_speaker: "JBL CLIP 5 Portable Speaker",
    store1_address: "76 Akaki Tsereteli Avenue, Tbilisi",
    weekdays_1: "Monday - Friday: 09:00 - 20:00",
    saturday_1: "Saturday: 09:00 - 18:00",
    store2_address: "26 Kazbegi Avenue, Tbilisi",
    weekdays_2: "Monday - Friday: 10:00 - 20:00",
    saturday_2: "Saturday: 11:00 - 21:00",
    sunday: "Sunday: Closed",
    in_stock_text: "● In stock, {number} quantity",
    hurry_text: "● Hurry! Only {number} left"
  }
};

function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  applyTranslations(lang);
  updateLangButton(lang);
}

function applyTranslations(lang) {
  const trans = translations[lang];
  if (!trans) return;

  // Update elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (trans[key]) {
      let translation = trans[key];
      
      // Handle placeholder replacements for stock texts
      if (key === 'in_stock_text' || key === 'hurry_text') {
        // Extract number from original text
        const originalText = el.textContent;
        const numberMatch = originalText.match(/(\d+)/);
        if (numberMatch) {
          translation = translation.replace('{number}', numberMatch[1]);
        }
      }
      
      // Check if translation contains HTML tags
      if (translation.includes('<') && translation.includes('>')) {
        el.innerHTML = translation;
      } else {
        el.textContent = translation;
      }
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (trans[key]) {
      el.placeholder = trans[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function updateLangButton(lang) {
  const btn = document.getElementById('lang-btn');
  if (btn) {
    const strong = btn.querySelector('strong');
    if (strong) {
      strong.textContent = lang === 'ka' ? 'ქართული' : 'English';
    }
  }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('selectedLanguage') || 'ka';
  applyTranslations(savedLang);
  updateLangButton(savedLang);
});

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

  // Create Bootstrap collapse instance with toggle enabled
  const bsCollapse = new bootstrap.Collapse(navMenu, {
    toggle: false
  });

  // Handle hamburger button clicks - use Bootstrap's built-in toggle
  toggler.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Simply toggle the collapse
    bsCollapse.toggle();
  });

  // Handle fade animation for closing
  navMenu.addEventListener('hide.bs.collapse', () => {
    navMenu.classList.add("is-fading");
  });

  navMenu.addEventListener('hidden.bs.collapse', () => {
    navMenu.classList.remove("is-fading");
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
