const apiConfig = {
      baseUrl: "https://api.themoviedb.org/3/",
      apiKey: "?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc",
      originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
      w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;