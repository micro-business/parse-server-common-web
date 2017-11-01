'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configParseServerSdk = exports.watchSignOut = exports.watchSignInWithUsernameAndPassword = exports.watchSignUpWithUsernameAndPassword = exports.watchGetCurrentUser = exports.UserAccessStatus = exports.UserAccessReducer = exports.UserAccessActionTypes = exports.UserService = exports.ParseWrapperService = exports.BaseObject = undefined;

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

Object.defineProperty(exports, 'UserAccessActionTypes', {
  enumerable: true,
  get: function get() {
    return _userAccess.ActionTypes;
  }
});
Object.defineProperty(exports, 'UserAccessReducer', {
  enumerable: true,
  get: function get() {
    return _userAccess.UserAccessReducer;
  }
});
Object.defineProperty(exports, 'UserAccessStatus', {
  enumerable: true,
  get: function get() {
    return _userAccess.Status;
  }
});
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

var _reactNative = require('parse/react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configParseServerSdk = exports.configParseServerSdk = function configParseServerSdk(serverUrl, applicationId, javascriptKey) {
  _reactNative2.default.initialize(applicationId, javascriptKey);
  _reactNative2.default.serverURL = serverUrl;
};