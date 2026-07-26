<script lang="ts">
  import TestimonialCard from './ui/TestimonialCard.svelte';

  const testimonials = [
    {
      id: 1,
      testimonial: "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
      author: "Jenn F. - Marketing Director @ Square"
    },
    {
      id: 2,
      testimonial: "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.", 
      author: "Adrian Y. - Product Marketing @ Meta"
    },
    {
      id: 3,
      testimonial: "Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X.",
      author: "Devin R. - Growth Marketing Lead @ OpenAI"
    }
  ];

  let positions = $state(["front", "middle", "back"]);

  function handleShuffle() {
    const newPositions = [...positions];
    const last = newPositions.pop();
    if (last) newPositions.unshift(last);
    positions = newPositions;
  }
</script>

<div class="grid place-content-center overflow-hidden bg-brand-background px-8 py-24 text-brand-text h-full w-full">
  <div class="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
    {#each testimonials as testimonial, index (testimonial.id)}
      <TestimonialCard
        {...testimonial}
        {handleShuffle}
        position={positions[index]}
      />
    {/each}
  </div>
</div>
