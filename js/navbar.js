(function () {
  var toggle = document.querySelector('.navbar-toggle[data-target="#navbar"]');
  var target = document.getElementById('navbar');
  if (!toggle || !target) return;

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    var isOpen = target.classList.toggle('in');
    toggle.classList.toggle('collapsed', !isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.blur();
  });

  document.querySelectorAll('#navbar .navbar-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      target.classList.remove('in');
      toggle.classList.add('collapsed');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.blur();
    });
  });
})();
