from geopy.distance import geodesic
from flask import jsonify

# Coordenadas del campus (latitud, longitud)
campus_coordinates = (20.0000, -100.0000)
# Radio en el que se considera que una persona está dentro del campus (en metros)
campus_radius = 100

def check_location(user_coordinates):
    latitud = user_coordinates['latitud']
    longitud = user_coordinates['longitud']
    if 'latitud' in user_coordinates and 'longitud' in user_coordinates:
        # Calcular la distancia entre las coordenadas dadas y las del campus
        distance = geodesic(campus_coordinates, (latitud, longitud)).meters
        if distance <= campus_radius:
            result = jsonify({'status': 200, 'mensaje': 'La persona se encuentra dentro del campus.','isOnCampus': True}), 
        else:
            result =  jsonify({'status': 200,'mensaje': 'La persona NO se encuentra dentro del campus.','isOnCampus': False})
    else:
        result = jsonify({'status': 400,'mensaje': 'Datos de ubicación incompletos.','isOnCampus': ''})
    
    return result
  
    