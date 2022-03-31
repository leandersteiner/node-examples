# Express Basics

## Minimal Server

```js
import express from "express";

const port = process.env.PORT || 8081;
const server = express();

server.listen(port);
```

## Routing

HTTP Verben sind als Methoden implementiert und folgen folgendem Schema:

```js
server.get('/', respondText);
server.post('/post', respondPost);
```

## Bereitstellen wichtiger varaiblen

`__filename` und `__dirname` stehen bei verwenden von ESM nicht direkt zur verfügung.
Man kann sie aber folgendermaßen definieren:

```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

## Request

- `method`: Enthält HTTP-Methode
- `originalUrl`: Ursprüngliche Anfrage-URL
- `params`: Varaiable anteile der URL
- `path`: URL-Pfad
- `protocol`: Anfrage-Protokoll (HTTP/HTTPS)
- `query`: Query-String

## Response

- `get(field)`: Liest Header-Feld
- `set(field, value)`: Setzt Header-Field
- `cookie(name, value, [options])`: Setzt Cookie-Wert
- `redirect([status, ]path)`: Weiterleitung
- `status(code)`: Setzt Statuscode der Antwort
- `send([body])`: Sendet HTTP-Antwort
- `json([body])`: Sendet Antwort, wobei übergebenes Objekt in JSON umgewandelt wird.
- `end([data][, encoding])`: Sendet HTTP-Antwort

## Nodemon

Nodemon ist nützlich für die Entwicklung, da es bei Änderungen automatisch den Node-Server neustartet.