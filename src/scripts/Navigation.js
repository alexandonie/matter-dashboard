class Navigation {
  constructor () {
    this.body = document.querySelector('body');
    this.toggleBtn = document.querySelector('[data-toggle="sidebar"]');
    this.sidebar = document.querySelector('.sidebar');
    this.mainContent = document.querySelector('.container-main');
    this.sidebarOpenClass = 'sidebar-open';
    this.sidebarFixedClass = 'sidebar-fixed';
    this.mainContentOpenClass = 'container-main-full';
    this.scrollDisabledClass = 'scroll-disabled';
    this.desktopBreakpoint = 1200;
    this.headerNavBar = document.querySelector('.header-navbar');
    this.headerShadowClass = 'header-navbar-has-shadow';
    this.win = window;
  }

  isDesktop () {
    return this.win.innerWidth > this.desktopBreakpoint;
  }

  toggle (e) {
    e.preventDefault();

    // toggle the window scroll
    if (!this.isDesktop()) {
      this.body.classList.toggle(this.scrollDisabledClass);
    }

    this.sidebar.classList.toggle(this.sidebarOpenClass);
    this.mainContent.classList.toggle(this.mainContentOpenClass);
  }

  enableStickyNavigation () {
    if (document.querySelector('.sidebar-fixed')) {
      return;
    }

    const headerBillboard = document.querySelector('.header-billboard');

    this.win.addEventListener('scroll', () => {
      if (this.win.pageYOffset >= headerBillboard.offsetHeight) {
        this.sidebar.classList.add(this.sidebarFixedClass);
        this.headerNavBar.classList.add(this.headerShadowClass);
      } else {
        this.sidebar.classList.remove(this.sidebarFixedClass);
        this.headerNavBar.classList.remove(this.headerShadowClass);
      }
    });
  }

  init () {
    this.toggleBtn.addEventListener('click', this.toggle.bind(this));
    this.enableStickyNavigation();
  }
}

export default Navigation;
