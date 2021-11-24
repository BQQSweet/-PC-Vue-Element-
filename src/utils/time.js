function formatTime(s) {
    const sec=Math.floor(s)
    const minutes = Math.floor(sec / 60)
    const seconds = sec - minutes * 60
    const t=seconds<10?'0':''
    return `${minutes}:${t}${seconds}`
}
export default formatTime