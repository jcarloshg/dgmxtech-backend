
export type StatusResponse =
    200 |
    404 |
    500

export type TypeResponse = "INVALID_DATA" | "NOT_FOUND" | "UNKNOWN" | "OK"

export interface CustomResponse<T> {
    status: StatusResponse,
    type: TypeResponse,
    message: string,
    data?: T
}


export interface CustomResponseError<T> extends CustomResponse<T> {
    type: "INVALID_DATA" | "UNKNOWN" | "NOT_FOUND",
}

// ============================================================
// default errors
// ============================================================
export const CustomResponseNotFound: CustomResponseError<undefined> = {
    type: "NOT_FOUND",
    status: 404,
    message: "No found"
}