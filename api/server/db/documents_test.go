package db

import (
	"log"

	"testing"
	"github.com/stretchr/testify/assert"
)

// Test CreateDocument
func TestCreateDocument(t *testing.T) {
	assert := assert.New(t)

	db := new(DBMongo)

	doc := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	assert.Equal(doc.comment, "front deprecated", "check comment value")
	assert.Equal(doc.date, "2020/10/16", "check date value")
	assert.Equal(doc.title, "update front", "check front value")
}

// TestInsertDocument
func TestInsertDocument(t *testing.T) {
	assert := assert.New(t)

	db := new(DBMongo)

	doc := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	err := db.InsertOnDocument("ToDo", doc)
	assert.EqualError(err, "Client not setup, use 'SetupMongoClient' function before", "test create data base who exist")

	db.SetupMongoClient()
	db.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})
	err = db.InsertOnDocument("ToDo", doc)
	db.Disconnect()

	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}
	assert.Nil(err, "insert valid document")
}

// TestInsertManyDocuments
func TestInsertManyDocuments(t *testing.T) {
	assert := assert.New(t)

	db := new(DBMongo)
	db.SetupMongoClient()
	db.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})

	var docs []Document
	doc := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	doc2 := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	doc3 := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	docs = append(docs, doc, doc2, doc3)
	err := db.InsertManyDocuments(docs, "ToDo")
	db.Disconnect()
	
	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}

	assert.Nil(err, "Insert many documents in mongodb collection with no error")
}

// Test Remove document
func TestRemoveDocument(t *testing.T) {
	assert := assert.New(t)

	db := new(DBMongo)
	err := db.RemoveDocument("title", "ToDo")
	assert.EqualError(err, "Client not setup, use 'SetupMongoClient' function before", "test create data base who exist")

	db.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})
	doc := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	err = db.InsertOnDocument("ToDo", doc)
	err = db.RemoveDocument("update front", "ToDo")
	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}
	assert.Nil(err, "test remove document exist in data base");
}

// Test Get document with title
func TestGetDocumentWText(t *testing.T) {
	assert := assert.New(t)

	db := new(DBMongo)
	_, err := db.GetDocumentWTitle("title", "ToDo")
	assert.EqualError(err, "Client not setup, use 'SetupMongoClient' function before", "test create data base who exist")

	db.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})
	doc := db.CreateDocument("update front", "front deprecated", "2020/10/16")
	err = db.InsertOnDocument("ToDo", doc)
	res, _ := db.GetDocumentWTitle("update front", "ToDo")
	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}
	assert.Equal(res.date, "2020/10/16", "test get document with title function")
	assert.Equal(res.comment, "front deprecated", "test get document with title function")
	assert.Equal(res.title, "update front", "test get document with title function")

	db.CreateDataBase("troll", []string{"ToDo", "InProgress", "Done"})
	doc = db.CreateDocument("update front", "front deprecated", "2020/10/16")
	err = db.InsertOnDocument("ToDo", doc)
	_, err = db.GetDocumentWTitle("update front", "ToDo")
	if err := execCleanDbScript(); err != nil {
		log.Println(err)
		return
	}

	assert.EqualError(err, "We don't find this Document in our mongo data base", "test document not exist in collection")
}

