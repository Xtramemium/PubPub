module.exports = function (menu) {
    return {
        id: menu.id,
        title: menu.title,
        weight: menu.weight,
        imageUrl: menu.image,
        content: menu.content,
        publishedAt: menu.createdAt,
    }
}