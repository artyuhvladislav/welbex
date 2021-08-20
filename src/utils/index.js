export const sort = (direction, sortFiled, data, setData) => {
  const sortedData = [...data].sort((a, b) => {
    switch (direction) {
      case "up": {
        return a[sortFiled] > b[sortFiled] ? 1 : -1;
      }
      case "down": {
        return a[sortFiled] < b[sortFiled] ? 1 : -1;
      }
      default: {
        return;
      }
    }
  });
  setData(sortedData);
};

export const filter = ({ column, option, value }, data, setData) => {
    
  const filteredData = data.filter((item) => {
    switch (option) {
      case "=": {
        return item[column] === Number(value);
      }
      case "contain": {
        return item[column]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      }
      case ">": {
        return item[column] > Number(value);
      }
      case "<": {
        return item[column] < Number(value);
      }
      default: {
        return;
      }
    }
  });
  setData(filteredData);
};
