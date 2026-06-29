import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { LayoutGrid, Accessibility, Cpu, Network } from "lucide-react";

const stats = [
  { icon: LayoutGrid, end: 15, suffix: "+", label: "Civic Services" },
  { icon: Accessibility, end: 100, suffix: "%", label: "Accessibility Focused" },
  { icon: Cpu, end: 1, suffix: "", label: "AI Powered Platform", display: "AI" },
  { icon: Network, end: 2, suffix: "", label: "Connected Platforms" },
];

function Counter({ end, suffix, display }: { end: number; suffix: string; display?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => { s = 1; void s; };
  }, [inView, end]);
  return (
    <span ref={ref} className="tabular-nums">
      {display ?? n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass-strong rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center sm:text-left"
            >
              <s.icon className="size-6 text-gov-blue-soft mb-3 mx-auto sm:mx-0" />
              <div className="text-3xl sm:text-4xl font-bold text-white">
                <Counter end={s.end} suffix={s.suffix} display={s.display} />
              </div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
