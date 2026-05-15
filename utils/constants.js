export const WHATSAPP_NUMBER = "5561982495591";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, JV Eletrônicos! Quero um iPhone premium com condições exclusivas.";

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const SITE_NAME = "JV Eletrônicos";
export const SITE_URL = "https://jveletronicos.com.br";

/** Perfil público — alinhe ao link real do Instagram (ex.: @jv_eletronicoss) */
export const INSTAGRAM_URL = "https://www.instagram.com/jv_eletronicoss/";

/** Vídeo institucional / prova social (arquivo em `public/videos/`) */
export const VIDEO_LEAD_STORY_SRC = "/videos/lead-story.mp4";
