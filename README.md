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

#Deploying (2022)
1. Go to the local git repository
2. Do the `heroku login`
3. `git push heroku`

 
