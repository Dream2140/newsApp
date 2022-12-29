const NewsRepository = require('../repository/news.repository');

class NewsService {

    getAllTasksFromCybersport = async () => {
        return await NewsRepository.getAllTasksFromCybersport();
    }
    createNews = async (newsData) => {
        return await NewsRepository.createNews(newsData);
    }
}

module.exports = new NewsService();