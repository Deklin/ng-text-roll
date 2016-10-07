/*jshint bitwise: false*/

(function() {

  'use strict';

  /**
   * @ngdoc component
   * @name ui.ng-text-roll.component:ngTextRoll
   * @description
   * # ngTextRoll
   */

  angular.module('ui.ngTextRoll', [])
    .controller('ngTextRollCtrl', ['$element','$document','$timeout','ngTextRollSvc','ngTextRollUtilSvc', 
      function($element, $document, $timeout, ngTextRollSvc, ngTextRollUtilSvc) {
      var ctrl = this;

      // local vars
      ctrl.current = 0;
      ctrl.render = [{}, {}];
      ctrl.height = ngTextRollUtilSvc.getHeight($element, $document);

      ctrl.$onInit = function() {
        ctrl.svc = ngTextRollSvc;
        ctrl.heightValue = parseFloat(ctrl.height);
        ctrl.offset = Number(Math.round(ctrl.heightValue * 0.5 + 'e2') + 'e-2');
        ctrl.heightUnit = ctrl.height.replace(ctrl.heightValue, '');
        ctrl.svc.init(ctrl);
      };

      ctrl.$onDestroy = function() { // clean up timer (set with service)
        $timeout.cancel(ctrl.animTimeout);
      };

      ctrl.$onChanges = function(obj) {
        if (obj.target) {
          ctrl.config = ctrl.config || {}; // ensure config is not null
          // In certain cases, the previousValue is an object called UNINITIALIZED_VALUE {}
          //  I guess this means the component target value has initiated this event
          //   to fire but there seems no spcific way to test if the previousValue
          //   is falsy.  Resorting to this ridiculus check...
          if (obj.target.previousValue.constructor() !== undefined) {
            ngTextRollSvc.roll(ctrl, obj.target.previousValue, obj.target.currentValue);
          }
        }
      };

    }])
    .factory('ngTextRollUtilSvc', function() {
      var util = {};

      util.randDec = function(min, max) {
        return parseFloat((Math.random() * (max - min) + min).toFixed(2));
      };

      util.buildRange = function(isIncrease, newChar, oldChar) {
        var start = newChar.charCodeAt(0);
        var end = oldChar.charCodeAt(0);
        var steps = Math.abs(start - end);
        var arrStr = [];
        for (var i = 0; i < steps; i++) {
          if (isIncrease) {
            arrStr.push(String.fromCharCode(start < end ? --end : ++end));
          } else {
            arrStr.push(String.fromCharCode(start < end ? start++ : start--));
          }
        }
        if (steps === 0) {
          arrStr.push(String.fromCharCode(start));
        }
        return arrStr;
      };

      // Thanks: http://www.javascriptkit.com/dhtmltutors/dhtmlcascade4.shtml
      util.getCompStyle = function($ele, $doc) {
        if ($ele.currentStyle) { //IE
          return $ele.currentStyle;
        } else if ($doc[0].defaultView && $doc[0].defaultView.getComputedStyle) {
          return $doc[0].defaultView.getComputedStyle($ele[0]);
        } else { //try and get inline style
          return $ele.style;
        }
      };

      util.getHeight = function($ele, $doc) {
        var style = util.getCompStyle($ele, $doc);
        if (style.fontSize) { // Edge
          return style.fontSize;
        }
        if (style['font-size']) {
          return style['font-size'];
        }
        if (style.height && style.height !== 'auto') {
          return style.height;
        }
        return '1em';
      };

      return util;
    })
    .factory('ngTextRollSvc', ['$timeout','$filter','ngTextRollUtilSvc', function($timeout, $filter, ngTextRollUtilSvc) {
      var svc = {};

      // Constants
      var zero = '0',
        transTemplate = 'top Xs ease-in-out, bottom Xs ease-in-out',
        transRegex = /X/g,
        tumbleMs = { // range of milliseconds for random tumble effect
          min: 0.3,
          max: 0.8
        };

      var formatTarget = function(cfg, target) {
        var strTarget = ((cfg && cfg.filter) ? $filter(cfg.filter)(target, cfg.filterParam1, cfg.filterParam2, cfg.filterParam3) : String(target)).split('');
        for (var i = 0; i < strTarget.length; i++) {
          strTarget[i] = (strTarget[i] === ' ' ? 'nbsp;' : strTarget[i]);
        }
        return strTarget;
      };

      var trans = function(ctrl, scale) {
        return transTemplate.replace(transRegex, ngTextRollUtilSvc.randDec(tumbleMs.min, tumbleMs.max) * (ctrl.config.rollBetween === false ? 1 : (scale > 5 ? 5 : scale) * 0.5));
      };

      var charMatch = function(ctrl, inx) {
        return ctrl.config.rollAll ? false :
          (ctrl.render[ctrl.current].target[inx] && ctrl.render[ctrl.current].target[inx][0]) ===
          (ctrl.render[ctrl.notCurrent].target[inx] && ctrl.render[ctrl.notCurrent].target[inx][0]);
      };

      // Initialize values and setup value defaults
      svc.init = function(ctrl) {
        ctrl.render[ctrl.current].style = { // set initial render
          'top': zero
        };
        ctrl.render[ctrl.current].target = formatTarget(ctrl.config, ctrl.target);
      };

      var valuesSetup = function(ctrl, oldVal, newVal, isIncrease) {
        var strNewVal = formatTarget(ctrl.config, newVal);
        var strOldVal = formatTarget(ctrl.config, oldVal);
        var lengthDiffers = (strNewVal.length !== strOldVal.length);
        if (!lengthDiffers && ctrl.config.rollBetween !== false) {
          ctrl.render[ctrl.current].target = [];
          angular.forEach(strNewVal, function(char, inx) {
            if (char === 'nbsp;') {
              ctrl.render[ctrl.current].target.push(char);
            } else {
              ctrl.render[ctrl.current].target.push(ngTextRollUtilSvc.buildRange(isIncrease, char, strOldVal[inx]));
            }
          });
        } else {
          ctrl.render[ctrl.current].target = strNewVal;
        }
        ctrl.render[ctrl.notCurrent].target = strOldVal;
        return lengthDiffers;
      };

      // Move pre-animation divs without animations
      var animSetup = function(ctrl, oldVal, newVal, isIncrease) {
        ctrl.render[ctrl.current].style = [];
        angular.forEach(ctrl.render[ctrl.current].target, function(targ, inx) {
          var s = {
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined
          };
          // top takes priority over bottom, can't just set top to zero
          var scale = targ.length;
          if (isIncrease) {
            s.top = ctrl.heightValue + ctrl.heightUnit;
            s.bottom = ((ctrl.heightValue * scale) * -1) + ctrl.heightUnit;
          } else {
            s.top = (ctrl.heightValue * scale * -1) + ctrl.heightUnit;
            s.bottom = ctrl.heightValue + ctrl.heightUnit;
          }
          ctrl.render[ctrl.current].style.push(s);
        });

        ctrl.render[ctrl.notCurrent].style = [];
        angular.forEach(ctrl.render[ctrl.notCurrent].target, function() {
          var s = {
            '-webkit-transition': undefined,
            '-moz-transition': undefined,
            'transition': undefined,
            'top': zero,
            'bottom': zero
          };
          ctrl.render[ctrl.notCurrent].style.push(s);
        });
      };

      // Enable animations on divs and animate
      var animate = function(ctrl, isIncrease, lengthDiffers) {
        ctrl.config = ctrl.config || {}; // ensure config is not null
        angular.forEach(ctrl.render[ctrl.current].style, function(s, inx) {
          if (!charMatch(ctrl, inx)) {
            var tran = trans(ctrl, ctrl.render[ctrl.current].target[inx].length);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            // top takes priority over bottom, can't just set top to zero
            if (isIncrease) {
              s.top = undefined;
              s.bottom = zero;
            } else {
              s.bottom = undefined;
              s.top = zero;
            }
          }
        });

        angular.forEach(ctrl.render[ctrl.notCurrent].style, function(s, inx) {
          if (!charMatch(ctrl, inx)) {
            var tran = trans(ctrl, 1);
            s['-webkit-transition'] = tran;
            s['-moz-transition'] = tran;
            s.transition = tran;
            // top takes priority over bottom, can't just set top to zero
            if (isIncrease) {
              s.top = undefined;
              s.bottom = (ctrl.heightValue + ctrl.offset) + ctrl.heightUnit;
            } else {
              s.top = (ctrl.heightValue + ctrl.offset) + ctrl.heightUnit;
              s.bottom = undefined;
            }
            if (lengthDiffers) {
              s['-webkit-filter'] = 'blur(5px)';
              s.filter = 'blur(5px)';
            }
          }
        });
      };

      // Set strings, setup, animate
      svc.roll = function(ctrl, oldVal, newVal) {
        var isIncrease = newVal > oldVal;
        ctrl.notCurrent = ctrl.current;
        ctrl.current = ctrl.current ^ 1;
        var lengthDiffers = valuesSetup(ctrl, oldVal, newVal, isIncrease);
        animSetup(ctrl, oldVal, newVal, isIncrease, lengthDiffers);
        // A delay is needed to achieve the desired effect
        //  NOTE: Firefox required at least 25ms delay
        ctrl.animTimeout = $timeout(animate, 25, true, ctrl, isIncrease, lengthDiffers);
      };

      return svc;
    }])
    .component('ngTextRoll', {
      templateUrl: 'app/components/ngTextRoll/ngtextroll.html',
      bindings: {
        target: '<',
        config: '<'
      },
      controller: 'ngTextRollCtrl'
    });

  // template:js
  angular.module("ui.ngTextRoll.template", []).run(["$templateCache", function($templateCache) {$templateCache.put("template/ngtextroll.html","<div id=\"ng-text-roll\">\n  <div class=\"inner\" ng-repeat=\"pChar in $ctrl.render[$ctrl.current].target track by $index\">\n    <div class=\"char\" ng-show=\"pChar !== \'nbsp;\'\" ng-style=\"$ctrl.render[0].style[$index]\">\n      <div ng-repeat=\"iChar in $ctrl.render[0].target[$index]\">{{iChar}}</div>\n    </div>\n    <div class=\"char\" ng-show=\"pChar !== \'nbsp;\'\" ng-style=\"$ctrl.render[1].style[$index]\">\n      <div ng-repeat=\"jChar in $ctrl.render[1].target[$index]\">{{jChar}}</div>\n    </div>\n    {{pChar === \'nbsp;\' ? \'&nbsp;\' : pChar[0]}}\n  </div>\n</div>\n");}]);
  // endinject

})();
