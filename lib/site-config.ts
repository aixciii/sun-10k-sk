/**
 * =====================================================
 * SITE CONFIGURATION - SUN-10K.sk
 * =====================================================
 * Edit this file to update all content across the site.
 * Prices, product names, contact info, warranty text, etc.
 * =====================================================
 */

export const siteConfig = {
  // ==========================================
  // COMPANY INFO
  // ==========================================
  company: {
    name: 'SK Partner s.r.o.',
    website: 'SUN-10K.sk',
    tagline: 'Oficiálny importér Deye',
    address: 'Staviteľská ulica 3, 831 04 Bratislava - Rača',
    addressShort: 'Staviteľská ulica 3, 831 04 Bratislava',
    ico: '56032340',
    dic: '2122176936',
    icDph: 'SK2122176936',
    country: 'Slovensko',
    year: 2025,
  },

  // ==========================================
  // CONTACT
  // ==========================================
  contact: {
    email: 'sales@sk-partner.sk',
    phone: '+421 948 450 458',
  },

  // ==========================================
  // INVERTER PRODUCT
  // ==========================================
  inverter: {
    name: 'Deye SUN-10K-SG05LP3-EU',
    shortName: 'SUN-10K',
    description: '3-fázový hybridný menič 10 kW',
    priceExclVat: 1380,
    priceInclVat: 1697.40,
    currency: '€',
    imageUrl: 'https://cdn.myshoptet.com/usr/www.deye-slovakia.sk/user/shop/big/171-1_sun-8-12k-sg05lp3-eu-sm22.png?68aec63c',
    badges: {
      inStock: 'Skladom v Bratislave',
      bestPrice: 'Najlepšia cena na Slovensku',
    },
    specs: [
      { label: 'Výkon AC', value: '10 000 W' },
      { label: 'Fázy', value: '3-fázový' },
      { label: 'Max. PV vstup', value: '13 000 W' },
      { label: 'MPPT', value: '2× (200–650 V)' },
      { label: 'Účinnosť', value: '97,6 %' },
      { label: 'Batéria', value: '48 V LV' },
      { label: 'Max. prúd', value: '210 A' },
      { label: 'Ochrana', value: 'IP65' },
      { label: 'Paralelne', value: 'až 16 ks' },
      { label: 'Komunikácia', value: 'WiFi + BT' },
    ],
    // Stats shown in hero card
    stats: [
      { value: '10 kW', label: 'Výkon AC' },
      { value: '13 kW', label: 'Max PV vstup' },
      { value: '97,6%', label: 'Účinnosť' },
      { value: '10 rokov', label: 'Záruka' },
    ],
  },

  // ==========================================
  // BATTERY PRODUCT
  // ==========================================
  battery: {
    name: 'Deye SE-F12-C LV',
    description: 'LiFePO4 batéria 11,8 kWh',
    priceExclVat: 1399,
    priceInclVat: 1720.77,
    currency: '€',
    imageUrl: 'https://ecoprodukt.sk/image/product%2F72%2F25%2F57%2F90103-bateria-lifepo4-deye-se-f12-c-lv-20260310120333.jpg',
    badges: {
      inStock: 'Skladom v Bratislave',
      partner: 'Ideálny partner k meniču',
    },
    specs: [
      { label: 'Kapacita', value: '11,8 kWh' },
      { label: 'Napätie', value: '51,2 V LV' },
      { label: 'Prúd', value: '230 Ah' },
      { label: 'Technológia', value: 'LiFePO4' },
      { label: 'Cyklov', value: '6 000+ pri 80% DoD' },
      { label: 'Max. vybíjanie', value: '280 A' },
      { label: 'Displej', value: 'LCD (SOC)' },
      { label: 'Komunikácia', value: 'CAN / RS485' },
      { label: 'Paralelne', value: 'až 32 ks' },
    ],
  },

  // ==========================================
  // COMBO BUNDLE
  // ==========================================
  combo: {
    name: 'Kompletný systém',
    description: 'Menič SUN-10K + Batéria SE-F12-C LV',
    badge: 'Najlepšia hodnota',
    priceExclVat: 2779, // inverter + battery
    priceInclVat: 3418.17,
    currency: '€',
    ctaText: 'Objednať kompletný systém',
  },

  // ==========================================
  // WARRANTY
  // ==========================================
  warranty: {
    years: 10,
    title: '10 rokov záruka od výrobcu Deye',
    description: 'Platí pre hybridný menič SUN-10K aj batériu SE-F12-C LV.',
  },

  // ==========================================
  // HERO SECTION
  // ==========================================
  hero: {
    badge: 'Oficiálny importér Deye · Slovensko',
    headline: 'Hybridný menič Deye 10 kW — energia pod vašou kontrolou',
    subheadline: '3-fázový. On-grid aj off-grid. Zálohovanie pri výpadku. Skladom v Bratislave. Doručenie 1–2 dni.',
    ctaPrimary: 'Objednať za 1 380 € bez DPH',
    ctaSecondary: 'Zobraziť špecifikácie ↓',
  },

  // ==========================================
  // PRODUCTS SECTION
  // ==========================================
  products: {
    title: 'Naše produkty',
    subtitle: 'Prémiové riešenia pre vašu energetickú nezávislosť',
    ctaButton: 'Objednať',
  },

  // ==========================================
  // CALCULATOR
  // ==========================================
  calculator: {
    title: 'Kalkulačka úspor',
    subtitle: 'Zistite, koľko môžete ušetriť s hybridným meničom Deye',
    // Total investment for payback calculation (devices + installation estimate)
    totalInvestment: 4279,
    disclaimer: '* Orientačný výpočet. Skutočné úspory závisia od lokácie.',
  },

  // ==========================================
  // TRUST BAR
  // ==========================================
  trustBar: [
    { text: 'Doručenie 1–2 dni' },
    { text: 'Skladom v Bratislave' },
    { text: '10 rokov záruka' },
    { text: 'CE certifikát' },
    { text: 'Oficiálny importér' },
  ],

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    copyright: '© 2025 SK Partner s.r.o. · Oficiálny importér Deye · Všetky práva vyhradené',
  },
}

// Helper function to format price with Slovak locale
export function formatPrice(price: number, showDecimals = true): string {
  return price.toLocaleString('sk-SK', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  })
}

// Helper to format price display
export function formatPriceDisplay(priceExclVat: number, priceInclVat: number, currency: string): {
  main: string
  sub: string
} {
  return {
    main: `${formatPrice(priceExclVat, false)} ${currency}`,
    sub: `bez DPH (s DPH: ${formatPrice(priceInclVat)} ${currency})`,
  }
}
