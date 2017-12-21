'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commonReact = require('@microbusiness/common-react');

var _Actions = require('@microbusiness/common-react/dist/userAccess/Actions');

var UserAccessActions = _interopRequireWildcard(_Actions);

var _effects = require('redux-saga/effects');

var _services = require('../services');

var _Common = require('./Common');

var _Common2 = _interopRequireDefault(_Common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(signInWithUsernameAndPasswordAsync);

function signInWithUsernameAndPasswordAsync(action) {
  var userInfo;
  return regeneratorRuntime.wrap(function signInWithUsernameAndPasswordAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)(UserAccessActions.signInInProgress(_Common2.default.createOperationIdMap(action)));

        case 3:
          _context.next = 5;
          return (0, _effects.call)(_services.UserService.signInWithUsernameAndPassword, action.payload.get('username'), action.payload.get('password'));

        case 5:
          userInfo = _context.sent;

          if (!userInfo) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)(UserAccessActions.signInWithUsernameAndPasswordSucceeded(_Common2.default.createUserInfoMap(action, userInfo)));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return (0, _effects.put)(UserAccessActions.signInWithUsernameAndPasswordSucceeded(_Common2.default.createEmptyUserInfoMap(action)));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](0);
          _context.next = 19;
          return (0, _effects.put)(UserAccessActions.signInWithUsernameAndPasswordFailed(_Common2.default.createErrorMap(action, _context.t0.message)));

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 15]]);
}

var watcher = /*#__PURE__*/regeneratorRuntime.mark(function watchSignInWithUsernameAndPassword() {
  return regeneratorRuntime.wrap(function watchSignInWithUsernameAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_commonReact.UserAccessActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD, signInWithUsernameAndPasswordAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, watchSignInWithUsernameAndPassword, this);
});

exports.default = watcher;