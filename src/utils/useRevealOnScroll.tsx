import { useEffect } from 'react';

export default function useRevealOnScroll() {
  useEffect(() => {
    const handler = () => {
      document.querySelectorAll('.reveal-up').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 150) {
          el.classList.add('revealed');
        }
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler(); 
    return () => window.removeEventListener('scroll', handler);
  }, []);
}