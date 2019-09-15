import axios from "axios";

export function loginService(params) {
    return axios.post("/user/login", params);
}

export function registryService(params) {
    return axios.post("/user/registry", params);
}
export function sertchServer(params) {
    return axios.post("/user/sertch", params);
}

export function getuserlist() {
    return axios.get("/user");
}
