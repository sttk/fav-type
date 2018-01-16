(function(){
'use strict';


var expect = chai.expect;



var formatDate = fav.type.formatDate;
var toDate = fav.type.toDate;

describe('fav.type.format-date', function() {

  describe('Year', function() {
    describe('Full year: "Y+"', function() {
      it('Should format positive year: "YYYY"', function() {
        var format = formatDate('YYYY/M/D');
        expect(format(toDate(7, 0, 4))).to.equal('0007/1/4');
        expect(format(toDate(17, 9, 14))).to.equal('0017/10/14');
        expect(format(toDate(2017, 10, 4))).to.equal('2017/11/4');
      });

      it('Should format negative year: "Y"', function() {
        var format = formatDate('Y/M/D');
        expect(format(toDate(-7, 0, 4))).to.equal('-7/1/4');
        expect(format(toDate(-17, 9, 14))).to.equal('-17/10/14');
        expect(format(toDate(-2017, 10, 4))).to.equal('-2017/11/4');
      });
    });

    describe('Century year: "y+"', function() {
      it('Should format positive year: "yy"', function() {
        var format = formatDate('yy/M/D');
        expect(format(toDate(7, 0, 4))).to.equal('07/1/4');
        expect(format(toDate(17, 9, 14))).to.equal('17/10/14');
        expect(format(toDate(2017, 10, 4))).to.equal('17/11/4');
      });

      it('Should format negative year: "y"', function() {
        var format = formatDate('y/M/D');
        expect(format(toDate(-7, 0, 4))).to.equal('-7/1/4');
        expect(format(toDate(-17, 9, 14))).to.equal('-17/10/14');
        expect(format(toDate(-2017, 10, 4))).to.equal('-17/11/4');
      });
    });
  });

  describe('Month', function() {
    describe('Month full name: "Month"', function() {
      it('Should format month: "Month"', function() {
        var format = formatDate('Month D');
        expect(format(toDate(2017, 0, 4))).to.equal('January 4');
        expect(format(toDate(2017, 9, 12))).to.equal('October 12');
      });
    });

    describe('Month abbreviation: "Mmm"', function() {
      it('Should format month: "Mmm"', function() {
        var format = formatDate('Mmm DD, YYYY');
        expect(format(toDate(2017, 1, 9))).to.equal('Feb 09, 2017');
        expect(format(toDate(2017, 10, 22))).to.equal('Nov 22, 2017');
      });
    });

    describe('Month : "M+"', function() {
      it('Should format month: "MM"', function() {
        var format = formatDate('YYYY-MM-DD');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-03-06');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format month: "M"', function() {
        var format = formatDate('Y-M-D');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-3-6');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });
    });
  });

  describe('Day', function() {
    describe('Day : "D+"', function() {
      it('Should format day: "D"', function() {
        var format = formatDate('Y-M-D');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-3-6');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });

      it('Should format day: "DD"', function() {
        var format = formatDate('YYYY-MM-DD');
        expect(format(toDate(2017, 2, 6))).to.equal('2017-03-06');
        expect(format(toDate(2017, 11, 15))).to.equal('2017-12-15');
      });
    });
  });

  describe('Hour/Minute/Second', function() {
    describe('Hour : "H+:m+:s+"', function() {
      it('Should format day: "s"', function() {
        var format = formatDate('H:m:s');
        expect(format(toDate(2017, 2, 6, 1, 2, 3))).to.equal('1:2:3');
        expect(format(toDate(2017, 1, 2, 11, 22, 33))).to.equal('11:22:33');
      });

      it('Should format day: "ss"', function() {
        var format = formatDate('HH:mm:ss');
        expect(format(toDate(2017, 2, 6, 1, 2, 3))).to.equal('01:02:03');
        expect(format(toDate(2017, 1, 2, 11, 22, 33))).to.equal('11:22:33');
      });
    });
  });

  describe('Millisecond', function() {
    describe('Millisecond: "S+"', function() {
      it('Should format msec: "S"', function() {
        var format = formatDate('s:S');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('3:4');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 400))).to.equal('3:400');
        expect(format(toDate(2017, 1, 2, 1, 2, 33, 456))).to.equal('33:456');
      });

      it('Should format msec: "SSS"', function() {
        var format = formatDate('ss.SSS');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 4))).to.equal('03.004');
        expect(format(toDate(2017, 2, 6, 1, 2, 3, 400))).to.equal('03.400');
        expect(format(toDate(2017, 1, 2, 1, 2, 33, 456))).to.equal('33.456');
      });
    });
  });

  describe('Week', function() {
    describe('Week full name: "Week"', function() {
      it('Should format week: "Week"', function() {
        var format = formatDate('Week, M D');
        expect(format(toDate(2017, 6, 7))).to.equal('Friday, 7 7');
        expect(format(toDate(2017, 10, 27))).to.equal('Monday, 11 27');
      });
    });

    describe('Week abbreviation: "Www"', function() {
      it('Should format week: "Www"', function() {
        var format = formatDate('MM/DD (Www)');
        expect(format(toDate(2017, 6, 7))).to.equal('07/07 (Fri)');
        expect(format(toDate(2017, 10, 27))).to.equal('11/27 (Mon)');
      });
    });
  });

  it('Should return an empty string when `format` is not a string',
  function() {
    var d = new Date();
    expect(formatDate(undefined)(d)).to.equal('');
    expect(formatDate(null)(d)).to.equal('');
    expect(formatDate(true)(d)).to.equal('');
    expect(formatDate(false)(d)).to.equal('');
    expect(formatDate(0)(d)).to.equal('');
    expect(formatDate(123)(d)).to.equal('');
    expect(formatDate([])(d)).to.equal('');
    expect(formatDate({})(d)).to.equal('');
    expect(formatDate(function(){})(d)).to.equal('');
    expect(formatDate(new Date())(d)).to.equal('');
  });

  it('Should return an empty string when `date` is not a date', function() {
    var format = formatDate('Y/M/D');
    expect(format(undefined)).to.equal('');
    expect(format(null)).to.equal('');
    expect(format(true)).to.equal('');
    expect(format(false)).to.equal('');
    expect(format(0)).to.equal('');
    expect(format(123)).to.equal('');
    expect(format('')).to.equal('');
    expect(format('2017/11/22')).to.equal('');
    expect(format([])).to.equal('');
    expect(format({})).to.equal('');
    expect(format(function(){})).to.equal('');
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;



var formatNumber = fav.type.formatNumber;

describe('fav.type.format-number', function() {

  describe('sign', function() {
    it('Should return a number string normally: "+9"', function() {
      var format = formatNumber('+9');
      expect(format(0)).to.equal('+0');
      expect(format(1)).to.equal('+1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.44)).to.equal('+1');
      expect(format(1.5)).to.equal('+2');
      expect(format(1.51)).to.equal('+2');
      expect(format(1.6)).to.equal('+2');
      expect(format(-1.44)).to.equal('-1');
      expect(format(-1.5)).to.equal('-1');
      expect(format(-1.51)).to.equal('-2');
      expect(format(-1.6)).to.equal('-2');
    });

    it('Should return a number string normally: "-9"', function() {
      var format = formatNumber('-9');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.44)).to.equal('1');
      expect(format(1.5)).to.equal('2');
      expect(format(1.51)).to.equal('2');
      expect(format(1.6)).to.equal('2');
      expect(format(-1.44)).to.equal('-1');
      expect(format(-1.5)).to.equal('-1');
      expect(format(-1.51)).to.equal('-2');
      expect(format(-1.6)).to.equal('-2');
    });

    it('Should return a number string normally: "9"', function() {
      var format = formatNumber('9');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('1');
      expect(format(1.44)).to.equal('1');
      expect(format(1.5)).to.equal('2');
      expect(format(1.51)).to.equal('2');
      expect(format(1.6)).to.equal('2');
      expect(format(-1.44)).to.equal('1');
      expect(format(-1.5)).to.equal('1');
      expect(format(-1.51)).to.equal('2');
      expect(format(-1.6)).to.equal('2');
    });

    it('Should return a sign normally: "+"', function() {
      var format = formatNumber('+');
      expect(format(0)).to.equal('+');
      expect(format(1)).to.equal('+');
      expect(format(-1)).to.equal('-');
      expect(format(1.44)).to.equal('+');
      expect(format(1.5)).to.equal('+');
      expect(format(1.51)).to.equal('+');
      expect(format(1.6)).to.equal('+');
      expect(format(-1.44)).to.equal('-');
      expect(format(-1.5)).to.equal('-');
      expect(format(-1.51)).to.equal('-');
      expect(format(-1.6)).to.equal('-');
    });

    it('Should return a sign normally: "-"', function() {
      var format = formatNumber('-');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('-');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('-');
      expect(format(-1.5)).to.equal('-');
      expect(format(-1.51)).to.equal('-');
      expect(format(-1.6)).to.equal('-');
    });

    it('Should return a sign normally: ""', function() {
      var format = formatNumber('');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('');
      expect(format(-1.5)).to.equal('');
      expect(format(-1.51)).to.equal('');
      expect(format(-1.6)).to.equal('');
    });

    it('Should return an empty string when illegal sign: "$9"', function() {
      var format = formatNumber('$9');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(1.44)).to.equal('');
      expect(format(1.5)).to.equal('');
      expect(format(1.51)).to.equal('');
      expect(format(1.6)).to.equal('');
      expect(format(-1.44)).to.equal('');
      expect(format(-1.5)).to.equal('');
      expect(format(-1.51)).to.equal('');
      expect(format(-1.6)).to.equal('');
    });
  });

  describe('decimal part', function() {
    it('Should return a number string normally: "+9."', function() {
      var format = formatNumber('+9.');
      expect(format(0)).to.equal('+0');
      expect(format(1)).to.equal('+1');
      expect(format(-1)).to.equal('-1');
      expect(format(123.456)).to.equal('+123.456');
      expect(format(-123.456)).to.equal('-123.456');
      expect(format(0.123)).to.equal('+0.123');
      expect(format(-0.123)).to.equal('-0.123');
    });

    it('Should return a number string normally: "+9.0"', function() {
      var format = formatNumber('+9.0');
      expect(format(0)).to.equal('+0.0');
      expect(format(1)).to.equal('+1.0');
      expect(format(-1)).to.equal('-1.0');
      expect(format(123.44)).to.equal('+123.4');
      expect(format(123.45)).to.equal('+123.5');
      expect(format(123.46)).to.equal('+123.5');
      expect(format(-123.44)).to.equal('-123.4');
      expect(format(-123.45)).to.equal('-123.4');
      expect(format(-123.46)).to.equal('-123.5');
      expect(format(0.123)).to.equal('+0.1');
      expect(format(-0.123)).to.equal('-0.1');
    });

    it('Should return a number string normally: "+9.00"', function() {
      var format = formatNumber('+9.00');
      expect(format(0)).to.equal('+0.00');
      expect(format(1)).to.equal('+1.00');
      expect(format(-1)).to.equal('-1.00');
      expect(format(123.444)).to.equal('+123.44');
      expect(format(123.445)).to.equal('+123.45');
      expect(format(123.446)).to.equal('+123.45');
      expect(format(-123.444)).to.equal('-123.44');
      expect(format(-123.445)).to.equal('-123.44');
      expect(format(-123.446)).to.equal('-123.45');
      expect(format(0.123)).to.equal('+0.12');
      expect(format(-0.123)).to.equal('-0.12');
    });

    it('Should return a number string normally: "-."', function() {
      var format = formatNumber('-.');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('-');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('-.444');
      expect(format(-123.445)).to.equal('-.445');
      expect(format(-123.446)).to.equal('-.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('-.123');
    });

    it('Should return a number string normally: "-.000"', function() {
      var format = formatNumber('-.000');
      expect(format(0)).to.equal('.000');
      expect(format(1)).to.equal('.000');
      expect(format(-1)).to.equal('-.000');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('-.444');
      expect(format(-123.445)).to.equal('-.445');
      expect(format(-123.446)).to.equal('-.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('-.123');
    });

    it('Should return a number string normally: "."', function() {
      var format = formatNumber('.');
      expect(format(0)).to.equal('');
      expect(format(1)).to.equal('');
      expect(format(-1)).to.equal('');
      expect(format(123.444)).to.equal('.444');
      expect(format(123.445)).to.equal('.445');
      expect(format(123.446)).to.equal('.446');
      expect(format(-123.444)).to.equal('.444');
      expect(format(-123.445)).to.equal('.445');
      expect(format(-123.446)).to.equal('.446');
      expect(format(0.123)).to.equal('.123');
      expect(format(-0.123)).to.equal('.123');
    });

    it('Should return a number string normally: ".00"', function() {
      var format = formatNumber('.00');
      expect(format(0)).to.equal('.00');
      expect(format(1)).to.equal('.00');
      expect(format(-1)).to.equal('.00');
      expect(format(123.444)).to.equal('.44');
      expect(format(123.445)).to.equal('.45');
      expect(format(123.446)).to.equal('.45');
      expect(format(-123.444)).to.equal('.44');
      expect(format(-123.445)).to.equal('.44');
      expect(format(-123.446)).to.equal('.45');
      expect(format(0.123)).to.equal('.12');
      expect(format(-0.123)).to.equal('.12');
    });

    it('Should return a number string normally: "9|"', function() {
      var format = formatNumber('9|');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('1');
      expect(format(123.444)).to.equal('123|444');
      expect(format(123.445)).to.equal('123|445');
      expect(format(123.446)).to.equal('123|446');
      expect(format(-123.444)).to.equal('123|444');
      expect(format(-123.445)).to.equal('123|445');
      expect(format(-123.446)).to.equal('123|446');
      expect(format(0.123)).to.equal('0|123');
      expect(format(-0.123)).to.equal('0|123');
    });

    it('Should return a number string normally: "-9|0"', function() {
      var format = formatNumber('-9|0');
      expect(format(0)).to.equal('0|0');
      expect(format(1)).to.equal('1|0');
      expect(format(-1)).to.equal('-1|0');
      expect(format(123.44)).to.equal('123|4');
      expect(format(123.45)).to.equal('123|5');
      expect(format(123.46)).to.equal('123|5');
      expect(format(-123.44)).to.equal('-123|4');
      expect(format(-123.45)).to.equal('-123|4');
      expect(format(-123.46)).to.equal('-123|5');
      expect(format(0.123)).to.equal('0|1');
      expect(format(-0.123)).to.equal('-0|1');
    });

    it('Should return a number string normally: "-9,."', function() {
      var format = formatNumber('-9,.');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(123.44)).to.equal('123,.44');
      expect(format(123.45)).to.equal('123,.45');
      expect(format(123.46)).to.equal('123,.46');
      expect(format(-123.44)).to.equal('-123,.44');
      expect(format(-123.45)).to.equal('-123,.45');
      expect(format(-123.46)).to.equal('-123,.46');
      expect(format(0.123)).to.equal('0,.123');
      expect(format(-0.123)).to.equal('-0,.123');
    });

    it('Should return a number string normally: "-9,.00"', function() {
      var format = formatNumber('-9,.00');
      expect(format(0)).to.equal('0,.00');
      expect(format(1)).to.equal('1,.00');
      expect(format(-1)).to.equal('-1,.00');
      expect(format(123.444)).to.equal('123,.44');
      expect(format(123.445)).to.equal('123,.45');
      expect(format(123.446)).to.equal('123,.45');
      expect(format(-123.444)).to.equal('-123,.44');
      expect(format(-123.445)).to.equal('-123,.44');
      expect(format(-123.446)).to.equal('-123,.45');
      expect(format(0.123)).to.equal('0,.12');
      expect(format(-0.123)).to.equal('-0,.12');
    });

    it('Should return an empty string when illegal decimal format',
    function() {
      expect(formatNumber('+9.888')(123.456)).to.equal('');
      expect(formatNumber('-9.090')(123.456)).to.equal('');
      expect(formatNumber('-9,999.9')(123.456)).to.equal('');
      expect(formatNumber('-9,999.8')(123.456)).to.equal('');
      expect(formatNumber('-9.000.')(123.456)).to.equal('');
      expect(formatNumber('-9.000.0')(123.456)).to.equal('');
    });
  });

  describe('integer part', function() {
    it('Should return a number string normally: "-9.99"', function() {
      var format = formatNumber('-9.99');
      expect(format(0)).to.equal('0');
      expect(format(1)).to.equal('1');
      expect(format(-1)).to.equal('-1');
      expect(format(1.23)).to.equal('1');
      expect(format(-1.23)).to.equal('-1');
      expect(format(123.456)).to.equal('1.23');
      expect(format(123.556)).to.equal('1.24');
      expect(format(-123.456)).to.equal('-1.23');
      expect(format(-123.556)).to.equal('-1.24');
      expect(format(123456)).to.equal('12.34.56');
      expect(format(-123456)).to.equal('-12.34.56');
    });

    it('Should return a number string normally: "9 999,000"', function() {
      var format = formatNumber('9 999,000');
      expect(format(0)).to.equal('0,000');
      expect(format(1)).to.equal('1,000');
      expect(format(-1)).to.equal('1,000');
      expect(format(123)).to.equal('123,000');
      expect(format(-123)).to.equal('123,000');
      expect(format(1234)).to.equal('1 234,000');
      expect(format(-1234)).to.equal('1 234,000');
      expect(format(1.234)).to.equal('1,234');
      expect(format(-1.234)).to.equal('1,234');
      expect(format(1.2345)).to.equal('1,235');
      expect(format(-1.2345)).to.equal('1,234');
    });

    it('Should return an empty string when illegal integer format',
    function() {
      expect(formatNumber('+99')(123.456)).to.equal('');
      expect(formatNumber(',999')(123.456)).to.equal('');
      expect(formatNumber('+989')(123.456)).to.equal('');
      expect(formatNumber('+99,99')(123.456)).to.equal('');
      expect(formatNumber('+99,99.99')(123.456)).to.equal('');
    });
  });

  describe('argument', function() {
    it('Should use specified rounding function: Math.round', function() {
      var format = formatNumber('-9', Math.round);
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should use specified rounding function: Math.round', function() {
      var format = formatNumber('-9.0', Math.round);
      expect(format(1.94)).to.equal('1.9');
      expect(format(1.95)).to.equal('2.0');
      expect(format(1.96)).to.equal('2.0');
      expect(format(-1.94)).to.equal('-1.9');
      expect(format(-1.95)).to.equal('-1.9');
      expect(format(-1.96)).to.equal('-2.0');
    });

    it('Should use specified rounding function: Math.ceil', function() {
      var format = formatNumber('-9', Math.ceil);
      expect(format(123.4)).to.equal('124');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-123');
    });

    it('Should use specified rounding function: Math.ceil', function() {
      var format = formatNumber('-9.0', Math.ceil);
      expect(format(1.94)).to.equal('2.0');
      expect(format(1.95)).to.equal('2.0');
      expect(format(1.96)).to.equal('2.0');
      expect(format(-1.94)).to.equal('-1.9');
      expect(format(-1.95)).to.equal('-1.9');
      expect(format(-1.96)).to.equal('-1.9');
    });

    it('Should use specified rounding function: Math.floor', function() {
      var format = formatNumber('-9', Math.floor);
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('123');
      expect(format(123.6)).to.equal('123');
      expect(format(-123.4)).to.equal('-124');
      expect(format(-123.5)).to.equal('-124');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should use specified rounding function: Math.floor', function() {
      var format = formatNumber('-9.0', Math.floor);
      expect(format(1.94)).to.equal('1.9');
      expect(format(1.95)).to.equal('1.9');
      expect(format(1.96)).to.equal('1.9');
      expect(format(-1.94)).to.equal('-2.0');
      expect(format(-1.95)).to.equal('-2.0');
      expect(format(-1.96)).to.equal('-2.0');
    });

    it('Should use Math.round when specified illegal rounding function',
    function() {
      var format = formatNumber('-9', {});
      expect(format(123.4)).to.equal('123');
      expect(format(123.5)).to.equal('124');
      expect(format(123.6)).to.equal('124');
      expect(format(-123.4)).to.equal('-123');
      expect(format(-123.5)).to.equal('-123');
      expect(format(-123.6)).to.equal('-124');
    });

    it('Should return an empty string when argument is illegal type',
    function() {
      expect(formatNumber(undefined)(123.456)).to.equal('');
      expect(formatNumber(null)(123.456)).to.equal('');
      expect(formatNumber({})(123.456)).to.equal('');
      expect(formatNumber('-9.0')(undefined)).to.equal('');
      expect(formatNumber('-9.0')(null)).to.equal('');
      expect(formatNumber('-9.0')({})).to.equal('');
    });
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var isNotArray = fav.type.isArray.not;

describe('fav.type.isArray.not', function() {

  it('Should return false when value is an array', function() {
    expect(isNotArray([])).to.equal(false);
    expect(isNotArray([0, 1, 2])).to.equal(false);
    expect(isNotArray(new Array('a', 'b'))).to.equal(false);
  });

  it('Should return true when value is not an array', function() {
    expect(isNotArray(undefined)).to.equal(true);
    expect(isNotArray(null)).to.equal(true);
    expect(isNotArray(true)).to.equal(true);
    expect(isNotArray(false)).to.equal(true);
    expect(isNotArray(0)).to.equal(true);
    expect(isNotArray(123)).to.equal(true);
    expect(isNotArray('')).to.equal(true);
    expect(isNotArray('ABC')).to.equal(true);
    expect(isNotArray({})).to.equal(true);
    expect(isNotArray({ a: 0 })).to.equal(true);
    expect(isNotArray(/a/g)).to.equal(true);
    expect(isNotArray(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotArray(function() {})).to.equal(true);
    expect(isNotArray(new Date())).to.equal(true);
    expect(isNotArray(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotArray(Symbol('foo'))).to.equal(true);
    }
    if (typeof Map === 'function') {
      expect(isNotArray(new Map())).to.equal(true);
    }
    if (typeof Set === 'function') {
      expect(isNotArray(new Set())).to.equal(true);
    }
    if (typeof WeakMap === 'function') {
      expect(isNotArray(new WeakMap())).to.equal(true);
    }
    if (typeof WeakSet === 'function') {
      expect(isNotArray(new WeakSet())).to.equal(true);
    }
  });

  it('Should return true when value is a typed-array', function() {
    var tested = false;

    if (typeof Uint8Array === 'function') {
      tested = true;
      expect(isNotArray(new Uint8Array())).to.equal(true);
    }
    if (typeof Int8Array === 'function') {
      tested = true;
      expect(isNotArray(new Int8Array())).to.equal(true);
    }
    if (typeof Uint8ClampedArray === 'function') {
      tested = true;
      expect(isNotArray(new Uint8ClampedArray())).to.equal(true);
    }
    if (typeof Int16Array === 'function') {
      tested = true;
      expect(isNotArray(new Int16Array())).to.equal(true);
    }
    if (typeof Uint16Array === 'function') {
      tested = true;
      expect(isNotArray(new Uint16Array())).to.equal(true);
    }
    if (typeof Float16Array === 'function') {
      tested = true;
      expect(isNotArray(new Float16Array())).to.equal(true);
    }
    if (typeof Int32Array === 'function') {
      tested = true;
      expect(isNotArray(new Int32Array())).to.equal(true);
    }
    if (typeof Uint32Array === 'function') {
      tested = true;
      expect(isNotArray(new Int32Array())).to.equal(true);
    }
    if (typeof Float32Array === 'function') {
      tested = true;
      expect(isNotArray(new Float32Array())).to.equal(true);
    }
    if (typeof Float64Array === 'function') {
      tested = true;
      expect(isNotArray(new Float64Array())).to.equal(true);
    }

    if (!tested) {
      this.skip();
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isArray = fav.type.isArray;

describe('fav.type.isArray', function() {

  it('Should return true when value is an array', function() {
    expect(isArray([])).to.equal(true);
    expect(isArray([0, 1, 2])).to.equal(true);
    expect(isArray(new Array('a', 'b'))).to.equal(true);
  });

  it('Should return false when value is not an array', function() {
    expect(isArray(undefined)).to.equal(false);
    expect(isArray(null)).to.equal(false);
    expect(isArray(true)).to.equal(false);
    expect(isArray(false)).to.equal(false);
    expect(isArray(0)).to.equal(false);
    expect(isArray(123)).to.equal(false);
    expect(isArray('')).to.equal(false);
    expect(isArray('ABC')).to.equal(false);
    expect(isArray({})).to.equal(false);
    expect(isArray({ a: 0 })).to.equal(false);
    expect(isArray(/a/g)).to.equal(false);
    expect(isArray(new RegExp('a', 'g'))).to.equal(false);
    expect(isArray(function() {})).to.equal(false);
    expect(isArray(new Date())).to.equal(false);
    expect(isArray(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isArray(Symbol('foo'))).to.equal(false);
    }
    if (typeof Map === 'function') {
      expect(isArray(new Map())).to.equal(false);
    }
    if (typeof Set === 'function') {
      expect(isArray(new Set())).to.equal(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isArray(new WeakMap())).to.equal(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isArray(new WeakSet())).to.equal(false);
    }
  });

  it('Should return false when value is a typed-array', function() {
    var tested = false;

    if (typeof Uint8Array === 'function') {
      tested = true;
      expect(isArray(new Uint8Array())).to.equal(false);
    }
    if (typeof Int8Array === 'function') {
      tested = true;
      expect(isArray(new Int8Array())).to.equal(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      tested = true;
      expect(isArray(new Uint8ClampedArray())).to.equal(false);
    }
    if (typeof Int16Array === 'function') {
      tested = true;
      expect(isArray(new Int16Array())).to.equal(false);
    }
    if (typeof Uint16Array === 'function') {
      tested = true;
      expect(isArray(new Uint16Array())).to.equal(false);
    }
    if (typeof Float16Array === 'function') {
      tested = true;
      expect(isArray(new Float16Array())).to.equal(false);
    }
    if (typeof Int32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).to.equal(false);
    }
    if (typeof Uint32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).to.equal(false);
    }
    if (typeof Float32Array === 'function') {
      tested = true;
      expect(isArray(new Float32Array())).to.equal(false);
    }
    if (typeof Float64Array === 'function') {
      tested = true;
      expect(isArray(new Float64Array())).to.equal(false);
    }

    if (!tested) {
      this.skip();
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isNotEmpty = fav.type.isEmpty.not;

describe('fav.type.isEmpty.not', function() {

  it('Should return false when value is null or undefined', function() {
    expect(isNotEmpty(undefined)).to.equal(false);
    expect(isNotEmpty(null)).to.equal(false);
  });

  it('Should return false when value is an array and it has no element',
  function() {
    expect(isNotEmpty([])).to.equal(false);
    expect(isNotEmpty(new Array())).to.equal(false);
  });

  it('Should return true when value is an array and it has elements',
  function() {
    expect(isNotEmpty([1, 2, 3])).to.equal(true);
    expect(isNotEmpty([0])).to.equal(true);
    expect(isNotEmpty([''])).to.equal(true);
    expect(isNotEmpty(new Array(1, 2, 3))).to.equal(true);
  });

  it('Should return false when value is a plain object and it has no property',
  function() {
    expect(isNotEmpty({})).to.equal(false);
    expect(isNotEmpty(new Object())).to.equal(false);
    expect(isNotEmpty(Object.create(Object.prototype))).to.equal(false);
    expect(isNotEmpty(Object.create(null))).to.equal(false);
  });

  it('Should return true when value is a plain object and it has properties',
  function() {
    expect(isNotEmpty({ a: 0 })).to.equal(true);
  });

  it('Should return true when value is `arguments` of a function',
  function() {
    (function() {
      expect(isNotEmpty(arguments)).to.equal(true);
    }());

    (function() {
      expect(isNotEmpty(arguments)).to.equal(true);
    }(1));
  });

  it('Should return false when value is HTMLCollection or NodeList,\n\t' +
  'and it has no element', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isNotEmpty(document.body.getElementsByTagName('xxx')))
      .to.equal(false);
    expect(isNotEmpty(document.querySelectorAll('xxx'))).to.equal(false);
  });

  it('Should return true when value is HTMLCollection or NodeList,\n\t' +
  'and it has elements', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isNotEmpty(document.body.getElementsByTagName('div')))
      .to.equal(true);
    expect(isNotEmpty(document.querySelectorAll('div'))).to.equal(true);
  });

  it('Should return true when value is neither an array nor a plain object',
  function() {
    expect(isNotEmpty(true)).to.equal(true);
    expect(isNotEmpty(false)).to.equal(true);
    expect(isNotEmpty(0)).to.equal(true);
    expect(isNotEmpty(123)).to.equal(true);
    expect(isNotEmpty('')).to.equal(true);
    expect(isNotEmpty('ABC')).to.equal(true);
    expect(isNotEmpty(/a/g)).to.equal(true);
    expect(isNotEmpty(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotEmpty(function() {})).to.equal(true);
    expect(isNotEmpty(new Date())).to.equal(true);
    expect(isNotEmpty(new Error())).to.equal(true);
    expect(isNotEmpty(Object.create({}))).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotEmpty(Symbol('foo'))).to.equal(true);
    }
    if (typeof Map === 'function') {
      expect(isNotEmpty(new Map())).to.equal(true);
    }
    if (typeof Set === 'function') {
      expect(isNotEmpty(new Set())).to.equal(true);
    }
    if (typeof WeakMap === 'function') {
      expect(isNotEmpty(new WeakMap())).to.equal(true);
    }
    if (typeof WeakSet === 'function') {
      expect(isNotEmpty(new WeakSet())).to.equal(true);
    }
    if (typeof Uint8Array === 'function') {
      expect(isNotEmpty(new Uint8Array())).to.equal(true);
    }
    if (typeof Int8Array === 'function') {
      expect(isNotEmpty(new Int8Array())).to.equal(true);
    }
    if (typeof Uint8ClampedArray === 'function') {
      expect(isNotEmpty(new Uint8ClampedArray())).to.equal(true);
    }
    if (typeof Int16Array === 'function') {
      expect(isNotEmpty(new Int16Array())).to.equal(true);
    }
    if (typeof Uint16Array === 'function') {
      expect(isNotEmpty(new Uint16Array())).to.equal(true);
    }
    if (typeof Float16Array === 'function') {
      expect(isNotEmpty(new Float16Array())).to.equal(true);
    }
    if (typeof Int32Array === 'function') {
      expect(isNotEmpty(new Int32Array())).to.equal(true);
    }
    if (typeof Uint32Array === 'function') {
      expect(isNotEmpty(new Int32Array())).to.equal(true);
    }
    if (typeof Float32Array === 'function') {
      expect(isNotEmpty(new Float32Array())).to.equal(true);
    }
    if (typeof Float64Array === 'function') {
      expect(isNotEmpty(new Float64Array())).to.equal(true);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isEmpty = fav.type.isEmpty;

describe('fav.type.isEmpty', function() {

  it('Should return true when value is null or undefined', function() {
    expect(isEmpty(undefined)).to.equal(true);
    expect(isEmpty(null)).to.equal(true);
  });

  it('Should return true when value is an array and it has no element',
  function() {
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty(new Array())).to.equal(true);
  });

  it('Should return false when value is an array and it has elements',
  function() {
    expect(isEmpty([1, 2, 3])).to.equal(false);
    expect(isEmpty([0])).to.equal(false);
    expect(isEmpty([''])).to.equal(false);
    expect(isEmpty(new Array(1, 2, 3))).to.equal(false);
  });

  it('Should return true when value is a plain object and it has no property',
  function() {
    expect(isEmpty({})).to.equal(true);
    expect(isEmpty(new Object())).to.equal(true);
    expect(isEmpty(Object.create(Object.prototype))).to.equal(true);
    expect(isEmpty(Object.create(null))).to.equal(true);
  });

  it('Should return false when value is a plain object and it has properties',
  function() {
    expect(isEmpty({ a: 0 })).to.equal(false);
  });

  it('Should return false when value is `arguments` of a function',
  function() {
    (function() {
      expect(isEmpty(arguments)).to.equal(false);
    }());

    (function() {
      expect(isEmpty(arguments)).to.equal(false);
    }(1));
  });

  it('Should return true when value is HTMLCollection or NodeList,\n\t' +
  'and it has no element', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('xxx'))).to.equal(true);
    expect(isEmpty(document.querySelectorAll('xxx'))).to.equal(true);
  });

  it('Should return false when value is HTMLCollection or NodeList,\n\t' +
  'and it has elements', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('div'))).to.equal(false);
    expect(isEmpty(document.querySelectorAll('div'))).to.equal(false);
  });

  it('Should return false when value is neither an array nor a plain object',
  function() {
    expect(isEmpty(true)).to.equal(false);
    expect(isEmpty(false)).to.equal(false);
    expect(isEmpty(0)).to.equal(false);
    expect(isEmpty(123)).to.equal(false);
    expect(isEmpty('')).to.equal(false);
    expect(isEmpty('ABC')).to.equal(false);
    expect(isEmpty(/a/g)).to.equal(false);
    expect(isEmpty(new RegExp('a', 'g'))).to.equal(false);
    expect(isEmpty(function() {})).to.equal(false);
    expect(isEmpty(new Date())).to.equal(false);
    expect(isEmpty(new Error())).to.equal(false);
    expect(isEmpty(Object.create({}))).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isEmpty(Symbol('foo'))).to.equal(false);
    }
    if (typeof Map === 'function') {
      expect(isEmpty(new Map())).to.equal(false);
    }
    if (typeof Set === 'function') {
      expect(isEmpty(new Set())).to.equal(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isEmpty(new WeakMap())).to.equal(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isEmpty(new WeakSet())).to.equal(false);
    }
    if (typeof Uint8Array === 'function') {
      expect(isEmpty(new Uint8Array())).to.equal(false);
    }
    if (typeof Int8Array === 'function') {
      expect(isEmpty(new Int8Array())).to.equal(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      expect(isEmpty(new Uint8ClampedArray())).to.equal(false);
    }
    if (typeof Int16Array === 'function') {
      expect(isEmpty(new Int16Array())).to.equal(false);
    }
    if (typeof Uint16Array === 'function') {
      expect(isEmpty(new Uint16Array())).to.equal(false);
    }
    if (typeof Float16Array === 'function') {
      expect(isEmpty(new Float16Array())).to.equal(false);
    }
    if (typeof Int32Array === 'function') {
      expect(isEmpty(new Int32Array())).to.equal(false);
    }
    if (typeof Uint32Array === 'function') {
      expect(isEmpty(new Int32Array())).to.equal(false);
    }
    if (typeof Float32Array === 'function') {
      expect(isEmpty(new Float32Array())).to.equal(false);
    }
    if (typeof Float64Array === 'function') {
      expect(isEmpty(new Float64Array())).to.equal(false);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isNotFiniteNumber = fav.type.isFiniteNumber.not;

describe('fav.type.isFiniteNumber.not', function() {

  it('Should return false when value is a finite number', function() {
    expect(isNotFiniteNumber(0)).to.equal(false);
    expect(isNotFiniteNumber(123)).to.equal(false);
    expect(isNotFiniteNumber(0.456)).to.equal(false);
    expect(isNotFiniteNumber(-987)).to.equal(false);
    expect(isNotFiniteNumber(Number.MIN_VALUE)).to.equal(false);
    expect(isNotFiniteNumber(Number.MAX_VALUE)).to.equal(false);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isNotFiniteNumber(Number.MIN_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isNotFiniteNumber(Number.MAX_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isNotFiniteNumber(Number.EPSILON)).to.equal(false);
    }
    expect(isNotFiniteNumber(new Number(123))).to.equal(false);
    expect(isNotFiniteNumber(new Number(4.56))).to.equal(false);
  });

  it('Should return true when value is NaN, +/-Infinity', function() {
    expect(isNotFiniteNumber(NaN)).to.equal(true);
    expect(isNotFiniteNumber(Infinity)).to.equal(true);
    expect(isNotFiniteNumber(-Infinity)).to.equal(true);
    expect(isNotFiniteNumber(Number.NaN)).to.equal(true);
    expect(isNotFiniteNumber(Number.POSITIVE_INFINITY)).to.equal(true);
    expect(isNotFiniteNumber(Number.NEGATIVE_INFINITY)).to.equal(true);
  });

  it('Should return true when value is not a number', function() {
    expect(isNotFiniteNumber(undefined)).to.equal(true);
    expect(isNotFiniteNumber(null)).to.equal(true);
    expect(isNotFiniteNumber(true)).to.equal(true);
    expect(isNotFiniteNumber(false)).to.equal(true);
    expect(isNotFiniteNumber('')).to.equal(true);
    expect(isNotFiniteNumber('abc')).to.equal(true);
    expect(isNotFiniteNumber('0')).to.equal(true);
    expect(isNotFiniteNumber('123')).to.equal(true);
    expect(isNotFiniteNumber([])).to.equal(true);
    expect(isNotFiniteNumber([1, 2])).to.equal(true);
    expect(isNotFiniteNumber({})).to.equal(true);
    expect(isNotFiniteNumber({ a: 1 })).to.equal(true);
    expect(isNotFiniteNumber(/a/g)).to.equal(true);
    expect(isNotFiniteNumber(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotFiniteNumber(function() {})).to.equal(true);
    expect(isNotFiniteNumber(new Date())).to.equal(true);
    expect(isNotFiniteNumber(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotFiniteNumber(Symbol('foo'))).to.equal(true);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isFiniteNumber = fav.type.isFiniteNumber;

describe('fav.type.isFiniteNumber', function() {

  it('Should return true when value is a finite number', function() {
    expect(isFiniteNumber(0)).to.equal(true);
    expect(isFiniteNumber(123)).to.equal(true);
    expect(isFiniteNumber(0.456)).to.equal(true);
    expect(isFiniteNumber(-987)).to.equal(true);
    expect(isFiniteNumber(Number.MIN_VALUE)).to.equal(true);
    expect(isFiniteNumber(Number.MAX_VALUE)).to.equal(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isFiniteNumber(Number.EPSILON)).to.equal(true);
    }
    expect(isFiniteNumber(new Number(123))).to.equal(true);
    expect(isFiniteNumber(new Number(4.56))).to.equal(true);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isFiniteNumber(NaN)).to.equal(false);
    expect(isFiniteNumber(Infinity)).to.equal(false);
    expect(isFiniteNumber(-Infinity)).to.equal(false);
    expect(isFiniteNumber(Number.NaN)).to.equal(false);
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).to.equal(false);
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).to.equal(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isFiniteNumber(undefined)).to.equal(false);
    expect(isFiniteNumber(null)).to.equal(false);
    expect(isFiniteNumber(true)).to.equal(false);
    expect(isFiniteNumber(false)).to.equal(false);
    expect(isFiniteNumber('')).to.equal(false);
    expect(isFiniteNumber('abc')).to.equal(false);
    expect(isFiniteNumber('0')).to.equal(false);
    expect(isFiniteNumber('123')).to.equal(false);
    expect(isFiniteNumber([])).to.equal(false);
    expect(isFiniteNumber([1, 2])).to.equal(false);
    expect(isFiniteNumber({})).to.equal(false);
    expect(isFiniteNumber({ a: 1 })).to.equal(false);
    expect(isFiniteNumber(/a/g)).to.equal(false);
    expect(isFiniteNumber(new RegExp('a', 'g'))).to.equal(false);
    expect(isFiniteNumber(function() {})).to.equal(false);
    expect(isFiniteNumber(new Date())).to.equal(false);
    expect(isFiniteNumber(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isFiniteNumber(Symbol('foo'))).to.equal(false);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;



var isNotFunction = fav.type.isFunction.not;

describe('fav.type.isFunction.not', function() {

  it('Should return false when value is a function', function() {
    expect(isNotFunction(function fn() {})).to.equal(false);
  });

  it('Should return false when value is a generator function', function() {
    if (!isSupportGenerator()) {
      this.skip();
      return;
    }
    eval('expect(isNotFunction(function *genFn() {})).to.equal(false)');
  });

  it('Should return false when value is a async function', function() {
    if (!isSupportAsyncAwait()) {
      this.skip();
      return;
    }
    eval('expect(isNotFunction(async function asyncFn() {})).to.equal(false)');
  });

  it('Should return true when value is other type', function() {
    expect(isNotFunction(undefined)).to.equal(true);
    expect(isNotFunction(null)).to.equal(true);
    expect(isNotFunction(true)).to.equal(true);
    expect(isNotFunction(false)).to.equal(true);
    expect(isNotFunction(0)).to.equal(true);
    expect(isNotFunction(123)).to.equal(true);
    expect(isNotFunction(-0.987)).to.equal(true);
    expect(isNotFunction(NaN)).to.equal(true);
    expect(isNotFunction(Infinity)).to.equal(true);
    expect(isNotFunction(new Number(111))).to.equal(true);
    expect(isNotFunction([])).to.equal(true);
    expect(isNotFunction([1, 2])).to.equal(true);
    expect(isNotFunction({})).to.equal(true);
    expect(isNotFunction({ a: 1 })).to.equal(true);
    expect(isNotFunction(/a/g)).to.equal(true);
    expect(isNotFunction(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotFunction(new Date())).to.equal(true);
    expect(isNotFunction(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotFunction(Symbol('foo'))).to.equal(true);
    }
  });

});

function isSupportAsyncAwait() {
  if (isNode()) {
    return semver.gte(process.version, '7.6.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return true;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }
  return false;
}

function isSupportGenerator() {
  if (isNode()) {
    return semver.gte(process.version, '4.0.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return false;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }

  return false;
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}


})();
(function(){
'use strict';


var expect = chai.expect;



var isFunction = fav.type.isFunction;

describe('fav.type.isFunction', function() {

  it('Should return true when value is a function', function() {
    expect(isFunction(function fn() {})).to.equal(true);
  });

  it('Should return true when value is a generator function', function() {
    if (!isSupportGenerator()) {
      this.skip();
      return;
    }
    eval('expect(isFunction(function *genFn() {})).to.equal(true)');
  });

  it('Should return true when value is a async function', function() {
    if (!isSupportAsyncAwait()) {
      this.skip();
      return;
    }
    eval('expect(isFunction(async function asyncFn() {})).to.equal(true)');
  });

  it('Should return false when value is other type', function() {
    expect(isFunction(undefined)).to.equal(false);
    expect(isFunction(null)).to.equal(false);
    expect(isFunction(true)).to.equal(false);
    expect(isFunction(false)).to.equal(false);
    expect(isFunction(0)).to.equal(false);
    expect(isFunction(123)).to.equal(false);
    expect(isFunction(-0.987)).to.equal(false);
    expect(isFunction(NaN)).to.equal(false);
    expect(isFunction(Infinity)).to.equal(false);
    expect(isFunction(new Number(111))).to.equal(false);
    expect(isFunction([])).to.equal(false);
    expect(isFunction([1, 2])).to.equal(false);
    expect(isFunction({})).to.equal(false);
    expect(isFunction({ a: 1 })).to.equal(false);
    expect(isFunction(/a/g)).to.equal(false);
    expect(isFunction(new RegExp('a', 'g'))).to.equal(false);
    expect(isFunction(new Date())).to.equal(false);
    expect(isFunction(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isFunction(Symbol('foo'))).to.equal(false);
    }
  });

});

function isSupportAsyncAwait() {
  if (isNode()) {
    return semver.gte(process.version, '7.6.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return true;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }
  return false;
}

function isSupportGenerator() {
  if (isNode()) {
    return semver.gte(process.version, '4.0.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return false;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }

  return false;
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}


})();
(function(){
'use strict';


var expect = chai.expect;


var isNotInteger = fav.type.isInteger.not;

describe('fav.type.isInteger.not', function() {

  it('Should return false when value is an integer', function() {
    expect(isNotInteger(0)).to.equal(false);
    expect(isNotInteger(123)).to.equal(false);
    expect(isNotInteger(-987)).to.equal(false);
    expect(isNotInteger(2^31)).to.equal(false);
    expect(isNotInteger(-2^32)).to.equal(false);
    expect(isNotInteger(Number.MAX_VALUE)).to.equal(false);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isNotInteger(Number.MIN_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isNotInteger(Number.MAX_SAFE_INTEGER)).to.equal(false);
    }
    expect(isNotInteger(new Number(123))).to.equal(false);
    expect(isNotInteger(1.0)).to.equal(false);
  });

  it('Should return true when value is a floating point number', function() {
    expect(isNotInteger(0.1)).to.equal(true);
    expect(isNotInteger(1.23)).to.equal(true);
    expect(isNotInteger(-0.987)).to.equal(true);
    expect(isNotInteger(Number.MIN_VALUE)).to.equal(true);
    expect(isNotInteger(Number.EPSILON)).to.equal(true);
  });

  it('Should return true when value is NaN, +/-Infinity', function() {
    expect(isNotInteger(NaN)).to.equal(true);
    expect(isNotInteger(Infinity)).to.equal(true);
    expect(isNotInteger(-Infinity)).to.equal(true);
    expect(isNotInteger(Number.NaN)).to.equal(true);
    expect(isNotInteger(Number.POSITIVE_INFINITY)).to.equal(true);
    expect(isNotInteger(Number.NEGATIVE_INFINITY)).to.equal(true);
  });

  it('Should return true when value is not a number', function() {
    expect(isNotInteger(undefined)).to.equal(true);
    expect(isNotInteger(null)).to.equal(true);
    expect(isNotInteger(true)).to.equal(true);
    expect(isNotInteger(false)).to.equal(true);
    expect(isNotInteger('')).to.equal(true);
    expect(isNotInteger('abc')).to.equal(true);
    expect(isNotInteger('0')).to.equal(true);
    expect(isNotInteger('123')).to.equal(true);
    expect(isNotInteger([])).to.equal(true);
    expect(isNotInteger([1, 2])).to.equal(true);
    expect(isNotInteger({})).to.equal(true);
    expect(isNotInteger({ a: 1 })).to.equal(true);
    expect(isNotInteger(/a/g)).to.equal(true);
    expect(isNotInteger(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotInteger(function() {})).to.equal(true);
    expect(isNotInteger(new Date())).to.equal(true);
    expect(isNotInteger(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotInteger(Symbol('foo'))).to.equal(true);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isInteger = fav.type.isInteger;

describe('fav.type.isInteger', function() {

  it('Should return true when value is an integer', function() {
    expect(isInteger(0)).to.equal(true);
    expect(isInteger(123)).to.equal(true);
    expect(isInteger(-987)).to.equal(true);
    expect(isInteger(2^31)).to.equal(true);
    expect(isInteger(-2^32)).to.equal(true);
    expect(isInteger(Number.MAX_VALUE)).to.equal(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MIN_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MAX_SAFE_INTEGER)).to.equal(true);
    }
    expect(isInteger(new Number(123))).to.equal(true);
    expect(isInteger(1.0)).to.equal(true);
  });

  it('Should return false when value is a floating point number', function() {
    expect(isInteger(0.1)).to.equal(false);
    expect(isInteger(1.23)).to.equal(false);
    expect(isInteger(-0.987)).to.equal(false);
    expect(isInteger(Number.MIN_VALUE)).to.equal(false);
    expect(isInteger(Number.EPSILON)).to.equal(false);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isInteger(NaN)).to.equal(false);
    expect(isInteger(Infinity)).to.equal(false);
    expect(isInteger(-Infinity)).to.equal(false);
    expect(isInteger(Number.NaN)).to.equal(false);
    expect(isInteger(Number.POSITIVE_INFINITY)).to.equal(false);
    expect(isInteger(Number.NEGATIVE_INFINITY)).to.equal(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isInteger(undefined)).to.equal(false);
    expect(isInteger(null)).to.equal(false);
    expect(isInteger(true)).to.equal(false);
    expect(isInteger(false)).to.equal(false);
    expect(isInteger('')).to.equal(false);
    expect(isInteger('abc')).to.equal(false);
    expect(isInteger('0')).to.equal(false);
    expect(isInteger('123')).to.equal(false);
    expect(isInteger([])).to.equal(false);
    expect(isInteger([1, 2])).to.equal(false);
    expect(isInteger({})).to.equal(false);
    expect(isInteger({ a: 1 })).to.equal(false);
    expect(isInteger(/a/g)).to.equal(false);
    expect(isInteger(new RegExp('a', 'g'))).to.equal(false);
    expect(isInteger(function() {})).to.equal(false);
    expect(isInteger(new Date())).to.equal(false);
    expect(isInteger(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isInteger(Symbol('foo'))).to.equal(false);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;



var isNotPlainObject = fav.type.isPlainObject.not;

describe('fav.type.isPlainObject.not', function() {

  it('Should return false when value is a plain object', function() {
    expect(isNotPlainObject({})).to.equal(false);
    expect(isNotPlainObject({ a: 1 })).to.equal(false);
    expect(isNotPlainObject(new Object())).to.equal(false);
    expect(isNotPlainObject(Object.create(Object.prototype))).to.equal(false);
    expect(isNotPlainObject(Object.create(null))).to.equal(false);
  });

  it('Should return true when value is not a plain object', function() {
    expect(isNotPlainObject(undefined)).to.equal(true);
    expect(isNotPlainObject(null)).to.equal(true);
    expect(isNotPlainObject(true)).to.equal(true);
    expect(isNotPlainObject(false)).to.equal(true);
    expect(isNotPlainObject(0)).to.equal(true);
    expect(isNotPlainObject(123)).to.equal(true);
    expect(isNotPlainObject(NaN)).to.equal(true);
    expect(isNotPlainObject(Infinity)).to.equal(true);
    expect(isNotPlainObject(new Number(123))).to.equal(true);
    expect(isNotPlainObject([])).to.equal(true);
    expect(isNotPlainObject([1, 2])).to.equal(true);
    expect(isNotPlainObject(new Array(1, 2))).to.equal(true);
    expect(isNotPlainObject(/a/g)).to.equal(true);
    expect(isNotPlainObject(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotPlainObject(function() {})).to.equal(true);
    expect(isNotPlainObject(new Date())).to.equal(true);
    expect(isNotPlainObject(new Error())).to.equal(true);
    expect(isNotPlainObject(new Foo())).to.equal(true);
    expect(isNotPlainObject(new FooEx())).to.equal(true);
    expect(isNotPlainObject(new SubclassOfPlainObject())).to.equal(true);
    expect(isNotPlainObject(Object.create({}))).to.equal(true);
  });

  it('Should return true when value is a class instance', function() {
    if (!isSupportClass()) {
      this.skip();
      return;
    }

    var code = codeForClass();
    eval(code);
  });

  it('Should return true when value is a symbol', function() {
    if (typeof Symbol !== 'function') {
      this.skip();
      return;
    }

    expect(isNotPlainObject(Symbol('foo'))).to.equal(true);
  });

});


function Foo() {
  this.baz = 'Baz';
  return this;
}

function FooEx() {
  this.baz = 'Baaaaz';
}
FooEx.prototype = Foo.prototype;

Foo.prototype.bar = function() {
  return this.baz;
};

/*
var foo = new Foo();
console.log(foo);
console.log(foo.baz);
console.log(foo.bar());
console.log(typeof foo);
console.log(Object.prototype.toString.call(foo));
console.log(foo.constructor);
console.log(foo.constructor.name);
console.log(foo.prototype);
console.log(Object.getPrototypeOf(foo));
console.log(foo.constructor === Object);

var fooex = new FooEx();
console.log(fooex);
console.log(fooex.baz);
console.log(fooex.bar());
console.log(fooex.constructor === Object);
*/

function SubclassOfPlainObject() {}
SubclassOfPlainObject.prototype = {};

function codeForClass() {
  return "\
class Qux {\
  constructor(n) {\
    this.count = n || 1;\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count) + 'x';\
  }\
}\
\
class Quux extends Qux {\
  constructor(n) {\
    super(n);\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count * 2) + 'x';\
  }\
}\
\
/*\
const qux = new Qux(3);\
console.log(qux);\
console.log(qux.count);\
console.log(qux.text);\
console.log(qux.constructor === Object);\
*/\
\
/*\
const quux = new Quux(3);\
console.log(quux);\
console.log(quux.count);\
console.log(quux.text);\
console.log(quux.constructor === Object);\
*/\
\
expect(isNotPlainObject(new Qux())).to.equal(true);\
expect(isNotPlainObject(new Quux())).to.equal(true);\
";
}

function isSupportClass() {
  if (isNode()) {
    return semver.gte(process.version, '2.0.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return true;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
    return false;
  }
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}

})();
(function(){
'use strict';


var expect = chai.expect;



var isPlainObject = fav.type.isPlainObject;

describe('fav.type.isPlainObject', function() {

  it('Should return true when value is a plain object', function() {
    expect(isPlainObject({})).to.equal(true);
    expect(isPlainObject({ a: 1 })).to.equal(true);
    expect(isPlainObject(new Object())).to.equal(true);
    expect(isPlainObject(Object.create(Object.prototype))).to.equal(true);
    expect(isPlainObject(Object.create(null))).to.equal(true);
  });

  it('Should return false when value is not a plain object', function() {
    expect(isPlainObject(undefined)).to.equal(false);
    expect(isPlainObject(null)).to.equal(false);
    expect(isPlainObject(true)).to.equal(false);
    expect(isPlainObject(false)).to.equal(false);
    expect(isPlainObject(0)).to.equal(false);
    expect(isPlainObject(123)).to.equal(false);
    expect(isPlainObject(NaN)).to.equal(false);
    expect(isPlainObject(Infinity)).to.equal(false);
    expect(isPlainObject(new Number(123))).to.equal(false);
    expect(isPlainObject([])).to.equal(false);
    expect(isPlainObject([1, 2])).to.equal(false);
    expect(isPlainObject(new Array(1, 2))).to.equal(false);
    expect(isPlainObject(/a/g)).to.equal(false);
    expect(isPlainObject(new RegExp('a', 'g'))).to.equal(false);
    expect(isPlainObject(function() {})).to.equal(false);
    expect(isPlainObject(new Date())).to.equal(false);
    expect(isPlainObject(new Error())).to.equal(false);
    expect(isPlainObject(new Foo())).to.equal(false);
    expect(isPlainObject(new FooEx())).to.equal(false);
    expect(isPlainObject(new SubclassOfPlainObject())).to.equal(false);
    expect(isPlainObject(Object.create({}))).to.equal(false);
  });

  it('Should return false when value is a class instance', function() {
    if (!isSupportClass()) {
      this.skip();
      return;
    }

    var code = codeForClass();
    eval(code);
  });

  it('Should return false when value is a symbol', function() {
    if (typeof Symbol !== 'function') {
      this.skip();
      return;
    }

    expect(isPlainObject(Symbol('foo'))).to.equal(false);
  });

});


function Foo() {
  this.baz = 'Baz';
  return this;
}

function FooEx() {
  this.baz = 'Baaaaz';
}
FooEx.prototype = Foo.prototype;

Foo.prototype.bar = function() {
  return this.baz;
};

/*
var foo = new Foo();
console.log(foo);
console.log(foo.baz);
console.log(foo.bar());
console.log(typeof foo);
console.log(Object.prototype.toString.call(foo));
console.log(foo.constructor);
console.log(foo.constructor.name);
console.log(foo.prototype);
console.log(Object.getPrototypeOf(foo));
console.log(foo.constructor === Object);

var fooex = new FooEx();
console.log(fooex);
console.log(fooex.baz);
console.log(fooex.bar());
console.log(fooex.constructor === Object);
*/

function SubclassOfPlainObject() {}
SubclassOfPlainObject.prototype = {};

function codeForClass() {
  return "\
class Qux {\
  constructor(n) {\
    this.count = n || 1;\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count) + 'x';\
  }\
}\
\
class Quux extends Qux {\
  constructor(n) {\
    super(n);\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count * 2) + 'x';\
  }\
}\
\
/*\
const qux = new Qux(3);\
console.log(qux);\
console.log(qux.count);\
console.log(qux.text);\
console.log(qux.constructor === Object);\
*/\
\
/*\
const quux = new Quux(3);\
console.log(quux);\
console.log(quux.count);\
console.log(quux.text);\
console.log(quux.constructor === Object);\
*/\
\
expect(isPlainObject(new Qux())).to.equal(false);\
expect(isPlainObject(new Quux())).to.equal(false);\
";
}

function isSupportClass() {
  if (isNode()) {
    return semver.gte(process.version, '2.0.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return true;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
    return false;
  }
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}

})();
(function(){
'use strict';




var expect = chai.expect;
var isNotString = fav.type.isString.not;

describe('fav.type.isString.not', function() {

  it('Should return false when value is a string', function() {
    expect(isNotString('')).to.equal(false);
    expect(isNotString('abc')).to.equal(false);
    expect(isNotString('あ')).to.equal(false);
    expect(isNotString('ä')).to.equal(false);
    expect(isNotString(String(123))).to.equal(false);
  });

  it('Should return false when value is a string object', function() {
    expect(isNotString(Object(''))).to.equal(false);
    expect(isNotString(new String('abc'))).to.equal(false);
  });

  it('Should return true when value is other type', function() {
    expect(isNotString(undefined)).to.equal(true);
    expect(isNotString(null)).to.equal(true);
    expect(isNotString(true)).to.equal(true);
    expect(isNotString(false)).to.equal(true);
    expect(isNotString(0)).to.equal(true);
    expect(isNotString(987)).to.equal(true);
    expect(isNotString(-0.1234)).to.equal(true);
    expect(isNotString(NaN)).to.equal(true);
    expect(isNotString(Infinity)).to.equal(true);
    expect(isNotString(new Number(987))).to.equal(true);
    expect(isNotString([])).to.equal(true);
    expect(isNotString([1, 2])).to.equal(true);
    expect(isNotString({})).to.equal(true);
    expect(isNotString({ a: 1 })).to.equal(true);
    expect(isNotString(/a/g)).to.equal(true);
    expect(isNotString(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotString(function() {})).to.equal(true);
    expect(isNotString(new Date())).to.equal(true);
    expect(isNotString(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotString(Symbol('foo'))).to.equal(true);
    }
  });
});

})();
(function(){
'use strict';




var expect = chai.expect;
var isString = fav.type.isString;

describe('fav.type.isString', function() {

  it('Should return true when value is a string', function() {
    expect(isString('')).to.equal(true);
    expect(isString('abc')).to.equal(true);
    expect(isString('あ')).to.equal(true);
    expect(isString('ä')).to.equal(true);
    expect(isString(String(123))).to.equal(true);
  });

  it('Should return true when value is a string object', function() {
    expect(isString(Object(''))).to.equal(true);
    expect(isString(new String('abc'))).to.equal(true);
  });

  it('Should return false when value is other type', function() {
    expect(isString(undefined)).to.equal(false);
    expect(isString(null)).to.equal(false);
    expect(isString(true)).to.equal(false);
    expect(isString(false)).to.equal(false);
    expect(isString(0)).to.equal(false);
    expect(isString(987)).to.equal(false);
    expect(isString(-0.1234)).to.equal(false);
    expect(isString(NaN)).to.equal(false);
    expect(isString(Infinity)).to.equal(false);
    expect(isString(new Number(987))).to.equal(false);
    expect(isString([])).to.equal(false);
    expect(isString([1, 2])).to.equal(false);
    expect(isString({})).to.equal(false);
    expect(isString({ a: 1 })).to.equal(false);
    expect(isString(/a/g)).to.equal(false);
    expect(isString(new RegExp('a', 'g'))).to.equal(false);
    expect(isString(function() {})).to.equal(false);
    expect(isString(new Date())).to.equal(false);
    expect(isString(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isString(Symbol('foo'))).to.equal(false);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var isNotValidDate = fav.type.isValidDate.not;

describe('fav.type.isValidDate.not', function() {

  it('Should return false when value is a valid date', function() {
    expect(isNotValidDate(new Date(2017, 8, 30))).to.equal(false);
  });

  it('Should return true when value is an invalid date', function() {
    expect(isNotValidDate(new Date(Infinity, 8, 30))).to.equal(true);
    expect(isNotValidDate(new Date(300000, 8, 30))).to.equal(true);
  });

  it('Should return true when value is not a date', function() {
    expect(isNotValidDate(undefined)).to.equal(true);
    expect(isNotValidDate(null)).to.equal(true);
    expect(isNotValidDate(true)).to.equal(true);
    expect(isNotValidDate(false)).to.equal(true);
    expect(isNotValidDate(0)).to.equal(true);
    expect(isNotValidDate(123)).to.equal(true);
    expect(isNotValidDate('')).to.equal(true);
    expect(isNotValidDate('ABC')).to.equal(true);
    expect(isNotValidDate(/a/g)).to.equal(true);
    expect(isNotValidDate(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotValidDate(function() {})).to.equal(true);
    expect(isNotValidDate(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotValidDate(Symbol('foo'))).to.equal(true);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var isValidDate = fav.type.isValidDate;

describe('fav.type.isValidDate', function() {

  it('Should return true when value is a valid date', function() {
    expect(isValidDate(new Date(2017, 8, 30))).to.equal(true);
  });

  it('Should return false when value is an invalid date', function() {
    expect(isValidDate(new Date(Infinity, 8, 30))).to.equal(false);
    expect(isValidDate(new Date(300000, 8, 30))).to.equal(false);
  });

  it('Should return false when value is not a date', function() {
    expect(isValidDate(undefined)).to.equal(false);
    expect(isValidDate(null)).to.equal(false);
    expect(isValidDate(true)).to.equal(false);
    expect(isValidDate(false)).to.equal(false);
    expect(isValidDate(0)).to.equal(false);
    expect(isValidDate(123)).to.equal(false);
    expect(isValidDate('')).to.equal(false);
    expect(isValidDate('ABC')).to.equal(false);
    expect(isValidDate(/a/g)).to.equal(false);
    expect(isValidDate(new RegExp('a', 'g'))).to.equal(false);
    expect(isValidDate(function() {})).to.equal(false);
    expect(isValidDate(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isValidDate(Symbol('foo'))).to.equal(false);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;




var newDate = fav.type.toDate;
var toDate = newDate['Y-M-D H:m:s'];

describe('fav.type.toDate["Y-M-D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21 19:23:01'))
      .to.eql(newDate(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017-09-21 9:03:01.5'))
      .to.eql(newDate(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123-4-5 10:20:30.40'))
      .to.eql(newDate(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99-9-9 1:2:3'))
      .to.eql(newDate(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99-9-9 23:59:59.99999'))
      .to.eql(newDate(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017-13-21 00:00:00'))
      .to.eql(newDate(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017-09-31    01:23:45.678'))
      .to.eql(newDate(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017-09')).to.equal(null);
    expect(toDate('2017-09-')).to.equal(null);
    expect(toDate('2017-09-01')).to.equal(null);
    expect(toDate('2017-09-01 11')).to.equal(null);
    expect(toDate('2017-09-01 11:')).to.equal(null);
    expect(toDate('2017-09-01 11:22')).to.equal(null);
    expect(toDate('2017-09-01 11:22:')).to.equal(null);
    expect(toDate('2017-09-01 11:22:33.')).to.equal(null);
    expect(toDate('2017-09-01 11:22:A')).to.equal(null);
    expect(toDate('2017-09-0111:22:33')).to.equal(null);
    expect(toDate('20170921223311')).to.equal(null);
    expect(toDate('２０１７-９-２１ １１:２２:３３')).to.equal(null);
    expect(toDate('2017/09/21 11:22:33')).to.equal(null);
    if (!isPhantomJs()) {
      expect(toDate('9999999-09-21 11:22:33')).to.equal(null);
    }
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});


})();
(function(){
'use strict';


var expect = chai.expect;




var newDate = fav.type.toDate;
var toDate = newDate['Y-M-D'];

describe('fav.type.toDate["Y-M-D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21')).to.eql(newDate(2017, 8, 21));
    expect(toDate('123-4-5')).to.eql(newDate(123, 3, 5));
    expect(toDate('-99-9-9')).to.eql(newDate(-99, 8, 9));
    expect(toDate('+99-9-9')).to.eql(newDate(99, 8, 9));
    expect(toDate('2017-13-21')).to.eql(newDate(2018, 0, 21));
    expect(toDate('2017-09-31')).to.eql(newDate(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017-09')).to.equal(null);
    expect(toDate('2017-09-')).to.equal(null);
    expect(toDate('2017-09-A')).to.equal(null);
    expect(toDate('20170921')).to.equal(null);
    expect(toDate('２０１７-９-２１')).to.equal(null);
    expect(toDate('2017-09-31-')).to.equal(null);
    expect(toDate('2017/09/21')).to.equal(null);
    if (!isPhantomJs()) {
      expect(toDate('9999999-09-21')).to.equal(null);
    }
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});


})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = newDate.ISO8601;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["ISO8601"]', function() {

  it('Should return a date object if format is basic calendar date',
  function() {
    expect(toDate('19850412'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('19850412T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('19850412T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('19850412T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('19850412T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('19850412T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('19850412T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic calendar date',
  function() {
    expect(toDate('+119850412'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+119850412T101530Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+119850412T101530+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530+0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+119850412T101530-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530-0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-219850412'))
      .to.eql(newDate(-21985, 3, 12));
    expect(toDate('-219850412T101530Z'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-219850412T101530+09'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530+0910'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-219850412T101530-09'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530-0910'))
      .to.eql(newDate(-21985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is basic ordinal date',
  function() {
    expect(toDate('1985102'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985102T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985102T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985102T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985102T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985102T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985102T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('The expanded basic ordinal date format is not supported because this ' +
  '\n\tcannot be distinguished from basic calendar date format.',
  function() {
    this.skip();
    return;
  });

  it('Should return a date object if format is basic week date',
  function() {
    expect(toDate('1985W155'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985W155T101530'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985W155T101530Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985W155T101530+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530+0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985W155T101530-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530-0910'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic week date',
  function() {
    expect(toDate('+11985W155'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985W155T101530'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985W155T101530Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985W155T101530-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530-0910'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985W155'))
      .to.eql(newDate(-11985, 3, 10));
    expect(toDate('-11985W155T101530'))
      .to.eql(newDate(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985W155T101530Z'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+0910'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985W155T101530-09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530-0910'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended calendar date',
  function() {
    expect(toDate('1985-04-12'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-04-12T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-04-12T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-04-12T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended calendar ' +
  'date', function() {
    expect(toDate('+11985-04-12'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-04-12T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-04-12T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-04-12T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-04-12'))
      .to.eql(newDate(-11985, 3, 12));
    expect(toDate('-11985-04-12T10:15:30'))
      .to.eql(newDate(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-04-12T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-04-12T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended ordinal date',
  function() {
    expect(toDate('1985-102'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-102T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-102T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-102T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended ordinal date',
  function() {
    expect(toDate('+11985-102'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-102T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-102T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-102T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-102'))
      .to.eql(newDate(-11985, 3, 12));
    expect(toDate('-11985-102T10:15:30'))
      .to.eql(newDate(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-102T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-102T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended week date',
  function() {
    expect(toDate('1985-W15-5'))
      .to.eql(newDate(1985, 3, 12));
    expect(toDate('1985-W15-5T10:15:30'))
      .to.eql(newDate(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-W15-5T10:15:30Z'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-W15-5T10:15:30-09'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended week date',
  function() {
    expect(toDate('+11985-W15-5'))
      .to.eql(newDate(11985, 3, 12));
    expect(toDate('+11985-W15-5T10:15:30'))
      .to.eql(newDate(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-W15-5T10:15:30Z'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-W15-5T10:15:30-09'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-W15-5'))
      .to.eql(newDate(-11985, 3, 10));
    expect(toDate('-11985-W15-5T10:15:30'))
      .to.eql(newDate(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985-W15-5T10:15:30Z'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09:10'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-W15-5T10:15:30-09'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30-09:10'))
      .to.eql(newDate(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201710')).to.equal(null);
    expect(toDate('201710234')).to.equal(null);
    expect(toDate('20171023 112233')).to.equal(null);
    expect(toDate('2017-10')).to.equal(null);
    expect(toDate('2017-10-23T4')).to.equal(null);
    expect(toDate('2017-10-23 11:22:33')).to.equal(null);
    expect(toDate('2017/10/23T11:22:33')).to.equal(null);
    expect(toDate('12017-10-23T11:22:33')).to.equal(null);
    expect(toDate('+017-10-23T11:22:33')).to.equal(null);
    expect(toDate('-17-10-23T11:22:33')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(new Date())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });
});



})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = newDate.RFC2822;

var tz = newDate().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC2822"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 +0900'))
      .to.eql(newDate(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 -0900'))
      .to.eql(newDate(2017, 8, 26, 8 - tzH + 9, 15 - tzM, 2, 0));
    expect(toDate('  26  Sep  2017  08:15:02   +0900  '))
      .to.eql(newDate(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));

    expect(toDate('Mon, 24 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 24, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Wed, 26 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 26, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Thu, 27 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 27, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Fri, 28 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 28, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sat, 29 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 29, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sun, 30 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate('30 Jan 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 0, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Feb 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 1, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Mar 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 2, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Apr 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 3, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 May 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 4, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jun 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 5, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jul 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 6, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Aug 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 7, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Oct 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 9, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Nov 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 10, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Dec 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 11, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate(' Tue, 5 Sep 2017 23:15:02 +0000'))
      .to.eql(newDate(2017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 5 Sep 12017 23:15:02 +0000'))
      .to.eql(newDate(12017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('AAA, 25 Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, A25 Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25A Sep 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 AAA 2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep2017 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 117 23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017T23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 A23:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 2:15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23A15:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:1:02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15A02 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:2 +0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02A+0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 A0000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +000')).to.equal(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000A')).to.equal(null);
    expect(toDate('Tue, 25 Sep 99999999 23:15:02 +0000')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = fav.type.toDate.RFC3339;

var tz = newDate().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC3339"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-26T23:37:51Z'))
      .to.eql(newDate(2017, 8, 26, 23 - tzH, 37 - tzM, 51));
    expect(toDate('2017-09-26T23:37:51+00:00'))
      .to.eql(newDate(2017, 8, 26, 23 - tzH, 37 - tzM, 51));

    expect(toDate('2017-09-27T08:37:51+09:00'))
      .to.eql(newDate(2017, 8, 27, 8 - 9 - tzH, 37 + tzM, 51));
    expect(toDate('2017-09-26T20:27:51-03:10'))
      .to.eql(newDate(2017, 8, 26, 20 + 3 - tzH, 27 + 10 - tzM, 51));
    expect(toDate('2017-09-24T19:59:51.123Z'))
      .to.eql(newDate(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));

    expect(toDate('2017-09-24T19:59:51.123+00:00'))
      .to.eql(newDate(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
    expect(toDate('2017-09-24T19:59:51.1+00:00'))
      .to.eql(newDate(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 100));
    expect(toDate('2017-09-24T19:59:51.12+00:00'))
      .to.eql(newDate(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 120));
    expect(toDate('2017-09-24T19:59:51.1234+00:00'))
      .to.eql(newDate(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('12017-09-24T10:59:51Z')).to.equal(null);
    expect(toDate('217-09-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-9-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-009-24T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-4T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-124T10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12A10:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T1:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T101:59:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:9:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:159:51Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:1Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:151Z')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15.Z')).to.equal(null);
    expect(toDate('2017/09-12T10:59:15')).to.equal(null);
    expect(toDate('2017-09/12T10:59:15')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-:')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+1')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15+12:')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:3')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:345')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:34Z')).to.equal(null);
    expect(toDate(' 2017-09-12T10:59:15-12:34')).to.equal(null);
    expect(toDate('2017-09-12T10:59:15-12:34 ')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;




var newDate = fav.type.toDate;
var toDate = fav.type.toDate['Y/M/D H:m:s'];

describe('fav.type.toDate["Y/M/D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21 19:23:01'))
      .to.eql(newDate(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017/09/21 9:03:01.5'))
      .to.eql(newDate(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123/4/5 10:20:30.40'))
      .to.eql(newDate(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99/9/9 1:2:3'))
      .to.eql(newDate(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99/9/9 23:59:59.99999'))
      .to.eql(newDate(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017/13/21 00:00:00'))
      .to.eql(newDate(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017/09/31    01:23:45.678'))
      .to.eql(newDate(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017/09')).to.equal(null);
    expect(toDate('2017/09/')).to.equal(null);
    expect(toDate('2017/09/01')).to.equal(null);
    expect(toDate('2017/09/01 11')).to.equal(null);
    expect(toDate('2017/09/01 11:')).to.equal(null);
    expect(toDate('2017/09/01 11:22')).to.equal(null);
    expect(toDate('2017/09/01 11:22:')).to.equal(null);
    expect(toDate('2017/09/01 11:22:33.')).to.equal(null);
    expect(toDate('2017/09/01 11:22:A')).to.equal(null);
    expect(toDate('2017/09/0111:22:33')).to.equal(null);
    expect(toDate('20170921223311')).to.equal(null);
    expect(toDate('２０１７/９/２１ １１:２２:３３')).to.equal(null);
    expect(toDate('2017-09-21 11:22:33')).to.equal(null);
    if (!isPhantomJs()) {
      expect(toDate('9999999/09/21 11:22:33')).to.equal(null);
    }
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017/09/10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;




var newDate = fav.type.toDate;
var toDate = fav.type.toDate['Y/M/D'];

describe('fav.type.toDate["Y/M/D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21')).to.eql(newDate(2017, 8, 21));
    expect(toDate('123/4/5')).to.eql(newDate(123, 3, 5));
    expect(toDate('-99/9/9')).to.eql(newDate(-99, 8, 9));
    expect(toDate('+99/9/9')).to.eql(newDate(99, 8, 9));
    expect(toDate('2017/13/21')).to.eql(newDate(2018, 0, 21));
    expect(toDate('2017/09/31')).to.eql(newDate(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('-')).to.equal(null);
    expect(toDate('+')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('2017/09')).to.equal(null);
    expect(toDate('2017/09/')).to.equal(null);
    expect(toDate('2017/09/A')).to.equal(null);
    expect(toDate('20170921')).to.equal(null);
    expect(toDate('２０１７/９/２１')).to.equal(null);
    expect(toDate('2017/09/31/')).to.equal(null);
    expect(toDate('2017-09-21')).to.equal(null);
    if (!isPhantomJs()) {
      expect(toDate('9999999/09/21')).to.equal(null);
    }
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017/09/10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYMMDD'];

describe('fav.type.toDate["YYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = newDate().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101')).to.eql(newDate(yyyy, 0, 1));
      expect(toDate(yy + '0615')).to.eql(newDate(yyyy, 5, 15));
      expect(toDate(yy + '1231')).to.eql(newDate(yyyy, 11, 31));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231')).to.eql(newDate(yyyy + 49, 11, 31));
    expect(toDate(yy + '1232')).to.eql(newDate(yyyy + 50, 0, 1));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101')).to.eql(newDate(yyyy - 50, 0, 1));
    expect(toDate(yy + '0100')).to.eql(newDate(yyyy - 51, 11,31));

    expect(toDate('000000')).to.not.equal(null);
    expect(toDate('999999')).to.not.equal(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('17')).to.equal(null);
    expect(toDate('1709')).to.equal(null);
    expect(toDate('17093')).to.equal(null);
    expect(toDate('1709301')).to.equal(null);
    expect(toDate('20170930')).to.equal(null);
    expect(toDate('17-09-30')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('17-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYMMDDHHmmss'];

describe('fav.type.toDate["YYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = newDate().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101000000'))
        .to.eql(newDate(yyyy, 0, 1, 0, 0, 0));
      expect(toDate(yy + '0615123030'))
        .to.eql(newDate(yyyy, 5, 15, 12, 30, 30));
      expect(toDate(yy + '1231235959'))
        .to.eql(newDate(yyyy, 11, 31, 23, 59, 59));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231235959'))
      .to.eql(newDate(yyyy + 49, 11, 31, 23, 59, 59));
    expect(toDate(yy + '1231235960'))
      .to.eql(newDate(yyyy + 50, 0, 1, 0, 0, 0));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101000000'))
      .to.eql(newDate(yyyy - 50, 0, 1, 0, 0, 0));
    expect(toDate(yy + '0100235959'))
      .to.eql(newDate(yyyy - 51, 11,31, 23, 59, 59));

    expect(toDate('000000000000')).to.not.equal(null);
    expect(toDate('999999999999')).to.not.equal(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('17')).to.equal(null);
    expect(toDate('1709')).to.equal(null);
    expect(toDate('17093')).to.equal(null);
    expect(toDate('17093012')).to.equal(null);
    expect(toDate('1709301234')).to.equal(null);
    expect(toDate('17093012345')).to.equal(null);
    expect(toDate('1709301234567')).to.equal(null);
    expect(toDate('20170930123456')).to.equal(null);
    expect(toDate('17-09-30 12:34:56')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('17-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYYYMMDD'];

describe('fav.type.toDate["YYYYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923')).to.eql(newDate(2017, 8, 23));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201709')).to.equal(null);
    expect(toDate('2017093')).to.equal(null);
    expect(toDate('201709301')).to.equal(null);
    expect(toDate('170930')).to.equal(null);
    expect(toDate('2017-09-30')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var newDate = fav.type.toDate;
var toDate = fav.type.toDate['YYYYMMDDHHmmss'];

describe('fav.type.toDate["YYYYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923112233'))
      .to.eql(newDate(2017, 8, 23, 11, 22, 33));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).to.equal(null);
    expect(toDate('2017')).to.equal(null);
    expect(toDate('201709')).to.equal(null);
    expect(toDate('2017093')).to.equal(null);
    expect(toDate('2017093011')).to.equal(null);
    expect(toDate('201709301122')).to.equal(null);
    expect(toDate('2017093011223')).to.equal(null);
    expect(toDate('201709301122331')).to.equal(null);
    expect(toDate('170930112233')).to.equal(null);
    expect(toDate('2017-09-30 11:22:33')).to.equal(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).to.equal(null);
    expect(toDate(null)).to.equal(null);
    expect(toDate(true)).to.equal(null);
    expect(toDate(false)).to.equal(null);
    expect(toDate(123)).to.equal(null);
    expect(toDate([])).to.equal(null);
    expect(toDate([1, 2, 3])).to.equal(null);
    expect(toDate({})).to.equal(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).to.equal(null);
    expect(toDate(/a/g)).to.equal(null);
    expect(toDate(new RegExp('a', 'g'))).to.equal(null);
    expect(toDate(function() {})).to.equal(null);
    expect(toDate(newDate())).to.equal(null);
    expect(toDate(new Error())).to.equal(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('2017-09-10'))).to.equal(null);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var toDate = fav.type.toDate;

describe('fav.type.toDate', function() {

  it('Should get the current date if no argument', function() {
    var d0 = new Date();
    var d1 = toDate();
    var d2 = new Date();
    expect(d0.getTime() <= d1.getTime()).to.be.true;
    expect(d2.getTime() >= d1.getTime()).to.be.true;
  });

  it('Should get the specified date', function() {
    var d0 = toDate(2010, 1, 20, 1, 23, 45, 678);
    expect(d0.getFullYear()).to.equal(2010);
    expect(d0.getMonth()).to.equal(1);
    expect(d0.getDate()).to.equal(20);
    expect(d0.getHours()).to.equal(1);
    expect(d0.getMinutes()).to.equal(23);
    expect(d0.getSeconds()).to.equal(45);
    expect(d0.getMilliseconds()).to.equal(678);
  });

  it('Should set first values to elements which are not specified',
  function() {
    var d0 = toDate(2010);
    var d1 = new Date(2010, 0, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2);
    var d1 = new Date(2010, 2, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23);
    var d1 = new Date(2010, 2, 23, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11);
    var d1 = new Date(2010, 2, 23, 11, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11, 22);
    var d1 = new Date(2010, 2, 23, 11, 22, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(2010, 2, 23, 11, 22, 33);
    var d1 = new Date(2010, 2, 23, 11, 22, 33, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

  it('Should set the current values to elements which are not specified and' +
  '\n\tleading elements are nullish', function() {
    var d0 = toDate(null, 3);
    var d1 = new Date();
    d1 = new Date(d1.getFullYear(), 3, 1, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, 5);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), 5, 0, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, 9);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(), 9, 0, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, null, 19);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(),
      d1.getHours(), 19, 0, 0);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());

    d0 = toDate(null, undefined, null, null, undefined, null, 50);
    d1 = new Date();
    d1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate(),
      d1.getHours(), d1.getMinutes(), d1.getSeconds(), 50);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

  it('Should be able to specify a year before 1900', function() {
    var d0 = toDate(123, 10, 23);
    var d1 = new Date(1900, 10, 23);
    d1.setFullYear(123);
    expect(d0.getFullYear()).to.equal(d1.getFullYear());
    expect(d0.getMonth()).to.equal(d1.getMonth());
    expect(d0.getDate()).to.equal(d1.getDate());
    expect(d0.getMinutes()).to.equal(d1.getMinutes());
    expect(d0.getSeconds()).to.equal(d1.getSeconds());
    expect(d0.getMilliseconds()).to.equal(d1.getMilliseconds());
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var toFiniteNumber = fav.type.toFiniteNumber;

describe('fav.type.toFiniteNumber', function() {

  it('Should return value as it is when value is a finite number', function() {
    expect(toFiniteNumber(0)).to.equal(0);
    expect(toFiniteNumber(1)).to.equal(1);
    expect(toFiniteNumber(-1)).to.equal(-1);
    expect(toFiniteNumber(123456789)).to.equal(123456789);
    expect(toFiniteNumber(-123456789)).to.equal(-123456789);
    expect(toFiniteNumber(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    expect(toFiniteNumber(-Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
    expect(toFiniteNumber(0.1234)).to.equal(0.1234);
    expect(toFiniteNumber(-0.1234)).to.equal(-0.1234);
    expect(toFiniteNumber(12345.6789)).to.equal(12345.6789);
    expect(toFiniteNumber(-12345.6789)).to.equal(-12345.6789);
    expect(toFiniteNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    expect(toFiniteNumber(-Number.MIN_VALUE)).to.equal(-Number.MIN_VALUE);
  });

  it('Should return a finite number when value is a numeric string',
  function() {
    expect(toFiniteNumber('0')).to.equal(0);
    expect(toFiniteNumber('1')).to.equal(1);
    expect(toFiniteNumber('-1')).to.equal(-1);
    expect(toFiniteNumber('123456789')).to.equal(123456789);
    expect(toFiniteNumber('-123456789')).to.equal(-123456789);
    expect(toFiniteNumber(String(Number.MAX_VALUE)))
      .to.equal(Number.MAX_VALUE);
    expect(toFiniteNumber(String(-Number.MAX_VALUE)))
      .to.equal(-Number.MAX_VALUE);
    expect(toFiniteNumber('0.1234')).to.equal(0.1234);
    expect(toFiniteNumber('-0.1234')).to.equal(-0.1234);
    expect(toFiniteNumber('12345.6789')).to.equal(12345.6789);
    expect(toFiniteNumber('-12345.6789')).to.equal(-12345.6789);
    expect(toFiniteNumber(String(Number.MIN_VALUE)))
      .to.equal(Number.MIN_VALUE);
    expect(toFiniteNumber(String(-Number.MIN_VALUE)))
      .to.equal(-Number.MIN_VALUE);
  });

  it('Should return NaN when value is a number but not finite', function() {
    expect(toFiniteNumber(NaN)).to.be.NaN;
    expect(toFiniteNumber(Number.POSITIVE_INFINITY)).to.be.NaN;
    expect(toFiniteNumber(Number.NEGATIVE_INFINITY)).to.be.NaN;
  });

  it('Should return NaN when value is a string but not numeric', function() {
    expect(toFiniteNumber('')).to.be.NaN;
    expect(toFiniteNumber('abc')).to.be.NaN;
    expect(toFiniteNumber('１２３４５')).to.be.NaN;
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toFiniteNumber(undefined)).to.be.NaN;
    expect(toFiniteNumber(null)).to.be.NaN;
    expect(toFiniteNumber(true)).to.be.NaN;
    expect(toFiniteNumber(false)).to.be.NaN;
    expect(toFiniteNumber([])).to.be.NaN;
    expect(toFiniteNumber([1,2,3])).to.be.NaN;
    expect(toFiniteNumber({})).to.be.NaN;
    expect(toFiniteNumber({ a: 0 })).to.be.NaN;
    expect(toFiniteNumber(/1/g)).to.be.NaN;
    expect(toFiniteNumber(new RegExp('1', 'g'))).to.be.NaN;
    expect(toFiniteNumber(function() {})).to.be.NaN;
    expect(toFiniteNumber(new Date())).to.be.NaN;
    expect(toFiniteNumber(new Error())).to.be.NaN;

    if (typeof Symbol === 'function') {
      expect(toFiniteNumber(Symbol(123))).to.be.NaN;
    }
  });

  it('Should return 1st arg number when 2nd arg is specified but 1st arg is' +
  ' valid', function() {
    expect(toFiniteNumber(0, 99.99)).to.equal(0);
    expect(toFiniteNumber(1.23)).to.equal(1.23);
    expect(toFiniteNumber(-0.88)).to.equal(-0.88);
  });

  it('Should return 2nd arg when 1st arg is valid and 2nd arg is specified',
  function() {
    expect(toFiniteNumber(undefined, 9.99)).to.equal(9.99);
    expect(toFiniteNumber(null, 9.99)).to.equal(9.99);
    expect(toFiniteNumber('', 9.99)).to.equal(9.99);
    expect(toFiniteNumber(NaN, 9.99)).to.equal(9.99);
    expect(toFiniteNumber(Infinity, 9.99)).to.equal(9.99);
    expect(toFiniteNumber('ABC', 9.99)).to.equal(9.99);
  });
});

})();
(function(){
'use strict';


var expect = chai.expect;


var toInteger = fav.type.toInteger;

describe('fav.type.toInteger', function() {

  it('Should return an integer when value is an integer', function() {
    expect(toInteger(0)).to.equal(0);
    expect(toInteger(1)).to.equal(1);
    expect(toInteger(-1)).to.equal(-1);
    expect(toInteger(1234567890)).to.equal(1234567890);
    expect(toInteger(-1234567890)).to.equal(-1234567890);
    expect(toInteger(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    expect(toInteger(-Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
  });

  it('Should return an integer when value is a finite number', function() {
    expect(toInteger(0.1234)).to.equal(0);
    expect(toInteger(-0.1234)).to.equal(0);
    expect(toInteger(12345.67890)).to.equal(12345);
    expect(toInteger(-12345.67890)).to.equal(-12345);
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    expect(toInteger(-Number.MIN_VALUE)).to.equal(0);
  });

  it('Should return NaN when value is not a finite number', function() {
    expect(toInteger(NaN)).to.be.NaN;
    expect(toInteger(Number.POSITIVE_INFINITY)).to.be.NaN;
    expect(toInteger(Number.NEGATIVE_INFINITY)).to.be.NaN;
  });

  it('Should return an integer when value is a numeric string', function() {
    expect(toInteger('0')).to.equal(0);
    expect(toInteger('1')).to.equal(1);
    expect(toInteger('-1')).to.equal(-1);
    expect(toInteger('1234567890')).to.equal(1234567890);
    expect(toInteger('-1234567890')).to.equal(-1234567890);
    expect(toInteger(String(Number.MAX_VALUE))).to.equal(Number.MAX_VALUE);
    expect(toInteger(String(-Number.MAX_VALUE))).to.equal(-Number.MAX_VALUE);
    expect(toInteger('0.1234')).to.equal(0);
    expect(toInteger('-0.1234')).to.equal(0);
    expect(toInteger('12345.67890')).to.equal(12345);
    expect(toInteger('-12345.67890')).to.equal(-12345);
    expect(toInteger(String(Number.MIN_VALUE))).to.equal(0);
    expect(toInteger(String(-Number.MIN_VALUE))).to.equal(0);
  });

  it('Should return NaN when value is a non-numeric string', function() {
    expect(toInteger('')).to.be.NaN;
    expect(toInteger('abc')).to.be.NaN;
    expect(toInteger('１２３４５')).to.be.NaN;
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toInteger(undefined)).to.be.NaN;
    expect(toInteger(null)).to.be.NaN;
    expect(toInteger(true)).to.be.NaN;
    expect(toInteger(false)).to.be.NaN;
    expect(toInteger([])).to.be.NaN;
    expect(toInteger([1,2,3])).to.be.NaN;
    expect(toInteger({})).to.be.NaN;
    expect(toInteger({ a: 0 })).to.be.NaN;
    expect(toInteger(/1/g)).to.be.NaN;
    expect(toInteger(new RegExp('a', 'g'))).to.be.NaN;
    expect(toInteger(function() {})).to.be.NaN;
    expect(toInteger(new Date())).to.be.NaN;
    expect(toInteger(new Error())).to.be.NaN;

    if (typeof Symbol === 'function') {
      expect(toInteger(Symbol(123))).to.be.NaN;
    }
  });

  it('Should return 1st arg integer when 2nd arg is specified but 1st arg' +
  'is\n\tvalid', function() {
    expect(toInteger(0), 999).to.equal(0);
    expect(toInteger(123), 999).to.equal(123);
    expect(toInteger(-123), 999).to.equal(-123);
  });

  it('Should return 2nd arg when 1st arg is invalid and 2nd arg is specified',
  function() {
    expect(toInteger(undefined, 999)).to.equal(999);
    expect(toInteger(null, 999)).to.equal(999);
    expect(toInteger('', 999)).to.equal(999);
    expect(toInteger(NaN, 999)).to.equal(999);
    expect(toInteger(Infinity, 999)).to.equal(999);
    expect(toInteger('ABC', 999)).to.equal(999);
  });
});


})();
(function(){
'use strict';

function isPhantomJs() {
  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;
    if (ua.PHANTOMJS) {
      return true;
    }
  }
  return false;
}

if (typeof window !== 'undefined') {
  window.isPhantomJs = isPhantomJs;
} else if (typeof module !== 'undefined') {
  module.exports.isPhantomJs = isPhantomJs;
}

})();
