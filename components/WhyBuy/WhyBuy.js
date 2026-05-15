"use client";

import { motion } from "framer-motion";
import { Award, LineChart, Users, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/utils/constants";
import styles from "./WhyBuy.module.css";

const stats = [
  { value: "4.9/5", label: "Satisfação média pós-compra", icon: Award },
  { value: "+2.800", label: "Atendimentos premium realizados", icon: Users },
  { value: "12 min", label: "Tempo médio de primeira resposta", icon: Clock },
  { value: "98%", label: "Clientes que indicam a JV", icon: LineChart },
];

export function WhyBuy() {
  const wa = getWhatsAppLink(
    "Quero entender por que a JV é diferente das outras lojas. Pode me explicar no WhatsApp?"
  );

  return (
    <section className={styles.section} id="confianca">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <motion.div
            className={styles.copy}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.eyebrow}>Autoridade sem arrogância</p>
            <h2 className={styles.title}>Por que comprar conosco não é moda — é método.</h2>
            <p className={styles.lead}>
              Trabalhamos como consultoria de aquisição: diagnóstico do que você precisa, prova de
              procedência, condição financeira alinhada e entrega com padrão de marca global.
            </p>
            <ul className={styles.points}>
              <li>Checklist técnico antes do envio — zero improviso.</li>
              <li>Comunicação adulta: sem pressão barata, com urgência real de estoque.</li>
              <li>Política clara de suporte — você sabe exatamente quem acionar.</li>
            </ul>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.cta}>
              Quero falar com um especialista
            </a>
          </motion.div>

          <motion.div
            className={styles.panel}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.panelGlow} aria-hidden />
            <div className={styles.stats}>
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    className={styles.stat}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.45 }}
                  >
                    <span className={styles.statIcon}>
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </motion.div>
                );
              })}
            </div>
            <p className={styles.disclaimer}>
              Números ilustrativos de operação — resultados reais variam por campanha e região.
              Solicite o relatório de atendimento atualizado no WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
