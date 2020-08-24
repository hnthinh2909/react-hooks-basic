"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function randomColor(currentColor) {
  var COLOR_LIST = ["deeppink", "green", "yellow", "black", "blue"];
  var currentIndex = COLOR_LIST.indexOf(currentColor);
  var newIndex = currentIndex;

  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 5);
  }

  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  var _useState = (0, _react.useState)("transparent"),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var colorRef = (0, _react.useRef)("transparent");
  (0, _react.useEffect)(function () {
    var colorInterval = setInterval(function () {
      console.log("Change color: ", colorRef.current);
      var newColor = randomColor(colorRef.current);
      setColor(newColor);
      colorRef.current = newColor;
    }, 1000);
    return function () {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

var _default = useMagicColor;
exports["default"] = _default;