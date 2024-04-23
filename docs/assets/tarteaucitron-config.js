/*
 * This file is the tarteaucitron configuration file used in Boosted v5.3.3.
 * See https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/site/assets/js/tac.js.
 */
(function () {
  'use strict';

  window.addEventListener(
    'tac.root_available',
    () => {
      const tac = document.getElementById('tarteaucitron');

      tac.querySelectorAll('.tarteaucitronAllow').forEach((button) => {
        button.classList.add('btn', 'btn-sm', 'btn-success', 'my-2', 'my-lg-0');
        button.innerHTML = tarteaucitron.lang.allowAll;
      });

      tac.querySelectorAll('.tarteaucitronDeny').forEach((button) => {
        button.classList.add('btn', 'btn-sm', 'btn-danger', 'my-2', 'my-lg-0', 'ms-lg-2');
        button.innerHTML = tarteaucitron.lang.denyAll;
      });

      document.getElementById('tarteaucitron').classList.add('p-3');

      document.getElementById('tarteaucitronClosePanel').classList.add('d-flex', 'align-content-end', 'position-relative', 'btn-close');
      document.getElementById('tarteaucitronClosePanel').innerHTML =
        `<span class="visually-hidden">${document.getElementById('tarteaucitronClosePanel').innerHTML}</span>`;
    },
    { once: true }
  );

  window.addEventListener(
    'tac.open_alert',
    () => {
      const alert = document.getElementById('tarteaucitronAlertBig');

      alert.setAttribute('data-bs-theme', 'dark');

      document.getElementById('tarteaucitronCloseAlert').classList.add('btn', 'btn-sm', 'btn-secondary', 'ms-lg-2');
      alert.querySelector('.tarteaucitronAllow').classList.add('btn', 'btn-sm', 'btn-success', 'mx-sm-2', 'ms-lg-auto', 'my-2', 'my-lg-0');
      alert.querySelector('.tarteaucitronAllow').innerHTML = tarteaucitron.lang.acceptAll;
      alert.querySelector('.tarteaucitronDeny').classList.add('btn', 'btn-sm', 'btn-danger', 'mx-sm-2', 'my-2', 'my-lg-0');
      alert.querySelector('.tarteaucitronDeny').innerHTML = tarteaucitron.lang.denyAll;
    },
    { once: true }
  );

  window.addEventListener(
    'tac.open_panel',
    () => {
      document.getElementById('tarteaucitronSaveButton').classList.add('btn', 'btn-secondary', 'd-flex', 'mt-3', 'mx-auto');

      document.querySelectorAll('#tarteaucitronServices_api button').forEach((button) => {
        button.classList.add('btn', 'btn-sm', 'ms-2');
      });
      const allowConsentButton = document.querySelector('#tarteaucitronAllAllowed');
      const denyConsentButton = document.querySelector('#tarteaucitronAllDenied');
      const checkboxes = document.querySelectorAll('.form-check-input');

      allowConsentButton.addEventListener('click', () => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (!checkboxes.checked) {
            checkboxes[i].checked = true;
          }
        }
      });
      denyConsentButton.addEventListener('click', () => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes.checked !== true) {
            checkboxes[i].checked = false;
          }
        }
      });
    },
    { once: true }
  );

  document.addEventListener(
    'googletagmanager_added',
    () => {
      const ask = document.querySelector('#googletagmanagerLine .tarteaucitronAsk');
      const choiceEvent =
        "tarteaucitron.userInterface.respond(document.getElementById('googletagmanagerAllowed'),document.getElementById('googletagmanagerAllowed').checked);";
      const toggle = document
        .createRange()
        .createContextualFragment(
          `<div class="form-check form-switch my-2 my-lg-0"><input class="form-check-input ms-0" type="checkbox" id="googletagmanagerAllowed" aria-describedby="tacCLgoogletagmanager" onchange="${choiceEvent}"${(document.cookie.match(/^(?:.*;)?\s*cookie-consent\s*=\s*([^;]+)(?:.*)?$/) || [null])[1].match('!googletagmanager=true') ? 'checked' : ''}><label class="form-check-label visually-hidden" for="googletagmanagerAllowed">Google Tag Manager</label><input id="googletagmanagerDenied" class="d-none"></div>`
        );
      ask.innerHTML = '';
      ask.append(toggle);
    },
    { once: true }
  );
})();

if (typeof tarteaucitron !== 'undefined') {
  tarteaucitron.init({
    hashtag: '#cookie-consent',
    cookieName: 'cookie-consent',
    orientation: 'bottom',
    bodyPosition: 'top',
    cookieslist: true,
    highPrivacy: false,
    showIcon: false,
    handleBrowserDNTRequest: true,
    useExternalCss: true,
    mandatory: false,
    googleConsentMode: false,
    partnersList: true,
  });

  tarteaucitron.user.googletagmanagerId = 'GTM-P6H78BQ';
  (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager');
  dataLayer = [
    {
      site_name: 'ODS-Charts',
      phase: 'prod',
      page_type: 'doc',
      page_title: document.title,
    },
  ];
}

tarteaucitron.services.googletagmanager = {
  key: 'googletagmanager',
  type: 'api',
  name: 'Google Tag Manager',
  uri: 'https://policies.google.com/privacy',
  needConsent: true,
  cookies: [
    '_ga',
    '_gat',
    '__utma',
    '__utmb',
    '__utmc',
    '__utmt',
    '__utmz',
    '__gads',
    '_drt_',
    'FLC',
    'exchange_uid',
    'id',
    'fc',
    'rrs',
    'rds',
    'rv',
    'uid',
    'UIDR',
    'UID',
    'clid',
    'ipinfo',
    'acs',
  ],
  js() {
    'use strict';
    if (tarteaucitron.user.googletagmanagerId === undefined) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      'event': 'gtm.js',
    });
    tarteaucitron.addScript(`https://www.googletagmanager.com/gtm.js?id=${tarteaucitron.user.googletagmanagerId}`);
  },
};
