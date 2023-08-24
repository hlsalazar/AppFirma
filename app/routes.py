from flask import Blueprint, request, jsonify
from . import signature_handler
from . import geolocation_handler

api = Blueprint('api', __name__)

@api.route('/registrar_firma', methods=['POST'])
def registrar_firma():
    signature_data = request.json 
    result = signature_handler.save_signature(signature_data)
    return jsonify(result)

@api.route('/verificar_ubicacion', methods=['POST'])
def verificar_ubicacion():
    data = request.get_json()
    result = geolocation_handler.check_location(data)
    return result

