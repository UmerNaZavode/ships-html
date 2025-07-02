import './../scss/style.scss'
import headerStyles from './modules/headerStyles';
import mapTabs from './modules/mapTabs';
import toggleMenu from './modules/toggleMenu';

document.addEventListener("DOMContentLoaded", function() {
  // const header = document.queryselector

  headerStyles()

  toggleMenu()

  const contact_informations_btn = document.querySelector(".contact-informations__button");
  if (contact_informations_btn) {
    mapTabs()
  }

});
