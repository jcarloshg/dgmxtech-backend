export interface DeleteByUUIDRepository {
    run: (uuid: string) => Promise<boolean>
}