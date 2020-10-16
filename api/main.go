package main

import (
	"log"
	"net/http"

	"github.com/ClementBolin/to-do-list/api/server/db"
	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "ping ok")
	})
	// Task
	r.GET("/task/:name", func(c *gin.Context) {
		project := c.Params.ByName("name")
		c.String(http.StatusOK, "project name : " + project)
	})
	// Projects

	return r
}

func main() {
	// Start server
	var dbMongo db.DBMongo

	dbMongo.SetupMongoClient()
	defer dbMongo.Disconnect()
	dbMongo.ConnectTo("toDoList")
	if err := dbMongo.RemoveDocument("update test", "toDdo"); err != nil {
		log.Fatalln(err)
	}

	return
	r := setupRouter()
	r.Run(":8080")
}
