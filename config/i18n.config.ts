import itLocale from "../locales/it.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "it",
  messages: {
    it: itLocale,
  },
}));
