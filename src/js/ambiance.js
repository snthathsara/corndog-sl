// Live Restaurant Status Manager for CornDogSL (Bambalapitiya & Moratuwa)
// Operating Hours:
// - Bambalapitiya (59, Marine Drive): Mon–Sun 4:00 PM – 11:00 PM
// - Moratuwa (30, Galle Road New Deviation): Tue–Sun 2:00 PM – 9:30 PM (Closed Mondays)

export function initAmbiance() {
  updateCafeStatus();
  // Check every 30 seconds for live accuracy
  setInterval(updateCafeStatus, 30000);
}

// Get Sri Lanka local time (Asia/Colombo)
function getSriLankaTime() {
  const now = new Date();
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Colombo',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });
    const parts = formatter.formatToParts(now);
    let weekday = 'Thu';
    let hour = now.getHours();
    let minute = now.getMinutes();

    for (const p of parts) {
      if (p.type === 'weekday') weekday = p.value;
      if (p.type === 'hour') hour = parseInt(p.value, 10);
      if (p.type === 'minute') minute = parseInt(p.value, 10);
    }
    if (hour === 24) hour = 0;
    return { weekday, hour, minute, decimalTime: hour + minute / 60 };
  } catch (e) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      weekday: days[now.getDay()],
      hour: now.getHours(),
      minute: now.getMinutes(),
      decimalTime: now.getHours() + now.getMinutes() / 60,
    };
  }
}

// Live CornDogSL Branches Open/Closed Status
export function updateCafeStatus() {
  const statusBadge = document.getElementById('hero-status-badge');
  const pulseDot = document.getElementById('status-pulse-dot');
  const statusLabel = document.getElementById('cafe-status-label');
  const statusSub = document.getElementById('cafe-status-sub');

  if (!statusLabel) return;

  const { weekday, decimalTime } = getSriLankaTime();

  // Bambalapitiya: Mon–Sun 4:00 PM (16.0) to 11:00 PM (23.0)
  const isBambaOpen = decimalTime >= 16.0 && decimalTime < 23.0;

  // Moratuwa: Tue–Sun 2:00 PM (14.0) to 9:30 PM (21.5), Closed Mondays
  const isMoratuwaOpen = weekday !== 'Mon' && decimalTime >= 14.0 && decimalTime < 21.5;

  let isOpen = isBambaOpen || isMoratuwaOpen;
  let label = 'Closed Now';
  let sub = 'Marine Dr (4 PM - 11 PM) · Moratuwa (2 PM - 9:30 PM)';

  if (isBambaOpen && isMoratuwaOpen) {
    label = 'Open Now at Both Branches';
    sub = 'Marine Drive closes 11 PM · Moratuwa closes 9:30 PM';
  } else if (isBambaOpen && !isMoratuwaOpen) {
    label = 'Open Now at Marine Drive';
    sub = 'Marine Drive open till 11:00 PM · Moratuwa closed';
  } else if (!isBambaOpen && isMoratuwaOpen) {
    label = 'Open Now at Moratuwa';
    sub = 'Moratuwa open till 9:30 PM · Marine Drive opens 4:00 PM';
  } else {
    // Both closed
    if (decimalTime < 14.0) {
      label = 'Opening Later Today';
      sub = weekday === 'Mon'
        ? 'Marine Drive opens 4:00 PM · Moratuwa closed on Mondays'
        : 'Moratuwa opens 2:00 PM · Marine Drive opens 4:00 PM';
    } else {
      label = 'Closed for the Night';
      sub = 'Opens tomorrow at 2:00 PM (Moratuwa) & 4:00 PM (Marine Dr)';
    }
  }

  // Update UI Elements
  statusLabel.textContent = label;
  if (statusSub) statusSub.textContent = sub;

  if (statusBadge) {
    if (isOpen) {
      statusBadge.classList.remove('is-closed');
      statusBadge.classList.add('is-open');
    } else {
      statusBadge.classList.remove('is-open');
      statusBadge.classList.add('is-closed');
    }
  }

  if (pulseDot) {
    if (isOpen) {
      pulseDot.classList.remove('is-closed');
      pulseDot.classList.add('is-open');
    } else {
      pulseDot.classList.remove('is-open');
      pulseDot.classList.add('is-closed');
    }
  }
}
