"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/utils/constants";
import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton() {
  const wa = getWhatsAppLink(
    "Olá! Vim pela landing da JV Eletrônicos e quero falar com um especialista agora."
  );

  return (
    <motion.a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Abrir WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className={styles.ring} aria-hidden />
      <span className={styles.ringDelay} aria-hidden />
      <MessageCircle size={28} strokeWidth={2} className={styles.icon} />
    </motion.a>
  );
}
