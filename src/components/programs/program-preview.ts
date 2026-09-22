class ProgramPreview extends HTMLElement {
  connectedCallback() {
    const tabs = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-program]'));
    const panels = Array.from(this.querySelectorAll<HTMLElement>('.preview-panel'));
    const list = this.querySelector<HTMLElement>('.preview-tabs');
    if (!list || !tabs.length) return;
    list.hidden = false;
    list.setAttribute('role', 'tablist');
    tabs.forEach(tab => tab.setAttribute('role', 'tab'));
    panels.forEach(panel => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', `tab-${panel.id}`);
      panel.tabIndex = 0;
    });
    const activate = (id: string, focus = false) => {
      tabs.forEach(tab => {
        const active = tab.dataset.program === id;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        if (active && focus) tab.focus();
      });
      panels.forEach(panel => panel.hidden = panel.id !== id);
    };
    const fromHash = () => {
      const id = location.hash.slice(1);
      if (panels.some(panel => panel.id === id)) activate(id);
    };
    activate(tabs[0].dataset.program!);
    fromHash();
    this.controller?.abort();
    this.controller = new AbortController();
    const { signal } = this.controller;
    window.addEventListener('hashchange', fromHash, { signal });
    tabs.forEach((tab, index) => {
      const select = (next: number) => {
        const id = tabs[next].dataset.program!;
        activate(id, true);
        history.replaceState(history.state, '', `#${id}`);
      };
      tab.addEventListener('click', () => select(index), { signal });
      tab.addEventListener('keydown', event => {
        let next: number;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        else return;
        event.preventDefault();
        select(next);
      }, { signal });
    });
  }
  controller?: AbortController;
  disconnectedCallback() { this.controller?.abort(); }
}
if (!customElements.get('program-preview')) customElements.define('program-preview', ProgramPreview);
