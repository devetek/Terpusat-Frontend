export const HOSTNAME = "https://terpusat.com/";
export const GQL_MAIN_HOST = "https://outletcyber.net/terpusat/graphql";
export const GQL_MAIN_CONFIG = {
  url: GQL_MAIN_HOST,
  retry: {
    initialDelay: 3000,
    maxAttempts: 5,
  },
};
export const SITES_INFO = {
  title: "Aplikasi Terpusat",
  description: "Pusat belanja, investasi, layanan, informasi di Indonedia.",
  copyright: () => {
    const startYear = new Date().getFullYear();

    return `2016 - ${startYear} `;
  },
};
