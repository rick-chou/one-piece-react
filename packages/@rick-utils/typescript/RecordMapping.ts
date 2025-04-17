export type RecordMapping<T> = {
  [K in keyof T]: T[K];
};
