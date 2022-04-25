#!/bin/bash

# Variables

domain="www.catinella.co.uk"
port=5000
project_name="Catinella"
public_dir="/var/www"
git_url="https://github.com/fabie37/Catinella.git"

echo
echo $(date)
echo "Updating the $project_name website. Hold on..."

if [ -d "$public_dir/$project_name" ]
then
    echo "Deleting old project folder..."
    rm -rf "$public_dir/$project_name"
else
    echo "Public dir:$public_dir is clean."
fi

echo "Downloading latest project."
cd $public_dir
git clone $git_url
cd "$project_name"
npm install
npm run build
echo "Alright! Go to $domain to test it out"
pm2 delete $project_name
pm2 serve /var/www/Catinella/build $port --name "$project_name" --spa
npm run sitemap
