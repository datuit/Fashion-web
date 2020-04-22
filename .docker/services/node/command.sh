#!/bin/bash
cd /code
npm install
cd /code
npx prisma introspect
cd /code
npx prisma generate
cd /code
npm start
