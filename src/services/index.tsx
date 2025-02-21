import request from "@/config/base-request";
import { ISetOrderBody } from "./types";

const api = {
  // DESC: get my address list
  getAddresses: () =>
    request({
      url: "/my-addresses/",
      method: "GET",
    }),
  // DESC: set insurance policy order
  setOrder: (data: ISetOrderBody) =>
    request({
      url: "/order/completion/",
      method: "POST",
      data,
    }),
};

export default api;
