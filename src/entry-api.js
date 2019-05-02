const orderEntryApi = {
    save(orderEntry) {
        // create array with applicant
        const orderEntries = orderEntryApi.getAll();
        orderEntries.push(orderEntry);
        // serialize to json
        const json = JSON.stringify(orderEntries);
        // save to local storage
        localStorage.setItem('orderEntries', json);
    }, 
    get() {
        // use getAll to get orderEntries
        const orderEntries = orderEntryApi.getAll();
        // return it
        return orderEntries[0];

    },
    getAll() {
        // get from local storage
        const json = localStorage.getItem('orderEntries');
        // deserialize to object
        let orderEntries = JSON.parse(json);
        if(!orderEntries) {
            orderEntries = [];
        }
        return orderEntries;
    }
};

export default orderEntryApi;