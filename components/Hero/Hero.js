"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Play, ShieldCheck, Zap } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/constants";
import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Hero() {
  const ref = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.defaultMuted = true;
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scaleMedia = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5], [1, 0.35]);

  const wa = getWhatsAppLink(
    "Quero falar com um especialista agora. Tenho interesse em iPhone premium."
  );

  return (
    <section ref={ref} className={styles.hero} id="topo">
      <motion.div className={styles.bgParallax} style={{ y: yBg }} aria-hidden>
        <div className={styles.grid} />
        <motion.div className={styles.orb} style={{ opacity: opacityGlow }} />
        <div className={styles.vignette} />
      </motion.div>

      <div className={styles.wrap}>
        <div className={styles.copy}>
          <motion.div
            className={styles.kicker}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <FaApple aria-hidden className={styles.kickerIcon} />
            <span>Apple premium com curadoria JV</span>
            <span className={styles.kickerDot} />
            <span className={styles.kickerMuted}>Estoque vivo · resposta em minutos</span>
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            O iPhone que você deseja.
            <span className={styles.titleAccent}> Sem risco. Sem enrolação.</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          >
            Lacrado, nota fiscal, garantia e procedência comprovada. Condições de boutique,
            velocidade de startup e atendimento humano que fecha negócio no WhatsApp em minutos.
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
          >
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <MessageCircle size={22} strokeWidth={2} />
              Quero condições exclusivas no WhatsApp
            </a>
            <a href="#catalogo" className={styles.btnGhost}>
              Ver modelos em destaque
            </a>
          </motion.div>

          <motion.ul
            className={styles.trust}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <li>
              <ShieldCheck size={18} strokeWidth={1.6} />
              Garantia + suporte pós-venda
            </li>
            <li>
              <Zap size={18} strokeWidth={1.6} />
              Entrega expressa na região
            </li>
          </motion.ul>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.visualFrame}>
            <motion.div className={styles.mediaWrap} style={{ scale: scaleMedia }}>
              <div className={styles.mediaGlow} aria-hidden />
              <div className={styles.videoShell}>
                <span className={styles.videoBadge} aria-hidden>
                  <Play size={12} fill="currentColor" />
                  Showcase
                </span>
                <video
                  ref={videoRef}
                  className={styles.heroVideo}
                  src="/videos/hero.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  aria-label="Vídeo institucional JV Eletrônicos"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.floatingTag}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className={styles.floatingTitle}>Disponibilidade limitada</span>
              <span className={styles.floatingSub}>Unidades selecionadas por lote</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
