import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import vi from './locales/vi.json'
import de from './locales/de.json'
import nl from './locales/nl.json'
import ja from './locales/ja.json'
import tr from './locales/tr.json'
import ko from './locales/ko.json'
import it from './locales/it.json'
import no from './locales/no.json'
import zh from './locales/zh.json'
import ru from './locales/ru.json'
import fr from './locales/fr.json'
import pt from './locales/pt.json'
import es from './locales/es.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      de: { translation: de },
      nl: { translation: nl },
      ja: { translation: ja },
      tr: { translation: tr },
      ko: { translation: ko },
      it: { translation: it },
      no: { translation: no },
      zh: { translation: zh },
      ru: { translation: ru },
      fr: { translation: fr },
      pt: { translation: pt },
      es: { translation: es },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
