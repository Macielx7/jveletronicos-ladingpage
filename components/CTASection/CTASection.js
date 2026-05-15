"use client";

import { motion } from "framer-motion";
import { MessageCircle, Timer, Flame } from "lucide-react";
import { getWhatsAppLink } from "@/utils/constants";
import styles from "./CTASection.module.css";

export function CTASection() {
  const wa = getWhatsAppLink(
    "URGENTE: quero travar unidade hoje. Me envie estoque real, cor disponível e melhor condição."
  );

  return (
    <section className={styles.section} id="cta-final">
      <div className={styles.inner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.ribbon} aria-hidden />
          <div className={styles.badges}>
            <span className={styles.badge}>
              <Flame size={15} />
              Oferta por lote
            </span>
            <span className={styles.badgeMuted}>
              <Timer size={15} />
              Resposta prioritária agora
            </span>
          </div>
          <h2 className={styles.title}>
            Se você sair desta página sem falar com a gente, o próximo cliente pode levar a sua
            unidade.
          </h2>
          <p className={styles.sub}>
            Estoque premium não escala infinito. Cor específica some. Preço bom fecha. A decisão
            rápida é a única vantagem que ninguém copia — use ela a seu favor.
          </p>
          <motion.a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <MessageCircle size={24} strokeWidth={2} />
            Travar atendimento VIP no WhatsApp
          </motion.a>
          <p className={styles.note}>
            Mensagem direcionada para fila prioritária — informe modelo desejado e cidade de entrega.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
