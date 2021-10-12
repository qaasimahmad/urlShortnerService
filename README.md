# Welcome

Welcome to __UrlShortnerService__ break down

*Technologies*

- Nodejs(version > 8.0)

- Mocha

- Chai

- ExpressJs(Web Server)

- DB(Elasticsearch)

- eslint

*File Structure*

- APP content in app directory

* app

    * config

        * config

    * controllers

    * libraries

    * middleware-> Field validation scripts
    
    * Schema(Defines fields to be validated)

    * routes(Defines all endpoints to Curl in this App)

    * Dockerfile

    * services

    - index.js(Entry Point for this App)

## To run the app manually

**Install all dependencies**

```
npm install
```

**Install ElasticSearch**
* Install directly on your machine(Mac os, Windows, Linux):
 - This approach will make the instance avaialble on `localhost:9200` by default.


**Start App**

```
npm run start
```

**Docker Approach**

- install docker on your machine. Mac users could install `Docker Desktop` for ease of use and management.

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.0

docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.15.0

```
* Be sure that elasticsearch is running before starting the app to avoid unnecessary error meesages.
* No need to do `npm install` if you will be using the `docker-compose` to run the app.

# Starting the app via docker
```
docker-compose build : To build the current state of the app.
docker-compose run : To run the app.
```


## Run Test

```
npm run tests
```

## .env file

* Add these to the .env file

```
export ELASTIC_URL=http://localhost:9200
export PORT=2300
export BASE_URL=http://localhost:2300/api

run source .env on your shell to make those variables available for use on your machine
```

# POSTMAN COLLECTION LINK
  + [checkout the postman collection here](https://www.getpostman.com/collections/fcd16f499e0541b6432c)

===============================================================================================================
# Routes
Name        | EndPoint(s)                       
---------:  | :--------------------------------                    
urlShortner | /api/shorten (POST)             
urlShortner | /api/:urlId  (GET)


# Shorten Url

- This returns the shortened Url and a message

_Sample POST request to create New Client

~~~~
longUrl: 'http://www.facebook.com'
~~~~

*Required Fields*
longUrl

_Sample Response
~~~~
{
    "err": false,
    "result": {
        "shortUrl": "http://localhost:2300/api/MyJgzxqFK",
        "message": "shortened Url Created Successfully"
    }
}
~~~~

# Get the corresponding longUrl by ID and redirect to it
- This redirects to the corresponding longUrl
- Takes a urlId as `route param`.

_Sample GET request 

~~~~
urlId: 'MyJgzxqFK'
~~~~

*Required Fields*
urlId

_Sample Response
~~~~
status: Ok
redirects to the original longurl (http://www.facebook.com) as indicated above.
~~~~

`Please check the postman collection for the complete details`

**END**
