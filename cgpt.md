Estoy buscando un algoritmo que me permita hacer esto:

```js
const UniversalApplication = require(__dirname + "/uapp.js");
const Endpoint = UniversalApplication.classes.Endpoint;
const app = UniversalApplication.create();

app.expand({
    "navigation": Endpoint.create(function() {
        // @WHATEVER...
    }),
    "services/file/converter": {
        ":sourceType": {
            "to": {
                ":destinationType": Endpoint.create(function() {
                    // @WHATEVER...
                })
            }
        }
    }
});

app.run("/navigation");
app.run("/services/file-converter/doc/to/pdf");
app.run("/services/file-converter/doc/to/md");
app.run("/services/file-converter/md/to/html");
app.run("/services/file-converter/md/to/pdf");
app.run("/services/file-converter/html/to/pdf");
app.run("/services/file-converter/html/to/md");
```