import axios from "axios";

const getData = async () => {
  try {
    const { data } = await axios.get("/data");
    console.log(data);
  } catch (e) {
    alert('Can not get data from server');
    console.error(e);
  }
};

export default getData;
