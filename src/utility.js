export const CONSTANTS = {
  NO_RESPONSE: "",
  VIEWED: "VIEWED",
  ACCEPTED: "ACCEPTED",
  MORE_INFORMATION: "MORE_INFORMATION",
  INTERVIEW: "INTERVIEW",
  EMPLOYEE_REJECTED: "EMPLOYEE_REJECTED",
  EMPLOYER_REJECTED: "EMPLOYER_REJECTED",
};

export const formatJobData = (googleData) => {
  return {
    name: "Job Applications",
    children: [
      {
        name: "No Response",
        children: [
          googleData.filter(
            (element) => CONSTANTS.NO_RESPONSE === element.STANCE
          ),
        ],
      },
      {
        name: "Accepted",
        children: [
          googleData.filter((element) => CONSTANTS.ACCEPTED === element.STANCE),
        ],
      },
      {
        name: "viewed",
        children: [
          googleData.filter((element) => {
            return CONSTANTS.VIEWED === element.STANCE ? element : null;
          }),
        ],
      },
      {
        name: "employee rejected",
        children: [
          googleData.filter((element) => {
            return CONSTANTS.EMPLOYEE_REJECTED === element.STANCE
              ? element
              : null;
          }),
        ],
      },
      {
        name: "employer rejected",
        children: [
          googleData.filter((element) => {
            return CONSTANTS.EMPLOYER_REJECTED === element.STANCE
              ? element
              : null;
          }),
        ],
      },
      {
        name: "more information requested",
        children: [
          googleData.filter((element) => {
            return CONSTANTS.MORE_INFORMATION === element.STANCE
              ? element
              : null;
          }),
        ],
      },
      {
        name: "Interview Scheduled",
        children: [
          googleData.filter((element) => {
            return CONSTANTS.INTERVIEW === element.STANCE ? element : null;
          }),
        ],
      },
    ],
  };
};
