import axios from "axios";
import { baseUrl } from "./baseUrl";
import { config } from "./basicAuth";

interface IRawValuesProps{
    materialName:string,
    length : number,
    width : number,
    depth : number
}
interface IRawLayoutValues{
    LMSS:string,
    LPaletteS:string,
    LPatternS:string,
    sheetX:string,
    sheetY:string
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

    static async updateCanvas(canvasPath:string){
        let url = "http://arden-nservice.net/" + canvasPath;
        console.log(url);
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

    static async getLayout(rawLayoutValues:IRawLayoutValues) {
        const url = baseUrl + "/scripts?name=Sample-Create-Layout-2";
        console.log("raw values",rawLayoutValues);
        const body = {
            "ProjectKey": 952,
            "DesignLayerKey": 3837,
            "LayoutMachineSheetSettingName": rawLayoutValues.LMSS,
            "LayoutPatternSettingName": rawLayoutValues.LPaletteS,
            "LayoutPaletteSettingName": rawLayoutValues.LPaletteS,
            "SheetX": rawLayoutValues.sheetX,
            "SheetY": rawLayoutValues.sheetY,
            "Gutter": 0
        };

        return axios.post(url, body, config);
    }

    static async previewLayout(previewId: string) {
        const url = baseUrl + "/projects/952/layers/4009/preview";
        return axios.get(url, { ...config, responseType: "arraybuffer" });
    }
}
