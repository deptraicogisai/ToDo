import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";
import {services} from "./services/index";
import * as mongoose from 'mongoose';
const application = express();

/// use json body parser
application.use(bodyParser.json());
application.use(express.static(__dirname + "/../public"));

mongoose.connect("mongodb://localhost:27017/mydb");

/// run the application
application.post("/remote/:services/:method", async(request, response) => {

    const serviceName = request.params["service"];
    const methodName = request.params["method"];

    response.header("Content-Type", "application/json");


    try {

        const service = services[serviceName] as Function;

        const parameters = request.body || [];

        // create the instance
        const instance = new (
            Function.prototype.bind.apply(service, [null])
        );

        const method = instance[methodName] as Function;

        instance.request = request;
        instance.response = response;

        const result = await method.apply(instance, parameters);

        response.send(JSON.stringify(result));

    } catch (exception) {
        response.status(500).send(JSON.stringify({
            exception
        }));
    }
});

application.use((request, response) => {
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

/// listen
application.listen(process.env["PORT"] || 3000, () => {
    console.log("Server Started !");
});

