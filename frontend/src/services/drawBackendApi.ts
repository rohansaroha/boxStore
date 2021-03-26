import axios from "axios";
import { baseUrl } from "./baseUrl";
import { config } from "./basicAuth";

interface IRawValuesProps{
    materialName:string,
    length : number,
    width : number,
    depth : number
}

// interface IDrawValuesData{
//     MaterialName:string,
//     Metric:boolean,
//     VariableSettings:{
//         Groups:[
//             {
//                 "Name": string,
//                 "Variables": Array<{ "Name": string, "Value": number }>
//             }
//         ]
//     }
// }

export class drawBackendApi{
    static async drawImage(standardId:string,customerId:string,folderId:string,rawValues:IRawValuesProps){
        let drawValuesData:any = {};
        drawValuesData["MaterialName"] = rawValues.materialName;
        drawValuesData["Metric"] = true;
        drawValuesData["VariableSettings"] = {
            "Groups": [
                {
                    "Name": "Main",
                    "Variables": [
                        { "Name": "L", "Value": rawValues.length },
                        { "Name": "W", "Value": rawValues.width },
                        { "Name": "D","Value": rawValues.depth }
                    ]
                }
            ]
        };

        let url = baseUrl + `/standards/${standardId}/creator?customerId=${customerId}&folderId=${folderId}`;
        return axios.post(url,drawValuesData,config);
    }

    static async drawCanvas(standardId:string,layer:string){
        let url = baseUrl + `/projects/${standardId}/layers/${layer}/preview`;
        return axios.get(url, { ...config, responseType: "arraybuffer" });
    }
    static async updateCanvas(standardId:string){
        let url = baseUrl + `/projects/${standardId}/preview`;
        return axios.get(url, { ...config, responseType: "arraybuffer" });
    }
}
