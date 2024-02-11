#!/bin/bash

npm install --silent

rm -rf dist && mkdir dist
nest build

cp package.json dist/package.json
cp -r .ebextensions dist/.ebextensions
cp -r client dist/client

mkdir -p build
cd dist
zip -r "../build/dist-$(date "+%Y-%m-%d-%H-%M-%S").zip" .
