load('config.js');
function execute(url) {
    if(url.slice(-1) === "/")
        url = url.slice(0, -1)
    let response = fetch(BASE_URL + url);
    console.log(BASE_URL + url)
    if (response.ok) {
        let doc = response.html();
        const data = [];
        doc.select(".l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: BASE_URL + e.select(".s2 a").first().attr("href"),
                description: e.select(".s3").first().text(),
                host: BASE_URL
            })
        });
        return Response.success(data)
    }
    return null;
}