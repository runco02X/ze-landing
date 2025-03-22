import { enTranslations } from './en';
import { frTranslations } from './fr';
import { TranslationSchema } from './types';

export const translations: Record<Language, TranslationSchema> = {
  en: enTranslations,
  fr: frTranslations
};

export type Language = 'en' | 'fr';
