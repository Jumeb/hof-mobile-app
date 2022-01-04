const searchPop = (text, data, setData, type, id) => {
  let filteredData = data.filter((p) => {
    if (p[id][type] === undefined) {
      return null;
    }
    let _services = `${p[id][type].toLowerCase()}`;
    let _text = text.toLowerCase();
    return _services.indexOf(_text) > -1;
  });
  setData(filteredData);
};

export default searchPop;
