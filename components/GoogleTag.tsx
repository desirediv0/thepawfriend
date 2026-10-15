import Script from 'next/script'

const ID = 'AW-17519548132'
const CALL = `${ID}/f68tCMfPgJgdEOSt_KFB`
const WHATSAPP = `${ID}/6e5cCMrPgJgdEOSt_KFB`

/**
 * Google Ads tag + call / WhatsApp click conversions.
 * - The tiny init script only sets up the dataLayer queue, so clicks are never lost.
 * - The heavy gtag.js file loads with `lazyOnload`, i.e. after the page has finished loading, so it never slows the site down.
 */
export function GoogleTag() {
  return (
    <>
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ID}');
        document.addEventListener('click', function (e) {
          var a = e.target.closest && e.target.closest('a');
          if (!a || !a.href) return;
          var href = a.href.toLowerCase();
          if (href.indexOf('tel:') === 0) {
            gtag('event', 'conversion', {'send_to': '${CALL}'});
          } else if (href.indexOf('wa.me') > -1 || href.indexOf('whatsapp.com') > -1 || href.indexOf('whatsapp:') === 0) {
            gtag('event', 'conversion', {'send_to': '${WHATSAPP}'});
          }
        }, true);
      `}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ID}`} strategy="lazyOnload" />
    </>
  )
}
