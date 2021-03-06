// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']}
};

exports.npm = {
  enabled: true,
  styles: {
    bootstrap: ['dist/css/bootstrap.min.css'],
    "animate.css": ['animate.css'],
    "ionicons": ['dist/css/ionicons.css'],
    lightbox: ['lightbox.min.css']
      },
  globals: {jQuery: "jquery", 
  $: "jquery",
  bootstrap:'bootstrap',
  popper:"popper.js",
  'jquery-migrate': "jquery-migrate",
  wowjs: "wowjs",
  }
};
