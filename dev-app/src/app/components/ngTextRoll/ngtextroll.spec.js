(function() {
  'use strict';

  describe('ngtextroll:', function() {

    beforeEach(module('ui.ngTextRoll'));

    describe('ngTextRollUtilSvc:', function() {

      var utilSvc;
      beforeEach(inject(function(_ngTextRollUtilSvc_) {
        utilSvc = _ngTextRollUtilSvc_;
      }));

      describe('buildRange:', function() {

        describe('overall value increases:', function() {
          it('should return asc order when new char < old char', function() {
            var actual = utilSvc.buildRange(true, '2', '5');
            var expected = ['4', '3', '2'];
            expect(actual).toEqual(expected);
          });
          it('should return desc order when new char > old char', function() {
            var actual = utilSvc.buildRange(true, '5', '2');
            var expected = ['3', '4', '5'];
            expect(actual).toEqual(expected);
          });
        });

        describe('overall value decrease:', function() {
          it('should return desc order when new char < old char', function() {
            var actual = utilSvc.buildRange(false, '2', '5');
            var expected = ['2', '3', '4'];
            expect(actual).toEqual(expected);
          });
          it('should return asc order when old char > new char', function() {
            var actual = utilSvc.buildRange(false, '5', '2');
            var expected = ['5', '4', '3'];
            expect(actual).toEqual(expected);
          });
        });

        it('should return single element array if values are same', function() {
          var actual = utilSvc.buildRange(true, '2', '2');
          var expected = ['2'];
          expect(actual).toEqual(expected);
        });

      });

    });

  });
})();
