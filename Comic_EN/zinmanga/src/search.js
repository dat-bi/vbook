load('config.js');
function execute(key, page) {
    if (!page) page = 1;
    let response = fetch(BASE_URL + '/?s=' + key + "&post_type=wp-manga");

    if (response.ok) {
        let doc = response.html();
        const data = [];

		doc.select(".c-tabs-item__content").forEach(e => {
            data.push({
                name: e.select(".h4 a").first().text(),
                link: e.select(".h4 a").first().attr("href"),
                cover: e.select(".c-image-hover img").first().attr("data-src"),
                description: e.select(".total_votes").first().text(),
                host: BASE_URL
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data,next)
    }
    return null;
}