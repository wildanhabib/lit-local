import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../generated/locale-codes';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    switch (locale) {
        case 'es':
          return import('../generated/locales/es.js');
        case 'id':
          return import('../generated/locales/id.js');
        default:
          return ;
      }
    // return;

    // import(`../../generated/locales/${locale}.js`);
    // import(`../generated/locales/id.js`);
    // import(`../generated/locales/es.js`);
  },
});

export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('lang') || sourceLocale;

  console.log('setLocaleFromUrl', locale);
  console.log('getLocale', getLocale());
  await setLocale(locale);
};

export const localeNames = {
  en: 'Inggris',
  es: 'Espanol',
  id: 'Indonesia',
};
