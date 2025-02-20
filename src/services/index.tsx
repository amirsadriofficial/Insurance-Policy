/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "@/config/base-request";

const api = {
  getAddresses: () =>
    request({
      url: "/my-addresses/",
      method: "GET",
    }),
  setOrder: ({ data }: any) =>
    request({
      url: "/order/completion/",
      method: "POST",
      data,
    }),
};

export default api;
