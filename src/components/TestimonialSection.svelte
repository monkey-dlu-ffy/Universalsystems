<script lang="ts">
  import { intersect } from "../actions/intersect";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { onMount, onDestroy } from "svelte";

  let isVisible = $state(false);
  let current = $state(0);
  let isMobile = $state(false);
  let cardWidth = $state(340);
  let reduceMotion = $state(false);

  let autoplayTimer: ReturnType<typeof setInterval> | undefined;

  const testimonials = [
    {
      name: "Sakthivel SMB",
      role: "Customer",
      stars: 5,
      content:
        "Bought Lenovo laptop from Universal Systems at a special price. Very much satisfied with the product and their friendly approach towards customers. Strongly recommend.",
    },
    {
      name: "Yurii Shyika",
      role: "Customer",
      stars: 5,
      content:
        "I recently bought a laptop from this store and was impressed with the professionalism and customer service. Smooth and helpful experience.",
    },
    {
      name: "Dr Arunachalam Angappan",
      role: "Customer",
      stars: 5,
      content:
        "Fast and dependable service. I have been associated with them for over 15 years. Fully satisfied.",
    },
    {
      name: "Madhan B",
      role: "Customer",
      stars: 5,
      content:
        "A good laptop service center provides fast repair, genuine spare parts, and reliable customer support. It should have skilled technicians, reasonable pricing, and good customer reviews.",
    },
    {
      name: "deipikka deepu",
      role: "Customer",
      stars: 5,
      content:
        "good hospitality and timely help… made with quality assurance..any laptop queries or issues..do come here..🙂🙂",
    },
    {
      name: "Madhushree Naga Iyer",
      role: "Customer",
      stars: 4,
      content:
        "The service wa so excellent . They instantly reminding the updates of the computers and other services they are providing in the company and issues new offers on computers and other products and the product quality is good",
    },
    {
      name: "Babu Vijay",
      role: "Customer",
      stars: 4,
      content:
        "I gave my laptop last week for power button problem. They did a good job, and it was a good experience for me. You can contact them for any laptop-related solutions.",
    },
    {
      name: "Nithya Nandhakumar",
      role: "Customer",
      stars: 5,
      content:
        "No.1 quality Epson Printer L3210.... 100% Worth for taking Photo print and Scanning... Clarity was too good... Thank you for your wonderful guiding sir and mam... Installation process was made soo easy...",
    },
  ];

  const total = testimonials.length;

  // Shortest signed distance from `current`, wrapped around the circle.
  // e.g. with 8 items, this returns values roughly in [-4, 4].
  function positionOf(index: number) {
    let diff = (index - current) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  }

  function go(step: number) {
    current = ((current + step) % total + total) % total;
    restartAutoplay();
  }

  function goTo(index: number) {
    current = ((index % total) + total) % total;
    restartAutoplay();
  }

  function restartAutoplay() {
    if (reduceMotion) return;
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => go(1), 5000);
  }

  function pauseAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  }

  function updateSize() {
    const { matches } = window.matchMedia("(min-width: 768px)");
    isMobile = !matches;
    cardWidth = matches ? 340 : 280;
  }

  onMount(() => {
    updateSize();
    reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.addEventListener("resize", updateSize);
    restartAutoplay();
  });

  onDestroy(() => {
    if (typeof window !== "undefined") window.removeEventListener("resize", updateSize);
    if (autoplayTimer) clearInterval(autoplayTimer);
  });

  // How far from center a card can be and still be shown at all.
  let visibleRange = $derived(isMobile ? 0 : 1);
</script>

