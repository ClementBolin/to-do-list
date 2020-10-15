package db

import (
	"log"
	"context"
	"time"
	"errors"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/bson"
)

// DBMongo mongo db structure
type DBMongo struct {
	client 	*mongo.Client
	connect *mongo.Database
	ctx 	context.Context
}

// SetupMongoClient : create client connection
func (db *DBMongo) SetupMongoClient() {
	var err error

	db.client, err = mongo.NewClient(options.Client().ApplyURI("mongodb://127.0.0.1:27017"))
	if err != nil {
		log.Fatalln(err)
	}
	db.ctx, _ = context.WithTimeout(context.Background(), time.Second * 10)
	err = db.client.Connect(db.ctx)
	if err != nil {
		log.Fatalln(err)
	}
}

// Disconnect disconnect dataBase
func (db *DBMongo) Disconnect() {
	defer db.client.Disconnect(db.ctx)
}

// ConnectTo : connect to an mongo data base
func (db *DBMongo) ConnectTo(name string) bool {
	var etat bool = true

	if db.client == nil {
		return false
	}

	db.connect = db.client.Database(name)
	return etat
}

// CreateDataBase : create data base in your laptop
func (db *DBMongo) CreateDataBase(name string, collection []string) error {
	if db.client == nil {
		return errors.New("Client not setup, use 'SetupMongoClient' function before")
	}
	filter := bson.M{}
	list, err := db.client.ListDatabaseNames(db.ctx, filter)
	if err != nil {
		return err
	}
	for _, item := range list {
		if name == item {
			return errors.New("Data Base exist")
		}
	}
	db.ConnectTo(name)
	for _, item := range collection {
		err = db.connect.CreateCollection(db.ctx, item)
		if err != nil {
			return nil
		}
	}
	return nil
}


// InstertDocument : insert document in your collection
// func (db *DBMongo) InsertDocument(dbName string) {

// }