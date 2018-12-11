$.getJSON("posts/posts.json", function (data) {
    $.each(data, function (index, item) {
        let article = $("<div></div>");
        article.addClass("article");
        article.load(item.source);
        $(".content-div").append(article);
    });
});

