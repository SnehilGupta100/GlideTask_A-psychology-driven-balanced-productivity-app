"use client"

export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(function () {
  try {
    var root = document.documentElement;
    var stored = localStorage.getItem('theme');
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var prefersDark = !!mql && mql.matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (!stored && mql) {
      var apply = function(e){ e.matches ? root.classList.add('dark') : root.classList.remove('dark'); };
      if (mql.addEventListener) mql.addEventListener('change', apply);
      else if (mql.addListener) mql.addListener(apply);
    }
  } catch (_) {}
})();`,
      }}
    />
  )
}
