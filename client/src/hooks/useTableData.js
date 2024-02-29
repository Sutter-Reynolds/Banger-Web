import { useEffect, useState } from "react";

const useTableData = (func, table, val) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const Data = await func(table, val);
            setData(Data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, [func, table, val]);

    return data;
}

export default useTableData;