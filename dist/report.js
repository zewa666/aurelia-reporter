System.register(['aurelia-framework', 'aurelia-event-aggregator', 'sortable'], function (_export) {
  var inject, EventAggregator, sortable, Report;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_sortable) {
      sortable = _sortable['default'];
    }],
    execute: function () {
      'use strict';

      Report = (function () {
        function Report(evtAgg) {
          var _this = this;

          _classCallCheck(this, _Report);

          this.widgets = [];

          this.ea = evtAgg;
          this.ea.subscribe('clearReport', function () {
            _this.widgets = [];
          });
        }

        var _Report = Report;

        _createClass(_Report, [{
          key: 'removeWidget',
          value: function removeWidget(widget) {
            var idx = this.widgets.map(function (obj, index) {
              if (obj.id === widget.id) return index;
            }).reduce(function (prev, current) {
              return current || prev;
            });

            this.widgets.splice(idx, 1);
          }
        }, {
          key: 'attached',
          value: function attached() {
            var _this2 = this;

            new sortable(this.reportSheet, {
              group: 'report',
              onAdd: function onAdd(evt) {
                var type = evt.item.title,
                    model = Math.random(),
                    newPos = evt.newIndex;

                evt.item.parentElement.removeChild(evt.item);

                if (type === 'textblock') {
                  model = prompt('Enter textblock content');
                  if (model === undefined || model === null) return;
                }

                _this2.widgets.splice(newPos, 0, {
                  id: Math.random(),
                  type: type,
                  model: model
                });
              }
            });
          }
        }]);

        Report = inject(EventAggregator)(Report) || Report;
        return Report;
      })();

      _export('Report', Report);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lDQUthLE1BQU07Ozs7Ozs7O2lDQUxYLE1BQU07O2dEQUNOLGVBQWU7Ozs7Ozs7QUFJVixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLE1BQU0sRUFBRTs7Ozs7ZUFPcEIsT0FBTyxHQUFHLEVBQUU7O0FBTlYsY0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDakIsY0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFlBQU07QUFDckMsa0JBQUssT0FBTyxHQUFHLEVBQUUsQ0FBQztXQUNuQixDQUFDLENBQUM7U0FDSjs7c0JBUFUsTUFBTTs7OztpQkFXTCxzQkFBQyxNQUFNLEVBQUU7QUFDbkIsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUMxQyxrQkFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQ3RCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUUsVUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFLO0FBQzVCLHFCQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7YUFDeEIsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7V0FDN0I7OztpQkFFTyxvQkFBRzs7O0FBQ1QsZ0JBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDN0IsbUJBQUssRUFBRSxRQUFRO0FBQ2YsbUJBQUssRUFBRSxlQUFDLEdBQUcsRUFBSztBQUNkLG9CQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNyQixNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQzs7QUFFMUIsbUJBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTdDLG9CQUFHLElBQUksS0FBSyxXQUFXLEVBQUU7QUFDdkIsdUJBQUssR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUMxQyxzQkFBRyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQ3RDLE9BQU87aUJBQ1Y7O0FBRUQsdUJBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO0FBQzdCLG9CQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNqQixzQkFBSSxFQUFFLElBQUk7QUFDVix1QkFBSyxFQUFFLEtBQUs7aUJBQ2IsQ0FBQyxDQUFDO2VBQ0o7YUFDRixDQUFDLENBQUM7V0FDSjs7O0FBN0NVLGNBQU0sR0FEbEIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUNYLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==