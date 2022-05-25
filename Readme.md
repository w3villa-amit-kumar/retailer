# Retailer

A NodeJS app with express to calculate the rewards generated against the amount paid.

## Installation

The app requires [Node.js](https://nodejs.org/) v14+ to run.
Install the dependencies and devDependencies and start the server.

```sh
cd retailer
npm i
npm start
```

### Docker setup

retailer requires [Docker](https://www.docker.com/).

```sh
docker build -t <name> .
docker run -p 3000:8000 <name>
```

### Testing

```sh
npm run test
```

### Sample Request Response formats,

#### Request:

    URL: http://localhost:8000/reward
    METHOD: POST
    Body: {amount: "your amount here"}

#### Response:

    success: bool,
    msg: String,
    code: int,
    data: int,

## How to invoke your API by any client

- Use the [postman](https://www.postman.com/) application
- Create a new request.
- Select the method `POST`
- Enter the request URL `http://localhost:8000/reward`
- Select the Body and the Data type in `JSON` format.
- Write the request params in JSON (Ex: `{"amount": 120}`) and click Send button.
  `

## Data set

![](src/config/images/Screenshot%20from%202022-05-25%2017-28-46.png)
![](src/config/images/Screenshot%20from%202022-05-25%2017-29-56.png)

## Results

![](src/config/images/Screenshot%20from%202022-05-25%2017-31-14.png)
![](src/config/images/Screenshot%20from%202022-05-25%2017-31-50.png)
![](src/config/images/Screenshot%20from%202022-05-25%2017-32-23.png)![](src/config/images/Screenshot%20from%202022-05-25%2017-32-51.png)
