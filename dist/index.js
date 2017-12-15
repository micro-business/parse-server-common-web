'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configParseServerSdk = exports.watchSignOut = exports.watchSignInWithUsernameAndPassword = exports.watchSignUpWithUsernameAndPassword = exports.watchGetCurrentUser = exports.UserService = exports.ParseWrapperService = exports.BaseObject = undefined;

var _schema = require('./schema');

Object.defineProperty(exports, 'BaseObject', {
  enumerable: true,
  get: function get() {
    return _schema.BaseObject;
  }
});

var _services = require('./services');

Object.defineProperty(exports, 'ParseWrapperService', {
  enumerable: true,
  get: function get() {
    return _services.ParseWrapperService;
  }
});
Object.defineProperty(exports, 'UserService', {
  enumerable: true,
  get: function get() {
    return _services.UserService;
  }
});

var _userAccess = require('./userAccess');

Object.defineProperty(exports, 'watchGetCurrentUser', {
  enumerable: true,
  get: function get() {
    return _userAccess.watchGetCurrentUser;
  }
});
Object.defineProperty(exports, 'watchSignUpWithUsernameAndPassword', {
  enumerable: true,
  get: function get() {
    return _userAccess.watchSignUpWithUsernameAndPassword;
  }
});
Object.defineProperty(exports, 'watchSignInWithUsernameAndPassword', {
  enumerable: true,
  get: function get() {
    return _userAccess.watchSignInWithUsernameAndPassword;
  }
});
Object.defineProperty(exports, 'watchSignOut', {
  enumerable: true,
  get: function get() {
    return _userAccess.watchSignOut;
  }
});

var _parse = require('parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configParseServerSdk = exports.configParseServerSdk = function configParseServerSdk(serverUrl, applicationId, javascriptKey) {
  _parse2.default.initialize(applicationId, javascriptKey);
  _parse2.default.serverURL = serverUrl;
};