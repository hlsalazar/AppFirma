from config import db
from pymongo.errors import PyMongoError

def save_signature(signature_data):
    try:
        # Validar signature_data aquí si es necesario
        print(signature_data)
        db.signatures.insert_one(signature_data)
        return {
            'success': True,
            'message': 'Firma registrada exitosamente',
            'data': signature_data  # Opcionalmente, podrías devolver los datos insertados
        }
    except PyMongoError as e:
        return {
            'success': False,
            'message': 'Error al registrar la firma',
            'error': str(e)  # Devuelve el mensaje de error específico
        }
