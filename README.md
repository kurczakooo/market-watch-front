### FRONT FOR THE MARKET SCREENER APP

---

#### BACKLOG:

##### News screen

-   [] fix bug where the oldest/last element is cut on the bottom of the screen in the list and in the content on the news screen

##### Browse screen

-   [] in the backend, the logos need to stay locally in a folder like 'resources/static/logos/stocks/tesla.png', and in data send in format 'AssetListElementProps' the urls needs to be sth like that `"logoUrl": "http://localhost:8080/logos/stocks/tesla.png"`. Then when component like `<img :src="asset.logoUrl" alt="Tesla">` is placed, it automatically sends one more request to obtain the picture from the backend, without doing additional steps. No need to write the frontend request or a backend endpoint. Both the request and answer are served automatically in the background.
