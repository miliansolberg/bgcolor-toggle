import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

const fallbackLocale = 'en';
const lngs = [fallbackLocale, 'de'];

addMessages('en', {
  welcome: 'Welcome to Your Svelte App'
});
addMessages('de', {
  welcome: 'Willkommen zu deiner Svelte-App'
});

let initialLocale;
const detectedLocale = getLocaleFromNavigator(); // the locale could be region specific, i.e. de-CH
if (lngs.indexOf(detectedLocale) > -1) initialLocale = detectedLocale;
if (!initialLocale && detectedLocale.indexOf('-') > 0) {
  const foundLng = lngs.find((l) => detectedLocale.indexOf(l + '-') === 0);
  if (foundLng) initialLocale = foundLng;
}
if (!initialLocale) initialLocale = fallbackLocale;

init({
  fallbackLocale,
  initialLocale
});