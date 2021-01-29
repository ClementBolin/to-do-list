# To Do List

## Why

This project is a training project for a React JS test using hooks. The goal is to create a simple To Do List. The api was made in Node.JS and express.
You can also use this project to train yourself to develop your own API without worrying about developing the front application.

![](./assets/sample.gif)

## How To Run

first dowload the project with 
    ```git clone git@github.com:ClementBolin/to-do-list.git && cd to-do-list```
install dependencies :
    ```npm i --save && cd api && npm i --save```
the next step is to run API, for this go to ```api```folder with ```cd api && npm start```
and finally launch the front application with ```npm start```

### Run with docker

For run this project with docker ``` docker-compose up``` and open ```http://localhost:3000/```on your web browser

## API

For this small project I decided to develop my API in Node JS, express and as a database I decided to use MongoDB.

## How to develop your own API

First of all the API is a REST API the different routes are as follows:
your api must run on port 8080.

What is a Board Project? A Board Project is the first thing you see when you open the application.
**Board Project Routes:**
```
/boardProject/add ->  body = { name }
/boardProject/delete -> body = { name }
/boardProject/update -> body = { name, nameNew }
/boardProject/get -> body = {}
```

**Project Route:**
```
/project/add -> body = { name, tag }
/project/update -> body = { name, tag, nameNew }
/project/delete -> body = body = { name, tag }
/project/get -> body = {}
```

**Task Route:**
```
/task/add -> body = { name, id, tag, type }
/task/update -> body = { name, id, tag, type, nameNew, typeNew }
/task/delete -> body = { name, id, tag, type }
/task/get -> body = {}
```
