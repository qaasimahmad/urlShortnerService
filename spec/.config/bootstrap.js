const chai           = require( 'chai' )

global.expect
  = chai.expect;

global.resolveUitPath
  = require( '../.tools/resolveUitPathWithName' );