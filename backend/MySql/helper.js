function getOffSet(currentPage = 1, listPerPage) {
    return (currentPage - 1) * [listPerPage]
}

function emptyRows(rows) {
    if (!rows) {
        return [];
    }
    return rows
}

module.exports = {
    getOffSet,
    emptyRows
}