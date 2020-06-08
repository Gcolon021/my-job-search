import React, { useEffect } from "react";
import Tabletop from "tabletop";

// "https://docs.google.com/spreadsheets/d/1izAg7Iwy4fiHr11OACKke8Obq6vPdgMx99p2zPCXeq8/edit?usp=sharing"
const useTableTop = (url, formatter) => {
  const [response, setResponse] = React.useState([]);
  useEffect(() => {
    Tabletop.init({
      key: url,
      callback: (googleData) => {
        if (formatter) {
          setResponse(formatter(googleData));
        } else {
          setResponse(googleData);
        }
      },
      simpleSheet: true,
    });
  }, [url, formatter]);

  return response;
};

export default useTableTop;
