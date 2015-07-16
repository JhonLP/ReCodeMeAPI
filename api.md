# API Rest de ReCodeMe
ReCodeMe es una aplicacion que me permite crear notas de codigo para reutilizarlo

## Metodos HTTP permitidos

|  Método  |              Descripción               |
| -------- | -------------------------------------- |
| `GET`    | Obtener un recurso o lista de recursos |
| `POST`   | Crear un recurso                       |
| `PUT`    | Actualizar un recurso                  |
| `DELETE` | Eliminar un recurso                    |

## Códigos de Respuesta

| Código |                         Descripción                          |
| ------ | ------------------------------------------------------------ |
| `200`  | Success                                                      |
| `201`  | Success - nuevo recurso creado.                              |
| `204`  | Success - no hay contenido para responder                    |
| `400`  | Bad Request - i.e. su solicitud no se pudo evaluar           |
| `401`  | Unauthorized - usuario no esta autenticado para este recurso |
| `404`  | Not Found - recurso no existe                                |
| `422`  | Unprocessable Entity - i.e. errores de validación            |
| `429`  | Limite de uso excedido, intente mas tarde                    |
| `500`  | Error de servidor                                            |
| `503`  | Servicio no disponible                                       |

## Crear una nota nueva

  Solicitud [POST] /notas
    {
      "nota":{
        "title": "ReCodeMe",
        "description": "Introduccion al api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    }

  Respuesta

    {
      "nota":{
        "id": 125,
        "title": "ReCodeMe",
        "description": "Introduccion al api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    }


## Obtener una nota
  Solicitud GET /notas/123

  Respuesta

    {
      "nota":{
        "id": 123,
        "title": "ReCodeMe",
        "description": "Introduccion al api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    }

## Actualizar una nota
  Solicitud PUT /notas/123

    {
      nota:{
          "title": "ReCodeMe 2.0",
          "description": "Seguimos con el api",
          "type": "js",
          "body": "aqui va el codigo"
      }
    }

  Respuesta

    {
      nota:{
        "id": 123,
        "title": "ReCodeMe 2.0",
        "description": "Seguimos con el api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    }

## Eliminar una nota

  Solicitud DELETE /notas/id (204)


## Obtener una lista de notas
  Solicitud GET /notas/

  Respuesta

    [{
      nota:{
        "id": 123,
        "title": "ReCodeMe",
        "description": "Introduccion al api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    },
    {
      nota:{
        "id": 12345,
        "title": "ReCodeMe 2.0",
        "description": "Seguimos con el api",
        "type": "js",
        "body": "aqui va el codigo"
      }
    }]
