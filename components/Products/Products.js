"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { products } from "@/utils/products";
import { getWhatsAppLink } from "@/utils/constants";
import styles from "./Products.module.css";

export function Products() {
  return (
    <section className={styles.section} id="catalogo">
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Catálogo em evidência</p>
          <h2 className={styles.title}>Modelos que definem padrão. Preço que fecha negócio.</h2>
          <p className={styles.lead}>
            Valores orientativos — o estoque muda rápido. Chame no WhatsApp para trava de unidade,
            cor disponível e condição personalizada no ato.
          </p>
        </motion.div>

        <ul className={styles.grid}>
          {products.map((p, i) => (
            <motion.li
              key={p.id}
              className={`${styles.card} ${p.highlight ? styles.cardHighlight : ""}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {p.badge && (
                <span className={styles.badge}>
                  <Sparkles size={13} strokeWidth={2} />
                  {p.badge}
                </span>
              )}
              <div className={styles.media}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  className={styles.mediaImg}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className={styles.mediaVeil} aria-hidden />
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.tagline}>{p.tagline}</p>
                <div className={styles.priceRow}>
                  <span className={styles.from}>a partir de</span>
                  <span className={styles.price}>{p.priceFrom}</span>
                </div>
                <p className={styles.installments}>{p.installments}</p>
                <a
                  href={getWhatsAppLink(p.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.wa}
                >
                  <MessageCircle size={18} strokeWidth={2} />
                  Reservar pelo WhatsApp
                </a>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
