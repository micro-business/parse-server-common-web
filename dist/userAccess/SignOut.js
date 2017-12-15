'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _microBusinessCommonReact = require('micro-business-common-react');

var _Actions = require('micro-business-common-react/src/userAccess/Actions');

var UserAccessActions = _interopRequireWildcard(_Actions);

var _effects = require('redux-saga/effects');

var _services = require('../services');

var _Common = require('./Common');

var _Common2 = _interopRequireDefault(_Common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(signOutAsync);

function signOutAsync(action) {
  return regeneratorRuntime.wrap(function signOutAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)(UserAccessActions.signOutInProgress(_Common2.default.createOperationIdMap(action)));

        case 3:
          _context.next = 5;
          return (0, _effects.call)(_services.UserService.signOut);

        case 5:
          _context.next = 7;
          return (0, _effects.put)(UserAccessActions.signOutSucceeded(_Common2.default.createOperationIdMap(action)));

        case 7:
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context['catch'](0);
          _context.next = 13;
          return (0, _effects.put)(UserAccessActions.signOutFailed(_Common2.default.createErrorMap(action, _context.t0.message)));

        case 13:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 9]]);
}

var watcher = /*#__PURE__*/regeneratorRuntime.mark(function watchSignOut() {
  return regeneratorRuntime.wrap(function watchSignOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_microBusinessCommonReact.UserAccessActionTypes.USER_ACCESS_SIGNOUT, signOutAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, watchSignOut, this);
});

exports.default = watcher;