class CacheService {
    private static instance: CacheService;
    private cache: Map<string, any>;

    private constructor() {
        this.cache = new Map();
    }

    public static getInstance(): CacheService {
        if(!CacheService.instance)
            CacheService.instance = new CacheService();

        return CacheService.instance;
    }

    public set (key: string, value: any): void {
        this.cache.set(key, value);
    }

    public get (key: string): any {
        return this.cache.get(key);
    }
}

export default CacheService;