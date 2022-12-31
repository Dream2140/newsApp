const userRepository = require('../repository/user.repository');

class UserService {

    getAllTasksFromCybersport = async () => {
        return await NewsRepository.getAllTasksFromCybersport();
    }
    createNews = async (newsData) => {
        return await NewsRepository.createNews(newsData);
    }

    deleteNewsById = async (newsId) => {
        return await NewsRepository.deleteNewsById(newsId);
    }

    updateNewsById = async (newsId, newsData) => {
        return await NewsRepository.updateNewsById(newsId, newsData);
    }

    getNewsByTitle = async (newsTitle) => {
        return await NewsRepository.getNewsByTitle(newsTitle);
    }

    getAllNews = async (page, limit) => {
        return await NewsRepository.getAllNews(page, limit);
    }

    getNewsById = async (newsId) => {
        return await NewsRepository.getNewsById(newsId);
    }

    deleteAllNews = async (newsId) => {
        return await NewsRepository.deleteAllNews();
    }
}

module.exports = new UserService();