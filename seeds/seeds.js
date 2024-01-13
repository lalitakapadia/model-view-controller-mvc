const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

      await Post.bulkCreate(postData, { include: { model: User } });

      await Comment.bulkCreate(commentData, { include: { model: User, Post } });

    process.exit(0);
}

seedDatabase();