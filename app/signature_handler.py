from config import db

def save_signature(signature_data):
    print(signature_data)
    db.signatures.insert_one(signature_data)
    return {'message': 'Firma registrada exitosamente'}
