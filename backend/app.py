from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite solicitudes de dominios cruzados, necesarias para conectar con React
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "Hello from Flask!",
        "info": "This is data from the Flask backend."
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000)