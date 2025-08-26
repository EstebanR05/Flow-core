
import {
    Injectable,
    ExecutionContext,
    CallHandler,
    NestInterceptor,
    Inject,
} from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import type { Cache } from "cache-manager";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements NestInterceptor {

    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

    async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
        const request = context.switchToHttp().getRequest();
        const key = request.url;

        const cached = await this.cacheManager.get(key);

        if (cached) {
            return of(cached);
        }

        return next.handle().pipe(
            tap((response) => {
                this.cacheManager.set(key, response, 60);
            })
        );
    }
}