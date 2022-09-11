#!/usr/bin/env bash

database_file=$(pwd)/db.sqlite

if ! [ -e $database_file ]
then
    touch $database_file
    echo "created database file."
    exit 0
else  
    echo "file already exists."
    exit 0
fi
