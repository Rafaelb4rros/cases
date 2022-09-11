#!/usr/bin/env bash

migrations_dir=$(pwd)/migrations
migration_name=$1

create_dir(){
    echo "creating migrations directory..."
    mkdir $migrations_dir
    echo "created."
}

if ! [ -e $migrations_dir ]
then
    create_dir 
fi

touch $migrations_dir/$migration_name.js && exit 0

