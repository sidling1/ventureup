# Instructions to run locally

1. docker-compose up

2. docker run -d --name adminer -p 8080:8080 -e ADMINER_DEFAULT_SERVER=192.168.0.20 -e ADMINER_DEFAULT_USER=username -e ADMINER_DEFAULT_PASSWORD=password --network ventureup_backend_network adminer

[!] Bug:  Database Work Only Using Docker, Does not run on localhost => so using adminer



# APIs for fetching news
1.  NewsApi - https://newsapi.org
2.  Google News API - https://developers.google.com/custom-search/v1/overview
3.  NY Times API - https://developer.nytimes.com/apis

