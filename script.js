const startDate = new Date("2025-09-02T07:30:00");
const endDate = new Date("2026-06-11T14:30:00");

let setting = false;
let themesSetting = false;
let schedules;

function updateBackground() {
  if (themesSetting) {
    document.body.style.background = "linear-gradient(to bottom left, #b8e4ff, #ffd0b8)";
    document.querySelectorAll('.right').forEach(element => {
      element.style.color = '#333';
    });
    document.querySelectorAll('.bubble').forEach(element => {
      element.style.backgroundColor = 'rgba(255,255,255,0.75)';
      element.style.color = '#333';
    });
    document.querySelectorAll('.button').forEach(element => {
      element.style.backgroundColor = '#ddd';
      element.style.color = '#333';
    });
    document.querySelectorAll('.button-flyout').forEach(element => {
      element.style.backgroundColor = '#ddd';
      element.style.color = '#333';
    });
    document.querySelectorAll('.divider').forEach(element => {
      element.style.color = '#333';
    });
    document.querySelectorAll('.bar').forEach(element => {
      element.style.backgroundColor = '#f0f5ff';
    });
    document.querySelectorAll('.periodBar').forEach(element => {
      element.style.backgroundColor = '#f0f5ff';
    });
    document.getElementById("progress").style.backgroundColor = "#94a9b5";
    document.getElementById("periodProgress").style.backgroundColor = "#94a9b5";
  } else {
    document.body.style.background = "linear-gradient(to bottom left, #ffd0b8, #e2b6ff)";
    document.querySelectorAll('.right').forEach(element => {
      element.style.color = '#24301f';
    });
    document.querySelectorAll('.bubble').forEach(element => {
      element.style.backgroundColor = 'rgba(0,0,0,0.65)';
      element.style.color = '#fff';
    });
    document.querySelectorAll('.button').forEach(element => {
      element.style.backgroundColor = '#fff1fe';
      element.style.color = '#333';
    });
    document.querySelectorAll('.button-flyout').forEach(element => {
      element.style.backgroundColor = '#fff1fe';
      element.style.color = '#333';
    });
    document.querySelectorAll('.divider').forEach(element => {
      element.style.color = '#222';
    });
    document.querySelectorAll('.bar').forEach(element => {
      element.style.backgroundColor = '#24301f';
    });
    document.querySelectorAll('.periodBar').forEach(element => {
      element.style.backgroundColor = '#24301f';
    });
    document.getElementById("progress").style.backgroundColor = "#4d6942";
    document.getElementById("periodProgress").style.backgroundColor = "#4d6942";
  }
}

