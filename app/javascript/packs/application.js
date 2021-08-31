// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap';

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// require('../custom/navtoggle');
require('../custom/cursor');
require('../custom/scrolling');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-icon').addEventListener('click',
    function menuToggle() {
      var x = document.getElementById('myNavtoggle');
      if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
    }
  )

  document.querySelectorAll('#nav-item').forEach( item => {
    item.addEventListener('click',
      function menuToggle() {
        var x = document.getElementById('myNavtoggle');
        if (x.className === 'navtoggle') {
          x.className += ' responsive';
        } else {
          x.className = 'navtoggle';
        }
      }
    )
  })
});





