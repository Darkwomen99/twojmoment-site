
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = form.querySelector("input");
  const message = document.createElement("p");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = input.value.trim();
    if (!email || !email.includes("@")) {
      alert("Podaj poprawny email.");
      return;
    }

    let emails = JSON.parse(localStorage.getItem("emails") || "[]");
    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));

    message.textContent = "Dziękujemy za zapis!";
    message.style.color = "#d65f4c";
    form.appendChild(message);

    form.reset();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const langSwitcher = document.getElementById("languageSwitcher");
  const welcomeText = document.getElementById("welcomeText");
  const calendarText = document.getElementById("calendarText");
  const giftsText = document.getElementById("giftsText");
  const contactText = document.getElementById("contactText");

  function changeLanguage(lang) {
    localStorage.setItem("selectedLang", lang); // Зберігаємо мову
    welcomeText.textContent = translations[lang].welcome;
    calendarText.textContent = translations[lang].calendar;
    giftsText.textContent = translations[lang].gifts;
    contactText.textContent = translations[lang].contact;
  }

  // Завантажуємо мову з localStorage
  const savedLang = localStorage.getItem("selectedLang") || "en";
  langSwitcher.value = savedLang;
  changeLanguage(savedLang);

  langSwitcher.addEventListener("change", function () {
    changeLanguage(this.value);
  });
});
