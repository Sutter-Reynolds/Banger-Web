import { useEffect, useState } from "react";

const useTableData1 = (func) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const Data = await func();
            setData(Data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, [func]);

    return data;
}

export default useTableData1;