export const CONSTANTS = {
  NO_RESPONSE: "",
  VIEWED: "VIEWED",
  ACCEPTED: "ACCEPTED",
  MORE_INFORMATION: "MORE_INFORMATION",
  INTERVIEW: "INTERVIEW",
  EMPLOYEE_REJECTED: "EMPLOYEE_REJECTED",
  EMPLOYER_REJECTED: "EMPLOYER_REJECTED",
};

const filterData = (arr, filter) => {
  const newArr = arr.filter((element) => filter === element.STANCE);
  return newArr;
};

export const formatJobData = (googleData) => {
  const noResponse = filterData(googleData, CONSTANTS.NO_RESPONSE);
  const accepted = filterData(googleData, CONSTANTS.ACCEPTED);
  const viewed = filterData(googleData, CONSTANTS.VIEWED);
  const moreInfo = filterData(googleData, CONSTANTS.MORE_INFORMATION);
  const interview = filterData(googleData, CONSTANTS.INTERVIEW);
  const employeeRejected = filterData(googleData, CONSTANTS.EMPLOYEE_REJECTED);
  const employerRejected = filterData(googleData, CONSTANTS.EMPLOYER_REJECTED);

  return {
    name: "Job Applications",
    children: [
      {
        name: "No Response",
        children: noResponse,
        size: noResponse.length,
      },
      {
        name: "Accepted",
        children: accepted,
        size: accepted.length,
      },
      {
        name: "viewed",
        children: viewed,
        size: viewed.length,
      },
      {
        name: "employee rejected",
        children: employeeRejected,
        size: employeeRejected.length,
      },
      {
        name: "employer rejected",
        children: employerRejected,
        size: employerRejected.length,
      },
      {
        name: "more information requested",
        children: moreInfo,
        size: moreInfo.length,
      },
      {
        name: "Interview Scheduled",
        children: interview,
        size: interview.length,
      },
    ],
  };
};
