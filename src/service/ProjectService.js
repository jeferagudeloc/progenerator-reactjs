import ServiceUrl from "../utils/constants/url_services";
import axios from "../config/axios";

export class ProjectService {
    constructor(userID) {
        this.userID = userID;
    }

    async getProjects() {
        var url = ServiceUrl.PROJECT_URL;
        return axios
            .get(url, {
                crossDomain: true
            })
            .then((result) => {
                let requestProcess = [];
                let requestFromBakend = result.data["_embedded"].requests;
                if (requestFromBakend != undefined && requestFromBakend.length != 0) {
                    requestFromBakend.forEach((element) => {
                        let res = {
                            url: element.url,
                            name: element.name,
                            method: element.method,
                        };
                        requestProcess.push(res);
                    });
                }

                console.log(requestProcess);
                return requestProcess;
            })
            .catch((error) => {
                throw new Error(error);
            });
    }

    async saveProject(objectToSave) {
        var url = ServiceUrl.PROJECT_URL;

        var body = {
            headers: objectToSave.headers,
            method: objectToSave.method,
            name: objectToSave.name,
            body: objectToSave.body,
            userId: 3,
            url: objectToSave.url,
        };

        return axios
            .post(url, body)
            .then((result) => {
                console.log(result);
                //return result;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}