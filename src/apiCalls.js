export const fetchArticles = () => {
    return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zoU0zXyA0t1N77y3WG5YTE3BGx1cxRwh')
        .then(response => response.json())
        .then(resp => resp)
}
