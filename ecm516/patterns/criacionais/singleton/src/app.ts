// import Singleton from "./Singleton";

// for (let i = 0; i < 10; i++){
//     let singleton: Singleton = Singleton.getInstance();
//     console.log(singleton.incrementar());
// }
import CacheService from "./CacheService";

const cache = CacheService.getInstance();
cache.set('João', '123456');

const cache2 = CacheService.getInstance();
console.log(cache2.get('João'));