#entry point for the backend  
from flask import Flask
from app.routes import api_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Para permitir solicitudes desde React
app.register_blueprint(api_bp)

if __name__ == '__main__':
    app.run(debug=True)