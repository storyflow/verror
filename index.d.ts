export default class VError extends Error {
  constructor(name: string, code?: number, data?: any);

  public name: string;

  public code: number;

  public data: any;

  public dateTime: Date;
}
