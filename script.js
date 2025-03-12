
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

    // Зберігаємо в localStorage (імітація зберігання)
    let emails = JSON.parse(localStorage.getItem("emails") || "[]");
    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));

    // Повідомлення подяки
    message.textContent = "Dziękujemy za zapis!";
    message.style.color = "#d65f4c";
    form.appendChild(message);

    form.reset();
  });
});
