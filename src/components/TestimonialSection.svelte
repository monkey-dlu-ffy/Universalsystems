<script lang="ts">
  import { intersect } from "../actions/intersect";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";

  let isVisible = $state(false);
  const testimonials = [
    {
      name: "Sakthivel SMB",
      role: "Customer",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content:
        "Bought Lenovo laptop from Universal Systems at a special price. Very much satisfied with the product and their friendly approach towards customers. Strongly recommend.",
    },
    {
      name: "Yurii Shyika",
      role: "Customer",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content:
        "I recently bought a laptop from this store and was impressed with the professionalism and customer service. Smooth and helpful experience.",
    },
    {
      name: "Dr Arunachalam Angappan",
      role: "Customer",
      stars: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      content:
        "Fast and dependable service. I have been associated with them for over 15 years. Fully satisfied.",
    },
  ];
</script>

<section id="reviews" class="py-24 bg-white" use:intersect={(v) => { if (v) isVisible = true; }}>
  {#if isVisible}
    <div class="mx-auto w-full max-w-5xl px-6">
      <div class="text-center mb-16" in:fly={{ y: 80, duration: 1200, easing: backOut }}>
      <h2 class="text-3xl font-bold text-brand-text mb-2">Trusted by Salem</h2>
      <p class="text-brand-muted">Rated 4.8★ across 300+ Google Reviews</p>
    </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each testimonials as t, i}
          <div
            in:fly={{ y: 80, duration: 1200, easing: backOut, delay: i * 150 }}
            class="bg-brand-background rounded-sm border border-brand-border border-t-4 border-t-brand-primary p-6 shadow-sm flex flex-col justify-between"
          >
          <div>
            <div
              class="flex gap-1 mb-4"
              aria-label={`${t.stars} out of 5 stars`}
            >
              {#each Array(5) as _, i}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class={`size-4 ${i < t.stars ? "fill-brand-accent stroke-brand-accent" : "fill-gray-200 stroke-gray-200 text-gray-200"}`}
                >
                  <polygon
                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                  />
                </svg>
              {/each}
            </div>

            <p class="text-brand-text italic mb-6">"{t.content}"</p>
          </div>

          <div class="flex items-center gap-3">
            <div>
              <div class="text-brand-primary text-sm font-bold">{t.name}</div>
              <div class="text-brand-muted text-xs font-medium mt-0.5">
                {t.role}
              </div>
            </div>
          </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>
