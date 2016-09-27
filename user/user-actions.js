'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeUser = initializeUser;
exports.setRole = setRole;
exports.addRole = addRole;
var INITIALIZE_USER = exports.INITIALIZE_USER = 'INITIALIZE_USER';
var SET_ROLE = exports.SET_ROLE = 'SET_ROLE';
var ADD_ROLE = exports.ADD_ROLE = 'ADD_ROLE';

function initializeUser(response) {
  return {
    type: INITIALIZE_USER,
    response: response
  };
}

function setRole(roles) {
  return {
    type: SET_ROLE,
    roles: roles
  };
}

function addRole(role) {
  return {
    type: ADD_ROLE,
    role: role
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplVXNlciIsInNldFJvbGUiLCJhZGRSb2xlIiwiSU5JVElBTElaRV9VU0VSIiwiU0VUX1JPTEUiLCJBRERfUk9MRSIsInJlc3BvbnNlIiwidHlwZSIsInJvbGVzIiwicm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFNZ0JBLGMsR0FBQUEsYztRQVFBQyxPLEdBQUFBLE87UUFRQUMsTyxHQUFBQSxPO0FBdEJULElBQU1DLDRDQUFrQixpQkFBeEI7QUFDQSxJQUFNQyw4QkFBVyxVQUFqQjtBQUNBLElBQU1DLDhCQUFXLFVBQWpCOztBQUlBLFNBQVNMLGNBQVQsQ0FBd0JNLFFBQXhCLEVBQWlDO0FBQ3RDLFNBQU87QUFDTEMsVUFBTUosZUFERDtBQUVMRztBQUZLLEdBQVA7QUFJRDs7QUFHTSxTQUFTTCxPQUFULENBQWlCTyxLQUFqQixFQUF1QjtBQUM1QixTQUFPO0FBQ0xELFVBQU1ILFFBREQ7QUFFTEk7QUFGSyxHQUFQO0FBSUQ7O0FBR00sU0FBU04sT0FBVCxDQUFpQk8sSUFBakIsRUFBc0I7QUFDM0IsU0FBTztBQUNMRixVQUFNRixRQUREO0FBRUxJO0FBRkssR0FBUDtBQUlEIiwiZmlsZSI6InVzZXItcmVkdWNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJTklUSUFMSVpFX1VTRVIgPSAnSU5JVElBTElaRV9VU0VSJztcclxuZXhwb3J0IGNvbnN0IFNFVF9ST0xFID0gJ1NFVF9ST0xFJztcclxuZXhwb3J0IGNvbnN0IEFERF9ST0xFID0gJ0FERF9ST0xFJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVVc2VyKHJlc3BvbnNlKXtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogSU5JVElBTElaRV9VU0VSLFxyXG4gICAgcmVzcG9uc2VcclxuICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvbGUocm9sZXMpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBTRVRfUk9MRSxcclxuICAgIHJvbGVzXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSb2xlKHJvbGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBBRERfUk9MRSxcclxuICAgIHJvbGVcclxuICB9O1xyXG59XHJcbiJdfQ==
