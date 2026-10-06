// Turns elements marked data-email into "mailto:" links.
//
// The address is stored reversed and only assembled here in the browser, so
// it never appears in the page source, where spam bots look for addresses.
//
//   <a data-email>email me</a>                     link with the text kept
//   <a data-email data-show>…</a>                  link showing the address
//   <a data-email data-subject="Correction">…</a>  pre-filled subject line

(() => {
  const address = 'moc.liamg@rekabrr'.split('').reverse().join('');

  document.querySelectorAll('[data-email]').forEach((link) => {
    const subject = link.dataset.subject;
    link.href = `mailto:${address}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
    if ('show' in link.dataset) link.textContent = address;
  });
})();
