export const getNews = (state) => state.news.docs;
export const selectedCategory = (state) => state.news.category;
export const isNewsLoading = (state) => state.news.loading;
export const hasNewsError = (state) => state.news.error;
export const getSearch = (state) => state.news.searchQuery;
export const hasNextNewsPage = (state) => state.news.hasNextPage;
