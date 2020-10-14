package db

import (
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestSetupDB(t *testing.T) {
	assert := assert.New(t)

	dbMongo := new(DBMongo)
	dbMongo.SetupDataBase()
	defer dbMongo.Disconnect()

	assert.NotNil(dbMongo)
}

func TestDisconnectDb(t *testing.T) {
	assert := assert.New(t)

	dbMongo := new(DBMongo)
	dbMongo.SetupDataBase()
	dbMongo.Disconnect()

	assert.NotNil(dbMongo.client)
}
