import { JSONRPCRequest, JSONRPCResponse } from "jsonrpc-types";

export class JSONRPCClient {
  constructor(private url: string) {}

  async call<T = any>(method: string, params?: any): Promise<JSONRPCResponse> {
    const req: JSONRPCRequest = {
      jsonrpc: "2.0",
      method,
      params,
      id: Date.now()
    };
    const res = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(req),
      headers: { "Content-Type": "application/json" }
    });
    return res.json() as Promise<JSONRPCResponse>;
  }
}