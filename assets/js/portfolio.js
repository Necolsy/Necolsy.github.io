(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = document.querySelectorAll('.portfolio-section, .research-feature, .journey-event, .interest-card');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-enabled');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-waiting');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px 40px 0px' });
    reveals.forEach(el => {
      el.setAttribute('data-reveal', '');
      el.classList.add('reveal-waiting');
      observer.observe(el);
    });
  }

  const canvas = document.getElementById('flow-canvas');
  const button = document.getElementById('flow-toggle');
  if (!canvas || !button) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let width = 1, height = 1, time = 0, frame = null, lastTime = 0;
  let paused = reduced.matches, visible = true;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (let row = 0; row < 17; row++) {
      ctx.beginPath();
      for (let x = 0; x <= width + 8; x += 8) {
        const envelope = Math.exp(-Math.pow((x / width - .68) * 3, 2));
        const y = (row + .5) * height / 17 + Math.sin(x / width * 8 + time * .45 + row * .12) * envelope * 20;
        if (x === 0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
      }
      ctx.strokeStyle = row % 4 === 0 ? 'rgba(210,239,134,.56)' : 'rgba(98,189,196,.32)';
      ctx.lineWidth = row % 4 === 0 ? 1.4 : .8;
      ctx.stroke();
      const px = ((time * 42 + row * 69) % (width + 40)) - 20;
      const envelope = Math.exp(-Math.pow((px / width - .68) * 3, 2));
      const py = (row + .5) * height / 17 + Math.sin(px / width * 8 + time * .45 + row * .12) * envelope * 20;
      ctx.beginPath(); ctx.arc(px, py, 1.5, 0, Math.PI * 2); ctx.fillStyle = '#d7eeb8'; ctx.fill();
    }
  }
  function tick(stamp) {
    frame = null;
    if (paused || !visible || document.hidden) return;
    if (lastTime) time += Math.min((stamp-lastTime)/1000, .05);
    lastTime = stamp;
    draw();
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    if (frame !== null) cancelAnimationFrame(frame);
    frame = null; lastTime = 0;
    button.textContent = paused ? 'Play motion' : 'Pause motion';
    button.setAttribute('aria-pressed', String(paused));
    draw();
    if (!paused && visible && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function resize() {
    width = canvas.clientWidth; height = canvas.clientHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width*ratio); canvas.height = Math.round(height*ratio);
    ctx.setTransform(ratio,0,0,ratio,0,0); draw();
  }
  button.addEventListener('click', () => { paused = !paused; sync(); });
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
  window.addEventListener('resize', resize, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(canvas);
  }
  resize(); sync();
})();
