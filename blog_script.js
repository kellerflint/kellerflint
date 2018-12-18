$.getJSON("posts/posts.json", function (data) {
    $.each(data, function (index, item) {
        let article = $("<div></div>");
        article.addClass("article");

        article.attr("data-title", item.title);
        article.attr("data-date", item.date);
        article.load(item.source, function () {
            let title = $("<h2></h2>");
            let date = $("<p></p>");
            title.text(this.getAttribute("data-title"));
            date.text(this.getAttribute("data-date"));
            this.prepend(date.get(0));
            this.prepend(title.get(0));
        });
        $(".content-div").append(article);
    });
});

function addTitle() {

}