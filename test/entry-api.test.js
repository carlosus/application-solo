import orderEntryApi from '../src/entry-api.js';
const test = QUnit.test;

QUnit.module('orderEntry api');

test('round-trip applicant', (assert) => {
    localStorage.removeItem('orderEntries');

    //Arrange
    // Set up your parameters and expectations
    const orderEntry = { name: 'tester' };

    //Act 
    // Call the function you're testing and set the result to a const
    orderEntryApi.save(orderEntry);
    const result = orderEntryApi.get();

    //Assert
    assert.deepEqual(result, orderEntry);
});

test('no orderEntries in local storage returns empty array', (assert) => {
    localStorage.removeItem('orderEntries');
    const expected = [];

    const orderEntries = orderEntryApi.getAll();

    assert.deepEqual(orderEntries, expected);

});

test('two saves return array of two items', (assert) => {
    localStorage.removeItem('orderEntries');

    // arrange
    const orderEntry1 = { name: 'orderEntry1' };
    const orderEntry2 = { name: 'orderEntry2' };
    const expected = [orderEntry1, orderEntry2];

    orderEntryApi.save(orderEntry1);
    orderEntryApi.save(orderEntry2);
    // act
    const orderEntries = orderEntryApi.getAll();
    // assert
    assert.deepEqual(orderEntries, expected);
});