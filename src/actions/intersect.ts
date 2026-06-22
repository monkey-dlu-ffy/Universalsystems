export function intersect(node: HTMLElement, callback: (isIntersecting: boolean) => void) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Only trigger once when it enters
      if (entry.isIntersecting) {
        callback(true);
        observer.unobserve(node);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
