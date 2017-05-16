mocha.setup('bdd');
mocha.reporter('html');

describe('jquery.set-year.js', function() {
  var int_year;
  beforeEach(function() {
    int_year = $('<div>').setYear().text();
  });
  it('int_year should be above 2000', function() {
    assert(parseInt(int_year, 10) > 2000);
  });
  it('length of int_year should be 4', function() {
    assert(int_year.length == 4);
  });
});