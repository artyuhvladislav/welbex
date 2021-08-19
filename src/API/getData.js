import axios from "axios";

export const getData = async (currentPage = 1, limit = 3) => {
  try {
    const url = `/data?_page=${currentPage}&_limit=${limit}`;
    const { data, headers } = await axios.get(url);

    // get totalCount of pages
    const totalCount = + headers['x-total-count'];

    return [data, totalCount];
  } catch (e) {
    alert("Can not get data from server");
    console.error(e);
  }
};

