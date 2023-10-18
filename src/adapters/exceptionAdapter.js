const ExceptionMapper = (errorDetail, errorStatus) => {
  const messages = {
    lead_does_not_exist: "Lead does not exist!",
    lead_already_enrolled_to_course: "Lead already enrolled to that course!",
    lead_already_exists: "Lead already exists!",
    enrollment_does_not_exist: "Enrollment does not exist!",
  };
  const genericMessages = {
    400: "Bad request!",
    404: "Not found!",
    500: "Internal server error!",
  };
  if (messages[errorDetail]) {
    return messages[errorDetail];
  } else if (genericMessages[errorStatus]) {
    return genericMessages[errorStatus];
  } else {
    return "Something went wrong!";
  }
};

const ExceptionAdapter = (error) => {
  const { response } = error;
  const { data } = response;
  const { detail } = data;
  return ExceptionMapper(detail, status);
};

export default ExceptionAdapter;
