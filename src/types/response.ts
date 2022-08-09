export interface KyResponse extends Response {
  json: <T = any>() => Promise<T>;
}
