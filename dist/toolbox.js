System.register(['aurelia-framework', 'aurelia-event-aggregator', 'sortable', './widgets/textblock', './widgets/header', './widgets/articles', './widgets/logo'], function (_export) {
  var inject, EventAggregator, sortable, Textblock, Header, Articles, Logo, Toolbox;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_sortable) {
      sortable = _sortable['default'];
    }, function (_widgetsTextblock) {
      Textblock = _widgetsTextblock.Textblock;
    }, function (_widgetsHeader) {
      Header = _widgetsHeader.Header;
    }, function (_widgetsArticles) {
      Articles = _widgetsArticles.Articles;
    }, function (_widgetsLogo) {
      Logo = _widgetsLogo.Logo;
    }],
    execute: function () {
      'use strict';

      Toolbox = (function () {
        function Toolbox(evtAgg, textBlock, header, articles, logo) {
          _classCallCheck(this, _Toolbox);

          this.widgets = [textBlock, header, articles, logo];
          this.ea = evtAgg;
        }

        var _Toolbox = Toolbox;

        _createClass(_Toolbox, [{
          key: 'attached',
          value: function attached() {
            new sortable(this.toolboxList, {
              sort: false,
              group: {
                name: 'report',
                pull: 'clone',
                put: false
              }
            });
          }
        }, {
          key: 'printReport',
          value: function printReport() {
            window.print();
          }
        }, {
          key: 'clearReport',
          value: function clearReport() {
            this.ea.publish('clearReport');
          }
        }]);

        Toolbox = inject(EventAggregator, Textblock, Header, Articles, Logo)(Toolbox) || Toolbox;
        return Toolbox;
      })();

      _export('Toolbox', Toolbox);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xib3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs0RUFVYSxPQUFPOzs7Ozs7OztpQ0FWWixNQUFNOztnREFDTixlQUFlOzs7O29DQUdmLFNBQVM7OzhCQUNULE1BQU07O2tDQUNOLFFBQVE7OzBCQUNSLElBQUk7Ozs7O0FBR0MsYUFBTztBQUlQLGlCQUpBLE9BQU8sQ0FJTixNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFOzs7QUFDckQsY0FBSSxDQUFDLE9BQU8sR0FBRyxDQUNiLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLElBQUksQ0FDTCxDQUFDO0FBQ0YsY0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7U0FDbEI7O3VCQVpVLE9BQU87Ozs7aUJBY1Ysb0JBQUc7QUFDVCxnQkFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUM3QixrQkFBSSxFQUFFLEtBQUs7QUFDWCxtQkFBSyxFQUFFO0FBQ0wsb0JBQUksRUFBRSxRQUFRO0FBQ2Qsb0JBQUksRUFBRSxPQUFPO0FBQ2IsbUJBQUcsRUFBRSxLQUFLO2VBQ1g7YUFDRixDQUFDLENBQUM7V0FDSjs7O2lCQUVVLHVCQUFHO0FBQ1osa0JBQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztXQUNoQjs7O2lCQUVVLHVCQUFHO0FBQ1osZ0JBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1dBQ2hDOzs7QUEvQlUsZUFBTyxHQURuQixNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUM5QyxPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InRvb2xib3guanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9