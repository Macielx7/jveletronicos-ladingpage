"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Truck,
  Headphones,
  CreditCard,
  Shield,
  Gem,
} from "lucide-react";
import styles from "./Benefits.module.css";

const items = [
  {
    icon: Gem,
    title: "Curadoria premium",
    text: "Seleção rigorosa de lotes. Você recebe o que combinamos — sem substituições surpresa.",
  },
  {
    icon: BadgeCheck,
    title: "Procedência blindada",
    text: "Serial consultável, embalagem íntegra e transparência total antes do pagamento.",
  },
  {
    icon: Shield,
    title: "Garantia que respira",
    text: "Cobertura clara, suporte humano e orientação pós-venda que resolve de verdade.",
  },
  {
    icon: CreditCard,
    title: "Parcelamento inteligente",
    text: "Estruturamos o melhor cenário para o seu fluxo — sem letras miúdas no meio do caminho.",
  },
  {
    icon: Truck,
    title: "Logística enxuta",
    text: "Entrega combinada com rastreio e protocolo seguro. Velocidade com padrão boutique.",
  },
  {
    icon: Headphones,
    title: "Suporte no WhatsApp",
    text: "Especialista dedicado, linguagem direta e respostas em tempo real — inclusive depois da compra.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVar = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Benefits() {
  return (
    <section className={styles.section} id="beneficios">
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.eyebrow}>Por que a JV existe</p>
          <h2 className={styles.title}>
            Benefícios que viram decisão fácil — e compra sem arrependimento.
          </h2>
          <p className={styles.lead}>
            Comprar iPhone premium não é só hardware. É confiança, tempo e reputação. Nós tratamos
            os três como prioridade absoluta.
          </p>
        </motion.div>

        <motion.ul
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {items.map((b) => {
            const Icon = b.icon;
            return (
              <motion.li key={b.title} className={styles.card} variants={itemVar}>
                <div className={styles.iconWrap}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardText}>{b.text}</p>
                <div className={styles.shine} aria-hidden />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
