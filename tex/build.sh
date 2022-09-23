#!/usr/bin/bash

TEX_CMD=pdflatex

get_directories() {
    cd $1 || { echo "error" ; exit 1 ; }

    for file in *; do
        if echo $file | grep -Pq '.tex$'; then
            $TEX_CMD $file
        fi
    done
}
get_directories $(pwd)





