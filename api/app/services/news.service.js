const NewsRepository = require('../repository/news.repository');
const ApiError = require("../exceptions/ApiError");

class NewsService {

    getAllTasksFromCybersport = async () => {
        return await NewsRepository.getAllTasksFromCybersport();
    }
    createNews = async (newsData) => {
        return await NewsRepository.createNews(newsData);
    }

    deleteNewsById = async (newsId) => {

        const data = await NewsRepository.deleteNewsById(newsId);

        if (!data) {
            throw ApiError.NotFoundRequest(`Cannot delete news. Maybe news was not found`)
        }

        return `News with ${newsId}  was deleted successfully.`;
    }

    updateNewsById = async (newsId, newsData) => {
        return await NewsRepository.updateNewsById(newsId, newsData);
    }

    getNewsByTitle = async (newsTitle) => {
        return await NewsRepository.getNewsByTitle(newsTitle);
    }

    getAllNews = async (page, limit, category) => {
        return await NewsRepository.getAllNews(page, limit, category);
    }

    getNewsById = async (newsId) => {
        return await NewsRepository.getNewsById(newsId);
    }

    deleteAllNews = async () => {

        const news = await NewsRepository.deleteAllNews()

        if (news.deletedCount > 0) {
            return `${news.deletedCount} news were deleted successfully!`;
        }

        return `Nothing to delete`
    }

    getNewsByCategory = async (category, page) => {
        return await NewsRepository.getNewsByCategory(category, page);
    }

    getNewsFromGuardian = async () => {
        return await NewsRepository.getNewsFromGuardian();
    }
}

module.exports = new NewsService();