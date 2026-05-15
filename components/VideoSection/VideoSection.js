"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clapperboard, Volume2, VolumeX, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import {
  getWhatsAppLink,
  INSTAGRAM_URL,
  VIDEO_LEAD_STORY_SRC,
} from "@/utils/constants";
import styles from "./VideoSection.module.css";

export function VideoSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  const wa = getWhatsAppLink(
    "Assisti ao vídeo da loja no site e quero fechar meu iPhone agora. Pode me atender?"
  );

  useEffect(() => {
    const root = containerRef.current;
    const video = videoRef.current;
    if (!root || !video) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          setSoundOn(false);
        }
      },
      { threshold: 0.32, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="experiencia">
      <div className={styles.bg} aria-hidden>
        <div className={styles.glow} />
        <div className={styles.glowSecondary} />
      </div>
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.eyebrow}>
            <Clapperboard size={16} strokeWidth={1.6} aria-hidden />
            Bastidores reais
          </p>
          <h2 className={styles.title}>
            Veja a JV em ação — o passo que transforma curiosidade em compra.
          </h2>
          <p className={styles.lead}>
            Depois de ver o catálogo, este é o empurrão certo: logística, estoque e atendimento como
            você gosta. Quem assiste até o fim chega no WhatsApp com decisão tomada.
          </p>
        </motion.div>

        <motion.div
          className={styles.stage}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.frame}>
            <div className={styles.scanlines} aria-hidden />
            <div ref={containerRef} className={styles.videoBox}>
              <video
                ref={videoRef}
                className={styles.video}
                src={VIDEO_LEAD_STORY_SRC}
                loop
                playsInline
                preload="metadata"
                muted={!soundOn}
                defaultMuted
                controls={false}
                disablePictureInPicture
                aria-label="Vídeo da JV Eletrônicos — estoque e atendimento"
              />
              <div className={styles.videoOverlay} aria-hidden />
              <div className={styles.videoChrome}>
                <button
                  type="button"
                  className={styles.soundBtn}
                  onClick={() => setSoundOn((v) => !v)}
                  aria-pressed={soundOn}
                  aria-label={soundOn ? "Desativar som do vídeo" : "Ativar som do vídeo"}
                >
                  {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
                  {soundOn ? "Som ligado" : "Ativar som"}
                </button>
              </div>
            </div>
            <div className={styles.sideRail}>
              <span className={styles.railLabel}>Próximo passo</span>
              <p className={styles.railText}>
                Gostou do que viu? Chame agora: passamos cor, valor e entrega em uma conversa só.
              </p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.railCta}>
                <MessageCircle size={18} strokeWidth={2} />
                Falar no WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.railCtaSecondary}
              >
                <FaInstagram size={18} aria-hidden />
                Ver mais no Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
