const uName = "NSERVICEMB";
const uPassword = "bATDeQkx33GPENCLvnLS";
let authorizationBasic = window.btoa(uName + ":" + uPassword);

export const config = {
    "headers": {
        "Authorization": "Basic " + authorizationBasic
    }
};
