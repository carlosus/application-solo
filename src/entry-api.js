const orderEntryApi = {
    storage: localStorage,
    save(orderEntry) {
        // create array with orderEntry. Get our orderEntry array
        const orderEntries = orderEntryApi.getAll();
        orderEntries.push(orderEntry);
        // add this entry to array
        // serialize to json
        const json = JSON.stringify(orderEntries);
        // save to local storage
        orderEntryApi.storage.setItem('orderEntries', json);
    }, 
    get() {
        // use getAll to get orderEntries
        const orderEntries = orderEntryApi.getAll();
        // return it
        return orderEntries[0];
    },
    getAll() {
        // get from local storage
        const json = orderEntryApi.storage.getItem('orderEntries');
        // deserialize to object
        let orderEntries = JSON.parse(json);
        if(!orderEntries) {
            orderEntries = [];
        }
        return orderEntries;
    }
};

export default orderEntryApi;