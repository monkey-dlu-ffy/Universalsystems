<script lang="ts">
  import { onMount } from "svelte";
  import TestimonialSection from "../components/TestimonialSection.svelte";
  import { intersect } from "../actions/intersect";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  // Reusable Svelte 5 Snippets (In-file components for structural simplicity)
  let { title, subtitle } = $props();

  let currentImage = $state(0);

  let visible = $state({
    stats: false,
    about: false,
    products: false,
    services: false,
    contact: false,
  });

  const images = [
    "/images/lap.png",
    "/images/printer.jpg",
    "/images/about3.jpg",
    "/images/printerpng.png",
  ];

  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
  }

  function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
  }

  onMount(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  });
</script>

<!-- HERO SECTION -->
<section id="home" class="relative bg-black pt-24 pb-32 overflow-hidden">
  {#each images as img, i}
    <div
      class="absolute inset-0 transition-opacity duration-1000 z-0 {currentImage ===
      i
        ? 'opacity-100'
        : 'opacity-0'}"
    >
      <img
        src={img}
        alt="Hero Background"
        class="w-full h-full object-cover opacity-60"
      />
      <div class="absolute inset-0 bg-transparent"></div>
    </div>
  {/each}

  <div class="container mx-auto px-6 relative z-10 text-center drop-shadow-md">
    <h1
      class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto"
    >
      Trusted IT Solutions <br />
      <span class="text-brand-accent">Since 1990</span>
    </h1>
    <p
      class="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light"
    >
      Sales. Service. Support. Complete IT Sales and Service Solutions Under One
      Roof for corporate and individual needs.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="tel:+919952399906"
        class="px-8 py-4 bg-brand-accent text-white font-semibold rounded-md hover:bg-orange-600 transition-colors shadow-lg"
      >
        Call Now
      </a>
      <a
        href="https://wa.me/919952399906"
        target="_blank"
        class="px-8 py-4 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors backdrop-blur-sm"
      >
        WhatsApp Us
      </a>
    </div>
  </div>
</section>

<!-- TRUST METRICS -->
<section
  id="stats"
  class="container mx-auto px-6 -mt-16 relative z-20"
  use:intersect={(v) => {
    if (v) visible.stats = true;
  }}
>
  {#if visible.stats}
    <div
      in:fly={{ y: 80, duration: 1200, easing: backOut }}
      class="bg-white rounded-xl shadow-xl border border-brand-border p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100"
    >
      <div>
        <h3 class="text-3xl font-bold text-brand-primary">30+</h3>
        <p class="text-brand-muted text-sm mt-1 font-medium">
          Years Experience
        </p>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-brand-primary">10k+</h3>
        <p class="text-brand-muted text-sm mt-1 font-medium">
          Customers Served
        </p>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-brand-primary">4.8★</h3>
        <p class="text-brand-muted text-sm mt-1 font-medium">Google Rating</p>
      </div>
      <div>
        <h3 class="text-3xl font-bold text-brand-primary">100%</h3>
        <p class="text-brand-muted text-sm mt-1 font-medium">
          Genuine Products
        </p>
      </div>
    </div>
  {/if}
</section>
<!-- ABOUT SECTION -->
<section
  id="about"
  class="py-24 bg-brand-background"
  use:intersect={(v) => {
    if (v) visible.about = true;
  }}
>
  {#if visible.about}
    <div
      class="container mx-auto px-6 max-w-4xl text-center"
      in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 200 }}
    >
      <div class="space-y-6">
        <h4
          class="text-brand-secondary font-bold tracking-widest uppercase text-sm"
        >
          About Universal Systems
        </h4>
        <h2
          class="text-3xl md:text-4xl font-bold text-brand-text leading-tight"
        >
          Three Decades of Excellence in Technology.
        </h2>
        <p class="text-brand-muted leading-relaxed">
          Since our inception, Universal Systems has been the backbone for
          thousands of businesses and individuals in Salem. We don't just sell
          boxes; we provide dependable infrastructure and expert support to keep
          you running smoothly.
        </p>
        <ul class="space-y-3 mt-6 inline-block text-left">
          {#each ["Expert Consultation", "Transparent Pricing", "Long-Term Customer Trust", "Dedicated Corporate Support"] as feature}
            <li class="flex items-center gap-3 text-brand-text font-medium">
              <span class="text-brand-accent">✓</span>
              {feature}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</section>

<!-- PRODUCTS SECTION -->
<section
  id="products"
  class="py-24 bg-white"
  use:intersect={(v) => {
    if (v) visible.products = true;
  }}
>
  <div class="container mx-auto px-6">
    {#if visible.products}
      <div
        class="text-center max-w-2xl mx-auto mb-16"
        in:fly={{ y: 80, duration: 1200, easing: backOut }}
      >
        <h4
          class="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-2"
        >
          Our Offerings
        </h4>
        <h2 class="text-3xl md:text-4xl font-bold text-brand-text">
          Premium Hardware & Software
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 100 }}
          class="border border-brand-border rounded-lg p-8 hover:shadow-lg transition-shadow bg-brand-background"
        >
          <h3 class="text-xl font-bold text-brand-primary mb-4">Computing</h3>
          <ul class="text-brand-muted space-y-2 text-sm">
            <li>Multi-brand Laptops</li>
            <li>Multi-brand Desktops</li>
            <li>Refurbished Machines</li>
            <li>Tablets</li>
          </ul>
        </div>
        <div
          in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 200 }}
          class="border border-brand-border rounded-lg p-8 hover:shadow-lg transition-shadow bg-brand-background"
        >
          <h3 class="text-xl font-bold text-brand-primary mb-4">
            Printing Solutions
          </h3>
          <ul class="text-brand-muted space-y-2 text-sm">
            <li>Printers</li>
            <li>Barcode Printers & Scanners</li>

            <li>Thermal & Billing Printers</li>
            <li>Barcode Stickers</li>
          </ul>
        </div>
        <div
          in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 300 }}
          class="border border-brand-border rounded-lg p-8 hover:shadow-lg transition-shadow bg-brand-background"
        >
          <h3 class="text-xl font-bold text-brand-primary mb-4">Software</h3>
          <ul class="text-brand-muted space-y-2 text-sm">
            <li>Tally Software</li>
            <li>Microsoft Products</li>
          </ul>
        </div>
        <div
          in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 400 }}
          class="border border-brand-border rounded-lg p-8 hover:shadow-lg transition-shadow bg-brand-background"
        >
          <h3 class="text-xl font-bold text-brand-primary mb-4">Accessories</h3>
          <ul class="text-brand-muted space-y-2 text-sm">
            <li>UPS & Batteries</li>

            <li>Computer Accessories</li>
            <li>Peripherals</li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- SERVICES SECTION -->
