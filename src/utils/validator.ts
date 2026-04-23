export function expectField<T, K extends keyof T>(
  obj: T,
  key: K,
  expectedVal: T[K],
) {
  if (expectedVal !== obj[key]) {
    throw new Error(`Mismatch on ${String(key)}`);
  }
}
