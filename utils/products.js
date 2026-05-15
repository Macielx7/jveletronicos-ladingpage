/**
 * Imagens locais: coloque os arquivos em `public/images/products/`
 * e use o caminho que começa com `/images/...` (a pasta `public` vira a raiz do site).
 *
 * Exemplo: arquivo `public/images/products/iphone-16-pro.jpg` → `image: "/images/products/iphone-16-pro.jpg"`
 */
export const products = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    tagline: "Todas as cores disponíveis, 256GB.",
    priceFrom: "R$ 8.290 a vista",
    installments: "Dividimos em até 18x",
    badge: "Lançamento",
    highlight: true,
    image: "/images/products/iphone-17-pro-max.png",
    imageAlt: "iPhone 17 Pro Max — caixas lacradas em destaque",
    whatsappMessage:
      "Quero reservar o iPhone 17 Pro Max com as melhores condições da JV Eletrônicos.",
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    tagline: "Câmera espacial. Performance de estúdio no bolso.",
    priceFrom: "R$ 7.299",
    installments: "até 18x sem juros",
    badge: "Mais vendido",
    highlight: false,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=900&q=80",
    imageAlt: "Detalhe de smartphone premium",
    whatsappMessage:
      "Tenho interesse no iPhone 16 Pro. Pode me passar cores, estoques e valores?",
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    tagline: "Titanium. Bateria de longa duração. Câmera profissional.",
    priceFrom: "R$ 6.799",
    installments: "até 18x sem juros",
    badge: "Oferta limitada",
    highlight: false,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80",
    imageAlt: "Smartphone em mãos",
    whatsappMessage:
      "Quero o iPhone 15 Pro Max com garantia e nota fiscal. Qual o melhor preço hoje?",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    tagline: "Dynamic Island. USB-C. Câmera de 48 MP. 128GB.",
    priceFrom: "R$ 3.790 a vista",
    installments: "dividimos em até 18x",
    badge: "Entrada premium",
    highlight: false,
    image:
      "/images/products/iphone-15-normal.jpeg",
    imageAlt: "Linha de smartphones",
    whatsappMessage:
      "Gostaria do iPhone 15 com parcelamento. Podemos falar agora?",
  },
];
