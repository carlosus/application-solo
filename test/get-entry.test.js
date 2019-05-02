import getOrderEntry from '../src/order-entry.js';
const test = QUnit.test;

test('make object literal from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        firstName: 'Carlos',
        lastName: 'Us',
        size: 'og',
        color: 'orange',
        softnessNumber: 4,
        features: ['speakers', 'head-massager']
    };

    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('first-name', expected.firstName);
    formData.set('last-name', expected.lastName);
    formData.set('size', expected.size);
    formData.set('color', expected.color);
    formData.set('softness', '4');
    formData.set('features', expected.features[0]);
    formData.append('features', expected.features[1]);

     //Act 
    // Call the function you're testing and set the result to a const
    const orderEntry = getOrderEntry(formData);

    //Assert
    assert.deepEqual(orderEntry, expected);
});