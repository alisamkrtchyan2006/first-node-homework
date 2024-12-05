function formatDate(date, format) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")


    return format
        .replace("YYYY", year)
        .replace("MM", month)
        .replace("DD", day)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds)
}


function isWeekend(date) {
    const day = date.getDay()
    return day === 0 || day === 6
}
function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2)
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
module.exports = { formatDate, isWeekend, daysBetween }