# Welcome

Welcome to __Money Acccounting Service__ break down

*Technologies*

- Nodejs(version > 8.0)

- Mocha

- Chai

- ExpressJs(Web Server)

- DB(In memory Store)

- eslint

*File Structure*

- APP content in app directory

* app

    * config

        * config

    * constants

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

**Start App**

```
npm start
```

## Run Test

```
npm run test
```

# POSTMAN COLLECTION
  + [checkout the postman collection here](https://www.getpostman.com/collections/14737bff6504b49f374b)

# Things to Note

1. No actual Database is used instead inMemory store was used

2. Run the aplication at the `Root` of the project

3. Call backs are used instead of the promises approach



===============================================================================================================
# Routes
Name        | EndPoint(s)                       
---------:  | :--------------------------------                    
user_account| /api/accountBalance              
user_account| /api/transactionHistory           
user_account| /api/accountDetails/:accountNumber`
user_account| /api/commitTransaction


# Check Balance

- This returns the current balance of the user

_Sample GET request to create New Client

~~~~
queryParam: accountNumber
?accountNumber=xxxxxxxxx
~~~~

*Required Fields*
accountNumber

_Sample Response
~~~~
{
    "err": false,
    "response": "operation successful",
    "data": {
        "currentAccountBalance": 900
    }
}
~~~~

`Please check the postman collection for the complete details`
**END**