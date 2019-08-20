import PerfectScrollbar from 'perfect-scrollbar';

class ScrollableComponents {
  constructor () {
    this.scrollableElements = document.querySelectorAll('[data-scrollable="true"]');
  }

  init () {
    this.scrollableElements.forEach(elem => {
      const elemOptions = elem.dataset;
      const elemHasOptions = Object.keys(elemOptions).length > 1;
      let options = {};

      if (elemHasOptions) {
        delete elemOptions.scrollable;
        options = elemHasOptions;
      }

      new PerfectScrollbar(elem, options);
    });
  }
}

export default ScrollableComponents;
