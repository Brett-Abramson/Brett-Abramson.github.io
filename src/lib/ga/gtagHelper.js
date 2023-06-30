export const pageview = (GA_MEASUREMENT_ID) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
