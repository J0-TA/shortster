# Shortster

Solution to Junior Full Stack Web Developer application.

## Installation and Set up

-Node.js should be installed. Get Node.js [here](https://nodejs.org/en/download/).\
-Navigate to a directory of your choice using a CLI and run the following commands in the order:

```
git clone https://github.com/chidieberejoel/shortster.git
cd shortster
```
## Run the application
Open the [.env](.env) file and replace the "DB_URL" variable with your mongodb URI string. [Learn more](https://docs.mongodb.com/guides/server/drivers/) \
Then in your CLI, run the following commands in the order:

```
npm install
npm start
```
Then load <http://localhost:4000/> in your browser to access the service. \
You should receive a success response if you successfully completed all the above steps.

## Guidelines
There is no frontend for this service as it is merely APIs so you would need Postman to access the endpoints. Read more about postman [here](https://learning.postman.com/docs/getting-started/introduction/).

There are four endpoints for this service: \
POST - "/" (To create a new shortcode) \
GET - "/" ("To visit index page") \
GET - "/:shortcode" (To redirect shortcode to its URL) \
GET - "/:shortcode/stats" (To get stats of a shortcode) \
\
Before you run the POST request to create a new shortcode, ensure there is a url and shortcode (optional) sent with the request body.

### Additional Information
To test the endpoints, kindly quit the running server and in your CLI run the following command:
```
npm test
```