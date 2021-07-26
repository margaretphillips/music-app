# Spotify Music App

This project runs locally and can be started using npm start in git bash

Steps:
1) open git bash or terminal
2) git clone https://github.com/margaretphillips/music-app.git
3) cd music-app
4) open two terminal windows, two git bash clients, or two terminals in your visual code environment ( one to run the frontend and one to run the backend )

The npm start script will run two jobs and can take a few minutes to complete
1) npm i ( install node packages )
2) react-scripts start ( start the react app)

After the npm start completes you will see that the frontend is running and you should see it in your browser at localhost:3000

If this job has not completed you will run into an error when starting the server because not all dependencies will be loaded

The node ./src/server/server.js will start the server
Once the server has started you can start using the app. The server will be running at localhost:3001 and has three endpoints
localhost:3001/artists
localhost:3001/albums
localhost:3001/tracks

You can also go to localhost:3001/ to see the server status

When you start the server you will see a JSON response in the console. This is the response which is returning from spotify after using the oath flow. However due to time constraints the data that you are seeing on the frontend
is actually in a series of JSON files which I pulled through Postman. Please take a look at the code in the router.js file to see the oath and get flow.

The search does a lookup based on the index of the character you type, so there is no need to type the entire name of an artist, album, or track. However if you backspace in the input it will pull all the available items in the category you are looking at.