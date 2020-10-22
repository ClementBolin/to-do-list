package main

import (
	"fmt"
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
	r.POST("/Project/add", func(c *gin.Context) {
		buffer := make([]byte, 1024)
		num, _ := c.Request.Body.Read(buffer)
		body := string(buffer[0:num])
		fmt.Println(body)

	})
	return r
}

func main() {
	// Start server

	r := setupRouter()

	r.Run(":8080")
}
