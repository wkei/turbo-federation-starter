#!/bin/bash

cp -rf apps/container/dist ./dist
cp -rf apps/subapp/dist/assets ./dist/subapp

echo "prepared final build to ./dist"
