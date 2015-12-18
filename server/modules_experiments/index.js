// enable runtime transpilation to use ES6/7 in node
require('babel-register');
require('./import_own_modules.js');
require('./import_contrib_modules.js');
require('./display_module_infos.js');
