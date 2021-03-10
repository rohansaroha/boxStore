import axios from "axios";
import { baseUrl } from "./baseUrl";
import { config } from "./basicAuth";

export class imgRenderBackendApi{
    static async imgRender(standardId:string){
        const url = baseUrl + `/standards/${standardId}/preview`;
        return axios.get(url, { ...config, responseType: "arraybuffer" });
    }
}
