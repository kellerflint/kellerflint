$.getJSON("posts/posts.json", function (data) {
    $.each(data, function (index, item) {
        let article = $("<div></div>");
        article.addClass("article");

        let title = $("<h2></h2>");
        title.text(item.title);
        console.log(title);

        // load refreshes it? but doesn't work if it goes after article.load either.
        article.append(title);
        article.load(item.source);
        $(".content-div").append(article);
    });
});

