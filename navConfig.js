module.exports = {
  title: 'NL Design System',
  style: 'dark',
  hideOnScroll: true,
  logo: {
    alt: 'NLDS Logo',
    src: 'https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo.svg',
  },
  items: [
    {
      to: '/',
      position: 'left',
      label: 'Home',
      activeBaseRegex: '^/$',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'meedoen',
      position: 'left',
      label: 'Meedoen',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'richtlijnen',
      position: 'left',
      label: 'Richtlijnen',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'componenten/README',
      position: 'left',
      label: 'Componenten',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'voorbeelden',
      position: 'left',
      label: 'Voorbeelden',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'onderzoek',
      position: 'left',
      label: 'Onderzoek',
      className: 'utrecht-link',
    },
    {
      type: 'doc',
      docId: 'project',
      position: 'left',
      label: 'Project',
      className: 'utrecht-link',
    },
    {
      href: 'https://github.com/nl-design-system/backlog',
      position: 'right',
      className:
        'utrecht-button-link utrecht-button--subtle utrecht-button-link--html-a navbar__item navbar__item--github-link',
      'aria-label': 'GitHub repository',
      html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
            d='M12.0099 0C5.36875 0 0 5.49998 0 12.3042C0 17.7432 3.43994 22.3472 8.21205 23.9767C8.80869 24.0991 9.02724 23.7119 9.02724 23.3862C9.02724 23.1009 9.00757 22.1232 9.00757 21.1044C5.6667 21.8379 4.97099 19.6377 4.97099 19.6377C4.43409 18.2117 3.63858 17.8452 3.63858 17.8452C2.54511 17.0914 3.71823 17.0914 3.71823 17.0914C4.93117 17.1729 5.56763 18.3544 5.56763 18.3544C6.64118 20.2284 8.37111 19.6989 9.06706 19.3729C9.16638 18.5784 9.48473 18.0284 9.82275 17.7229C7.15817 17.4377 4.35469 16.3784 4.35469 11.6522C4.35469 10.3077 4.8316 9.20771 5.58729 8.35222C5.46807 8.04672 5.0504 6.78347 5.70677 5.09273C5.70677 5.09273 6.72083 4.76673 9.00732 6.35572C9.98625 6.08639 10.9958 5.94938 12.0099 5.94823C13.024 5.94823 14.0577 6.09097 15.0123 6.35572C17.299 4.76673 18.3131 5.09273 18.3131 5.09273C18.9695 6.78347 18.5515 8.04672 18.4323 8.35222C19.2079 9.20771 19.6652 10.3077 19.6652 11.6522C19.6652 16.3784 16.8617 17.4172 14.1772 17.7229C14.6148 18.1099 14.9924 18.8432 14.9924 20.0044C14.9924 21.6544 14.9727 22.9787 14.9727 23.3859C14.9727 23.7119 15.1915 24.0991 15.7879 23.9769C20.56 22.3469 23.9999 17.7432 23.9999 12.3042C24.0196 5.49998 18.6312 0 12.0099 0Z'
          />
        </svg>`,
    },
  ],
};
