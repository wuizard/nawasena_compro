import type { Localized } from "@/features/i18n";

export type ProductStatus = "available" | "beta" | "in-development";

export type ProductScreen = {
  id: string;
  src: string;
  width: number;
  height: number;
  label: Localized<string>;
  alt: Localized<string>;
};

export type ProductFeature = { title: Localized<string>; body: Localized<string> };

export type Product = {
  slug: string;
  name: string;
  icon: string;
  url: string;
  urlLabel: string;
  status: ProductStatus;
  category: Localized<string>;
  tagline: Localized<string>;
  description: Localized<string>;
  features: ProductFeature[];
  screens: ProductScreen[];
  origin?: {
    studio: string;
    url: string;
    urlLabel: string;
    note: Localized<string>;
  };
};

export const products: Product[] = [
  {
    slug: "barenga",
    name: "Barenga",
    icon: "/products/barenga/icon.png",
    url: "https://barenga.app",
    urlLabel: "barenga.app",
    status: "available",
    category: {
      id: "Sports · Community · Aplikasi Web",
      en: "Sports · Community · Web App",
    },
    tagline: {
      id: "Kelola liga Anda di luar grup WhatsApp, semuanya tercatat.",
      en: "Runs your league off WhatsApp and on the record.",
    },
    description: {
      id: "Barenga adalah aplikasi untuk penyelenggara komunitas olahraga amatir yang rutin bermain, dimulai dari mini soccer dan futsal di Medan. Kelola anggota dan daftar pemain, jalankan draft pemain secara langsung, jadwalkan dan catat pertandingan, lalu dapatkan klasemen otomatis, leaderboard, dan profil pemain terverifikasi dalam satu tempat.",
      en: "Barenga is an app for organizers of recurring amateur sports communities, starting with mini soccer and futsal in Medan. Manage members and the player roster, run live player drafts, schedule and record matches, and get automatic standings, leaderboards, and verified player profiles in one place.",
    },
    features: [
      {
        title: { id: "Draft pemain langsung", en: "Live player drafts" },
        body: {
          id: "Kapten memilih secara real time dengan urutan, timer, undo, dan reconnect.",
          en: "Captains pick in real time with order, timers, undo, and reconnect.",
        },
      },
      {
        title: { id: "Klasemen otomatis", en: "Automatic standings" },
        body: {
          id: "Klasemen dan tiebreak dihitung ulang dari data pertandingan.",
          en: "Standings and tiebreaks recalculate from match events.",
        },
      },
      {
        title: { id: "Statistik pemain", en: "Player statistics" },
        body: {
          id: "Gol, assist, dan penampilan terkumpul dari kejadian pertandingan yang terverifikasi.",
          en: "Goals, assists, and appearances build up from verified match events.",
        },
      },
      {
        title: { id: "Konten bermerek", en: "Branded content" },
        body: {
          id: "Grafis hari pertandingan dan hasil dibuat sesuai brand komunitas.",
          en: "Match day graphics and results generated in the community's brand.",
        },
      },
      {
        title: { id: "Profil terverifikasi", en: "Verified profiles" },
        body: {
          id: "Pemain mengklaim profil dengan riwayat nyata, detail pribadi tetap terjaga.",
          en: "Players claim a profile with real history while private details stay private.",
        },
      },
      {
        title: { id: "Aman sejak awal", en: "Safe by default" },
        body: {
          id: "Pendaftar menghubungi penyelenggara tanpa harus masuk grup WhatsApp lebih dulu.",
          en: "Applicants reach organizers without joining WhatsApp first.",
        },
      },
    ],
    screens: [
      {
        id: "home",
        src: "/products/barenga/hero.png",
        width: 2880,
        height: 1800,
        label: { id: "Beranda", en: "Home" },
        alt: {
          id: "Tampilan beranda Barenga dengan kartu draft langsung dan klasemen musim",
          en: "Barenga home screen showing a live draft card and season standings",
        },
      },
      {
        id: "features",
        src: "/products/barenga/features.png",
        width: 2880,
        height: 1300,
        label: { id: "Fitur", en: "Features" },
        alt: {
          id: "Daftar fitur Barenga: draft pemain, klasemen otomatis, statistik, dan lainnya",
          en: "Barenga feature grid: player drafts, automatic standings, statistics, and more",
        },
      },
    ],
    // Wuebuild origin info, hidden for now. Uncomment to show the "Barenga × Wuebuild" box again.
    // origin: {
    //   studio: "Wuebuild",
    //   url: "https://wuebuild.com",
    //   urlLabel: "wuebuild.com",
    //   note: {
    //     id: "Barenga pertama kali lahir di Wuebuild, software house asal Indonesia yang membangun website, platform, dan produk digital untuk bisnis dan kreator. Kini Barenga menjadi bagian dari produk Nawasena Ananta.",
    //     en: "Barenga was first created at Wuebuild, an Indonesian software house building websites, platforms, and digital products for businesses and creators. It is now part of the Nawasena Ananta product family.",
    //   },
    // },
  },
];
