again, nothing fancy. just in case I need. i try to learn 10hrs+ a day, and sleep 4. btw i write smth just for memory. I really like coding, mb in 10 years i can
share from where i start and what i expected from the future. 

The journey begins here. 
next mb youtube or smth. hope u doing fine)

Also good to mention i used: 

this is my notes from notepad, in case I lost it

Now we work with pure project. It means that we create just a folder with index.ts file. 
	But there is some steps we need to take. 
	First - index.ts convert to index.js. Enter tsc index.ts. ->>> we'll get index.js ->>> then we need to organise all our files in some folders.
	
	1. let's make src file and put our root files there. --->>> index.ts to src folder.
	2. make build folder and put index.js there. 
	3. now we need create our special document where we write our instructions about folder. Enter tsc --init and we get our file.
	4. open it and fine 2 lines. 1."ourDir:" and change it to "ourDir: "./build", 2. "root" change to "rootDir":"./src", and FINALLY run command tsc and we done; OR Almost) run tsc -w for autocompile insted of enter this command;
	
	So our errors are checked, but we still need to run our app. To do so we can run command node build/index.js   But it hard to run it every time so we need to use some additional app. So let's go and install them
	1. first we need run this command: npm init -y to create package.json
	2. run: npm i --save nodemon concurrently 
	3. while it installing we go to our package.json and change this line.  
	
		"scripts":{
			"start:build":"tsc- w",
			"start:run":"nodemon build/index.js",
			"start":"concurrently npm:start:*"
	
		and simply run : npm start 
