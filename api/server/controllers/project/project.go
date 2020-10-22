package project

import (
	"log"
)

// AddProject : create project in to do list
func AddProject(projectName string, tag string) (bool, error) {
	log.Println("Add project")
	return true, nil
}

// RemoveProject : remove project from data base
func RemoveProject(name string, tag string) (bool, error) {
	log.Println("remove project")
	return true, nil
}
