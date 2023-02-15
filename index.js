import { addCommand } from "./utilities";

const nativebridge = {
    custom: function (params){
        addCommand("gonative://nativebridge/custom", params);
    }
};

const gonative = {
    nativebridge
}


export default gonative;