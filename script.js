// Personaliza estos datos antes de publicar la invitación.
const wedding = {
  names: "Paula y Daniel",
  city: "Ibagué, Tolima",
  // Usa el formato ISO e incluye la zona horaria del evento.
  date: "2026-12-19T15:30:00-05:00",
  timeZone: "America/Bogota",
  rsvpContacts: [
    { phone: "573182899149", display: "318 289 9149" },
    { phone: "573043902022", display: "304 390 2022" },
  ],
  rsvpMessage: "¡Hola! Confirmo mi asistencia a su matrimonio. ¡Muchas felicidades!",
  ceremony: {
    time: "3:30 p. m.",
    place: "Casablanca Casa de Retiro",
    address: "Carrera 14 #153-45, barrio Salado, Ibagué, Tolima",
  },
  reception: {
    time: "7:00 p. m.",
    place: "Sede deportiva Santa Ana de la Universidad de Ibagué",
    address: "Calle 123, Mz 35-42, vía al Salado, barrio Santa Ana, Ibagué, Tolima",
  },
  dressCode: "Vestuario formal",
  menDressCode: "Hombres: No usar traje azul, beige, ni corbatín.",
  womenDressCode: "Mujeres: No usar vestido blanco.",
  parking: "Completa aquí la información sobre parqueadero.",
  children: "Completa aquí la información sobre la asistencia de niños.",
};

const invitedGuests = ["Maria", "Carlos", "Samuel", "Viviana", "Miguel"];
const byId = (id) => document.getElementById(id);

// Actualiza los textos y crea enlaces de mapas a partir de las direcciones configuradas.
function populateInvitation() {
  byId("couple-names").textContent = wedding.names;
  byId("footer-names").textContent = wedding.names;
  byId("wedding-city").textContent = wedding.city;
  byId("ceremony-time").textContent = wedding.ceremony.time;
  byId("ceremony-place").textContent = wedding.ceremony.place;
  byId("ceremony-address").textContent = wedding.ceremony.address;
  byId("reception-time").textContent = wedding.reception.time;
  byId("reception-place").textContent = wedding.reception.place;
  byId("reception-address").textContent = wedding.reception.address;
  byId("dress-code").textContent = wedding.dressCode;
  byId("men-dress-code").textContent = wedding.menDressCode;
  byId("women-dress-code").textContent = wedding.womenDressCode;
  byId("parking-answer").textContent = wedding.parking;
  byId("children-answer").textContent = wedding.children;

  const date = new Date(wedding.date);
  if (Number.isNaN(date.getTime())) {
    throw new Error("La fecha de la boda en script.js no tiene un formato válido.");
  }

  byId("wedding-date").textContent = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: wedding.timeZone,
  }).format(date);

  setMapLinks("ceremony", wedding.ceremony.address);
  setMapLinks("reception", wedding.reception.address);
  byId("ceremony-maps").href = "https://maps.app.goo.gl/HP46JBwo4UwbVzDv5";
  byId("reception-maps").href = "https://maps.app.goo.gl/gGackCmzvwYRca2SA?g_st=aw";
  configureRsvp();
}

function setMapLinks(eventName, address) {
  const query = encodeURIComponent(address);
  byId(`${eventName}-maps`).href =
    `https://www.google.com/maps/search/?api=1&query=${query}`;
  byId(`${eventName}-waze`).href =
    `https://waze.com/ul?q=${query}&navigate=yes`;
}

