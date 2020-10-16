package db

import (
	"errors"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Document struct {
	title 	string;
	comment string;
	date	string;
}

// CreateDocument : instance document
func (db *DBMongo) CreateDocument(title, comment, date string) Document {
	var docuement Document
	if len(title) > 180 || len(comment) > 320 || len(date) > 25 {
		return docuement
	}
	document := Document {
		title: title,
		comment: comment,
		date: date,
	}
	return document
}

// InsertOnDocument : Insert document in mongodb
func (db *DBMongo) InsertOnDocument(collection string, docuement Document) error {
	if db.client == nil {
		return errors.New("Client not setup, use 'SetupMongoClient' function before")
	}
	if checkDucplicateDocument(docuement, db, collection) == false {
		return errors.New("Document already exits in data base")
	}
	col := db.connect.Collection(collection)
	if col == nil {
		return errors.New("Collection not exists in data base")
	}
	_, err := col.InsertOne(db.ctx, bson.D{
		{"title", docuement.title},
		{"comment", docuement.comment},
		{"date", docuement.date},
	})
	if err != nil {
		return err
	}
	return nil
}

// InsertManyDocuments : insert many documents in mongodb
func (db *DBMongo) InsertManyDocuments(documents []Document, collection string) error {
	return nil
}

// RemoveDocument : Insert docuement in mongodb
func (db *DBMongo) RemoveDocument(key string, collection string) error {
	if db.client == nil {
		return errors.New("Client not setup, use 'SetupMongoClient' function before")
	}
	collec := db.connect.Collection(collection)
	if collec == nil {
		return errors.New("Collection not exists in data base")
	}
	_, err := collec.DeleteOne(db.ctx, bson.M{"title": key})
	if err != nil {
		return err
	}
	return nil
}

// GetDocumentWTitle : get document from mongodb collection
func (db *DBMongo) GetDocumentWTitle(collection string, title string) (Document, error) {
	var documents Document
	if db.client == nil {
		return documents, errors.New("Client not setup, use 'SetupMongoClient' function before")
	}

	var task bson.M;
	collec := db.connect.Collection(collection)
	if collec == nil {
		return documents, errors.New("Collection not exists in data base")
	}
	if err := collec.FindOne(db.ctx, bson.M{"title": title}).Decode(&task); err != nil {
		return documents, errors.New("We don't find this Document in our mongo data base")
	}
	documents = Document{
		title: task["title"].(string),
		comment: task["comment"].(string),
		date: task["date"].(string),
	}
	return documents, nil
}

// GetManyDocuments : get many documents from mongodb collection
func (db *DBMongo) GetManyDocuments(collection string, document []Document) ([]Document, error) {
	var documents []Document
	return documents, nil
}

// GetAllDocuments : get all documents from mongodb collection
func (db *DBMongo) GetAllDocuments(collection string) ([]Document, error) {
	var documents []Document
	if db.client == nil {
		return documents, errors.New("Client not setup, use 'SetupMongoClient' function before")
	}

	collec := db.connect.Collection(collection)
	if collec == nil {
		return documents, errors.New("Collection not exists in data base")
	}
	var cursor *mongo.Cursor
	var err error
	if cursor, err = collec.Find(db.ctx, bson.M{}); err != nil {
		return documents, errors.New("We don't find this Document in our mongo data base")
	}
	defer cursor.Close(db.ctx)
	for cursor.Next(db.ctx) {
		var task bson.M;
		if err := cursor.Decode(&task); err != nil {
			return documents, errors.New("We don't find this Document in our mongo data base")
		}
		doc := Document{
			title: task["title"].(string),
			comment: task["comment"].(string),
			date: task["date"].(string),
		}
		documents = append(documents, doc)
	}
	return documents, nil
}

// checkDucplicateDocument check if the document that you want to push is duplicate
func checkDucplicateDocument(doc Document, db *DBMongo, collection string) bool {
	docs, _ := db.GetAllDocuments(collection)
	for _, item := range docs {
		if doc.title == item.title {
			return false
		}
	}
	return true
}
