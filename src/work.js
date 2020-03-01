function myProvider(ctx) {
    const promise = axios.get('/some/url?page=' + ctx.currentPage + '&size=' + ctx.perPage)

    // Must return a promise that resolves to an array of items
    return promise.then(data => {
        // Pluck the array of items off our axios response
        const items = data.items
        // Must return an array of items or an empty array if an error occurred
        return items || []
    })
}