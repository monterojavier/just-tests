var expect  = require('chai').expect;
var wrappingRequired = require('../problems/santa-1')

it('is true', () => {
  expect(1 + 1).to.equal(2)
})

describe('wrappingRequired', () => {
  it ('is a function', () => {
    expect(typeof wrappingRequired).to.equal('function')
  })

  it ('should determine amount of required paper', () => {
    expect(wrappingRequired('./presents.txt')).to.equal(1606483)
  })
})