<section id="services" class="py-24 bg-brand-background">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-brand-text mb-4">
        Services Provided
      </h2>
      <p class="text-brand-muted">
        Rapid, reliable, and transparent repair and maintenance.
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-4 mb-16">
      {#each ["Chip Level Repair", "Display Replacement", "Upgrade & Maintenance", "Antivirus Removal", "Annual Maintenance (AMC)", "Ink/Toner Refill", "Printer Service", "Data Recovery", "Laptop Repair", "Desktop Repair"] as service}
        <div
          class="bg-white p-6 rounded-lg border border-brand-border shadow-sm text-center font-medium text-brand-text hover:border-brand-primary transition-colors w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
        >
          {service}
        </div>
      {/each}
    </div>

    <div class="bg-white p-8 rounded-xl border border-brand-border shadow-sm">
      <h3 class="text-center font-bold text-xl text-brand-primary mb-8">
        Our Service Process
      </h3>
      <div
        class="flex flex-col md:flex-row justify-between items-center gap-4 text-center"
      >
        {#each ["Enquiry", "Diagnosis", "Approval", "Service", "Delivery"] as step, i}
          <div class="flex-1">
            <div
              class="w-12 h-12 bg-brand-background text-brand-primary font-bold rounded-full flex items-center justify-center mx-auto mb-3 border border-brand-border"
            >
              {i + 1}
            </div>
            <p class="font-medium text-sm text-brand-text">{step}</p>
          </div>
          {#if i !== 4}
            <div class="hidden md:block w-8 h-[2px] bg-brand-border"></div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<TestimonialSection />

<!-- CONTACT SECTION -->
<section id="contact" class="py-24 bg-brand-primary text-white">
  <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
    <div>
      <h2 class="text-3xl md:text-4xl font-bold mb-6">
        Need Reliable IT Solutions?
      </h2>
      <p class="text-blue-200 mb-10 text-lg">Speak with our experts today.</p>

      <div class="space-y-6 mb-10">
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0"
          >
            📍
          </div>
          <div>
            <h4 class="font-bold text-lg">Visit Us</h4>
            <p class="text-blue-200">
              9, V V Shopping Plaza, Fairlands,<br />Salem, Tamil Nadu
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0"
          >
            📞
          </div>
          <div>
            <h4 class="font-bold text-lg">Call Us</h4>
            <p class="text-blue-200">+91 9952399906 / +91 9952399006</p>
          </div>
        </div>
      </div>

      <div class="flex gap-4">
        <a
          href="tel:+919952399906"
          class="px-6 py-3 bg-brand-accent text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
          >Call Now</a
        >
        <a
          href="https://maps.app.goo.gl/YyAMiy86aPe8Y6Vp7"
          target="_blank"
          class="px-6 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/20 hover:bg-white/20 transition-colors"
          >Get Directions</a
        >
      </div>
    </div>

    <!-- EMBEDDED GOOGLE MAP -->
    <div class="container mx-auto px-6">
      <div
        class="w-full h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 bg-gray-200"
      >
        <iframe
          title="Universal Systems Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.251445784802!2d78.13932817480278!3d11.676583941946177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf045eaaaaaab%3A0x7a25ed9d5e850d9!2sUniversal%20Systems%20%2C%20Computer%20Laptop%20Sales%20%26%20Service!5e0!3m2!1sen!2sin!4v1782030424200!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  </div>
</section>
