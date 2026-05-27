"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Clapperboard, MessageCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import {
  getWhatsAppLink,
  INSTAGRAM_URL,
  VIDEO_LEAD_STORY_SRC,
} from "@/utils/constants";
import styles from "./VideoSection.module.css";

export function VideoSection() {
  const videoRef = useRef(null);

  const wa = getWhatsAppLink(
    "Assisti ao vídeo da loja no site e quero fechar meu iPhone agora. Pode me atender?"
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
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
            <div className={styles.videoBox}>
              <video
                ref={videoRef}
                className={styles.video}
                src={VIDEO_LEAD_STORY_SRC}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls
                controlsList="nodownload noremoteplayback"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                aria-label="Vídeo da JV Eletrônicos — estoque e atendimento"
              />
              <div className={styles.videoOverlay} aria-hidden />
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
