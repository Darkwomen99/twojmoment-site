document.addEventListener("DOMContentLoaded", function () {
  const langSwitcher = document.getElementById("languageSwitcher");

  if (!langSwitcher) {
    console.error("Елемент #languageSwitcher не знайдено!");
    return;
  }

  function changeLanguage(lang) {
    if (!translations[lang]) {
      console.error(`Переклад для мови ${lang} не знайдено!`);
      return;
    }

    localSt

