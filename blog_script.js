$.getJSON("posts/posts.json", function (data) {
    $.each(data, function (index, item) {
        let article = $("<div></div>");
        article.addClass("article");

        // load refreshes it? but doesn't work if it goes after article.load either.
        article.attr("data-title", item.title);
        article.load(item.source, function () {
            let title = $("<h2></h2>");
            title.text(this.getAttribute("data-title"));
            console.log(title);
            this.prepend(title);
        });
        $(".content-div").append(article);
    });
});

function addTitle() {

}