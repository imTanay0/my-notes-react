# Overview

This is a Simple Note Taking App. 

## Techs

- Vite
- React
- TailwindCSS

## Setup

1. `npm install`
2. `npm run dev`


## To run it from Docker & on server

-- Update the package.json and add "--host" in the dev stage (I HAVE UPDATED)

-- Build the image from the Dockerfile and run the container on port 5173.

## To add reverse proxy (optional, run your application without opening the port)

-- After running your docker conatiner add the dist/ or the build/ folder at /var/www/html path.

-- Now go to /etc/nginx/sites-enabled and add the proxy_pass under the location / as proxy_pass http://127.0.0.1:5173

-- After this save your file and reload the nginx web server.

AND NOW IN THE BROWSER ADD THE PUBLIC-IP OF THE SERVER AND YOU CAN CHECK THAT WITHOUT OPENING THE PORT OUR APPLICATION IS LIVE AND RUNNING.
