import type { ComponentPublicInstance, VNodeRef } from 'vue'

const observers = new WeakMap<HTMLElement, IntersectionObserver>()

export function useScrollReveal() {
  const setRevealRef: VNodeRef = (el: Element | ComponentPublicInstance | null) => {
    if (!(el instanceof HTMLElement) || observers.has(el)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
          observers.delete(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
    )

    observers.set(el, observer)
    observer.observe(el)
  }

  return { setRevealRef }
}
