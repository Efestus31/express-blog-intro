
//creazione rotta per i post
exports.index = (req, res) => {
    const posts = require('../data/posts.json');
    res.json({ posts: posts, count: posts.length});
};