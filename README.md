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
1.  Install directly on your machine(Mac os, Windows, Linux):
 - This approach will make the instance avaialble on `localhost:9200` by default.
2. Install a docker image and run the instance on docker.

**Docker Approach**

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.0

docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.15.0

```
* Be sure that elasticsearch is running before starting the app to avoid unnecessary error meesages.

**Start App**

```
npm run start
```

## Run Test

```
npm run tests
```

# POSTMAN COLLECTION LINK
  + [checkout the postman collection here](https://www.getpostman.com/collections/14737bff6504b49f374b)

# Things to Note

1. Run the aplication at the `Root` of the project

2. Call backs are used instead of the async/await approach

3. PM2 is used to start and stop the app.



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

# Get the long url by ID and redirect to the long Url

- This redirects to the corresponding longUrl
- Takes a urlId as `route param`.

_Sample GET request 

~~~~
UrlId: 'MyJgzxqFK'
~~~~

*Required Fields*
UrlId

_Sample Response
~~~~
status: Ok
redirects to the original longurl (http://www.facebook.com) as indicated above.
~~~~

`Please check the postman collection for the complete details`

**END**
