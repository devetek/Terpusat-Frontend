// import i18next from "i18next";
// import id from "./navigation-i18n/id";
// import en from "./navigation-i18n/en";

// i18next.addResourceBundle("id", "navigation", id);
// i18next.addResourceBundle("en", "navigation", en);

const navigationConfig = [
  {
    id: "beranda",
    title: "Beranda",
    translate: "BERANDA",
    type: "item",
    icon: "apps",
    url: "/",
    exact: true,
  },
  {
    id: "profil",
    title: "Profil",
    translate: "PROFIL",
    type: "group",
    icon: "domain",
    children: [
      {
        id: "tentang-kami",
        title: "Tentang Kami",
        translate: "Tentang Kami",
        type: "item",
        icon: "bar_chart",
        url: "/tentang",
      },
      {
        id: "visi-misi",
        title: "Visi Misi",
        translate: "Visi Misi",
        type: "item",
        icon: "bar_chart",
        url: "/visi",
      },
      {
        id: "lokasi",
        title: "Lokasi",
        translate: "Lokasi",
        type: "item",
        icon: "add_location",
        url: "/lokasi",
      },
      {
        id: "divisi",
        title: "Divisi",
        translate: "Divisi",
        type: "item",
        icon: "group",
        url: "/divisi",
      },
    ],
  },
  {
    id: "layanan",
    title: "Layanan",
    translate: "LAYANAN",
    type: "group",
    icon: "assessment",
    children: [
      {
        id: "branding",
        title: "Branding",
        translate: "Branding",
        type: "item",
        // icon: "bar_chart",
        url: "/layanan/branding-produk",
      },
      {
        id: "design",
        title: "Design",
        translate: "Design",
        type: "item",
        // icon: "bar_chart",
        url: "/layanan/design",
      },
      {
        id: "system",
        title: "System",
        translate: "System",
        type: "item",
        // icon: "add_location",
        url: "/layanan/system",
      },
      {
        id: "divisi",
        title: "Marketing",
        translate: "Marketing",
        type: "item",
        // icon: "group",
        url: "/layanan/marketing",
      },
    ],
  },
  {
    id: "produk",
    title: "Produk",
    translate: "PRODUK",
    type: "item",
    icon: "store",
    url: "/kategori",
  },
  {
    id: "blog",
    title: "Blog",
    translate: "BLOG",
    type: "item",
    icon: "comment",
    url: "/blog",
  },
  {
    id: "hubungi",
    title: "Hubungi Kami",
    translate: "HUBUNGI KAMI",
    type: "item",
    icon: "contact_support",
    url: "/kontak",
  },
];

export default navigationConfig;
