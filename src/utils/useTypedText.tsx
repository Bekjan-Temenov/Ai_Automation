import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function useTypedText(strings = [])  {
  const el = useRef(null);
  useEffect(() => {
    if (!el.current || !strings.length) return;

    const t = new Typed(el.current, {
      strings,
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });
    return () => t.destroy();
  }, [strings]);

  return el;
}