package db

import (
	"log"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// DBMongo mongo db structure
type DBMongo struct {
	client *mongo.Client
	ctx context.Context
}

// SetupDataBase :
func (db *DBMongo) SetupDataBase() {
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
