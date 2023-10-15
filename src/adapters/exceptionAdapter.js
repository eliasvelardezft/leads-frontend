const ExceptionMapper = (errorContext, errorDetail) => {
    const message = {
        'entity_already_exists': ' already exists!',
        'entity_not_found': ' not found!',
    }
    const context = errorContext ? errorContext : 'entity';
    return message[errorDetail] ? context + message[errorDetail] : errorDetail;
}


const ExceptionAdapter = (context, error) => {
    const { response } = error;
    const { data } = response;
    const { detail } = data;
    return ExceptionMapper(context, detail);
}

export default ExceptionAdapter;
