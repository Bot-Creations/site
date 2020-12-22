function AlertInfo(content) {
    return (
        <div className='alert alert-primary' role='alert'>
            { content.children}
        </div>
    );
};

function AlertWarn(content) {
    return (
        <div className='alert alert-warning' role='alert'>
            { content.children}
        </div>
    );
};

function AlertError(content) {
    return (
        <div className='alert alert-danger' role='alert'>
            { content.children}
        </div>
    );
};

function AlertSuccess(content) {
    return (
        <div className='alert alert-success' role='alert'>
            { content.children}
        </div>
    );
};

export default {
    AlertInfo,
    AlertError,
    AlertWarn,
    AlertSuccess
}