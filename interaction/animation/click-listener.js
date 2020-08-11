AFRAME.registerComponent('click-listener', {
  init: function () {
    // Listen for click event
    this.el.addEventListener('click', function (evt) {          
      //console.log("cursor clicked on ", this.id);
      // Call the Octahedron and trigger it's scalewave animation
      var elOctohedron = document.querySelector('#rotate');
      elOctohedron.emit('rotate');
    });        
  }
});