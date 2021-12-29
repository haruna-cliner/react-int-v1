function appRequestError(e) {
    const {request} = e;
    let message = "Service unavailable, please try again.";
    try {
        const response = request.response ? JSON.parse(request.response) : {};
        message = response.message || message
    } catch (e) {
        console.log("Error", e);
    }
    return message;
}

const locales = ['en-US',
    'de-DE',
    'ru-RU',
    'hi-IN',
];

function formatNumber(number = 0) {
    // return String(n).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    return number.toLocaleString(locales[0], {
        minimumFractionDigits: 2,
    });
}

export default {
    appRequestError,
    formatNumber
}
