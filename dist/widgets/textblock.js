System.register(['aurelia-framework'], function (_export) {
  var bindable, Textblock;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      Textblock = (function () {
        function Textblock() {
          _classCallCheck(this, Textblock);

          this.type = 'textblock';
          this.name = 'Textblock';
          this.icon = 'fa-font';
          this.text = 'Lorem ipsum';
        }

        _createClass(Textblock, [{
          key: 'activate',
          value: function activate(model) {
            this.text = model;
          }
        }]);

        return Textblock;
      })();

      _export('Textblock', Textblock);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMvdGV4dGJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0JBRWEsU0FBUzs7Ozs7Ozs7bUNBRmQsUUFBUTs7Ozs7QUFFSCxlQUFTO2lCQUFULFNBQVM7Z0NBQVQsU0FBUzs7ZUFFcEIsSUFBSSxHQUFHLFdBQVc7ZUFDbEIsSUFBSSxHQUFHLFdBQVc7ZUFDbEIsSUFBSSxHQUFHLFNBQVM7ZUFDaEIsSUFBSSxHQUFHLGFBQWE7OztxQkFMVCxTQUFTOztpQkFPWixrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7V0FDbkI7OztlQVRVLFNBQVM7OzsyQkFBVCxTQUFTIiwiZmlsZSI6IndpZGdldHMvdGV4dGJsb2NrLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==