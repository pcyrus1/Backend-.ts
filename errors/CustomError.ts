class CustomError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (message: string, statusCode: number): CustomError => {
  return new CustomError(message, statusCode);
};

export { CustomError, createCustomError };
