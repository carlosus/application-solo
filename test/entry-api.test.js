const test = QUnit.test;

QUnit.module('orderEntry api');

const entryApi = {
    save(entry) {
        // serialize to json
        const json = JSON.stringify(entry);
        // save to local storage
        localStorage.setItem('entry', json);
    }, 
    get() {
        // get from local storage
        const json = localStorage.getItem('entry');
        // deserialize to object
        const entry = JSON.parse(json);
        // return it
        return entry;
    }
};

test('round-trip applicant', (assert) => {
    //Arrange
    // Set up your parameters and expectations
    const entry = { name: 'tester' };

    //Act 
    // Call the function you're testing and set the result to a const
    entryApi.save(entry);
    const result = entryApi.get();

    //Assert
    assert.deepEqual(result, entry);
});