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
  ceremony: {
    time: "3:30 p. m.",
    place: "Casablanca Casa de Retiro",
    address: "Carrera 14 #153-45, barrio Salado, Ibagué, Tolima",
  },
  reception: {
    time: "7:00 p. m.",
    place: "Sede deportiva Santa Ana de la Universidad de Ibagué",
    address: "Calle 123 #6, Mz 35-42, vía al Salado, barrio Santa Ana, Ibagué, Tolima",
  },
  dressCode: "Vestuario formal",
  menDressCode: "Te pedimos no vestir corbatín, traje azul ni beige",
  womenDressCode: "Te pedimos no usar vestido blanco",
  parking: "Sí, habrá parqueaderos disponibles para carros y motocicletas, tanto en el lugar de la ceremonia como en el de la celebración.",
  children: "Preferiblemente no, por los horarios y las responsabilidades adicionales que implicaría para los papás. Agradecemos mucho tu comprensión.",
  pets: "No es posible, debido a las restricciones de la iglesia y del salón del evento. Agradecemos mucho tu comprensión.",
  arrival: "Recomendamos llegar al menos 15 minutos antes de la hora indicada.",
  celebrationEnd: "La celebración terminará a las 3:00 a. m. Para regresar, te recomendamos tomar un taxi o contar con un conductor elegido si vas a consumir bebidas alcohólicas. Queremos que todos regresen a casa de manera segura.",
  rsvpDeadline: "Agradecemos que nos confirmes antes del 1 de diciembre de 2026, tanto si podrás acompañarnos como si no. Así podremos organizarlo todo con mucho cariño.",
  transportation: "Los lugares están a unos 10 minutos en carro, aproximadamente. Cada invitado deberá trasladarse por sus propios medios desde Casablanca hasta la sede Santa Ana; no habrá transporte organizado.",
};

