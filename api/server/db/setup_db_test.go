package db

import (
	"log"
	"os/exec"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSetupDB(t *testing.T) {
	assert := assert.New(t)

	dbMongo := new(DBMongo)
	dbMongo.SetupMongoClient()
	defer dbMongo.Disconnect()

	assert.NotNil(dbMongo)
}

func TestDisconnectDb(t *testing.T) {
	assert := assert.New(t)

	dbMongo := new(DBMongo)
	dbMongo.SetupMongoClient()
	dbMongo.Disconnect()

	assert.NotNil(dbMongo.client)
}

// test connection with an data base
func TestConnectionDataBase(t *testing.T) {
	assert := assert.New(t)

	dbMongo := new(DBMongo)
	dbMongo.SetupMongoClient()

	assert.Equal(dbMongo.ConnectTo("toDoList"), true, "Connect to existing data base")
	defer dbMongo.Disconnect()

	dbMongo2 := new(DBMongo)
	assert.Equal(dbMongo2.ConnectTo("rr"), false, "Connect to not existing data base")
}

// Test Creating data Base
func TestCreateDataBase(t *testing.T) {
	assert := assert.New(t)

	DBMongo := new(DBMongo)
	err := DBMongo.CreateDataBase("toDoList", []string{"ToDo", "InProgress", "Done"})
	assert.EqualError(err, "Client not setup, use 'SetupMongoClient' function before", "test create data before setup client conenction")

	DBMongo.SetupMongoClient()
	err = DBMongo.CreateDataBase("toDoList", []string{"ToDo", "InProgress", "Done"})
	assert.EqualError(err, "Data Base exist", "test create data base who exist")
	
	DBMongo.Disconnect()
	DBMongo.SetupMongoClient()
	err = DBMongo.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})
	assert.Nil(err, "test to create Data Base who's not exit")
	DBMongo.Disconnect()

	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}
}

// // Test insert document function
// func TestInsertDocument(t *testing.T) {
// 	assert := assert.New(t)

// 	// Test before connection
// 	// Test insert document in invalid db
// 	// Test success document insert
// }

func execCleanDbScript() error {
	addI := exec.Command("mongo", "--quiet --eval \"db = db.getSiblingDB('troll'); db.dropDatabase();\"")
	if err := addI.Run(); err != nil { return err }
	return nil
}
