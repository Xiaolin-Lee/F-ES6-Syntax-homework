const parseData = (inputData) => {
    const {column: keys, data} = inputData;
    return data.map(dataItem => parseResultItem(dataItem, keys));
};

const parseResultItem = (dataItem, keys) => {
    const resultItem = {};
    for (let [index, value] of dataItem.entries()) {
        const {name: key} = keys[index];
        resultItem[key] = value;
    }
    return resultItem;
};

export { parseData };
