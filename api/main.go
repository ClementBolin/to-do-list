package main

import (
	// "log"
	// "os"
	"net/http"

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
	// logError := log.New(os.Stderr, "", 0)
	// Start server
	r := setupRouter()

	r.Run(":8080")
}
