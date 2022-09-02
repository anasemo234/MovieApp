const apiCongfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2b0ff7fb5247ceaf183dcd49092a2322',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiCongfig