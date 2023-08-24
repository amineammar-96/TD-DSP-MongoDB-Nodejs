const Article = require('../models/article');

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching' });
  }
};


exports.deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.deleteOne({ _id: req.params.id });
    
    if (deletedArticle.deletedCount === 0) {
      return res.status(404).json({ message: 'Article not found' });
    }
    
    res.json({ message: 'Article deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting' });
  }
};

exports.updateArticle = async (req, res) => {
    try {
      const updatedArticle = await Article.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      
      if (updatedArticle.nModified === 0) {
        return res.status(404).json({ message: 'Article not found' });
      }
      
      res.json({ message: 'Article updated' });
    } catch (err) {
      res.status(500).json({ message: 'Error updating' });
    }
  };
