export class StorageAdapter {
  async set(key: string, value: string): Promise<void> {
    // Implement storage here (AsyncStorage/MMKV)
  }

  async get(key: string): Promise<string | null> {
    // Implement storage here
    return null
  }
}
