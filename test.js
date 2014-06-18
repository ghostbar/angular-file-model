/* global describe,beforeEach,it,inject,chai */

'use strict';

describe('angular-file-model directive', function () {
  var $compile, $rootScope;
  var expect = chai.expect;

  beforeEach(module('angular-file-model'));

  beforeEach(inject(
    ['$compile', '$rootScope', function ($c, $r) {
      $compile = $c;
      $rootScope = $r;
    }]
  ));

  it('', function () {
    $rootScope.fileModel = '';
    var element = $compile('<input type=\'file\' file-upload=\'fileModel\'>')
    ($rootScope);
    $rootScope.$digest();
    console.log($rootScope.fileModel);
  });
});
