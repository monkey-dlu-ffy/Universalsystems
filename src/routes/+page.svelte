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

  const servicesList = [
    {
      title: "Chip Level Repair",
      image: "/images/services/chip_level_repair.png",
      desc: "Expert micro-soldering and motherboard component-level repairs.",
    },
    {
      title: "Display Replacement",
      image: "/images/services/display_replacement.png",
      desc: "High-quality screen replacements for laptops and monitors.",
    },
    {
      title: "Upgrade & Maintenance",
      image: "/images/services/upgrade_maintenance.png",
      desc: "Performance upgrades and professional hardware maintenance.",
    },
    {
      title: "Antivirus Removal",
      image: "/images/services/antivirus_removal.png",
      desc: "Thorough malware removal and secure data protection.",
    },
    {
      title: "Annual Maintenance",
      image: "/images/services/annual_maintenance.png",
      desc: "Comprehensive AMC services for corporate IT infrastructure.",
    },
    {
      title: "Ink/Toner Refill",
      image: "/images/services/ink_toner_refill.png",
      desc: "Premium quality ink and toner refills for all major brands.",
    },
    {
      title: "Printer Service",
      image: "/images/services/printer_service.png",
      desc: "Professional servicing for industrial and office printers.",
    },
    {
      title: "Data Recovery",
      image: "/images/services/data_recovery.png",
      desc: "Advanced data retrieval from damaged or corrupted drives.",
    },
    {
      title: "Laptop Repair",
      image: "/images/services/laptop_repair.png",
      desc: "Complete diagnostic and repair services for all laptops.",
    },
    {
      title: "Desktop Repair",
      image: "/images/services/desktop_repair.png",
      desc: "Troubleshooting and fixing high-performance workstations.",
    },
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
<section
  id="home"
  class="relative pt-24 pb-32 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary"
>
  {#each images as img, i}
    <div
      class="absolute inset-0 transition-opacity duration-1000 z-0 {currentImage ===
      i
        ? 'opacity-30'
        : 'opacity-0'}"
    >
      <img
        src={img}
        alt="Hero Background"
        class="w-full h-full object-cover mix-blend-overlay"
      />
    </div>
  {/each}

  <div class="container mx-auto px-6 relative z-10 text-center drop-shadow-md">
    <div
      class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-wider uppercase"
    >
      Enterprise IT Solutions
    </div>
    <h1
      class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-5xl mx-auto"
    >
      Trusted IT Infrastructure <br />
      <span class="text-brand-accent">Since 1990</span>
    </h1>
    <p
      class="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
    >
      Sales. Service. Support. Complete IT Sales and Service Solutions Under One
      Roof for corporate and individual needs.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-5">
      <a
        href="tel:+919952399906"
        class="px-8 py-4 bg-brand-accent text-white font-bold rounded-md hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        Speak to an Expert
      </a>
      <a
        href="https://wa.me/919952399906"
        target="_blank"
        class="px-8 py-4 bg-white/10 text-white font-bold rounded-md border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md hover:shadow-lg hover:-translate-y-1"
      >
        WhatsApp Support
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
      in:fly={{ y: 50, duration: 1000, easing: backOut }}
      class="bg-brand-surface rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-border/50 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-brand-border/30 backdrop-blur-sm"
    >
      <div class="group">
        <h3
          class="text-4xl font-bold text-brand-primary font-outfit transition-transform group-hover:scale-110"
        >
          30+
        </h3>
        <p
          class="text-brand-muted text-sm mt-2 font-semibold uppercase tracking-wider"
        >
          Years Experience
        </p>
      </div>
      <div class="group">
        <h3
          class="text-4xl font-bold text-brand-primary font-outfit transition-transform group-hover:scale-110"
        >
          10k+
        </h3>
        <p
          class="text-brand-muted text-sm mt-2 font-semibold uppercase tracking-wider"
        >
          Customers Served
        </p>
      </div>
      <div class="group">
        <h3
          class="text-4xl font-bold text-brand-primary font-outfit transition-transform group-hover:scale-110"
        >
          4.8★
        </h3>
        <p
          class="text-brand-muted text-sm mt-2 font-semibold uppercase tracking-wider"
        >
          Google Rating
        </p>
      </div>
      <div class="group">
        <h3
          class="text-4xl font-bold text-brand-primary font-outfit transition-transform group-hover:scale-110"
        >
          100%
        </h3>
        <p
          class="text-brand-muted text-sm mt-2 font-semibold uppercase tracking-wider"
        >
          Genuine Products
        </p>
      </div>
    </div>
  {/if}
</section>
<!-- ABOUT SECTION -->
<section
  id="about"
  class="py-28 bg-brand-background relative overflow-hidden"
  use:intersect={(v) => {
    if (v) visible.about = true;
  }}
>
  <div
    class="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
  ></div>
  <div
    class="absolute bottom-0 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"
  ></div>
  {#if visible.about}
    <div
      class="container mx-auto px-6 max-w-4xl text-center relative z-10"
      in:fly={{ y: 50, duration: 1000, easing: backOut, delay: 100 }}
    >
      <div class="space-y-8">
        <h4
          class="text-brand-secondary font-bold tracking-[0.2em] uppercase text-sm font-outfit"
        >
          About Universal Systems
        </h4>
        <h2
          class="text-4xl md:text-5xl font-bold text-brand-text leading-tight font-outfit"
        >
          Three Decades of Excellence in Technology.
        </h2>
        <p class="text-brand-muted leading-relaxed text-lg max-w-3xl mx-auto">
          Since our inception, Universal Systems has been the backbone for
          thousands of businesses and individuals in Salem. We don't just sell
          hardware; we provide dependable infrastructure, strategic IT
          solutions, and expert support to keep your operations running
          seamlessly.
        </p>
        <ul
          class="mt-10 inline-grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left"
        >
          {#each ["Expert Consultation", "Transparent Pricing", "Long-Term Customer Trust", "Dedicated Corporate Support"] as feature}
            <li
              class="flex items-center gap-4 text-brand-text font-semibold bg-white px-6 py-4 rounded-lg shadow-sm border border-brand-border/50 hover:border-brand-secondary/30 hover:shadow-md transition-all"
            >
              <span
                class="flex items-center justify-center w-8 h-8 rounded-full bg-brand-secondary/10 text-brand-secondary"
                >✓</span
              >
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
  class="py-28 bg-brand-surface border-y border-brand-border/30"
  use:intersect={(v) => {
    if (v) visible.products = true;
  }}
>
  <div class="container mx-auto px-6">
    {#if visible.products}
      <div
        class="text-center max-w-2xl mx-auto mb-20"
        in:fly={{ y: 50, duration: 1000, easing: backOut }}
      >
        <h4
          class="text-brand-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 font-outfit"
        >
          Our Offerings
        </h4>
        <h2 class="text-4xl md:text-5xl font-bold text-brand-text font-outfit">
          Premium Hardware & Software
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          in:fly={{ y: 50, duration: 1000, easing: backOut, delay: 100 }}
          class="group border border-brand-border/50 rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all bg-white hover:-translate-y-1"
        >
          <div
            class="w-12 h-12 bg-brand-background rounded-lg mb-6 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
          >
            💻
          </div>
          <h3 class="text-2xl font-bold text-brand-primary mb-4 font-outfit">
            Computing
          </h3>
          <ul
            class="text-brand-muted space-y-3 text-[0.95rem] font-medium text-brand-text/90"
          >
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Multi-brand Laptops
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Multi-brand Desktops
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Refurbished Machines
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Tablets
            </li>
          </ul>
        </div>
        <div
          in:fly={{ y: 50, duration: 1000, easing: backOut, delay: 200 }}
          class="group border border-brand-border/50 rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all bg-white hover:-translate-y-1"
        >
          <div
            class="w-12 h-12 bg-brand-background rounded-lg mb-6 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
          >
            🖨️
          </div>
          <h3 class="text-2xl font-bold text-brand-primary mb-4 font-outfit">
            Printing Solutions
          </h3>
          <ul
            class="text-brand-muted space-y-3 text-[0.95rem] font-medium text-brand-text/90"
          >
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Printers
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Barcode Printers & Scanners
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Thermal & Billing Printers
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Barcode Stickers
            </li>
          </ul>
        </div>
        <div
          in:fly={{ y: 50, duration: 1000, easing: backOut, delay: 300 }}
          class="group border border-brand-border/50 rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all bg-white hover:-translate-y-1"
        >
          <div
            class="w-12 h-12 bg-brand-background rounded-lg mb-6 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
          >
            💿
          </div>
          <h3 class="text-2xl font-bold text-brand-primary mb-4 font-outfit">
            Software
          </h3>
          <ul
            class="text-brand-muted space-y-3 text-[0.95rem] font-medium text-brand-text/90"
          >
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Tally Software
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Microsoft Products
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Antivirus Solutions
            </li>
          </ul>
        </div>
        <div
          in:fly={{ y: 50, duration: 1000, easing: backOut, delay: 400 }}
          class="group border border-brand-border/50 rounded-xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all bg-white hover:-translate-y-1"
        >
          <div
            class="w-12 h-12 bg-brand-background rounded-lg mb-6 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors"
          >
            🔌
          </div>
          <h3 class="text-2xl font-bold text-brand-primary mb-4 font-outfit">
            Accessories
          </h3>
          <ul
            class="text-brand-muted space-y-3 text-[0.95rem] font-medium text-brand-text/90"
          >
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> UPS & Batteries
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Computer Accessories
            </li>
            <li class="flex items-center gap-2">
              <span class="text-brand-secondary/50">•</span> Peripherals
            </li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- SERVICES SECTION -->
<section id="services" class="py-28 bg-brand-background">
  <div class="container mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-20">
      <h4
        class="text-brand-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 font-outfit"
      >
        Expert Solutions
      </h4>
      <h2
        class="text-4xl md:text-5xl font-bold text-brand-text mb-6 font-outfit"
      >
        Services Provided
      </h2>
      <p class="text-brand-muted text-lg leading-relaxed">
        Rapid, reliable, and transparent repair and maintenance for enterprise
        and personal infrastructure.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
      {#each servicesList as service}
        <div
          class="group bg-white rounded-xl border border-brand-border/50 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden transition-all hover:-translate-y-1"
        >
          <div class="h-40 overflow-hidden relative">
            <img
              src={service.image}
              alt={service.title}
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div class="p-5">
            <h3 class="font-bold text-brand-text mb-2 text-lg font-outfit">
              {service.title}
            </h3>
            <p
              class="text-brand-muted text-sm leading-relaxed font-medium text-brand-text/80"
            >
              {service.desc}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="bg-white p-10 rounded-2xl border border-brand-border/50 shadow-sm relative overflow-hidden"
    >
      <div
        class="absolute right-0 top-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
      ></div>
      <h3
        class="text-center font-bold text-2xl text-brand-primary mb-12 font-outfit"
      >
        Our Service Process
      </h3>
      <div
        class="flex flex-col md:flex-row justify-between items-start gap-8 text-center relative z-10"
      >
        {#each ["Enquiry", "Diagnosis", "Approval", "Service", "Delivery"] as step, i}
          <div class="flex-1 group">
            <div
              class="w-16 h-16 bg-brand-surface text-brand-primary font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border/80 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all group-hover:scale-110"
            >
              {i + 1}
            </div>
            <p
              class="font-bold text-[0.95rem] text-brand-text tracking-wide uppercase font-outfit"
            >
              {step}
            </p>
          </div>
          {#if i !== 4}
            <div
              class="hidden md:block w-16 h-[2px] bg-brand-border/60 mt-8"
            ></div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<TestimonialSection />

<!-- CONTACT SECTION -->
<section
  id="contact"
  class="py-28 bg-brand-primary text-white relative overflow-hidden"
>
  <div
    class="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-primary/90"
  ></div>
  <div
    class="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"
  ></div>

  <div
    class="container mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16 relative z-10"
  >
    <div>
      <h4
        class="text-brand-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 font-outfit"
      >
        Get In Touch
      </h4>
      <h2 class="text-4xl md:text-5xl font-bold mb-6 font-outfit leading-tight">
        Need Reliable IT Solutions?
      </h2>
      <p class="text-blue-100/80 mb-12 text-lg font-light leading-relaxed">
        Speak with our enterprise infrastructure experts today to optimize your
        business operations.
      </p>

      <div class="space-y-8 mb-12">
        <div class="flex items-start gap-5">
          <div
            class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-2xl shadow-sm backdrop-blur-sm"
          >
            📍
          </div>
          <div>
            <h4 class="font-bold text-xl mb-1 font-outfit tracking-wide">
              Visit Us
            </h4>
            <p class="text-blue-100/70 font-light leading-relaxed">
              9, V V Shopping Plaza, Fairlands,<br />Salem, Tamil Nadu
            </p>
          </div>
        </div>
        <div class="flex items-start gap-5">
          <div
            class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-2xl shadow-sm backdrop-blur-sm"
          >
            📞
          </div>
          <div>
            <h4 class="font-bold text-xl mb-1 font-outfit tracking-wide">
              Call Us
            </h4>
            <p class="text-blue-100/70 font-light leading-relaxed">
              +91 9952399906 / +91 9952399006
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap gap-4">
        <a
          href="tel:+919952399906"
          class="px-8 py-4 bg-brand-accent text-white font-bold rounded-md hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
          >Call Now</a
        >
        <a
          href="https://maps.app.goo.gl/YyAMiy86aPe8Y6Vp7"
          target="_blank"
          class="px-8 py-4 bg-white/10 text-white font-bold rounded-md border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md hover:shadow-lg hover:-translate-y-1 text-center"
          >Get Directions</a
        >
      </div>
    </div>

    <!-- EMBEDDED GOOGLE MAP -->
    <div
      class="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-brand-surface relative z-10 group"
    >
      <div
        class="absolute inset-0 bg-brand-primary/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500"
      ></div>
      <iframe
        title="Universal Systems Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.251445784802!2d78.13932817480278!3d11.676583941946177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf045eaaaaaab%3A0x7a25ed9d5e850d9!2sUniversal%20Systems%20%2C%20Computer%20Laptop%20Sales%20%26%20Service!5e0!3m2!1sen!2sin!4v1782030424200!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen={true}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="filter grayscale-[20%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
      >
      </iframe>
    </div>
  </div>
</section>
