const newman = require("newman")

newman.run({
    collection: "json-collection/defriandi.postman_collection.json",
    environment: "json-env/defriandi_ENV.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
