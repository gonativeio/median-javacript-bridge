declare module "gonative" {
    type Params = Record<string, string>

    export default interface gonative {
        nativebridge: {
            custom: (params: Params) => void;
        }
    }
}