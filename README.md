### FRONT FOR THE MARKET SCREENER APP

---

#### BACKLOG:

-   [] USE GETTERS FOR ASSET STORE EVERYWHERE INSTEAD OF ACCESING THE FIELDS!!!!!!!!!!!!!!!

##### News screen

-   [x] fix bug where the oldest/last element is cut on the bottom of the screen in the list and in the content on the news screen (need to double check later, but the solution is add h-screen to parent and padding to bottom in component)

##### Browse screen

-   [] in the backend, the logos need to stay locally in a folder like 'resources/static/logos/stocks/tesla.png', and in data send in format 'AssetListElementProps' the urls needs to be sth like that `"logoUrl": "http://localhost:8080/logos/stocks/tesla.png"`. Then when component like `<img :src="asset.logoUrl" alt="Tesla">` is placed, it automatically sends one more request to obtain the picture from the backend, without doing additional steps. No need to write the frontend request or a backend endpoint. Both the request and answer are served automatically in the background.
-   [] on the listings of assets on the browse screen, the plan in to send a request **EVERY SECOND** to update the prices in real time, and every price gets compared to the previous one, and blinks **red** on change to smaller, and **green** on a change to bigger price. Ambitious but will be worth it.

##### Simulation prep screen

-   [] create validations for all parameter inputs
-   [] aggreagate all the input information for easy-iteration-like validation and processing, also remember to change the state of the simulation