function getScheduleData() {
  if (!setting) {
    schedules = {
      0: [ // Tue Thu Fri
        { name: "Offtime", start: "14:30", end: "07:30" },
        { name: "Passing time", start: "07:30", end: "07:35" },
        { name: "Period 1", start: "07:35", end: "08:25" },
        { name: "Passing time", start: "08:25", end: "08:30" },
        { name: "Period 2", start: "08:30", end: "09:20" },
        { name: "Passing time", start: "09:20", end: "09:25" },
        { name: "Period 3", start: "09:25", end: "10:15" },
        { name: "Passing time", start: "10:15", end: "10:20" },
        { name: "Period 4", start: "10:20", end: "11:10" },
        { name: "Passing time", start: "11:10", end: "11:15" },
        { name: "Lunch", start: "11:15", end: "11:45" },
        { name: "Passing time", start: "11:45", end: "11:50" },
        { name: "Period 5", start: "11:50", end: "12:40" },
        { name: "Passing time", start: "12:40", end: "12:45" },
        { name: "Period 6", start: "12:45", end: "13:35" },
        { name: "Passing time", start: "13:35", end: "13:40" },
        { name: "Period 7", start: "13:40", end: "14:30" },
      ],
      1: [ // Mon
        { name: "Offtime", start: "14:30", end: "07:30" },
        { name: "Passing time", start: "07:30", end: "07:35" },
        { name: "Period 1", start: "07:35", end: "08:20" },
        { name: "Passing time", start: "08:20", end: "08:25" },
        { name: "Period 2", start: "08:25", end: "09:10" },
        { name: "Passing time", start: "09:10", end: "09:15" },
        { name: "Advisory", start: "09:15", end: "09:45" },
        { name: "Passing time", start: "09:45", end: "09:50" },
        { name: "Period 3", start: "09:50", end: "10:35" },
        { name: "Passing time", start: "10:35", end: "10:40" },
        { name: "Period 4", start: "10:40", end: "11:25" },
        { name: "Passing time", start: "11:25", end: "11:30" },
        { name: "Lunch", start: "11:30", end: "12:00" },
        { name: "Passing time", start: "12:00", end: "12:05" },
        { name: "Period 5", start: "12:05", end: "12:50" },
        { name: "Passing time", start: "12:50", end: "12:55" },
        { name: "Period 6", start: "12:55", end: "13:40" },
        { name: "Passing time", start: "13:40", end: "13:45" },
        { name: "Period 7", start: "13:45", end: "14:30" },
      ],
      2: [ // Wed
        { name: "Offtime", start: "14:30", end: "08:30" },
        { name: "Passing time", start: "08:30", end: "08:35" },
        { name: "Period 1", start: "08:35", end: "09:16" },
        { name: "Passing time", start: "09:16", end: "09:21" },
        { name: "Period 2", start: "09:21", end: "10:05" },
        { name: "Passing time", start: "10:05", end: "10:10" },
        { name: "Period 3", start: "10:10", end: "10:51" },
        { name: "Passing time", start: "10:51", end: "10:56" },
        { name: "Period 4", start: "10:56", end: "11:37" },
        { name: "Passing time", start: "11:37", end: "11:42" },
        { name: "Lunch", start: "11:42", end: "12:12" },
        { name: "Passing time", start: "12:12", end: "12:17" },
        { name: "Period 5", start: "12:17", end: "12:58" },
        { name: "Passing time", start: "12:58", end: "13:03" },
        { name: "Period 6", start: "13:03", end: "13:44" },
        { name: "Passing time", start: "13:44", end: "13:49" },
        { name: "Period 7", start: "13:49", end: "14:30" },
      ],
      3: [ //Weekend
        { name: "Offtime", start: "14:30", end: "07:30" },
      ],
    };
  } else {
    schedules = {
      0: [ // Tue Thu Fri
        { name: "Offtime", start: "14:30", end: "07:30" },
        { name: "Passing time", start: "07:30", end: "07:35" },
        { name: "Period 1", start: "07:35", end: "08:25" },
        { name: "Passing time", start: "08:25", end: "08:30" },
        { name: "Period 2", start: "08:30", end: "09:20" },
        { name: "Passing time", start: "09:20", end: "09:25" },
        { name: "Period 3", start: "09:25", end: "10:15" },
        { name: "Passing time", start: "10:15", end: "10:20" },
        { name: "Period 4", start: "10:20", end: "11:10" },
        { name: "Passing time", start: "11:10", end: "11:15" },
        { name: "Period 5", start: "11:15", end: "12:05" },
        { name: "Passing time", start: "12:05", end: "12:10" },
        { name: "Lunch", start: "12:10", end: "12:40" },
        { name: "Passing time", start: "12:40", end: "12:45" },
        { name: "Period 6", start: "12:45", end: "13:35" },
        { name: "Passing time", start: "13:35", end: "13:40" },
        { name: "Period 7", start: "13:40", end: "14:30" },
        ],
      1: [ // Mon
        { name: "Offtime", start: "14:30", end: "07:30" },
        { name: "Passing time", start: "07:30", end: "07:35" },
        { name: "Period 1", start: "07:35", end: "08:20" },
        { name: "Passing time", start: "08:20", end: "08:25" },
        { name: "Period 2", start: "08:25", end: "09:10" },
        { name: "Passing time", start: "09:10", end: "09:15" },
        { name: "Advisory", start: "09:15", end: "09:45" },
        { name: "Passing time", start: "09:45", end: "09:50" },
        { name: "Period 3", start: "09:50", end: "10:35" },
        { name: "Passing time", start: "10:35", end: "10:40" },
        { name: "Period 4", start: "10:40", end: "11:25" },
        { name: "Passing time", start: "11:25", end: "11:30" },
        { name: "Period 5", start: "11:30", end: "12:15" },
        { name: "Passing time", start: "12:15", end: "12:20" },
        { name: "Lunch", start: "12:20", end: "12:50" },
        { name: "Passing time", start: "12:50", end: "12:55" },
        { name: "Period 6", start: "12:55", end: "13:40" },
        { name: "Passing time", start: "13:40", end: "13:45" },
        { name: "Period 7", start: "13:45", end: "14:30" },
      ],
      2: [ // Wed
        { name: "Offtime", start: "14:30", end: "08:30" },
        { name: "Passing time", start: "08:30", end: "08:35" },
        { name: "Period 1", start: "08:35", end: "09:16" },
        { name: "Passing time", start: "09:16", end: "09:21" },
        { name: "Period 2", start: "09:21", end: "10:05" },
        { name: "Passing time", start: "10:05", end: "10:10" },
        { name: "Period 3", start: "10:10", end: "10:51" },
        { name: "Passing time", start: "10:51", end: "10:56" },
        { name: "Period 4", start: "10:56", end: "11:37" },
        { name: "Passing time", start: "11:37", end: "11:42" },
        { name: "Period 5", start: "11:42", end: "12:23" },
        { name: "Passing time", start: "12:23", end: "12:28" },
        { name: "Lunch", start: "12:28", end: "12:58" },
        { name: "Passing time", start: "12:58", end: "13:03" },
        { name: "Period 6", start: "13:03", end: "13:44" },
        { name: "Passing time", start: "13:44", end: "13:49" },
        { name: "Period 7", start: "13:49", end: "14:30" },
      ],
      3: [ //Weekend
        { name: "Offtime", start: "14:30", end: "07:30" },
      ],
    };
  }
}

