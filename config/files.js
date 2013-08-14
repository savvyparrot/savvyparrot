
/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You will find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  ngtemplates: {
    dest: "generated/angular/template-cache.js"
  },
  less: {
    compile: {
      options: {
        paths: [
          "app/css/**/*.less"
        ]
      }
    }
  },
  js: {
    vendor: [
      "vendor/async/lib/async.js",
      "vendor/jquery/jquery.js",
      "vendor/jquery-ui/ui/jquery-ui.js",
      "vendor/js/jquery.layout-1.3.0.js",
      "vendor/bootstrap/js/bootstrap-carousel.js",
      "vendor/bootstrap/js/bootstrap-collapse.js",
      "vendor/bootstrap/js/bootstrap-dropdown.js",
      "vendor/bootstrap/js/bootstrap-modal.js",
      "vendor/bootstrap/js/bootstrap-tab.js",
      "vendor/bootstrap/js/bootstrap-transition.js",
      "vendor/angular/angular.js",
      "vendor/underscore/underscore.js",
      "../savvyparrot-actors/generated/js/app.js",
      "vendor/lesson-00-001/lesson-00-001.js",
      "vendor/lesson-04-001/lesson-04-001.js",
      "vendor/google-analytics/tracking-code.js"
    ],
    app: [
      "app/js/app.js",
      "app/js/**/*.js"
    ]
  }
});
