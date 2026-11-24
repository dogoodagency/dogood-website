// Arta's r5-infinity-gsap.js, adapted for bundled imports, scoped selectors and lifecycle cleanup.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export function initInfinity(fig) {
  const mm = gsap.matchMedia();
  const btn = fig.querySelector('.inf-toggle');
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const order = ['tl', 'bl', 'tr', 'br'];
    const qs = order.map(q => fig.querySelector(`.inf-q[data-q="${q}"]`));
    const labels = order.map(q => fig.querySelector(`.inf-label[data-q="${q}"]`));
    const ball = fig.querySelector('#inf-ball');
    const path = fig.querySelector('#inf-motion');
    const GAP = 12, Q = 2.6;
    fig.classList.add('is-anim');
    btn.hidden = false;
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'Pause animation');

    function reset() {
      fig.classList.remove('is-fading');
      labels.forEach(l => l.classList.remove('is-on', 'is-now'));
      qs.forEach(p => gsap.set(p, {
        opacity: 1, visibility: 'hidden', strokeDashoffset: -GAP,
        strokeDasharray: `0 ${p.getTotalLength() * 3}`,
      }));
    }
    reset();

    const tl = gsap.timeline({ repeat: -1, paused: true, onRepeat: reset });
    tl.to(ball, { duration: Q * 4, ease: 'none',
      motionPath: { path, align: path, alignOrigin: [0.5, 0.5] },
    }, 0);
    qs.forEach((p, i) => {
      const len = p.getTotalLength() - 2 * GAP;
      tl.set(p, { visibility: 'visible', opacity: 1 }, i * Q)
        .fromTo(p, { strokeDasharray: `0 ${len * 3}` }, {
          strokeDasharray: `${len} ${len * 3}`, duration: Q, ease: 'none', immediateRender: false,
        }, i * Q)
        .add(() => labels.forEach((l, j) => {
          l.classList.toggle('is-on', j <= i);
          l.classList.toggle('is-now', j === i);
        }), i * Q + 0.1);
    });
    tl.to({}, { duration: 2.4 })
      .add(() => fig.classList.add('is-fading'))
      .to(qs, { opacity: 0, duration: 0.6, ease: 'power1.out' });

    const trigger = ScrollTrigger.create({
      trigger: fig, start: 'top 75%', end: 'bottom 25%',
      onToggle: self => (self.isActive && !fig.classList.contains('is-paused') && !document.hidden) ? tl.play() : tl.pause(),
    });
    if (trigger.isActive) tl.play();

    function toggle() {
      const paused = fig.classList.toggle('is-paused');
      btn.setAttribute('aria-pressed', String(paused));
      btn.setAttribute('aria-label', paused ? 'Play animation' : 'Pause animation');
      if (paused) {
        tl.pause();
        qs.forEach(p => gsap.set(p, {
          visibility: 'visible', opacity: 1,
          strokeDasharray: `${p.getTotalLength() - 2 * GAP} ${p.getTotalLength() * 3}`,
        }));
        labels.forEach(l => { l.classList.add('is-on'); l.classList.remove('is-now'); });
        fig.classList.remove('is-fading');
      } else {
        reset();
        tl.restart();
        if (!trigger.isActive || document.hidden) tl.pause();
      }
    }
    function visibility() {
      if (document.hidden) tl.pause();
      else if (trigger.isActive && !fig.classList.contains('is-paused')) tl.play();
    }
    btn.addEventListener('click', toggle);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      trigger.kill();
      tl.kill();
      btn.removeEventListener('click', toggle);
      document.removeEventListener('visibilitychange', visibility);
      btn.hidden = true;
      btn.setAttribute('aria-pressed', 'false');
      fig.classList.remove('is-anim', 'is-fading', 'is-paused');
      labels.forEach(l => l.classList.remove('is-on', 'is-now'));
    };
  }, fig);
  document.addEventListener('astro:before-swap', () => mm.revert(), { once: true });
}
