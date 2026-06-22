<script lang="ts">
  let { handleShuffle, testimonial, position, id, author } = $props();

  let isFront = $derived(position === "front");
  let startX = 0;
  let currentX = $state(0);
  let isDragging = $state(false);

  function pointerDown(e: PointerEvent) {
    if (!isFront) return;
    const target = e.target as HTMLElement;
    isDragging = true;
    startX = e.clientX;
    currentX = 0;
    target.setPointerCapture(e.pointerId);
  }

  function pointerMove(e: PointerEvent) {
    if (!isDragging) return;
    currentX = e.clientX - startX;
  }

  function pointerUp(e: PointerEvent) {
    if (!isDragging) return;
    isDragging = false;
    const target = e.target as HTMLElement;
    target.releasePointerCapture(e.pointerId);
    
    // If dragged more than 100px left or right, shuffle
    if (startX - e.clientX > 100 || e.clientX - startX > 100) {
      handleShuffle();
    }
    currentX = 0;
  }

  let baseTranslate = $derived(position === "front" ? 0 : position === "middle" ? 33 : 66);
  let baseRotate = $derived(position === "front" ? -6 : position === "middle" ? 0 : 6);
  let zIndex = $derived(position === "front" ? 2 : position === "middle" ? 1 : 0);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  onpointerdown={pointerDown}
  onpointermove={pointerMove}
  onpointerup={pointerUp}
  onpointercancel={pointerUp}
  style="
    z-index: {zIndex};
    transform: translateX(calc({baseTranslate}% + {currentX}px)) rotate({baseRotate}deg);
  "
  class="absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-sm border border-brand-border border-t-4 border-t-brand-primary bg-white p-6 shadow-md transition-all {isDragging ? 'duration-0' : 'duration-300'} {isFront ? 'cursor-grab active:cursor-grabbing hover:shadow-lg hover:-translate-y-1' : ''}"
>
  <img
    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80`}
    alt={`Avatar of ${author}`}
    class="pointer-events-none mx-auto h-32 w-32 rounded-full border border-brand-border object-cover bg-brand-background"
  />
  <span class="text-center text-lg italic text-brand-text">"{testimonial}"</span>
  <span class="text-center text-sm font-bold text-brand-primary">{author}</span>
</div>