const specialDays = [
"2025-11-11",
"2025-11-25",
"2025-11-26",
"2025-11-27",
"2025-11-28",
"2025-12-22",
"2025-12-23",
"2025-12-24",
"2025-12-25",
"2025-12-26",
"2025-12-29",
"2025-12-30",
"2025-12-31",
"2026-01-01",
"2026-01-02",
"2026-01-19",
"2026-01-30",
"2026-02-16",
"2026-03-06",
"2026-03-23",
"2026-03-24",
"2026-03-25",
"2026-03-26",
"2026-03-27",
"2026-04-24",
"2026-05-25",
];

function getCurrentSchedule() {
  const today = new Date();
  const isoDate = today.toISOString().split("T")[0];
  if (specialDays[isoDate] !== undefined) {
    return 3;
  }

  const day = today.getDay();
  if ([2, 4, 5].includes(day)) return schedules[0]; // Tue Thu Fri
  if (day === 1) return schedules[1]; // Mon
  if (day === 3) return schedules[2]; // Wed
  if ([0, 6].includes(day)) return schedules[3]; // Sat Sun
}

function timeToDate(timeStr, baseDate = new Date()) {
  const [h, m] = timeStr.split(":").map(Number);
  const d = new Date(baseDate);
  d.setHours(h, m, 0, 0);
  return d;
}

function formatTimeLeft(diffMs) {
  const diffSec = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffSec / 60);
  const seconds = diffSec % 60;
  let out = "";
  if (minutes > 0) out += `${minutes}m `;
  out += `${seconds}s` + ' left';
  return out.trim();
}

function formatDate(date) {
  const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  return `${month} ${day}`;
}

