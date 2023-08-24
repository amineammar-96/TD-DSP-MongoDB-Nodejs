const mongoose = require('mongoose');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/myarticlesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});


const articlesData = [
    {
      title: 'Article 1 Title',
      price: 29.99,
      category: 'Technology',
      author: 'John Doe',
      releaseDate: new Date('2023-08-24'),
      description: 'This is the description for Article 1.'
    },
    {
      title: 'Article 2 Title',
      price: 19.99,
      category: 'Fashion',
      author: 'Jane Smith',
      releaseDate: new Date('2023-08-25'),
      description: 'This is the description for Article 2.'
    },
    {
        title: 'Article 3 Title',
        price: 19.99,
        category: 'Hightech',
        author: 'Eduardo Kante',
        releaseDate: new Date('2021-03-13'),
        description: 'This is the description for Article 3.'
      }
  ];
  

  async function seedDatabase() {
    try {
      for (const articleData of articlesData) {
        const article = new Article(articleData);
        await article.save();
        console.log(`Article '${article.title}' saved`);
      }
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      mongoose.disconnect();
    }
  }  
  seedDatabase();
  