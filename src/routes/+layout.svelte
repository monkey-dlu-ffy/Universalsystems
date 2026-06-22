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

<header class="fixed top-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-white shadow-md py-3' : 'bg-brand-background py-5'}">
  <div class="container mx-auto px-6 flex justify-between items-center">
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 bg-brand-primary rounded flex items-center justify-center text-white font-bold text-xl">U</div>
      <div>
        <h1 class="text-xl font-bold text-brand-primary leading-tight">Universal Systems</h1>
        <p class="text-[0.65rem] uppercase tracking-wider text-brand-muted font-semibold">IT Solution Provider</p>
      </div>
    </div>
    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-brand-text">
      <a href="#home" class="hover:text-brand-primary transition-colors">Home</a>
      <a href="#about" class="hover:text-brand-primary transition-colors">About Us</a>
      <a href="#products" class="hover:text-brand-primary transition-colors">Products</a>
      <a href="#services" class="hover:text-brand-primary transition-colors">Services</a>
      <a href="#reviews" class="hover:text-brand-primary transition-colors">Testimonials</a>
    </nav>

    <!-- Desktop Call to Action -->
    <div class="hidden md:block">
      <a href="tel:+919952399906" class="px-6 py-2.5 bg-brand-accent text-white rounded-md font-semibold hover:bg-orange-600 transition-colors shadow-sm">
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
    <div class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-2 transition-all">
      <a href="#home" class="text-brand-text font-medium hover:text-brand-primary transition-colors py-2 border-b border-gray-50" onclick={closeMobileMenu}>Home</a>
      <a href="#about" class="text-brand-text font-medium hover:text-brand-primary transition-colors py-2 border-b border-gray-50" onclick={closeMobileMenu}>About Us</a>
      <a href="#products" class="text-brand-text font-medium hover:text-brand-primary transition-colors py-2 border-b border-gray-50" onclick={closeMobileMenu}>Products</a>
      <a href="#services" class="text-brand-text font-medium hover:text-brand-primary transition-colors py-2 border-b border-gray-50" onclick={closeMobileMenu}>Services</a>
      <a href="#reviews" class="text-brand-text font-medium hover:text-brand-primary transition-colors py-2 border-b border-gray-50" onclick={closeMobileMenu}>Testimonials</a>
      <a href="tel:+919952399906" class="mt-4 text-center w-full px-6 py-3 bg-brand-accent text-white rounded-md font-semibold hover:bg-orange-600 transition-colors shadow-sm" onclick={closeMobileMenu}>
        Call Now
      </a>
    </div>
  {/if}
</header>

<main class="pt-20">
  {@render children()}
</main>

<footer class="bg-brand-text text-white py-12">
  <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
    <div>
      <h2 class="text-2xl font-bold mb-4">Universal Systems</h2>
      <p class="text-gray-400 max-w-sm">Complete IT Sales and Service Solutions Under One Roof. Trusted for over 30 years.</p>
    </div>
    <div>
      <h3 class="font-semibold text-lg mb-4 text-gray-200">Contact</h3>
      <p class="text-gray-400">9, V V Shopping Plaza, Fairlands,<br>Salem, Tamil Nadu</p>
      <p class="text-gray-400 mt-2">+91 9952399906 / 9952399006</p>
      <p class="text-gray-400 mt-2">GST: 33AABFU3428P1ZX</p>
    </div>
    <div>
      <h3 class="font-semibold text-lg mb-4 text-gray-200">Quick Links</h3>
      <ul class="space-y-2 text-gray-400">
        <li><a href="#services" class="hover:text-white">Services</a></li>
        <li><a href="#products" class="hover:text-white">Products</a></li>
        <li><a href="#contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>
  </div>
  <div class="container mx-auto px-6 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} Universal Systems. All rights reserved. Designed for excellence.
  </div>
</footer>