<section id="reviews" class="py-24 bg-white overflow-hidden" use:intersect={(v) => { if (v) isVisible = true; }}>
  {#if isVisible}
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="text-center mb-16" in:fly={{ y: 80, duration: 1200, easing: backOut }}>
        <h2 class="text-3xl font-bold text-brand-text mb-2">Trusted by Salem</h2>
        <p class="text-brand-muted">Rated 4.8★ across 300+ Google Reviews</p>
      </div>

      <div
        class="relative mx-auto"
        style={`height: ${isMobile ? 380 : 360}px;`}
        in:fly={{ y: 80, duration: 1200, easing: backOut, delay: 150 }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer testimonials"
        tabindex="0"
        onkeydown={handleKeydown}
        onmouseenter={pauseAutoplay}
        onmouseleave={restartAutoplay}
        onfocusin={pauseAutoplay}
        onfocusout={restartAutoplay}
      >
        {#each testimonials as t, i (t.name)}
          {@const position = positionOf(i)}
          {@const isCenter = position === 0}
          {@const isVisibleSlot = Math.abs(position) <= visibleRange}
          <div
            class={`testimonial-card absolute top-1/2 left-1/2 rounded-sm border p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 ease-out
              ${isCenter ? "border-t-4 shadow-xl" : "border-t-4 border-brand-border bg-brand-background border-t-brand-primary shadow-sm"}
              ${!isCenter && isVisibleSlot ? "cursor-pointer hover:-translate-y-1" : ""}`}
            style={`
              width: ${cardWidth}px;
              height: 320px;
              transform:
                translate(-50%, -50%)
                translateX(${position * cardWidth * 0.62}px)
                translateY(${isCenter ? -10 : 16}px)
                rotate(${isCenter ? 0 : Math.sign(position) * 3}deg)
                scale(${isCenter ? 1 : 0.86});
              z-index: ${10 - Math.abs(position)};
              opacity: ${!isVisibleSlot ? 0 : isCenter ? 1 : 0.7};
              pointer-events: ${isVisibleSlot ? "auto" : "none"};
              ${isCenter ? "background-color:#123A5A; border-color:#123A5A; border-top-color:#D9A744;" : ""}
            `}
            aria-hidden={!isVisibleSlot}
            onclick={() => !isCenter && isVisibleSlot && goTo(i)}
          >
            <div>
              <div class="flex gap-1 mb-4" aria-label={`${t.stars} out of 5 stars`}>
                {#each Array(5) as _, s}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class={`size-4 ${
                      s < t.stars
                        ? isCenter
                          ? "fill-white stroke-white"
                          : "fill-brand-accent stroke-brand-accent"
                        : isCenter
                          ? "fill-white/20 stroke-white/20"
                          : "fill-gray-200 stroke-gray-200 text-gray-200"
                    }`}
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                {/each}
              </div>

              <p
                class={`italic mb-6 text-sm sm:text-base ${isCenter ? "text-white" : "text-brand-text"}`}
                style="display:-webkit-box; -webkit-line-clamp:7; -webkit-box-orient:vertical; overflow:hidden;"
              >
                "{t.content}"
              </p>
            </div>

            <div>
              <div class={`text-sm font-bold ${isCenter ? "text-white" : "text-brand-primary"}`}>
                {t.name}
              </div>
              <div class={`text-xs font-medium mt-0.5 ${isCenter ? "text-white/70" : "text-brand-muted"}`}>
                {t.role}
              </div>
            </div>
          </div>
        {/each}
      </div>

      <div class="flex items-center justify-center gap-4 mt-10">
        <button
          onclick={() => go(-1)}
          aria-label="Previous testimonial"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-text transition-colors hover:bg-brand-primary hover:text-white hover:border-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div class="flex gap-2">
          {#each testimonials as _, i}
            <button
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current}
              onclick={() => goTo(i)}
              class={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-brand-primary" : "w-2 bg-brand-border"}`}
            ></button>
          {/each}
        </div>

        <button
          onclick={() => go(1)}
          aria-label="Next testimonial"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-text transition-colors hover:bg-brand-primary hover:text-white hover:border-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</section>

<style>
  @media (prefers-reduced-motion: reduce) {
    .testimonial-card {
      transition: none !important;
    }
  }
</style>