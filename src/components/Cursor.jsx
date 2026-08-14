import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const dot = document.querySelector('.cursor-dot');
    const glow = document.querySelector('.cursor-ring');

    const onMove = (e) => {
      if (dot) {
        dot.style.left = e.clientX + 'px';
        dot.style.top  = e.clientY + 'px';
      }
      if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
}
