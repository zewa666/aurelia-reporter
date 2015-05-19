System.register([], function (_export) {
  var Textblock;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMvdGV4dGJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBYSxTQUFTOzs7Ozs7Ozs7OztBQUFULGVBQVM7aUJBQVQsU0FBUztnQ0FBVCxTQUFTOztlQUVwQixJQUFJLEdBQUcsV0FBVztlQUNsQixJQUFJLEdBQUcsV0FBVztlQUNsQixJQUFJLEdBQUcsU0FBUztlQUNoQixJQUFJLEdBQUcsYUFBYTs7O3FCQUxULFNBQVM7O2lCQU9aLGtCQUFDLEtBQUssRUFBRTtBQUNkLGdCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztXQUNuQjs7O2VBVFUsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoid2lkZ2V0cy90ZXh0YmxvY2suanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9