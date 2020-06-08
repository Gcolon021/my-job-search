import React from "react";
import Tabletop from "tabletop";

function App() {
  const [excelData, setExcelData] = React.useState([]);

  const CONSTANTS = {
    NO_RESPONSE: "",
    VIEWED: "VIEWED",
    ACCEPTED: "ACCEPTED",
    MORE_INFORMATION: "MORE_INFORMATION",
    INTERVIEW: "INTERVIEW",
    EMPLOYEE_REJECTED: "EMPLOYEE_REJECTED",
    EMPLOYER_REJECTED: "EMPLOYER_REJECTED",
  };

  const formatData = (googleData) => {
    return {
      name: "Job Applications",
      children: [
        {
          name: "No Response",
          children: [
            googleData.filter((element) => {
              return CONSTANTS.NO_RESPONSE === element.STANCE ? element : null;
            }),
          ],
        },
        {
          name: "Accepted",
          children: [
            googleData.map((element) => {
              return CONSTANTS.ACCEPTED === element.STANCE ? element : null;
            }),
          ],
        },
        {
          name: "viewed",
          children: [
            googleData.map((element) => {
              return CONSTANTS.VIEWED === element.STANCE ? element : null;
            }),
          ],
        },
        {
          name: "employee rejected",
          children: [
            googleData.map((element) => {
              return CONSTANTS.EMPLOYEE_REJECTED === element.STANCE
                ? element
                : null;
            }),
          ],
        },
        {
          name: "employer rejected",
          children: [
            googleData.map((element) => {
              return CONSTANTS.EMPLOYER_REJECTED === element.STANCE
                ? element
                : null;
            }),
          ],
        },
        {
          name: "more information requested",
          children: [
            googleData.map((element) => {
              return CONSTANTS.MORE_INFORMATION === element.STANCE
                ? element
                : null;
            }),
          ],
        },
        {
          name: "Interview Scheduled",
          children: [
            googleData.map((element) => {
              return CONSTANTS.INTERVIEW === element.STANCE ? element : null;
            }),
          ],
        },
      ],
    };
  };

  React.useEffect(() => {
    Tabletop.init({
      key:
        "https://docs.google.com/spreadsheets/d/1izAg7Iwy4fiHr11OACKke8Obq6vPdgMx99p2zPCXeq8/edit?usp=sharing",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        console.log(formatData(googleData));
        console.log(googleData.map((ele) => {}));
        setExcelData(googleData);
      },
      simpleSheet: true,
    });
  }, []);

  return (
    <div>
      {excelData.map((ele, key) => {
        return ele.STANCE === CONSTANTS.NO_RESPONSE ? (
          <span key={key}>
            {ele.COMPANY_NAME}
            <br />
          </span>
        ) : null;
      })}
    </div>
  );
}

export default App;

// Spreadsheet key 2PACX-1vQASiB8n6uvnqlvkkU8VBQgBVW8hnpTnI_mf4hG98ujGMZVlx-IY7-qagFO5rZCbd4FHjxNRFKy9Tz4
