'use strict';

(function () {
  var Navigation = (function () {
    var config = {
      body: $('body'),
      toggleBtn: $('[data-toggle="sidebar"]'),
      sidebar: $('.sidebar'),
      mainContent: $('.container-main'),
      sidebarOpenClass: 'sidebar-open',
      sidebarFixedClass: 'sidebar-fixed',
      mainContentOpenClass: 'container-main-full',
      scrollDisabledClass: 'scroll-disabled',
      desktopBreakpoint: 1200,
      headerNavBar: $('.header-navbar'),
      headerShadowClass: 'header-navbar-has-shadow',
      headerBillboard: $('.header-billboard')
    };

    var isDesktop = function () {
      return $(window).width() > config.desktopBreakpoint;
    };

    var toggle = function (e) {
      e.preventDefault();
      // toggle the window scroll
      if (!isDesktop()) {
        config.body.toggleClass(config.scrollDisabledClass);
      }

      config.sidebar.toggleClass(config.sidebarOpenClass);
      config.mainContent.toggleClass(config.mainContentOpenClass);
    };

    return {
      init: function () {
        config.toggleBtn.on('click', toggle);

        if (!$('.sidebar-fixed').length) {
          $(window).on('scroll', function () {
            if ($(this).scrollTop() >= config.headerBillboard.height()) {
              config.sidebar.addClass(config.sidebarFixedClass);
              config.headerNavBar.addClass(config.headerShadowClass);
            } else {
              config.sidebar.removeClass(config.sidebarFixedClass);
              config.headerNavBar.removeClass(config.headerShadowClass);
            }
          });
        }
      }
    };
  })();

  var ScrollableComponents = (function () {
    return {
      init: function () {
        var scrollableElements = $('[data-scrollable="true"]');
        scrollableElements.each(function (i) {
          var elem = $(this),
              elemOptions = elem.data(),
              elemHasOptions = Object.keys(elemOptions).length > 1,
              options = {};

          if (elemHasOptions) {
            delete elemOptions.scrollable;
            options = elemOptions;
          }

          new PerfectScrollbar(scrollableElements[i], options);
        });
      }
    };
  })();

  ScrollableComponents.init();
  Navigation.init();
})();
