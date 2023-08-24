import os
from dotenv import load_dotenv
from decouple import config as config_env
from pymongo import MongoClient

basedir = os.path.abspath(os.path.dirname(__file__))
print(basedir)
load_dotenv()

client = MongoClient('localhost', 27017)
db = client['registro_firmas_db']

class Config:
   
    SECRET_KEY = config_env('SECRET_KEY', default='default')
    """ SQLALCHEMY_DATABASE_URI = 'mssql+pymssql://' + \
        config_env('DB_USER') + ':' + \
        config_env('DB_PASS') + '@' + \
        config_env('DB_SERVER') + ':' + \
        config_env('DB_PORT') + '/' + \
        config_env('DB_NAME') """


    SQLALCHEMY_TRACK_MODIFICATIONS = False