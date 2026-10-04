document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-promo]");
  if (!button) return;
  const panel = button.closest("[data-promo-reference]");
  const code = panel?.querySelector(".promo-value")?.textContent?.trim();
  const status = panel?.querySelector(".promo-copy-status");
  if (!code || !status) return;
  try {
    await navigator.clipboard.writeText(code);
    status.textContent = "Код скопирован";
  } catch {
    status.textContent = "Выделите код и скопируйте вручную";
  }
});
