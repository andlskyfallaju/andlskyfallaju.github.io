// Boot-sequence typing effect for the homepage terminal.
// Respects prefers-reduced-motion — falls back to instant render.

function typeSequence(el, lines, opts = {}) {
  const speed = opts.speed || 18;
  const lineDelay = opts.lineDelay || 260;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  el.innerHTML = "";

  if (reduced) {
    lines.forEach((line) => {
      const div = document.createElement("div");
      div.className = "boot-line " + (line.className || "");
      div.innerHTML = line.html;
      el.appendChild(div);
    });
    return;
  }

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lines.length) {
      const cursor = document.createElement("span");
      cursor.className = "boot-cursor";
      cursor.textContent = "▋";
      el.appendChild(cursor);
      return;
    }
    const line = lines[lineIndex];
    const div = document.createElement("div");
    div.className = "boot-line " + (line.className || "");
    el.appendChild(div);

    const text = line.text || "";
    let charIndex = 0;

    function typeChar() {
      if (charIndex <= text.length) {
        div.textContent = text.slice(0, charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else {
        if (line.html) div.innerHTML = line.html;
        lineIndex++;
        setTimeout(typeLine, lineDelay);
      }
    }
    typeChar();
  }

  typeLine();
}

document.addEventListener("DOMContentLoaded", () => {
  const bootEl = document.getElementById("boot");
  if (!bootEl) return;

  typeSequence(bootEl, [
    { text: "guest@skyfall:~$ whoami" },
    { html: 'Andile <span class="hl">"Skyfall"</span> Makuyana — systems tinkerer, game &amp; AI builder', className: "out" },
    { text: "guest@skyfall:~$ cat status.txt" },
    { html: "2nd-yr BSc Hons ICT (Software Eng), Arrupe Jesuit University · Harare, ZW", className: "out" },
    { html: "Finance &amp; Admin Officer @ Ayandile Investments · ex-ICT intern @ Impact Hub Harare", className: "out" },
    { text: "guest@skyfall:~$ ls -la ./builds" },
    { html: 'cpugpurender/  aria-assistant/  skyfall-player/  unity-fps/  pda/  <span class="comment">5 more…</span>', className: "out" },
  ]);
});
