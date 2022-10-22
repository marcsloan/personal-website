#Setup

##Django setup
        
        virtualenv -p python3.6 .venv
        source .venv/bin/activate
        pip install -r requirements.txt
        python manage.py migrate
        

##Node
        
        npm install

## Heroku Setup
       Install CLI
       https://devcenter.heroku.com/articles/getting-started-with-python#set-up      
       
       Conifigure
       heroku login
        
#Local Testing

    1. source .venv/bin/activate
    2. [optional] pip install -r requirements.txt
    3. [optional] python manage.py makemigrations
    4. [optional] python manage.py migrate
    5. npx webpack --mode development ./frontend/src/index.js --output ./frontend/static/frontend/main.js
    6. python manage.py collectstatic --no-input
    7. heroku local
    
    
        
#Deploying
1. `git add` Add changes and `git push` to master
2. Check the deploy status `https://dashboard.heroku.com/apps/marcsloan`

#Set up and deploy (2022)
## Set Up
1. Download sourcetree to get Git setup easily, connect to my Github account and download the source code
2. Download Git Credential Manager https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md so I can easily log into Github locally
3. Download Heroku CLI
4. Navigate to source folder and run `heroku git:remote -a marcsloan` to connect Heroku to my local respository

## Deploy
1. Go to the local git repository, use CLI to git add, commit and push
2. Do the `heroku login`
3. `git push heroku`

 