function configureRsvp() {
  const contacts = byId("rsvp-contacts");
  const message = encodeURIComponent(wedding.rsvpMessage);

  wedding.rsvpContacts.forEach(({ phone, display }) => {
    const link = document.createElement("a");
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const bubble = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const handset = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const label = document.createElement("span");

    link.className = "button button--green";
    link.href = `https://wa.me/${phone}?text=${message}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    icon.classList.add("button__icon");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("focusable", "false");
    bubble.setAttribute(
      "d",
      "M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z",
    );
    handset.setAttribute(
      "d",
      "M8.2 7.4c.2-.4.5-.4.8-.4h.6c.2 0 .4.1.5.4l.9 2.1c.1.3.1.5-.1.7l-.7.9c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.9-1.1c.2-.2.4-.3.7-.1l2 .9c.3.1.4.3.4.5 0 .6-.3 1.6-.9 2.1-.6.5-1.4.8-2.3.6-1.1-.2-2.5-.8-4.1-2.2-1.9-1.6-3.1-3.6-3.4-4.7-.3-1.1.1-2.1.8-2.6Z",
    );
    bubble.setAttribute("fill", "none");
    bubble.setAttribute("stroke", "currentColor");
    bubble.setAttribute("stroke-width", "1.5");
    bubble.setAttribute("stroke-linecap", "round");
    bubble.setAttribute("stroke-linejoin", "round");
    handset.setAttribute("fill", "currentColor");
    icon.append(bubble, handset);
    label.textContent = `Confirmar al ${display}`;
    link.append(icon, label);
    contacts.append(link);
  });
}

// La cuenta se calcula a partir de una fecha ISO con zona horaria explícita.
function startCountdown() {
  const targetTime = new Date(wedding.date).getTime();
  const output = {
    days: byId("days"),
    hours: byId("hours"),
    minutes: byId("minutes"),
    seconds: byId("seconds"),
  };
  const message = byId("countdown-message");

  function update() {
    const remaining = targetTime - Date.now();

    if (remaining <= 0) {
      Object.values(output).forEach((element) => {
        element.textContent = "0";
      });
      message.textContent = "¡Hoy celebramos juntos!";
      return;
    }

    const secondsLeft = Math.floor(remaining / 1000);
    output.days.textContent = String(Math.floor(secondsLeft / 86400));
    output.hours.textContent = String(Math.floor((secondsLeft % 86400) / 3600));
    output.minutes.textContent = String(Math.floor((secondsLeft % 3600) / 60));
    output.seconds.textContent = String(secondsLeft % 60);
    window.setTimeout(update, 1000);
  }

  update();
}

function openEnvelope() {
  byId("envelope-intro").hidden = true;
  byId("guest-gate").hidden = false;
  byId("guest-name").focus();
}

function normalizeGuestName(name) {
  return name
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function validateGuest(event) {
  event.preventDefault();

  const input = byId("guest-name");
  const error = byId("guest-error");
  const allowedGuests = new Set(invitedGuests.map(normalizeGuestName));

  if (!allowedGuests.has(normalizeGuestName(input.value))) {
    error.textContent = "NOT FOUND 404!";
    input.setAttribute("aria-invalid", "true");
    input.select();
    return;
  }

  input.removeAttribute("aria-invalid");
  error.textContent = "";

  const screen = byId("envelope-screen");
  const invitation = byId("invitation");

  invitation.hidden = false;
  screen.classList.add("is-opening");
  window.setTimeout(() => {
    screen.hidden = true;
    invitation.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 500);
}

function openDetailsEnvelope() {
  const button = byId("open-details");
  button.closest(".invite-envelope").classList.add("is-opening");
  button.setAttribute("aria-expanded", "true");
  button.disabled = true;
  window.setTimeout(() => {
    byId("detalles").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1700);
}

function useHeroFallback() {
  byId("couple-photo").hidden = true;
  document.querySelector(".hero").classList.add("hero--no-photo");
}

const couplePhoto = byId("couple-photo");
couplePhoto.addEventListener("error", useHeroFallback);
if (couplePhoto.complete && couplePhoto.naturalWidth === 0) {
  useHeroFallback();
}

byId("open-invitation").addEventListener("click", openEnvelope);
byId("guest-gate").addEventListener("submit", validateGuest);
byId("guest-name").addEventListener("input", () => {
  byId("guest-error").textContent = "";
  byId("guest-name").removeAttribute("aria-invalid");
});
byId("open-details").addEventListener("click", openDetailsEnvelope);

populateInvitation();
startCountdown();
