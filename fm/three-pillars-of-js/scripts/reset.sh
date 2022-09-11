#!/usr/bin/env bash

database_file=$(pwd)/db.sqlite

if [ -e $database_file ]
then
    rm $database_file
    echo "deleted database file."
else  
    echo "database file does not exists."
fi

echo "creating file...."
$(pwd)/scripts/build.sh && exit 0
