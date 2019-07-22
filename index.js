function encode(url, obj = null) {
    let response = '';
    let data;

    if (obj && typeof obj !== 'object') return console.error('Second parameter is must object.');

    if (obj) response = url, data = obj;
    else data = url;

    Object.keys(data).forEach(function(key, i) {
        // When it first
        if (i === 0) {
            response += '?';
            response += key + '=' + encodeURIComponent(data[key]);
        } else {
            response += '&' + key + '=' + encodeURIComponent(data[key]);       
        }
    })

    return response
};

function decode(url) {
    let response = {};

    const data = url.split('?')[1] || url.split('?')[0];

    const items = data.split('&');

    items.forEach(function(item) {
        const key = item.split('=')[0];
        const content = item.split('=')[1];

        response[key] = decodeURIComponent(content);
    });

    return response;
};

module.exports = {
    encode: encode,
    decode: decode,
};
