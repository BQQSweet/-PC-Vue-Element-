function numConvert(num) {
    if (num >= 10000) {
        num = Math.round(num / 1000) / 10 + 'W'
    } else if (num >= 1000) {
        num = Math.round(num / 100) / 10 + 'K'
    }
    return num
}

export default numConvert