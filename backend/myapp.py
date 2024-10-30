from flask import Flask, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)

#Establishin connection to the PostgresSQL database
CORS(app)

conection = psycopg2.connect(
    host="localhost",
    database="andresweb", 
    user="postgres",
    password="felipe0021"
)


@app.route('/base')
def test_db():
    test = conection.cursor()
    test.execute('Select * from users')
    data = test.fetchall()
    print(data)
    test.close()
    return str(data)

@app.route('/api/data', methods=['GET'])
def get_data():    
    data = {
        "message": "Hello from Flask!",
        "info": "This is data from the Flask backend.",    
    
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=5000)