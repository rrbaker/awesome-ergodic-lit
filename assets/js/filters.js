// Alpine component for the works filter on the home page.
// Loaded before Alpine itself (both are `defer`, this one comes first), so the
// component is registered by the time Alpine starts.
//
// The list itself is written into the page by Jekyll; this component only
// decides which entries to show (each <li> asks `shows(id)`).

document.addEventListener('alpine:init', () => {
  // Lowercase and strip accents so "cortazar" matches "Cortázar".
  const normalize = (text) =>
    text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

  // Searchable text is normalized once up front rather than on every keystroke.
  const works = JSON.parse(document.getElementById('works-data').textContent).map((w) => ({
    ...w,
    searchText: normalize(`${w.title} ${w.author} ${w.summary}`),
  }));

  Alpine.data('workFilter', () => ({
    works,

    // Filter state, mirrored in the URL query string.
    q: '',
    mechanics: [],
    medium: '',
    physical: '',
    decade: '',
    language: '',

    init() {
      const params = new URLSearchParams(location.search);
      this.q = params.get('q') || '';
      this.mechanics = params.getAll('mechanic');
      this.medium = params.get('medium') || '';
      this.physical = params.get('physical') || '';
      this.decade = params.get('decade') || '';
      this.language = params.get('language') || '';
    },

    // Runs whenever a filter changes (via x-effect). replaceState updates the
    // address without adding a history entry for every keystroke.
    writeUrl() {
      const params = new URLSearchParams();
      if (this.q) params.set('q', this.q);
      this.mechanics.forEach((m) => params.append('mechanic', m));
      if (this.medium) params.set('medium', this.medium);
      if (this.physical) params.set('physical', this.physical);
      if (this.decade) params.set('decade', this.decade);
      if (this.language) params.set('language', this.language);
      const query = params.toString();
      history.replaceState(null, '', query ? `?${query}` : location.pathname);
    },

    get active() {
      return Boolean(this.q || this.mechanics.length || this.medium || this.physical || this.decade || this.language);
    },

    get results() {
      const q = normalize(this.q.trim());
      return this.works.filter((w) =>
        (!this.mechanics.length || w.mechanics.some((m) => this.mechanics.includes(m))) &&
        (!this.medium || w.medium === this.medium) &&
        (!this.physical || w.needs_physical === (this.physical === 'yes')) &&
        (!this.decade || Math.floor(w.year / 10) * 10 === Number(this.decade)) &&
        (!this.language || w.original_language === this.language) &&
        (!q || w.searchText.includes(q))
      );
    },

    // Read out by screen readers through the role="status" element.
    get summary() {
      const n = this.results.length;
      const total = this.works.length;
      if (!this.active) return `${total} works`;
      return `${n} of ${total} ${total === 1 ? 'work' : 'works'} match`;
    },

    reset() {
      this.q = '';
      this.mechanics = [];
      this.medium = '';
      this.physical = '';
      this.decade = '';
      this.language = '';
    },

    // Mechanic chips: add the id if it's off, remove it if it's on.
    toggle(id) {
      this.mechanics = this.mechanics.includes(id)
        ? this.mechanics.filter((m) => m !== id)
        : [...this.mechanics, id];
    },

    shows(id) {
      return this.results.some((w) => w.id === id);
    },
  }));
});
