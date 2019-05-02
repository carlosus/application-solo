function getOrderEntry(formData) {
    //convert data to variables
    const softnessNumber = parseInt(formData.get('softness'));

    //make our object literal
    const orderEntry = {
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        size: formData.get('size'),
        color: formData.get('color'),
        softnessNumber: softnessNumber,
        features: formData.getAll('features')
    };

    return orderEntry;
}

export default getOrderEntry;