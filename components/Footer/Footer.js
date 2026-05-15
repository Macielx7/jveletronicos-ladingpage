import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { getWhatsAppLink, SITE_NAME, INSTAGRAM_URL } from "@/utils/constants";
import styles from "./Footer.module.css";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#confianca", label: "Confiança" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#experiencia", label: "Vídeo" },
  { href: "#cta-final", label: "Fale agora" },
];

export function Footer() {
  const wa = getWhatsAppLink();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandLogoWrap}>
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={160}
                height={160}
                className={styles.brandLogo}
              />
            </div>
            <p className={styles.brandName}>{SITE_NAME}</p>
            <p className={styles.brandTag}>
              iPhones premium com padrão internacional de atendimento e logística enxuta.
            </p>
          </div>
          <nav className={styles.nav} aria-label="Rodapé">
            <p className={styles.navTitle}>Navegação</p>
            <ul className={styles.navList}>
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={styles.navLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.contact}>
            <p className={styles.navTitle}>Contato imediato</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className={styles.waLink}>
              <FaWhatsapp size={20} aria-hidden />
              WhatsApp comercial
            </a>
            <p className={styles.hours}>Segunda a sábado · 9h às 21h</p>
          </div>
        </div>
        <div className={styles.mid}>
          <p className={styles.disclaimer}>
            JV Eletrônicos é uma operação comercial independente. Apple® é marca registrada de Apple
            Inc. Imagens ilustrativas podem variar conforme disponibilidade de estoque.
          </p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.</p>
          <div className={styles.social}>
            <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialBtn}>
              <FaWhatsapp size={18} />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialBtn}>
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialBtn}>
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
