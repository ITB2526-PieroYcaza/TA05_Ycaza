document.addEventListener("DOMContentLoaded", () => {

  // 1) Panel derecho "⋮ Projectes"
  const toggleBtn = document.getElementById("projects-toggle");
  const closeBtn  = document.getElementById("projects-close");
  const panel     = document.getElementById("projects-panel");

  function openPanel() {
    if (!panel) return;
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
  }
  function closePanel() {
    if (!panel) return;
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }

  if (toggleBtn && panel) toggleBtn.addEventListener("click", () => {
    panel.classList.contains("open") ? closePanel() : openPanel();
  });
  if (closeBtn && panel) closeBtn.addEventListener("click", closePanel);

  // 2) Modo claro/oscuro
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      themeBtn.textContent = document.body.classList.contains("light") ? "Mode fosc" : "Mode clar";
    });
  }

  // 3) Validación formulario (solo existe en index)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const msg = document.getElementById("message");

      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const msgError = document.getElementById("message-error");
      const success = document.getElementById("form-success");

      nameError.textContent = "";
      emailError.textContent = "";
      msgError.textContent = "";
      success.textContent = "";

      let ok = true;

      if (!name.value.trim()) { nameError.textContent = "El nombre es obligatorio."; ok = false; }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) { emailError.textContent = "Email no válido."; ok = false; }
      if (msg.value.trim().length < 10) { msgError.textContent = "Mínimo 10 caracteres."; ok = false; }

      if (ok) {
        success.textContent = "Mensaje enviado (simulado).";
        form.reset();
      }
    });
  }

  // Extra útil: filtro de proyectos (solo existe en projects.html)
  const filter = document.getElementById("project-filter");
  const list = document.getElementById("project-list");
  if (filter && list) {
    filter.addEventListener("input", () => {
      const q = filter.value.toLowerCase();
      list.querySelectorAll("li").forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  }

});