function formatTime(date) {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

function getTimeRemaining(end) {
  const now = new Date();
  const diff = end - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function getSchoolDaysRemaining(end, holidays) {
  const now = new Date();
  let count = 0;
  const holidaySet = new Set(holidays);
  for (let d = new Date(now); d <= end; d.setDate(d.getDate() + 1)) {
    const day = d.getDay();
    const dateString = d.toISOString().split('T')[0];
    if (day !== 0 && day !== 6 && !holidaySet.has(dateString)) {
    count++;
    }
  }
  return count;
}

function getProgressPercent(start, end) {
  const now = new Date();
  const total = end - start;
  const elapsed = now - start;
  let percent = Math.floor((elapsed / total) * 100);
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  return percent;
}

function getWeekAndMonths(end, specialDays = []) {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const specialSet = new Set(
  specialDays.map(dateStr => new Date(dateStr).setHours(0, 0, 0, 0))
  );
  let validDays = 0;
  for (let time = startOfToday.getTime(); time <= endOfDay.getTime(); time += 24 * 60 * 60 * 1000) {
    if (!specialSet.has(time)) {
      validDays++;
    }
  }
  const weeks = 16 //7 //Math.floor(validDays / 7);
  const monthsLeft = Math.round((end - now) / (1000 * 60 * 60 * 24 * 30));
  return { weeks, monthsLeft };
}

function getCurrentSectionAndRemaining() {
const now = new Date();
getScheduleData();
const schedule = getCurrentSchedule();

for (let section of schedule) {
  let start = timeToDate(section.start, now);
  let end = timeToDate(section.end, now);
  
  if (end <= start) {
    if (now < end) {
      start.setDate(start.getDate() - 1);
    } else {
      end.setDate(end.getDate() + 1);
      }
      }
      
      if (now >= start && now < end) {
      const timeLeft = formatTimeLeft(end - now);
      
      const totalDuration = end - start;
      const elapsed = now - start;
      const progress = (elapsed / totalDuration) * 100;
      const progressPercent = `${progress.toFixed(1)}%`;
      
      document.getElementById("period").textContent = section.name;
      document.getElementById("periodProgress").style.width = progressPercent;
      document.getElementById("periodTime").textContent = timeLeft;
      return;
    }
  }
  console.log("No active section found (check schedule config).");
}

function updateClock() {
  const now = new Date();
  
  document.getElementById("weekDay").textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
  document.getElementById("date").textContent = formatDate(now);
  document.getElementById("time").textContent = formatTime(now);
  
  const t = getTimeRemaining(endDate);
  document.getElementById("days").textContent = t.days;
  document.getElementById("hours").textContent = t.hours;
  document.getElementById("minutes").textContent = t.minutes;
  document.getElementById("seconds").textContent = t.seconds;
  
  const schoolDays = getSchoolDaysRemaining(endDate, specialDays);
  document.getElementById("schoolDays").textContent = schoolDays;

  const percent = getProgressPercent(startDate, endDate);
  document.getElementById("percent").textContent = percent + "%";
  document.getElementById("progress").style.width = percent + "%";
  
  const { weeks, monthsLeft } = getWeekAndMonths(endDate, specialDays);
  document.getElementById("weeks").textContent = weeks;
  document.getElementById("months").textContent = monthsLeft;
}

updateClock();
getCurrentSectionAndRemaining();

(() => {
  const container = document.querySelector('.bubblecontents');
  const buttons = Array.from(container.querySelectorAll('.button'));
  
  let overlay = null;
  let originBtn = null;
  let originRect = null;
  let isAnimating = false;
  
  function waitTransitionEnd(el, propName, timeout = 700) {
    return new Promise(resolve => {
      let done = false;
      function handler(e) {
        if (e.propertyName === propName) {
          done = true;
          el.removeEventListener('transitionend', handler);
          resolve();
        }
      }
      el.addEventListener('transitionend', handler);
      setTimeout(() => { if (!done) resolve(); }, timeout);
    });
  }
  
  async function expandButton(btn) {
    if (isAnimating) return;
    isAnimating = true;
    originBtn = btn;
    
    const btnRect = btn.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    originRect = {
      left: btnRect.left - contRect.left,
      top: btnRect.top - contRect.top,
      width: btnRect.width,
      height: btnRect.height
    };
    
    overlay = document.createElement('div');
    overlay.className = 'button-flyout';
    overlay.innerHTML = btn.innerHTML;
    
    overlay.style.left = originRect.left + 'px';
    overlay.style.top = originRect.top + 'px';
    overlay.style.width = originRect.width + 'px';
    overlay.style.height = originRect.height + 'px';
    overlay.style.borderRadius = window.getComputedStyle(btn).borderRadius;
    overlay.style.padding = window.getComputedStyle(btn).padding;
    overlay.style.fontSize = window.getComputedStyle(btn).fontSize;
    overlay.style.boxSizing = 'border-box';
    
    container.appendChild(overlay);
    
    btn.classList.add('hidden');
    
    container.classList.add('overlay-open');
    
    const contentEl = overlay.querySelector('.button-content');
    if (contentEl) contentEl.style.opacity = '0';
    
    const overlayTitle = overlay.querySelector('.button-title');
    if (overlayTitle) {
    overlayTitle.addEventListener('click', () => {
      collapseOverlay();
    });
  }
  
  await new Promise(r => requestAnimationFrame(r));
  
  const targetWidth = Math.round(container.clientWidth * 0.78);
  const targetHeight = Math.round(container.clientHeight * 0.50);
  const targetLeft = Math.round((container.clientWidth - targetWidth) / 2);
  const targetTop = Math.round(container.clientHeight * 0.212);
  
  overlay.style.left = targetLeft + 'px';
  overlay.style.top = targetTop + 'px';
  overlay.style.width = targetWidth + 'px';
  overlay.style.height = targetHeight + 'px';
  overlay.style.borderRadius = '1.5vw';
  overlay.style.padding = '5% 1.2rem 1.2rem 6%';
  overlay.style.fontSize = '1.6vw';
  
  setTimeout(() => {
    if (contentEl) {
      contentEl.style.opacity = '1';
      overlay.classList.add('expanded');
    }
  }, 120);
  
  const toggle = overlay.querySelector('.toggle');
  const status = overlay.querySelector('.status');
  
  if (toggle && status) {
    toggle.checked = setting;
    
    status.textContent = (setting ? "Second Lunch" : "First Lunch");
    
    toggle.addEventListener('change', () => {
      setting = toggle.checked;
      status.textContent = (setting ? "Second Lunch" : "First Lunch");
    });
  }
  
  const themesToggle = overlay.querySelector('.themesToggle');
  const themesStatus = overlay.querySelector('.themesStatus');
  
  if (themesToggle && themesStatus) {
    themesToggle.checked = themesSetting;
    
    themesStatus.textContent = (themesSetting ? "Test theme" : "Default theme");
    
    themesToggle.addEventListener('change', () => {
      themesSetting = themesToggle.checked;
      themesStatus.textContent = (themesSetting ? "Test theme" : "Default theme");
    });
  }
  
  await waitTransitionEnd(overlay, 'height');
  isAnimating = false;
  }
  
  async function collapseOverlay() {
    if (!overlay || isAnimating) return;
    isAnimating = true;
    
    const contentEl = overlay.querySelector('.button-content');
    if (contentEl) contentEl.style.opacity = '0';
    
    const contRect = container.getBoundingClientRect();
    const btnRect = originBtn.getBoundingClientRect();
    const currentRect = {
    left: btnRect.left - contRect.left,
    top: btnRect.top - contRect.top,
    width: btnRect.width,
    height: btnRect.height
    };
    
    overlay.style.left = `${currentRect.left}px`;
    overlay.style.top = `${currentRect.top}px`;
    overlay.style.width = `${currentRect.width}px`;
    overlay.style.height = `${currentRect.height}px`;
    overlay.style.borderRadius = window.getComputedStyle(originBtn).borderRadius;
    overlay.style.padding = window.getComputedStyle(originBtn).padding;
    overlay.style.fontSize = window.getComputedStyle(originBtn).fontSize;
    overlay.classList.remove('expanded');
    
    container.classList.remove('overlay-open');
    
    await waitTransitionEnd(overlay, 'height');
    
    if (originBtn) {
      originBtn.classList.remove('hidden');
    }
    
    overlay.style.transition = 'opacity 200ms ease';
    overlay.style.opacity = '0';
    overlay.style.transform = 'translateZ(0)';
    
    await new Promise(res => setTimeout(res, 220));
    
    overlay.remove();
    overlay = null;
    originBtn = null;
    isAnimating = false;
  }
  
  buttons.forEach(btn => {
    const title = btn.querySelector('.button-title');
    title.addEventListener('click', async (e) => {
      if (originBtn === btn && overlay) {
        await collapseOverlay();
        return;
      }
      
      if (overlay && originBtn && originBtn !== btn) {
        await collapseOverlay();
      }
      
      await expandButton(btn);
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay) collapseOverlay();
  });
})();

setInterval(() => {
  updateClock();
  getCurrentSectionAndRemaining();
  updateBackground();
}, 100);
