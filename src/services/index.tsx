import request from "@/config/base-request";
import { ISetOrderBody } from "./types";

const api = {
  getAddresses: () =>
    request({
      url: "/my-addresses/",
      method: "GET",
    }),
  setOrder: ({ data }: { data: ISetOrderBody }) =>
    request({
      url: "/order/completion/",
      method: "POST",
      data,
    }),
};

export default api;
