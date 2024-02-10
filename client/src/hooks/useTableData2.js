import { useEffect, useState } from "react";

const useTableData2 = (func, table) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            const Data = await func(table);
            setData(Data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, [func, table]);

    return data;
}

export default useTableData2;