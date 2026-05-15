"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { getWhatsAppLink, SITE_NAME, INSTAGRAM_URL } from "@/utils/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#confianca", label: "Confiança" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#experiencia", label: "Experiência" },
];

export function Navbar() {
  const scrolled = useScrollPosition(32);
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  const wa = getWhatsAppLink();

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={88}
              height={88}
              className={styles.brandImg}
              priority
            />
          </span>
          <span className={styles.brandText}>{SITE_NAME}</span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navList}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.navLink}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.ctaGroup}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaInsta}
            >
              <FaInstagram size={18} aria-hidden />
              Instagram
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              <FaWhatsapp size={18} aria-hidden />
              WhatsApp
            </a>
          </div>

          <div className={styles.mobileQuick}>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.quickBtn}
              aria-label="Instagram da JV Eletrônicos"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.quickBtn} ${styles.quickBtnWa}`}
              aria-label="WhatsApp da JV Eletrônicos"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.mobile}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className={styles.mobileList}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={styles.mobileLink}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCtas}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCtaSecondary}
                onClick={() => setOpen(false)}
              >
                <FaInstagram size={20} aria-hidden />
                Abrir Instagram
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileCta}
                onClick={() => setOpen(false)}
              >
                <FaWhatsapp size={20} aria-hidden />
                Abrir WhatsApp agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
