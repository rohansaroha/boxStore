import axios from "axios";
import { baseUrl } from "./baseUrl";
import { config } from "./basicAuth";

export class drawBackendApi{
    static async drawCanvas(standardId:string,customerId:string,folderId:string){
        let url = baseUrl + `/standards/${standardId}/creator?customerId=/${customerId}&folderId=${folderId}`;
        return axios.get(url,config);
    }
}
