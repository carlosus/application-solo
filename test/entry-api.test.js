import orderEntryApi from '../src/entry-api.js';
const test = QUnit.test;

QUnit.module('orderEntry api');

test('round-trip applicant', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const entry = { name: 'tester' };

    //Act 
    // Call the function you're testing and set the result to a const
    orderEntryApi.save(entry);
    const result = orderEntryApi.get();

    //Assert
    assert.deepEqual(result, entry);
});