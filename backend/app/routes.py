from flask import Blueprint, jsonify

api_bp = Blueprint('api', __name__)

@api_bp.route('/about', methods=['GET'])
def about():
    about_info = {
        "name": "Tu Nombre",
        "description": "Desarrollador web especializado en React y Python.",
        "profile_pic": "/images/profile.jpg"
    }
    return jsonify(about_info)

@api_bp.route('/projects', methods=['GET'])
def projects():
    projects_info = [
        {"name": "Proyecto 1", "description": "Descripción del proyecto 1", "url": "https://github.com/usuario/proyecto1"},
        {"name": "Proyecto 2", "description": "Descripción del proyecto 2", "url": "https://github.com/usuario/proyecto2"}
    ]
    return jsonify(projects_info)

@api_bp.route('/contact', methods=['POST'])
def contact():
    # Aquí procesas el formulario de contacto
    return jsonify({"message": "Mensaje recibido"})
