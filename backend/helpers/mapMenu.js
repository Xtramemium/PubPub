module.exports = function (menu) {
    return {
        id: menu.id,
        title: menu.title,
        imageUrl: menu.image,
        content: menu.content,
        publishedAt: menu.createdAt,
    }
}