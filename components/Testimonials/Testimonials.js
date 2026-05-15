"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/utils/testimonials";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.inner}>
        <motion.div
          className={styles.head}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className={styles.eyebrow}>Quem já viveu a experiência</p>
          <h2 className={styles.title}>Depoimentos com cara de gente — não de template.</h2>
          <p className={styles.lead}>
            Histórias reais de quem trocou incerteza por protocolo. Leia com calma: o padrão se
            repete.
          </p>
        </motion.div>

        <div className={styles.sliderWrap}>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop
            speed={650}
            autoplay={{ delay: 4600, disableOnInteraction: false }}
            breakpoints={{
              800: { slidesPerView: 2, spaceBetween: 22 },
              1180: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className={styles.swiper}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className={styles.slide}>
                <article className={styles.card}>
                  <Quote className={styles.quote} size={28} strokeWidth={1.2} aria-hidden />
                  <div className={styles.stars} aria-label={`${t.rating} de 5 estrelas`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className={styles.text}>{`“${t.text}”`}</p>
                  <div className={styles.author}>
                    <span className={styles.avatar}>{t.avatar}</span>
                    <div>
                      <p className={styles.name}>{t.name}</p>
                      <p className={styles.role}>{t.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
