(function () {
  var P = window.PROFILE || {};
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function emptyState(container, what, example) {
    var d = el('div', 'empty reveal');
    var s = el('strong', null, 'Add your ' + what + '. ');
    d.appendChild(s);
    d.appendChild(document.createTextNode('Open '));
    d.appendChild(el('code', null, 'content.js'));
    d.appendChild(document.createTextNode(' and fill in the list' + (example ? ' (' + example + ')' : '') + '.'));
    container.appendChild(d);
  }

  // Basic text
  $('name').textContent = P.name || '';
  $('role').textContent = P.role || '';
  $('tagline').textContent = P.tagline || '';
  $('bio').textContent = P.bio || '';
  $('foot-name').textContent = P.name || '';
  $('year').textContent = new Date().getFullYear();
  if (P.photo) $('photo').src = P.photo;

  // Keywords
  (P.keywords || []).forEach(function (k) { $('keywords').appendChild(el('span', 'chip', k)); });

  // Research cards
  /* (P.research || []).forEach(function (r, i) {
    var c = el('article', 'card reveal');
    c.appendChild(el('div', 'num', String(i + 1).padStart(2, '0')));
    c.appendChild(el('h3', null, r.title));
    c.appendChild(el('p', null, r.text));
    $('research-cards').appendChild(c);
  }); */
  (function () {
  var grid = $('research-cards');
  var items = P.research || [];
  var cards = [];
  var active = null;

  // One shared full-width panel
  var panel = el('div', 'research-panel');
  panel.hidden = true;
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-live', 'polite');
  var pTitle = el('h3');
  var pBody = el('div', 'panel-body');
  var pClose = el('button', 'panel-close', 'Close \u00d7');
  pClose.type = 'button';
  panel.appendChild(pTitle);
  panel.appendChild(pBody);
  panel.appendChild(pClose);

  // Put the panel after the last tile in the same visual row as `card`
  function place(card) {
  var last = card;
  cards.forEach(function (c) {
    if (c.el.offsetTop === card.offsetTop) last = c.el;
  });
  last.insertAdjacentElement('afterend', panel);

  // Connector: horizontal centre of the tile, and the distance down to the panel
  var x = card.offsetLeft + card.offsetWidth / 2 - panel.offsetLeft;
  var gap = panel.offsetTop - (card.offsetTop + card.offsetHeight);
  panel.style.setProperty('--arrow-x', x + 'px');
  panel.style.setProperty('--stem-h', Math.max(gap, 0) + 'px');
}

  function close() {
    panel.hidden = true;
    if (active) {
      active.el.classList.remove('open');
      active.btn.textContent = 'Details +';
      active.btn.setAttribute('aria-expanded', 'false');
    }
    active = null;
  }

  function fill(d) {
  pBody.textContent = '';
  if (Array.isArray(d)) {
    var ul = el('ul', 'panel-list');
    d.forEach(function (t) { ul.appendChild(el('li', null, t)); });
    pBody.appendChild(ul);
  } else {
    pBody.appendChild(el('p', null, d));
  }
}

  function open(entry) {
    if (active === entry) { close(); return; }
    close();
    active = entry;
    entry.el.classList.add('open');
    entry.btn.textContent = 'Hide \u2212';
    entry.btn.setAttribute('aria-expanded', 'true');
    pTitle.textContent = entry.data.title;
    fill(entry.data.details);
    panel.hidden = false;
    place(entry.el);
  }

  items.forEach(function (r, i) {
    var c = el('article', 'card reveal');
    c.appendChild(el('div', 'num', String(i + 1).padStart(2, '0')));
    c.appendChild(el('h3', null, r.title));
    c.appendChild(el('p', null, r.text));

    var entry = { el: c, data: r, btn: null };
    if (r.details) {
      var btn = el('button', 'card-toggle', 'Details +');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', 'research-panel');
      entry.btn = btn;
      c.classList.add('expandable');
      c.appendChild(btn);
      c.addEventListener('click', function () { open(entry); });
    }
    cards.push(entry);
    grid.appendChild(c);
  });

  panel.id = 'research-panel';
  pClose.addEventListener('click', function () {
    var b = active && active.btn;
    close();
    if (b) b.focus();
  });

  // Keep the panel under the right row when the layout reflows
  window.addEventListener('resize', function () { if (active) place(active.el); });
})();

  // Timelines
  function timeline(list, target, what) {
    if (!list || !list.length) { emptyState(target, what, 'period, title, org, detail'); return; }
    list.forEach(function (e) {
      var li = el('li', 'tl reveal');
      if (e.period) li.appendChild(el('div', 'period', e.period));
      li.appendChild(el('h3', null, e.title));
      if (e.org) li.appendChild(el('div', 'org', e.org));
      //if (e.detail) li.appendChild(el('p', 'detail', e.detail));
      if (e.detail) {
        var d = el('p', 'detail', e.detail);
        d.id = 'detail-' + Math.random().toString(36).slice(2, 8);
        d.hidden = true;                       // collapsed by default

        var btn = el('button', 'more-btn', 'More');
        btn.type = 'button';
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-controls', d.id);
        btn.addEventListener('click', function () {
          var open = d.hidden;                 // if it's hidden now, we are opening it
          d.hidden = !open;
          btn.textContent = open ? 'Less' : 'More';
          btn.setAttribute('aria-expanded', String(open));
        });

        li.appendChild(d);
        li.appendChild(btn);
      }
      //
      target.appendChild(li);
    });
  }
  timeline(P.education, $('education-list'), 'education history');
  timeline(P.employment, $('employment-list'), 'positions');

  // Publications
  var pubs = (P.publications || []).slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
  if (!pubs.length) {
    emptyState($('pub-list'), 'publications', 'year, title, authors, venue, link');
  } else {
    pubs.forEach(function (p) {
      var li = el('li', 'pub reveal');
      li.appendChild(el('div', 'yr', p.year || ''));
      var body = el('div');
      body.appendChild(el('h3', null, p.title));
      var meta = el('p', 'meta');
      meta.appendChild(document.createTextNode([p.authors, p.venue].filter(Boolean).join(' · ')));
      if (p.link) {
        meta.appendChild(document.createTextNode(' '));
        var a = el('a', null, 'View');
        a.href = p.link; a.target = '_blank'; a.rel = 'noopener';
        meta.appendChild(a);
      }
      body.appendChild(meta);
      li.appendChild(body);
      $('pub-list').appendChild(li);
    });
  }

  // Contact
  var C = P.contact || {}, cb = $('contact-body');
  var hasContact = C.email || C.location || (C.links && C.links.length);
  if (!hasContact) {
    emptyState(cb, 'contact details', 'email, location, links');
  } else {
    if (C.email) {
      var p1 = el('p');
      var ma = el('a', null, C.email);
      ma.href = 'mailto:' + C.email;
      p1.appendChild(ma);
      cb.appendChild(p1);
    }
    if (C.location) cb.appendChild(el('p', null, C.location));
    if (C.links && C.links.length) {
      var row = el('div', 'contact-links');
      C.links.forEach(function (l) {
        var a = el('a', 'btn', l.label);
        a.href = l.url; a.target = '_blank'; a.rel = 'noopener';
        row.appendChild(a);
      });
      cb.appendChild(row);
    }
  }

  // Theme toggle
  $('theme').addEventListener('click', function () {
    var root = document.documentElement;
    var cur = root.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Mobile menu
  var links = $('links'), menu = $('menu');
  menu.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
  });

  // Nav border on scroll
  var nav = $('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section highlight
  var anchors = Array.prototype.slice.call(links.querySelectorAll('a'));
  var map = {};
  anchors.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          anchors.forEach(function (a) { a.classList.remove('active'); });
          map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = $(id); if (s) spy.observe(s); });

    // Reveal on scroll
    var rv = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); rv.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (n) { rv.observe(n); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); });
  }
})();
