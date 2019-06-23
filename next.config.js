// // next-images
// const withImages = require('next-images');
// module.exports = withImages();

// // next-sass
// const withSass = require('@zeit/next-sass');
// module.exports = withSass();



//next.config.js

module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };
  
  const withImages = require('next-images');
  const withSass = require('@zeit/next-sass');
  
  module.exports = withImages(withSass());