import axios from "axios";
import { baseUrl } from "./baseUrl";
import { config } from "./basicAuth";

interface IRawValuesProps{
    materialName:string,
    length : number,
    width : number,
    depth : number
}

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

    static async Canvas_3D(){
        let data:any = {};
        data["ProjectKey"] = 964;
        data["DesignLayerKey"] = 3849;
        data["PaletteSettingName"] = "<Default>";
        data["BoardSettingName"] = "Corrugated|Corrugated K/K";
        data["BasePointX"] = 150;
        data["BasePointY"] = 200;
        let url = baseUrl + "/scripts?name=Sample-Create-3D-Layer";
        return axios.post(url,data,config);
    }
    static async canvas_3D_second(projectId: string, layerId: string, format: string, settingsId: string) {
        const url = baseUrl + `/projects/${projectId}/layers/${layerId}/file?fileFormat=${format}&importexportSettingId=${settingsId}`;
        return axios.get(url,config);
    }

    static async getLayout() {
        const url = baseUrl + "/scripts?name=Sample-Create-Layout-2";
        const body = {
            "ProjectKey": 952,
            "DesignLayerKey": 3837,
            "LayoutMachineSheetSettingName": "Bobst|Bobst SP 102 E",
            "LayoutPatternSettingName": "Automatic",
            "LayoutPaletteSettingName": "Fitted only",
            "SheetX": 750,
            "SheetY": 600,
            "Gutter": 0
        };
        return axios.post(url, body, config);
    }

    static async previewLayout(previewId: string) {
        const url = baseUrl + "/projects/952/layers/4009/preview";
        return axios.get(url, { ...config, responseType: "arraybuffer" });
    }
}
