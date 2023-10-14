const ExceptionAdapter = (error) => {
    const { response } = error;
    const { data } = response;
    const { detail } = data;
    return detail;
}

export default ExceptionAdapter;
