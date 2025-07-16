export type JSONRPCRequest = {
  jsonrpc: "2.0";
  method: string;
  params?: any;
  id?: number | string | null;
};

export type JSONRPCResponse = {
  jsonrpc: "2.0";
  result?: any;
  error?: {
    code: number;
    message: string;
    data?: any;
  };
  id?: number | string | null;
};