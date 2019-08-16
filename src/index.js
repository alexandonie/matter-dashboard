import './styles/main.scss';

import 'bootstrap';
import Navigation from './scripts/Navigation';
import ScrollableComponents from './scripts/ScrollableComponents';
import Charts from './scripts/Charts';

const nav = new Navigation();
const scrollableComponents = new ScrollableComponents();
const charts = new Charts();

nav.init();
scrollableComponents.init();
charts.init();
