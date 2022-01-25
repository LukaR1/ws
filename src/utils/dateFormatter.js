const pad = (num) => num < 10 ? `0${num}` : num.toString();

const isValid = (format) => true;

export default function dateFormatter(format = 'Y-m-d H:i:s') {
    if (!isValid(format)) {
        throw new Error('format is invalid');
    }
    return function (date) {
        if (!date || !(date instanceof Date)) {
            throw new Error('date must be instance of Date object');
        }
        if (isNaN(date)) {
            throw new Error('date must be valid DAte object');
        }
        return format
            .replace('Y', date.getFullYear().toString())
            .replace('m', pad(date.getMonth() + 1))
            .replace('d', pad(date.getDate()))
            .replace('H', pad(date.getHours()))
            .replace('i', pad(date.getMinutes()))
            .replace('s', pad(date.getSeconds()));
    }
}