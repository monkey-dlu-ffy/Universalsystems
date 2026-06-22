<script lang="ts">
  import '../app.css';
  let { children } = $props();
  let isScrolled = $state(false);

  // Simple scroll listener to add shadow to navbar
  import { onMount } from 'svelte';
  onMount(() => {
    const handleScroll = () => isScrolled = window.scrollY > 20;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  let isMobileMenuOpen = $state(false);

  const closeMobileMenu = () => {
    isMobileMenuOpen = false;
  };
</script>

<header class="fixed top-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-brand-border' : 'bg-brand-background/80 backdrop-blur-sm py-6'}">
  <div class="container mx-auto px-6 flex justify-between items-center">
    <a href="#home" class="flex items-center gap-3 group">
      <div class="bg-white rounded-lg p-1.5 shadow-sm transition-transform group-hover:scale-105">
        <img src="/images/logo.png" alt="Universal Systems Logo" class="h-9 w-9 object-contain mix-blend-multiply" />
      </div>
      <div class="hidden sm:block">
        <h1 class="text-xl font-bold text-brand-primary leading-tight font-outfit">Universal Systems</h1>
        <p class="text-[0.65rem] uppercase tracking-wider text-brand-muted font-semibold">IT Solution Provider</p>
      </div>
    </a>
    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-8 text-[0.9rem] font-semibold text-brand-text font-outfit tracking-wide uppercase">
      <a href="#home" class="hover:text-brand-secondary transition-colors relative group">
        Home
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
      </a>
      <a href="#about" class="hover:text-brand-secondary transition-colors relative group">
        About Us
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
      </a>
      <a href="#products" class="hover:text-brand-secondary transition-colors relative group">
        Products
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
      </a>
      <a href="#services" class="hover:text-brand-secondary transition-colors relative group">
        Services
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
      </a>
      <a href="#reviews" class="hover:text-brand-secondary transition-colors relative group">
        Testimonials
        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full"></span>
      </a>
    </nav>

    <!-- Desktop Call to Action -->
    <div class="hidden md:block">
      <a href="tel:+919952399906" class="px-6 py-2.5 bg-brand-primary text-white rounded-md font-semibold hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 block">
        Call Now
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden text-brand-text p-2 focus:outline-none" onclick={() => isMobileMenuOpen = !isMobileMenuOpen} aria-label="Toggle mobile menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
        {#if isMobileMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Nav Dropdown -->
  {#if isMobileMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-brand-border flex flex-col py-6 px-6 gap-3 transition-all">
      <a href="#home" class="text-brand-text font-semibold font-outfit uppercase tracking-wider hover:text-brand-secondary transition-colors py-3 border-b border-brand-background" onclick={closeMobileMenu}>Home</a>
      <a href="#about" class="text-brand-text font-semibold font-outfit uppercase tracking-wider hover:text-brand-secondary transition-colors py-3 border-b border-brand-background" onclick={closeMobileMenu}>About Us</a>
      <a href="#products" class="text-brand-text font-semibold font-outfit uppercase tracking-wider hover:text-brand-secondary transition-colors py-3 border-b border-brand-background" onclick={closeMobileMenu}>Products</a>
      <a href="#services" class="text-brand-text font-semibold font-outfit uppercase tracking-wider hover:text-brand-secondary transition-colors py-3 border-b border-brand-background" onclick={closeMobileMenu}>Services</a>
      <a href="#reviews" class="text-brand-text font-semibold font-outfit uppercase tracking-wider hover:text-brand-secondary transition-colors py-3 border-b border-brand-background" onclick={closeMobileMenu}>Testimonials</a>
      <a href="tel:+919952399906" class="mt-4 text-center w-full px-6 py-3.5 bg-brand-primary text-white rounded-md font-bold hover:bg-brand-secondary transition-colors shadow-md" onclick={closeMobileMenu}>
        Call Now
      </a>
    </div>
  {/if}
</header>

<main class="pt-20">
  {@render children()}
</main>

<footer class="bg-brand-primary text-white py-16">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-brand-secondary/30 pb-12 mb-8">
    <div>
      <div class="flex items-center gap-4 mb-6">
        <div class="bg-white p-2 rounded-xl shadow-sm inline-flex items-center justify-center shrink-0">
          <img src="/images/logo.png" alt="Universal Systems Logo" class="h-10 w-10 object-contain" />
        </div>
        <h2 class="text-2xl font-bold font-outfit">Universal Systems</h2>
      </div>
      <p class="text-brand-border/80 max-w-sm font-light leading-relaxed">Complete IT Sales and Service Solutions Under One Roof. Trusted by enterprises and individuals for over 30 years.</p>
    </div>
    <div>
      <h3 class="font-bold text-lg mb-6 text-brand-surface font-outfit tracking-wide uppercase">Contact Details</h3>
      <div class="space-y-4 font-light text-brand-border/80">
        <p class="flex items-start gap-3"><span class="text-brand-secondary">📍</span> 9, V V Shopping Plaza, Fairlands,<br>Salem, Tamil Nadu</p>
        <p class="flex items-center gap-3"><span class="text-brand-secondary">📞</span> +91 9952399906 / 9952399006</p>
        <p class="flex items-center gap-3"><span class="text-brand-secondary">📄</span> GST: 33AABFU3428P1ZX</p>
      </div>
    </div>
    <div>
      <h3 class="font-bold text-lg mb-6 text-brand-surface font-outfit tracking-wide uppercase">Quick Links</h3>
      <ul class="space-y-3 font-light text-brand-border/80">
        <li><a href="#services" class="hover:text-brand-secondary transition-colors inline-block hover:translate-x-1 transform">Services</a></li>
        <li><a href="#products" class="hover:text-brand-secondary transition-colors inline-block hover:translate-x-1 transform">Products</a></li>
        <li><a href="#contact" class="hover:text-brand-secondary transition-colors inline-block hover:translate-x-1 transform">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto px-6 text-center text-brand-border/60 text-sm font-light">
    &copy; {new Date().getFullYear()} Universal Systems. All rights reserved. <span class="text-brand-secondary">|</span> Engineered for Excellence
  </div>
</footer>