'use strict';

const installSection = document.querySelector('.install');

if (installSection) {
  const revealInstall = () => installSection.classList.add('in-view');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        revealInstall();
        observer.disconnect();
      }
    }, { threshold: 0.28, rootMargin: '0px 0px -8% 0px' });

    observer.observe(installSection);
  } else {
    revealInstall();
  }
}
