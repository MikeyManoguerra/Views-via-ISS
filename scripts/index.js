// document ready function
'use strict';
/* global api, $  */

$(document).ready(function() {
  console.log('end');
  // api.getISSdata(api.getCoordinates);
  api.getMapImage(data => console.log(data));

});