const invitedGuests = JSON.parse(
  new TextDecoder("utf-8").decode(
    Uint8Array.from(
      atob("WyJEaW9zIiwiRXZhIiwiSm9zZSBEYW5pZWwiLCJKaG9uIEFsZXhhbmRlciIsIkNhcmxvcyBBbmRyw6lzIiwiRWxpemFiZXRoIiwiTWFyaW5lbGJhIiwiQWlkZSIsIkhlbnJ5IEplbnJ5IEhlbnJpIEplbnJpIiwiSnVsaWV0aCBUYXRpYW5hIiwiTmFuYSBNYXJpYSBHbGV5ZGlzIiwiTGliYXJkbyIsIk5vZWwiLCJBbmdlbCIsIlNhbXVlbCBBbnRvbmlvIiwiTHV6IERhcnkiLCJWaXZpYW5hIEdpbm5ldGgiLCJNaWd1ZWwgQW5kcsOpcyIsIklsZGEiLCJKZW5uaSBZZW5pIEplbm55IEplbmkgWWVubmkiLCJFbHNhIiwiSXZhbiBEYXLDrW8iLCJNYXJpYSBkZWwgQ2FybWVuIiwiTHVpcyBBbGJlcnRvIiwiTHVpc2EgTWFyaWEiLCJDYW1pbG8gQWxiZXJ0byIsIk1pcmlhbSIsIkNhcm1lbiIsIkd1aWRvIEZlcm5hbmRvIiwiTWFnYWxseSIsIllvbGFuZGEiLCJFZHVhcmRvIiwiRGFuaWVsIEVkdWFyZG8iLCJKb3NlIEx1aXMiLCJDYXJtZW4gUmFxdWVsIiwiR2lvdmFueSIsIlNlYmFzdGlhbiIsIkxpbmEgQWxlamFuZHJhIiwiSnVhbiBDYXJsb3MiLCJNYXJ0aGEiLCJSYcO6bCBFcm5lc3RvIiwiRGl2YSIsIlJhw7psIEFsYmVydG8iLCJDbGF1ZGlhIiwiTWFyaWEgZGVsIFBpbGFyIiwiRWxtZXIgSmVhbiIsIkdpb3Zhbm5hIiwiSnVhbiBDYXJsb3MiLCJEYW5pZWxhIiwiSnVhbiBGZWxpcGUiLCJKb3NlIEJlcm5hcmRvIiwiTmF0YWxpYSIsIkdlcm3DoW4iLCJHbG9yaWEiLCJOb3JtYSIsIlJvc21lcnkiLCJFc3RlZmFuw61hIiwiTmljb2xhcyIsIk5hdGhhbGlhIE1hcmNlbGEiLCJBdXJhIiwiQW5kcsOpcyBNYXVyaWNpbyIsIkp1bGlhbmEiLCJDcmlzdGlhbiBNYXVyaWNpbyIsIkp1YW4gR3VpbGxlcm1vIiwiTWFybGVueSIsIk5hbmN5IiwiQWxlamFuZHJhIl0="),
      (character) => character.charCodeAt(0),
    ),
  ),
);
const byId = (id) => document.getElementById(id);
let musicEnabled = true;
let musicHasStarted = false;

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
  byId("pets-answer").textContent = wedding.pets;
  byId("arrival-answer").textContent = wedding.arrival;
  byId("celebration-end-answer").textContent = wedding.celebrationEnd;
  byId("rsvp-deadline-answer").textContent = wedding.rsvpDeadline;
  byId("transportation-answer").textContent = wedding.transportation;

  const date = new Date(wedding.date);
  if (Number.isNaN(date.getTime())) {
    throw new Error("La fecha de la boda en script.js no tiene un formato válido.");
  }

  const formattedDate = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: wedding.timeZone,
  }).format(date);
  byId("wedding-date").textContent =
    formattedDate.replace(/^./u, (letter) => letter.toLocaleUpperCase("es-CO"));
  byId("countdown-event-date").textContent =
    formattedDate.replace(/^./u, (letter) => letter.toLocaleUpperCase("es-CO"));
  byId("countdown-event-details").textContent =
    `${wedding.ceremony.time} · ${wedding.ceremony.place} · ${wedding.city}`;

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

  wedding.rsvpContacts.forEach(({ phone, display }) => {
    const link = document.createElement("a");
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const bubble = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const handset = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const label = document.createElement("span");

    link.className = "button button--green";
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(buildRsvpMessage())}`;
    link.dataset.phone = phone;
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

function buildRsvpMessage(guestName = "[nombre de la persona invitada]") {
  return [
    `¡Hola! Soy ${guestName}. Sobre la invitación de boda de ${wedding.names}:`,
    "Mi respuesta es: [Sí asistiré / No podré asistir].",
  ].join("\n");
}

function personalizeRsvpLinks(guestName) {
  byId("rsvp-contacts").querySelectorAll("a").forEach((link) => {
    link.href = `https://wa.me/${link.dataset.phone}?text=${encodeURIComponent(buildRsvpMessage(guestName))}`;
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
    .replace(/\s+/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

function isInvitedGuest(name) {
  const normalizedName = normalizeGuestName(name);
  const nameParts = normalizedName.split(" ").filter(Boolean);

  if (nameParts.length === 0) {
    return false;
  }

  return invitedGuests.some((guest) => {
    const guestParts = normalizeGuestName(guest).split(" ");

    return guestParts.some((_, start) =>
      nameParts.every((part, offset) => guestParts[start + offset] === part),
    );
  });
}

function validateGuest(event) {
  event.preventDefault();

  const input = byId("guest-name");
  const error = byId("guest-error");

  if (!isInvitedGuest(input.value)) {
    error.textContent = "¡Invitación NO encontrada!";
    input.setAttribute("aria-invalid", "true");
    input.select();
    return;
  }

  input.removeAttribute("aria-invalid");
  error.textContent = "";
  personalizeRsvpLinks(input.value.trim());

  const screen = byId("envelope-screen");
  const invitation = byId("invitation");

  startBackgroundMusic();
  if (window.location.hash) {
    window.history.replaceState(
      window.history.state,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }
  document.documentElement.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.documentElement.style.removeProperty("scroll-behavior");
  invitation.hidden = false;
  screen.classList.add("is-opening");
  window.setTimeout(() => {
    screen.hidden = true;
    byId("open-details").focus({ preventScroll: true });
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 600);
}

function updateMusicButton() {
  const button = byId("music-toggle");
  button.setAttribute(
    "aria-label",
    `${musicEnabled ? "Pausar" : "Reproducir"} música de fondo`,
  );
  button.setAttribute("aria-pressed", String(musicEnabled));
}

function reportMusicError(error) {
  console.error("No se pudo reproducir la música de fondo.", error);
  musicHasStarted = false;
}

function replayBackgroundMusic() {
  const music = byId("background-music");
  if (!musicEnabled || document.hidden) {
    return;
  }

  music.currentTime = 0;
  startBackgroundMusic();
}

function startBackgroundMusic() {
  const music = byId("background-music");
  if (!musicEnabled || document.hidden) {
    return;
  }

  music.volume = 0.07;
  musicHasStarted = true;
  music.play().catch(reportMusicError);
}

function toggleBackgroundMusic() {
  const music = byId("background-music");
  musicEnabled = !musicEnabled;
  updateMusicButton();

  if (musicEnabled) {
    startBackgroundMusic();
    return;
  }

  music.pause();
}

function openDetailsEnvelope() {
  const button = byId("open-details");
  button.closest(".invite-envelope").classList.add("is-opening");
  button.setAttribute("aria-expanded", "true");
  button.disabled = true;
  document.documentElement.classList.remove("page-locked");
  document.body.classList.remove("page-locked");
  document.querySelector(".footer").append(byId("music-toggle"));
  window.setTimeout(() => {
    byId("promesa").scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 1500);
}

function pauseMusicWhenHidden() {
  byId("background-music").pause();
}

function resumeMusicWhenVisible() {
  if (musicEnabled && musicHasStarted) {
    startBackgroundMusic();
  }
}

function keepMusicControlClearOfFooter() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const footer = document.querySelector(".footer");
  const button = byId("music-toggle");
  const observer = new IntersectionObserver(([entry]) => {
    const footerIsVisible = entry.isIntersecting;
    footer.classList.toggle("music-toggle--active", footerIsVisible);
    button.classList.toggle("music-toggle--footer", footerIsVisible);
  });

  observer.observe(footer);
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
byId("music-toggle").addEventListener("click", toggleBackgroundMusic);
byId("background-music").addEventListener("ended", replayBackgroundMusic);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pauseMusicWhenHidden();
  } else {
    resumeMusicWhenVisible();
  }
});
window.addEventListener("pagehide", pauseMusicWhenHidden);
window.addEventListener("pageshow", resumeMusicWhenVisible);

populateInvitation();
startCountdown();
keepMusicControlClearOfFooter();
updateMusicButton();
