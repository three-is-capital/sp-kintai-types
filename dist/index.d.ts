
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserManager
 * 
 */
export type UserManager = $Result.DefaultSelection<Prisma.$UserManagerPayload>
/**
 * Model Holidays
 * 
 */
export type Holidays = $Result.DefaultSelection<Prisma.$HolidaysPayload>
/**
 * Model Kintai
 * 
 */
export type Kintai = $Result.DefaultSelection<Prisma.$KintaiPayload>
/**
 * Model AnnualYukyu
 * 
 */
export type AnnualYukyu = $Result.DefaultSelection<Prisma.$AnnualYukyuPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const HolidayType: {
  YukyuDay: 'YukyuDay',
  YukyuHalf: 'YukyuHalf',
  Furikyu: 'Furikyu',
  Daikyu: 'Daikyu',
  Kekkin: 'Kekkin',
  Kyushoku: 'Kyushoku',
  Keicho: 'Keicho',
  Ikukyu: 'Ikukyu'
};

export type HolidayType = (typeof HolidayType)[keyof typeof HolidayType]

}

export type HolidayType = $Enums.HolidayType

export const HolidayType: typeof $Enums.HolidayType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userManager`: Exposes CRUD operations for the **UserManager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserManagers
    * const userManagers = await prisma.userManager.findMany()
    * ```
    */
  get userManager(): Prisma.UserManagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holidays`: Exposes CRUD operations for the **Holidays** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holidays.findMany()
    * ```
    */
  get holidays(): Prisma.HolidaysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kintai`: Exposes CRUD operations for the **Kintai** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kintais
    * const kintais = await prisma.kintai.findMany()
    * ```
    */
  get kintai(): Prisma.KintaiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.annualYukyu`: Exposes CRUD operations for the **AnnualYukyu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnualYukyus
    * const annualYukyus = await prisma.annualYukyu.findMany()
    * ```
    */
  get annualYukyu(): Prisma.AnnualYukyuDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserManager: 'UserManager',
    Holidays: 'Holidays',
    Kintai: 'Kintai',
    AnnualYukyu: 'AnnualYukyu'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userManager" | "holidays" | "kintai" | "annualYukyu"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserManager: {
        payload: Prisma.$UserManagerPayload<ExtArgs>
        fields: Prisma.UserManagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserManagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserManagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          findFirst: {
            args: Prisma.UserManagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserManagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          findMany: {
            args: Prisma.UserManagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>[]
          }
          create: {
            args: Prisma.UserManagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          createMany: {
            args: Prisma.UserManagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserManagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>[]
          }
          delete: {
            args: Prisma.UserManagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          update: {
            args: Prisma.UserManagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          deleteMany: {
            args: Prisma.UserManagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserManagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserManagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>[]
          }
          upsert: {
            args: Prisma.UserManagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserManagerPayload>
          }
          aggregate: {
            args: Prisma.UserManagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserManager>
          }
          groupBy: {
            args: Prisma.UserManagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserManagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserManagerCountArgs<ExtArgs>
            result: $Utils.Optional<UserManagerCountAggregateOutputType> | number
          }
        }
      }
      Holidays: {
        payload: Prisma.$HolidaysPayload<ExtArgs>
        fields: Prisma.HolidaysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidaysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidaysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          findFirst: {
            args: Prisma.HolidaysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidaysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          findMany: {
            args: Prisma.HolidaysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>[]
          }
          create: {
            args: Prisma.HolidaysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          createMany: {
            args: Prisma.HolidaysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidaysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>[]
          }
          delete: {
            args: Prisma.HolidaysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          update: {
            args: Prisma.HolidaysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          deleteMany: {
            args: Prisma.HolidaysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidaysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HolidaysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>[]
          }
          upsert: {
            args: Prisma.HolidaysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidaysPayload>
          }
          aggregate: {
            args: Prisma.HolidaysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHolidays>
          }
          groupBy: {
            args: Prisma.HolidaysGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidaysGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidaysCountArgs<ExtArgs>
            result: $Utils.Optional<HolidaysCountAggregateOutputType> | number
          }
        }
      }
      Kintai: {
        payload: Prisma.$KintaiPayload<ExtArgs>
        fields: Prisma.KintaiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KintaiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KintaiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          findFirst: {
            args: Prisma.KintaiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KintaiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          findMany: {
            args: Prisma.KintaiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>[]
          }
          create: {
            args: Prisma.KintaiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          createMany: {
            args: Prisma.KintaiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KintaiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>[]
          }
          delete: {
            args: Prisma.KintaiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          update: {
            args: Prisma.KintaiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          deleteMany: {
            args: Prisma.KintaiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KintaiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KintaiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>[]
          }
          upsert: {
            args: Prisma.KintaiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KintaiPayload>
          }
          aggregate: {
            args: Prisma.KintaiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKintai>
          }
          groupBy: {
            args: Prisma.KintaiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KintaiGroupByOutputType>[]
          }
          count: {
            args: Prisma.KintaiCountArgs<ExtArgs>
            result: $Utils.Optional<KintaiCountAggregateOutputType> | number
          }
        }
      }
      AnnualYukyu: {
        payload: Prisma.$AnnualYukyuPayload<ExtArgs>
        fields: Prisma.AnnualYukyuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnualYukyuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnualYukyuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          findFirst: {
            args: Prisma.AnnualYukyuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnualYukyuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          findMany: {
            args: Prisma.AnnualYukyuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>[]
          }
          create: {
            args: Prisma.AnnualYukyuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          createMany: {
            args: Prisma.AnnualYukyuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnualYukyuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>[]
          }
          delete: {
            args: Prisma.AnnualYukyuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          update: {
            args: Prisma.AnnualYukyuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          deleteMany: {
            args: Prisma.AnnualYukyuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnualYukyuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnualYukyuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>[]
          }
          upsert: {
            args: Prisma.AnnualYukyuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnualYukyuPayload>
          }
          aggregate: {
            args: Prisma.AnnualYukyuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnualYukyu>
          }
          groupBy: {
            args: Prisma.AnnualYukyuGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnualYukyuGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnualYukyuCountArgs<ExtArgs>
            result: $Utils.Optional<AnnualYukyuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userManager?: UserManagerOmit
    holidays?: HolidaysOmit
    kintai?: KintaiOmit
    annualYukyu?: AnnualYukyuOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    managers: number
    subordinates: number
    kintais: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | UserCountOutputTypeCountManagersArgs
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    kintais?: boolean | UserCountOutputTypeCountKintaisArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserManagerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserManagerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKintaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KintaiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userNo: number | null
    work_day_per_week: number | null
  }

  export type UserSumAggregateOutputType = {
    userNo: number | null
    work_day_per_week: number | null
  }

  export type UserMinAggregateOutputType = {
    email: string | null
    name: string | null
    userNo: number | null
    enter_date: string | null
    quit_date: string | null
    work_day_per_week: number | null
    file_id: string | null
    is_admin: boolean | null
    is_removed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    name: string | null
    userNo: number | null
    enter_date: string | null
    quit_date: string | null
    work_day_per_week: number | null
    file_id: string | null
    is_admin: boolean | null
    is_removed: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    name: number
    userNo: number
    enter_date: number
    quit_date: number
    work_day_per_week: number
    file_id: number
    is_admin: number
    is_removed: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userNo?: true
    work_day_per_week?: true
  }

  export type UserSumAggregateInputType = {
    userNo?: true
    work_day_per_week?: true
  }

  export type UserMinAggregateInputType = {
    email?: true
    name?: true
    userNo?: true
    enter_date?: true
    quit_date?: true
    work_day_per_week?: true
    file_id?: true
    is_admin?: true
    is_removed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    name?: true
    userNo?: true
    enter_date?: true
    quit_date?: true
    work_day_per_week?: true
    file_id?: true
    is_admin?: true
    is_removed?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    name?: true
    userNo?: true
    enter_date?: true
    quit_date?: true
    work_day_per_week?: true
    file_id?: true
    is_admin?: true
    is_removed?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    email: string
    name: string
    userNo: number
    enter_date: string
    quit_date: string | null
    work_day_per_week: number
    file_id: string
    is_admin: boolean
    is_removed: boolean
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    userNo?: boolean
    enter_date?: boolean
    quit_date?: boolean
    work_day_per_week?: boolean
    file_id?: boolean
    is_admin?: boolean
    is_removed?: boolean
    created_at?: boolean
    updated_at?: boolean
    managers?: boolean | User$managersArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    kintais?: boolean | User$kintaisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    userNo?: boolean
    enter_date?: boolean
    quit_date?: boolean
    work_day_per_week?: boolean
    file_id?: boolean
    is_admin?: boolean
    is_removed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    name?: boolean
    userNo?: boolean
    enter_date?: boolean
    quit_date?: boolean
    work_day_per_week?: boolean
    file_id?: boolean
    is_admin?: boolean
    is_removed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    email?: boolean
    name?: boolean
    userNo?: boolean
    enter_date?: boolean
    quit_date?: boolean
    work_day_per_week?: boolean
    file_id?: boolean
    is_admin?: boolean
    is_removed?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "name" | "userNo" | "enter_date" | "quit_date" | "work_day_per_week" | "file_id" | "is_admin" | "is_removed" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    managers?: boolean | User$managersArgs<ExtArgs>
    subordinates?: boolean | User$subordinatesArgs<ExtArgs>
    kintais?: boolean | User$kintaisArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      managers: Prisma.$UserManagerPayload<ExtArgs>[]
      subordinates: Prisma.$UserManagerPayload<ExtArgs>[]
      kintais: Prisma.$KintaiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      name: string
      userNo: number
      enter_date: string
      quit_date: string | null
      work_day_per_week: number
      file_id: string
      is_admin: boolean
      is_removed: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    managers<T extends User$managersArgs<ExtArgs> = {}>(args?: Subset<T, User$managersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subordinates<T extends User$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, User$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kintais<T extends User$kintaisArgs<ExtArgs> = {}>(args?: Subset<T, User$kintaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly userNo: FieldRef<"User", 'Int'>
    readonly enter_date: FieldRef<"User", 'String'>
    readonly quit_date: FieldRef<"User", 'String'>
    readonly work_day_per_week: FieldRef<"User", 'Int'>
    readonly file_id: FieldRef<"User", 'String'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly is_removed: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.managers
   */
  export type User$managersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    where?: UserManagerWhereInput
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    cursor?: UserManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserManagerScalarFieldEnum | UserManagerScalarFieldEnum[]
  }

  /**
   * User.subordinates
   */
  export type User$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    where?: UserManagerWhereInput
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    cursor?: UserManagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserManagerScalarFieldEnum | UserManagerScalarFieldEnum[]
  }

  /**
   * User.kintais
   */
  export type User$kintaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    where?: KintaiWhereInput
    orderBy?: KintaiOrderByWithRelationInput | KintaiOrderByWithRelationInput[]
    cursor?: KintaiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KintaiScalarFieldEnum | KintaiScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserManager
   */

  export type AggregateUserManager = {
    _count: UserManagerCountAggregateOutputType | null
    _min: UserManagerMinAggregateOutputType | null
    _max: UserManagerMaxAggregateOutputType | null
  }

  export type UserManagerMinAggregateOutputType = {
    userEmail: string | null
    managerEmail: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserManagerMaxAggregateOutputType = {
    userEmail: string | null
    managerEmail: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserManagerCountAggregateOutputType = {
    userEmail: number
    managerEmail: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserManagerMinAggregateInputType = {
    userEmail?: true
    managerEmail?: true
    created_at?: true
    updated_at?: true
  }

  export type UserManagerMaxAggregateInputType = {
    userEmail?: true
    managerEmail?: true
    created_at?: true
    updated_at?: true
  }

  export type UserManagerCountAggregateInputType = {
    userEmail?: true
    managerEmail?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserManagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserManager to aggregate.
     */
    where?: UserManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserManagers to fetch.
     */
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserManagers
    **/
    _count?: true | UserManagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserManagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserManagerMaxAggregateInputType
  }

  export type GetUserManagerAggregateType<T extends UserManagerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserManager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserManager[P]>
      : GetScalarType<T[P], AggregateUserManager[P]>
  }




  export type UserManagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserManagerWhereInput
    orderBy?: UserManagerOrderByWithAggregationInput | UserManagerOrderByWithAggregationInput[]
    by: UserManagerScalarFieldEnum[] | UserManagerScalarFieldEnum
    having?: UserManagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserManagerCountAggregateInputType | true
    _min?: UserManagerMinAggregateInputType
    _max?: UserManagerMaxAggregateInputType
  }

  export type UserManagerGroupByOutputType = {
    userEmail: string
    managerEmail: string
    created_at: Date
    updated_at: Date
    _count: UserManagerCountAggregateOutputType | null
    _min: UserManagerMinAggregateOutputType | null
    _max: UserManagerMaxAggregateOutputType | null
  }

  type GetUserManagerGroupByPayload<T extends UserManagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserManagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserManagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserManagerGroupByOutputType[P]>
            : GetScalarType<T[P], UserManagerGroupByOutputType[P]>
        }
      >
    >


  export type UserManagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userEmail?: boolean
    managerEmail?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userManager"]>

  export type UserManagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userEmail?: boolean
    managerEmail?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userManager"]>

  export type UserManagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userEmail?: boolean
    managerEmail?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userManager"]>

  export type UserManagerSelectScalar = {
    userEmail?: boolean
    managerEmail?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserManagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userEmail" | "managerEmail" | "created_at" | "updated_at", ExtArgs["result"]["userManager"]>
  export type UserManagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserManagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserManagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserManagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserManager"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userEmail: string
      managerEmail: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["userManager"]>
    composites: {}
  }

  type UserManagerGetPayload<S extends boolean | null | undefined | UserManagerDefaultArgs> = $Result.GetResult<Prisma.$UserManagerPayload, S>

  type UserManagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserManagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserManagerCountAggregateInputType | true
    }

  export interface UserManagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserManager'], meta: { name: 'UserManager' } }
    /**
     * Find zero or one UserManager that matches the filter.
     * @param {UserManagerFindUniqueArgs} args - Arguments to find a UserManager
     * @example
     * // Get one UserManager
     * const userManager = await prisma.userManager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserManagerFindUniqueArgs>(args: SelectSubset<T, UserManagerFindUniqueArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserManager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserManagerFindUniqueOrThrowArgs} args - Arguments to find a UserManager
     * @example
     * // Get one UserManager
     * const userManager = await prisma.userManager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserManagerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserManagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserManager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerFindFirstArgs} args - Arguments to find a UserManager
     * @example
     * // Get one UserManager
     * const userManager = await prisma.userManager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserManagerFindFirstArgs>(args?: SelectSubset<T, UserManagerFindFirstArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserManager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerFindFirstOrThrowArgs} args - Arguments to find a UserManager
     * @example
     * // Get one UserManager
     * const userManager = await prisma.userManager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserManagerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserManagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserManagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserManagers
     * const userManagers = await prisma.userManager.findMany()
     * 
     * // Get first 10 UserManagers
     * const userManagers = await prisma.userManager.findMany({ take: 10 })
     * 
     * // Only select the `userEmail`
     * const userManagerWithUserEmailOnly = await prisma.userManager.findMany({ select: { userEmail: true } })
     * 
     */
    findMany<T extends UserManagerFindManyArgs>(args?: SelectSubset<T, UserManagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserManager.
     * @param {UserManagerCreateArgs} args - Arguments to create a UserManager.
     * @example
     * // Create one UserManager
     * const UserManager = await prisma.userManager.create({
     *   data: {
     *     // ... data to create a UserManager
     *   }
     * })
     * 
     */
    create<T extends UserManagerCreateArgs>(args: SelectSubset<T, UserManagerCreateArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserManagers.
     * @param {UserManagerCreateManyArgs} args - Arguments to create many UserManagers.
     * @example
     * // Create many UserManagers
     * const userManager = await prisma.userManager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserManagerCreateManyArgs>(args?: SelectSubset<T, UserManagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserManagers and returns the data saved in the database.
     * @param {UserManagerCreateManyAndReturnArgs} args - Arguments to create many UserManagers.
     * @example
     * // Create many UserManagers
     * const userManager = await prisma.userManager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserManagers and only return the `userEmail`
     * const userManagerWithUserEmailOnly = await prisma.userManager.createManyAndReturn({
     *   select: { userEmail: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserManagerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserManagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserManager.
     * @param {UserManagerDeleteArgs} args - Arguments to delete one UserManager.
     * @example
     * // Delete one UserManager
     * const UserManager = await prisma.userManager.delete({
     *   where: {
     *     // ... filter to delete one UserManager
     *   }
     * })
     * 
     */
    delete<T extends UserManagerDeleteArgs>(args: SelectSubset<T, UserManagerDeleteArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserManager.
     * @param {UserManagerUpdateArgs} args - Arguments to update one UserManager.
     * @example
     * // Update one UserManager
     * const userManager = await prisma.userManager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserManagerUpdateArgs>(args: SelectSubset<T, UserManagerUpdateArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserManagers.
     * @param {UserManagerDeleteManyArgs} args - Arguments to filter UserManagers to delete.
     * @example
     * // Delete a few UserManagers
     * const { count } = await prisma.userManager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserManagerDeleteManyArgs>(args?: SelectSubset<T, UserManagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserManagers
     * const userManager = await prisma.userManager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserManagerUpdateManyArgs>(args: SelectSubset<T, UserManagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserManagers and returns the data updated in the database.
     * @param {UserManagerUpdateManyAndReturnArgs} args - Arguments to update many UserManagers.
     * @example
     * // Update many UserManagers
     * const userManager = await prisma.userManager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserManagers and only return the `userEmail`
     * const userManagerWithUserEmailOnly = await prisma.userManager.updateManyAndReturn({
     *   select: { userEmail: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserManagerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserManagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserManager.
     * @param {UserManagerUpsertArgs} args - Arguments to update or create a UserManager.
     * @example
     * // Update or create a UserManager
     * const userManager = await prisma.userManager.upsert({
     *   create: {
     *     // ... data to create a UserManager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserManager we want to update
     *   }
     * })
     */
    upsert<T extends UserManagerUpsertArgs>(args: SelectSubset<T, UserManagerUpsertArgs<ExtArgs>>): Prisma__UserManagerClient<$Result.GetResult<Prisma.$UserManagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserManagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerCountArgs} args - Arguments to filter UserManagers to count.
     * @example
     * // Count the number of UserManagers
     * const count = await prisma.userManager.count({
     *   where: {
     *     // ... the filter for the UserManagers we want to count
     *   }
     * })
    **/
    count<T extends UserManagerCountArgs>(
      args?: Subset<T, UserManagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserManagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserManagerAggregateArgs>(args: Subset<T, UserManagerAggregateArgs>): Prisma.PrismaPromise<GetUserManagerAggregateType<T>>

    /**
     * Group by UserManager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserManagerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserManagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserManagerGroupByArgs['orderBy'] }
        : { orderBy?: UserManagerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserManagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserManagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserManager model
   */
  readonly fields: UserManagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserManager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserManagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserManager model
   */
  interface UserManagerFieldRefs {
    readonly userEmail: FieldRef<"UserManager", 'String'>
    readonly managerEmail: FieldRef<"UserManager", 'String'>
    readonly created_at: FieldRef<"UserManager", 'DateTime'>
    readonly updated_at: FieldRef<"UserManager", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserManager findUnique
   */
  export type UserManagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter, which UserManager to fetch.
     */
    where: UserManagerWhereUniqueInput
  }

  /**
   * UserManager findUniqueOrThrow
   */
  export type UserManagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter, which UserManager to fetch.
     */
    where: UserManagerWhereUniqueInput
  }

  /**
   * UserManager findFirst
   */
  export type UserManagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter, which UserManager to fetch.
     */
    where?: UserManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserManagers to fetch.
     */
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserManagers.
     */
    cursor?: UserManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserManagers.
     */
    distinct?: UserManagerScalarFieldEnum | UserManagerScalarFieldEnum[]
  }

  /**
   * UserManager findFirstOrThrow
   */
  export type UserManagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter, which UserManager to fetch.
     */
    where?: UserManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserManagers to fetch.
     */
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserManagers.
     */
    cursor?: UserManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserManagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserManagers.
     */
    distinct?: UserManagerScalarFieldEnum | UserManagerScalarFieldEnum[]
  }

  /**
   * UserManager findMany
   */
  export type UserManagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter, which UserManagers to fetch.
     */
    where?: UserManagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserManagers to fetch.
     */
    orderBy?: UserManagerOrderByWithRelationInput | UserManagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserManagers.
     */
    cursor?: UserManagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserManagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserManagers.
     */
    skip?: number
    distinct?: UserManagerScalarFieldEnum | UserManagerScalarFieldEnum[]
  }

  /**
   * UserManager create
   */
  export type UserManagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserManager.
     */
    data: XOR<UserManagerCreateInput, UserManagerUncheckedCreateInput>
  }

  /**
   * UserManager createMany
   */
  export type UserManagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserManagers.
     */
    data: UserManagerCreateManyInput | UserManagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserManager createManyAndReturn
   */
  export type UserManagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * The data used to create many UserManagers.
     */
    data: UserManagerCreateManyInput | UserManagerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserManager update
   */
  export type UserManagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserManager.
     */
    data: XOR<UserManagerUpdateInput, UserManagerUncheckedUpdateInput>
    /**
     * Choose, which UserManager to update.
     */
    where: UserManagerWhereUniqueInput
  }

  /**
   * UserManager updateMany
   */
  export type UserManagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserManagers.
     */
    data: XOR<UserManagerUpdateManyMutationInput, UserManagerUncheckedUpdateManyInput>
    /**
     * Filter which UserManagers to update
     */
    where?: UserManagerWhereInput
    /**
     * Limit how many UserManagers to update.
     */
    limit?: number
  }

  /**
   * UserManager updateManyAndReturn
   */
  export type UserManagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * The data used to update UserManagers.
     */
    data: XOR<UserManagerUpdateManyMutationInput, UserManagerUncheckedUpdateManyInput>
    /**
     * Filter which UserManagers to update
     */
    where?: UserManagerWhereInput
    /**
     * Limit how many UserManagers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserManager upsert
   */
  export type UserManagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserManager to update in case it exists.
     */
    where: UserManagerWhereUniqueInput
    /**
     * In case the UserManager found by the `where` argument doesn't exist, create a new UserManager with this data.
     */
    create: XOR<UserManagerCreateInput, UserManagerUncheckedCreateInput>
    /**
     * In case the UserManager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserManagerUpdateInput, UserManagerUncheckedUpdateInput>
  }

  /**
   * UserManager delete
   */
  export type UserManagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
    /**
     * Filter which UserManager to delete.
     */
    where: UserManagerWhereUniqueInput
  }

  /**
   * UserManager deleteMany
   */
  export type UserManagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserManagers to delete
     */
    where?: UserManagerWhereInput
    /**
     * Limit how many UserManagers to delete.
     */
    limit?: number
  }

  /**
   * UserManager without action
   */
  export type UserManagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserManager
     */
    select?: UserManagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserManager
     */
    omit?: UserManagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserManagerInclude<ExtArgs> | null
  }


  /**
   * Model Holidays
   */

  export type AggregateHolidays = {
    _count: HolidaysCountAggregateOutputType | null
    _min: HolidaysMinAggregateOutputType | null
    _max: HolidaysMaxAggregateOutputType | null
  }

  export type HolidaysMinAggregateOutputType = {
    date: string | null
    day_of_week: string | null
    name: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HolidaysMaxAggregateOutputType = {
    date: string | null
    day_of_week: string | null
    name: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type HolidaysCountAggregateOutputType = {
    date: number
    day_of_week: number
    name: number
    memo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type HolidaysMinAggregateInputType = {
    date?: true
    day_of_week?: true
    name?: true
    memo?: true
    created_at?: true
    updated_at?: true
  }

  export type HolidaysMaxAggregateInputType = {
    date?: true
    day_of_week?: true
    name?: true
    memo?: true
    created_at?: true
    updated_at?: true
  }

  export type HolidaysCountAggregateInputType = {
    date?: true
    day_of_week?: true
    name?: true
    memo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type HolidaysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to aggregate.
     */
    where?: HolidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidaysOrderByWithRelationInput | HolidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidaysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidaysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidaysMaxAggregateInputType
  }

  export type GetHolidaysAggregateType<T extends HolidaysAggregateArgs> = {
        [P in keyof T & keyof AggregateHolidays]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHolidays[P]>
      : GetScalarType<T[P], AggregateHolidays[P]>
  }




  export type HolidaysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidaysWhereInput
    orderBy?: HolidaysOrderByWithAggregationInput | HolidaysOrderByWithAggregationInput[]
    by: HolidaysScalarFieldEnum[] | HolidaysScalarFieldEnum
    having?: HolidaysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidaysCountAggregateInputType | true
    _min?: HolidaysMinAggregateInputType
    _max?: HolidaysMaxAggregateInputType
  }

  export type HolidaysGroupByOutputType = {
    date: string
    day_of_week: string
    name: string | null
    memo: string | null
    created_at: Date
    updated_at: Date
    _count: HolidaysCountAggregateOutputType | null
    _min: HolidaysMinAggregateOutputType | null
    _max: HolidaysMaxAggregateOutputType | null
  }

  type GetHolidaysGroupByPayload<T extends HolidaysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidaysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidaysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidaysGroupByOutputType[P]>
            : GetScalarType<T[P], HolidaysGroupByOutputType[P]>
        }
      >
    >


  export type HolidaysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    day_of_week?: boolean
    name?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["holidays"]>

  export type HolidaysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    day_of_week?: boolean
    name?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["holidays"]>

  export type HolidaysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    day_of_week?: boolean
    name?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["holidays"]>

  export type HolidaysSelectScalar = {
    date?: boolean
    day_of_week?: boolean
    name?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type HolidaysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"date" | "day_of_week" | "name" | "memo" | "created_at" | "updated_at", ExtArgs["result"]["holidays"]>

  export type $HolidaysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holidays"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      date: string
      day_of_week: string
      name: string | null
      memo: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["holidays"]>
    composites: {}
  }

  type HolidaysGetPayload<S extends boolean | null | undefined | HolidaysDefaultArgs> = $Result.GetResult<Prisma.$HolidaysPayload, S>

  type HolidaysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HolidaysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidaysCountAggregateInputType | true
    }

  export interface HolidaysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holidays'], meta: { name: 'Holidays' } }
    /**
     * Find zero or one Holidays that matches the filter.
     * @param {HolidaysFindUniqueArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidaysFindUniqueArgs>(args: SelectSubset<T, HolidaysFindUniqueArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holidays that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HolidaysFindUniqueOrThrowArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidaysFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidaysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysFindFirstArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidaysFindFirstArgs>(args?: SelectSubset<T, HolidaysFindFirstArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holidays that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysFindFirstOrThrowArgs} args - Arguments to find a Holidays
     * @example
     * // Get one Holidays
     * const holidays = await prisma.holidays.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidaysFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidaysFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holidays.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holidays.findMany({ take: 10 })
     * 
     * // Only select the `date`
     * const holidaysWithDateOnly = await prisma.holidays.findMany({ select: { date: true } })
     * 
     */
    findMany<T extends HolidaysFindManyArgs>(args?: SelectSubset<T, HolidaysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holidays.
     * @param {HolidaysCreateArgs} args - Arguments to create a Holidays.
     * @example
     * // Create one Holidays
     * const Holidays = await prisma.holidays.create({
     *   data: {
     *     // ... data to create a Holidays
     *   }
     * })
     * 
     */
    create<T extends HolidaysCreateArgs>(args: SelectSubset<T, HolidaysCreateArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {HolidaysCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holidays = await prisma.holidays.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidaysCreateManyArgs>(args?: SelectSubset<T, HolidaysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidaysCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holidays = await prisma.holidays.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `date`
     * const holidaysWithDateOnly = await prisma.holidays.createManyAndReturn({
     *   select: { date: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidaysCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidaysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holidays.
     * @param {HolidaysDeleteArgs} args - Arguments to delete one Holidays.
     * @example
     * // Delete one Holidays
     * const Holidays = await prisma.holidays.delete({
     *   where: {
     *     // ... filter to delete one Holidays
     *   }
     * })
     * 
     */
    delete<T extends HolidaysDeleteArgs>(args: SelectSubset<T, HolidaysDeleteArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holidays.
     * @param {HolidaysUpdateArgs} args - Arguments to update one Holidays.
     * @example
     * // Update one Holidays
     * const holidays = await prisma.holidays.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidaysUpdateArgs>(args: SelectSubset<T, HolidaysUpdateArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {HolidaysDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holidays.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidaysDeleteManyArgs>(args?: SelectSubset<T, HolidaysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holidays = await prisma.holidays.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidaysUpdateManyArgs>(args: SelectSubset<T, HolidaysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays and returns the data updated in the database.
     * @param {HolidaysUpdateManyAndReturnArgs} args - Arguments to update many Holidays.
     * @example
     * // Update many Holidays
     * const holidays = await prisma.holidays.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holidays and only return the `date`
     * const holidaysWithDateOnly = await prisma.holidays.updateManyAndReturn({
     *   select: { date: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HolidaysUpdateManyAndReturnArgs>(args: SelectSubset<T, HolidaysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holidays.
     * @param {HolidaysUpsertArgs} args - Arguments to update or create a Holidays.
     * @example
     * // Update or create a Holidays
     * const holidays = await prisma.holidays.upsert({
     *   create: {
     *     // ... data to create a Holidays
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holidays we want to update
     *   }
     * })
     */
    upsert<T extends HolidaysUpsertArgs>(args: SelectSubset<T, HolidaysUpsertArgs<ExtArgs>>): Prisma__HolidaysClient<$Result.GetResult<Prisma.$HolidaysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holidays.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidaysCountArgs>(
      args?: Subset<T, HolidaysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidaysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HolidaysAggregateArgs>(args: Subset<T, HolidaysAggregateArgs>): Prisma.PrismaPromise<GetHolidaysAggregateType<T>>

    /**
     * Group by Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidaysGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HolidaysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidaysGroupByArgs['orderBy'] }
        : { orderBy?: HolidaysGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HolidaysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidaysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holidays model
   */
  readonly fields: HolidaysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holidays.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidaysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Holidays model
   */
  interface HolidaysFieldRefs {
    readonly date: FieldRef<"Holidays", 'String'>
    readonly day_of_week: FieldRef<"Holidays", 'String'>
    readonly name: FieldRef<"Holidays", 'String'>
    readonly memo: FieldRef<"Holidays", 'String'>
    readonly created_at: FieldRef<"Holidays", 'DateTime'>
    readonly updated_at: FieldRef<"Holidays", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holidays findUnique
   */
  export type HolidaysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where: HolidaysWhereUniqueInput
  }

  /**
   * Holidays findUniqueOrThrow
   */
  export type HolidaysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where: HolidaysWhereUniqueInput
  }

  /**
   * Holidays findFirst
   */
  export type HolidaysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidaysOrderByWithRelationInput | HolidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * Holidays findFirstOrThrow
   */
  export type HolidaysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidaysOrderByWithRelationInput | HolidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * Holidays findMany
   */
  export type HolidaysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidaysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidaysOrderByWithRelationInput | HolidaysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidaysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidaysScalarFieldEnum | HolidaysScalarFieldEnum[]
  }

  /**
   * Holidays create
   */
  export type HolidaysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * The data needed to create a Holidays.
     */
    data: XOR<HolidaysCreateInput, HolidaysUncheckedCreateInput>
  }

  /**
   * Holidays createMany
   */
  export type HolidaysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidaysCreateManyInput | HolidaysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holidays createManyAndReturn
   */
  export type HolidaysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidaysCreateManyInput | HolidaysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holidays update
   */
  export type HolidaysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * The data needed to update a Holidays.
     */
    data: XOR<HolidaysUpdateInput, HolidaysUncheckedUpdateInput>
    /**
     * Choose, which Holidays to update.
     */
    where: HolidaysWhereUniqueInput
  }

  /**
   * Holidays updateMany
   */
  export type HolidaysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidaysUpdateManyMutationInput, HolidaysUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidaysWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holidays updateManyAndReturn
   */
  export type HolidaysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidaysUpdateManyMutationInput, HolidaysUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidaysWhereInput
    /**
     * Limit how many Holidays to update.
     */
    limit?: number
  }

  /**
   * Holidays upsert
   */
  export type HolidaysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * The filter to search for the Holidays to update in case it exists.
     */
    where: HolidaysWhereUniqueInput
    /**
     * In case the Holidays found by the `where` argument doesn't exist, create a new Holidays with this data.
     */
    create: XOR<HolidaysCreateInput, HolidaysUncheckedCreateInput>
    /**
     * In case the Holidays was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidaysUpdateInput, HolidaysUncheckedUpdateInput>
  }

  /**
   * Holidays delete
   */
  export type HolidaysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
    /**
     * Filter which Holidays to delete.
     */
    where: HolidaysWhereUniqueInput
  }

  /**
   * Holidays deleteMany
   */
  export type HolidaysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidaysWhereInput
    /**
     * Limit how many Holidays to delete.
     */
    limit?: number
  }

  /**
   * Holidays without action
   */
  export type HolidaysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holidays
     */
    select?: HolidaysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holidays
     */
    omit?: HolidaysOmit<ExtArgs> | null
  }


  /**
   * Model Kintai
   */

  export type AggregateKintai = {
    _count: KintaiCountAggregateOutputType | null
    _avg: KintaiAvgAggregateOutputType | null
    _sum: KintaiSumAggregateOutputType | null
    _min: KintaiMinAggregateOutputType | null
    _max: KintaiMaxAggregateOutputType | null
  }

  export type KintaiAvgAggregateOutputType = {
    ki: number | null
  }

  export type KintaiSumAggregateOutputType = {
    ki: number | null
  }

  export type KintaiMinAggregateOutputType = {
    email: string | null
    date: string | null
    type: $Enums.HolidayType | null
    is_holiday: boolean | null
    paid_hours: string | null
    start: string | null
    end: string | null
    break: string | null
    work_hours: string | null
    late_night_work_hours: string | null
    ki: number | null
    yyyymm: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KintaiMaxAggregateOutputType = {
    email: string | null
    date: string | null
    type: $Enums.HolidayType | null
    is_holiday: boolean | null
    paid_hours: string | null
    start: string | null
    end: string | null
    break: string | null
    work_hours: string | null
    late_night_work_hours: string | null
    ki: number | null
    yyyymm: string | null
    memo: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type KintaiCountAggregateOutputType = {
    email: number
    date: number
    type: number
    is_holiday: number
    paid_hours: number
    start: number
    end: number
    break: number
    work_hours: number
    late_night_work_hours: number
    ki: number
    yyyymm: number
    memo: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type KintaiAvgAggregateInputType = {
    ki?: true
  }

  export type KintaiSumAggregateInputType = {
    ki?: true
  }

  export type KintaiMinAggregateInputType = {
    email?: true
    date?: true
    type?: true
    is_holiday?: true
    paid_hours?: true
    start?: true
    end?: true
    break?: true
    work_hours?: true
    late_night_work_hours?: true
    ki?: true
    yyyymm?: true
    memo?: true
    created_at?: true
    updated_at?: true
  }

  export type KintaiMaxAggregateInputType = {
    email?: true
    date?: true
    type?: true
    is_holiday?: true
    paid_hours?: true
    start?: true
    end?: true
    break?: true
    work_hours?: true
    late_night_work_hours?: true
    ki?: true
    yyyymm?: true
    memo?: true
    created_at?: true
    updated_at?: true
  }

  export type KintaiCountAggregateInputType = {
    email?: true
    date?: true
    type?: true
    is_holiday?: true
    paid_hours?: true
    start?: true
    end?: true
    break?: true
    work_hours?: true
    late_night_work_hours?: true
    ki?: true
    yyyymm?: true
    memo?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type KintaiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kintai to aggregate.
     */
    where?: KintaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kintais to fetch.
     */
    orderBy?: KintaiOrderByWithRelationInput | KintaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KintaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kintais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kintais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kintais
    **/
    _count?: true | KintaiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KintaiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KintaiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KintaiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KintaiMaxAggregateInputType
  }

  export type GetKintaiAggregateType<T extends KintaiAggregateArgs> = {
        [P in keyof T & keyof AggregateKintai]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKintai[P]>
      : GetScalarType<T[P], AggregateKintai[P]>
  }




  export type KintaiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KintaiWhereInput
    orderBy?: KintaiOrderByWithAggregationInput | KintaiOrderByWithAggregationInput[]
    by: KintaiScalarFieldEnum[] | KintaiScalarFieldEnum
    having?: KintaiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KintaiCountAggregateInputType | true
    _avg?: KintaiAvgAggregateInputType
    _sum?: KintaiSumAggregateInputType
    _min?: KintaiMinAggregateInputType
    _max?: KintaiMaxAggregateInputType
  }

  export type KintaiGroupByOutputType = {
    email: string
    date: string
    type: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours: string
    start: string
    end: string
    break: string
    work_hours: string
    late_night_work_hours: string
    ki: number
    yyyymm: string
    memo: string | null
    created_at: Date
    updated_at: Date
    _count: KintaiCountAggregateOutputType | null
    _avg: KintaiAvgAggregateOutputType | null
    _sum: KintaiSumAggregateOutputType | null
    _min: KintaiMinAggregateOutputType | null
    _max: KintaiMaxAggregateOutputType | null
  }

  type GetKintaiGroupByPayload<T extends KintaiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KintaiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KintaiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KintaiGroupByOutputType[P]>
            : GetScalarType<T[P], KintaiGroupByOutputType[P]>
        }
      >
    >


  export type KintaiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    date?: boolean
    type?: boolean
    is_holiday?: boolean
    paid_hours?: boolean
    start?: boolean
    end?: boolean
    break?: boolean
    work_hours?: boolean
    late_night_work_hours?: boolean
    ki?: boolean
    yyyymm?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kintai"]>

  export type KintaiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    date?: boolean
    type?: boolean
    is_holiday?: boolean
    paid_hours?: boolean
    start?: boolean
    end?: boolean
    break?: boolean
    work_hours?: boolean
    late_night_work_hours?: boolean
    ki?: boolean
    yyyymm?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kintai"]>

  export type KintaiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    date?: boolean
    type?: boolean
    is_holiday?: boolean
    paid_hours?: boolean
    start?: boolean
    end?: boolean
    break?: boolean
    work_hours?: boolean
    late_night_work_hours?: boolean
    ki?: boolean
    yyyymm?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kintai"]>

  export type KintaiSelectScalar = {
    email?: boolean
    date?: boolean
    type?: boolean
    is_holiday?: boolean
    paid_hours?: boolean
    start?: boolean
    end?: boolean
    break?: boolean
    work_hours?: boolean
    late_night_work_hours?: boolean
    ki?: boolean
    yyyymm?: boolean
    memo?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type KintaiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "date" | "type" | "is_holiday" | "paid_hours" | "start" | "end" | "break" | "work_hours" | "late_night_work_hours" | "ki" | "yyyymm" | "memo" | "created_at" | "updated_at", ExtArgs["result"]["kintai"]>
  export type KintaiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KintaiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KintaiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KintaiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kintai"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      date: string
      type: $Enums.HolidayType | null
      is_holiday: boolean
      paid_hours: string
      start: string
      end: string
      break: string
      work_hours: string
      late_night_work_hours: string
      ki: number
      yyyymm: string
      memo: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["kintai"]>
    composites: {}
  }

  type KintaiGetPayload<S extends boolean | null | undefined | KintaiDefaultArgs> = $Result.GetResult<Prisma.$KintaiPayload, S>

  type KintaiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KintaiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KintaiCountAggregateInputType | true
    }

  export interface KintaiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kintai'], meta: { name: 'Kintai' } }
    /**
     * Find zero or one Kintai that matches the filter.
     * @param {KintaiFindUniqueArgs} args - Arguments to find a Kintai
     * @example
     * // Get one Kintai
     * const kintai = await prisma.kintai.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KintaiFindUniqueArgs>(args: SelectSubset<T, KintaiFindUniqueArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kintai that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KintaiFindUniqueOrThrowArgs} args - Arguments to find a Kintai
     * @example
     * // Get one Kintai
     * const kintai = await prisma.kintai.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KintaiFindUniqueOrThrowArgs>(args: SelectSubset<T, KintaiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kintai that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiFindFirstArgs} args - Arguments to find a Kintai
     * @example
     * // Get one Kintai
     * const kintai = await prisma.kintai.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KintaiFindFirstArgs>(args?: SelectSubset<T, KintaiFindFirstArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kintai that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiFindFirstOrThrowArgs} args - Arguments to find a Kintai
     * @example
     * // Get one Kintai
     * const kintai = await prisma.kintai.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KintaiFindFirstOrThrowArgs>(args?: SelectSubset<T, KintaiFindFirstOrThrowArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kintais that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kintais
     * const kintais = await prisma.kintai.findMany()
     * 
     * // Get first 10 Kintais
     * const kintais = await prisma.kintai.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const kintaiWithEmailOnly = await prisma.kintai.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends KintaiFindManyArgs>(args?: SelectSubset<T, KintaiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kintai.
     * @param {KintaiCreateArgs} args - Arguments to create a Kintai.
     * @example
     * // Create one Kintai
     * const Kintai = await prisma.kintai.create({
     *   data: {
     *     // ... data to create a Kintai
     *   }
     * })
     * 
     */
    create<T extends KintaiCreateArgs>(args: SelectSubset<T, KintaiCreateArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kintais.
     * @param {KintaiCreateManyArgs} args - Arguments to create many Kintais.
     * @example
     * // Create many Kintais
     * const kintai = await prisma.kintai.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KintaiCreateManyArgs>(args?: SelectSubset<T, KintaiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kintais and returns the data saved in the database.
     * @param {KintaiCreateManyAndReturnArgs} args - Arguments to create many Kintais.
     * @example
     * // Create many Kintais
     * const kintai = await prisma.kintai.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kintais and only return the `email`
     * const kintaiWithEmailOnly = await prisma.kintai.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KintaiCreateManyAndReturnArgs>(args?: SelectSubset<T, KintaiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kintai.
     * @param {KintaiDeleteArgs} args - Arguments to delete one Kintai.
     * @example
     * // Delete one Kintai
     * const Kintai = await prisma.kintai.delete({
     *   where: {
     *     // ... filter to delete one Kintai
     *   }
     * })
     * 
     */
    delete<T extends KintaiDeleteArgs>(args: SelectSubset<T, KintaiDeleteArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kintai.
     * @param {KintaiUpdateArgs} args - Arguments to update one Kintai.
     * @example
     * // Update one Kintai
     * const kintai = await prisma.kintai.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KintaiUpdateArgs>(args: SelectSubset<T, KintaiUpdateArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kintais.
     * @param {KintaiDeleteManyArgs} args - Arguments to filter Kintais to delete.
     * @example
     * // Delete a few Kintais
     * const { count } = await prisma.kintai.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KintaiDeleteManyArgs>(args?: SelectSubset<T, KintaiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kintais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kintais
     * const kintai = await prisma.kintai.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KintaiUpdateManyArgs>(args: SelectSubset<T, KintaiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kintais and returns the data updated in the database.
     * @param {KintaiUpdateManyAndReturnArgs} args - Arguments to update many Kintais.
     * @example
     * // Update many Kintais
     * const kintai = await prisma.kintai.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kintais and only return the `email`
     * const kintaiWithEmailOnly = await prisma.kintai.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KintaiUpdateManyAndReturnArgs>(args: SelectSubset<T, KintaiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kintai.
     * @param {KintaiUpsertArgs} args - Arguments to update or create a Kintai.
     * @example
     * // Update or create a Kintai
     * const kintai = await prisma.kintai.upsert({
     *   create: {
     *     // ... data to create a Kintai
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kintai we want to update
     *   }
     * })
     */
    upsert<T extends KintaiUpsertArgs>(args: SelectSubset<T, KintaiUpsertArgs<ExtArgs>>): Prisma__KintaiClient<$Result.GetResult<Prisma.$KintaiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kintais.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiCountArgs} args - Arguments to filter Kintais to count.
     * @example
     * // Count the number of Kintais
     * const count = await prisma.kintai.count({
     *   where: {
     *     // ... the filter for the Kintais we want to count
     *   }
     * })
    **/
    count<T extends KintaiCountArgs>(
      args?: Subset<T, KintaiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KintaiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kintai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KintaiAggregateArgs>(args: Subset<T, KintaiAggregateArgs>): Prisma.PrismaPromise<GetKintaiAggregateType<T>>

    /**
     * Group by Kintai.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KintaiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KintaiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KintaiGroupByArgs['orderBy'] }
        : { orderBy?: KintaiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KintaiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKintaiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kintai model
   */
  readonly fields: KintaiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kintai.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KintaiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Kintai model
   */
  interface KintaiFieldRefs {
    readonly email: FieldRef<"Kintai", 'String'>
    readonly date: FieldRef<"Kintai", 'String'>
    readonly type: FieldRef<"Kintai", 'HolidayType'>
    readonly is_holiday: FieldRef<"Kintai", 'Boolean'>
    readonly paid_hours: FieldRef<"Kintai", 'String'>
    readonly start: FieldRef<"Kintai", 'String'>
    readonly end: FieldRef<"Kintai", 'String'>
    readonly break: FieldRef<"Kintai", 'String'>
    readonly work_hours: FieldRef<"Kintai", 'String'>
    readonly late_night_work_hours: FieldRef<"Kintai", 'String'>
    readonly ki: FieldRef<"Kintai", 'Int'>
    readonly yyyymm: FieldRef<"Kintai", 'String'>
    readonly memo: FieldRef<"Kintai", 'String'>
    readonly created_at: FieldRef<"Kintai", 'DateTime'>
    readonly updated_at: FieldRef<"Kintai", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kintai findUnique
   */
  export type KintaiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter, which Kintai to fetch.
     */
    where: KintaiWhereUniqueInput
  }

  /**
   * Kintai findUniqueOrThrow
   */
  export type KintaiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter, which Kintai to fetch.
     */
    where: KintaiWhereUniqueInput
  }

  /**
   * Kintai findFirst
   */
  export type KintaiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter, which Kintai to fetch.
     */
    where?: KintaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kintais to fetch.
     */
    orderBy?: KintaiOrderByWithRelationInput | KintaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kintais.
     */
    cursor?: KintaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kintais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kintais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kintais.
     */
    distinct?: KintaiScalarFieldEnum | KintaiScalarFieldEnum[]
  }

  /**
   * Kintai findFirstOrThrow
   */
  export type KintaiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter, which Kintai to fetch.
     */
    where?: KintaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kintais to fetch.
     */
    orderBy?: KintaiOrderByWithRelationInput | KintaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kintais.
     */
    cursor?: KintaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kintais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kintais.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kintais.
     */
    distinct?: KintaiScalarFieldEnum | KintaiScalarFieldEnum[]
  }

  /**
   * Kintai findMany
   */
  export type KintaiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter, which Kintais to fetch.
     */
    where?: KintaiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kintais to fetch.
     */
    orderBy?: KintaiOrderByWithRelationInput | KintaiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kintais.
     */
    cursor?: KintaiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kintais from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kintais.
     */
    skip?: number
    distinct?: KintaiScalarFieldEnum | KintaiScalarFieldEnum[]
  }

  /**
   * Kintai create
   */
  export type KintaiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * The data needed to create a Kintai.
     */
    data: XOR<KintaiCreateInput, KintaiUncheckedCreateInput>
  }

  /**
   * Kintai createMany
   */
  export type KintaiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kintais.
     */
    data: KintaiCreateManyInput | KintaiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kintai createManyAndReturn
   */
  export type KintaiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * The data used to create many Kintais.
     */
    data: KintaiCreateManyInput | KintaiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kintai update
   */
  export type KintaiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * The data needed to update a Kintai.
     */
    data: XOR<KintaiUpdateInput, KintaiUncheckedUpdateInput>
    /**
     * Choose, which Kintai to update.
     */
    where: KintaiWhereUniqueInput
  }

  /**
   * Kintai updateMany
   */
  export type KintaiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kintais.
     */
    data: XOR<KintaiUpdateManyMutationInput, KintaiUncheckedUpdateManyInput>
    /**
     * Filter which Kintais to update
     */
    where?: KintaiWhereInput
    /**
     * Limit how many Kintais to update.
     */
    limit?: number
  }

  /**
   * Kintai updateManyAndReturn
   */
  export type KintaiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * The data used to update Kintais.
     */
    data: XOR<KintaiUpdateManyMutationInput, KintaiUncheckedUpdateManyInput>
    /**
     * Filter which Kintais to update
     */
    where?: KintaiWhereInput
    /**
     * Limit how many Kintais to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kintai upsert
   */
  export type KintaiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * The filter to search for the Kintai to update in case it exists.
     */
    where: KintaiWhereUniqueInput
    /**
     * In case the Kintai found by the `where` argument doesn't exist, create a new Kintai with this data.
     */
    create: XOR<KintaiCreateInput, KintaiUncheckedCreateInput>
    /**
     * In case the Kintai was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KintaiUpdateInput, KintaiUncheckedUpdateInput>
  }

  /**
   * Kintai delete
   */
  export type KintaiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
    /**
     * Filter which Kintai to delete.
     */
    where: KintaiWhereUniqueInput
  }

  /**
   * Kintai deleteMany
   */
  export type KintaiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kintais to delete
     */
    where?: KintaiWhereInput
    /**
     * Limit how many Kintais to delete.
     */
    limit?: number
  }

  /**
   * Kintai without action
   */
  export type KintaiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kintai
     */
    select?: KintaiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kintai
     */
    omit?: KintaiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KintaiInclude<ExtArgs> | null
  }


  /**
   * Model AnnualYukyu
   */

  export type AggregateAnnualYukyu = {
    _count: AnnualYukyuCountAggregateOutputType | null
    _avg: AnnualYukyuAvgAggregateOutputType | null
    _sum: AnnualYukyuSumAggregateOutputType | null
    _min: AnnualYukyuMinAggregateOutputType | null
    _max: AnnualYukyuMaxAggregateOutputType | null
  }

  export type AnnualYukyuAvgAggregateOutputType = {
    ki: number | null
    grantedOrigin: number | null
    granted: number | null
    totalUsed: number | null
    prevPrevKurikoshi: number | null
    prevKurikoshi: number | null
    kurikoshiBeforeJiko: number | null
    jiko: number | null
    kurikoshi: number | null
    month01: number | null
    month02: number | null
    month03: number | null
    month04: number | null
    month05: number | null
    month06: number | null
    month07: number | null
    month08: number | null
    month09: number | null
    month10: number | null
    month11: number | null
    month12: number | null
  }

  export type AnnualYukyuSumAggregateOutputType = {
    ki: number | null
    grantedOrigin: number | null
    granted: number | null
    totalUsed: number | null
    prevPrevKurikoshi: number | null
    prevKurikoshi: number | null
    kurikoshiBeforeJiko: number | null
    jiko: number | null
    kurikoshi: number | null
    month01: number | null
    month02: number | null
    month03: number | null
    month04: number | null
    month05: number | null
    month06: number | null
    month07: number | null
    month08: number | null
    month09: number | null
    month10: number | null
    month11: number | null
    month12: number | null
  }

  export type AnnualYukyuMinAggregateOutputType = {
    email: string | null
    ki: number | null
    standardDate: string | null
    start: string | null
    end: string | null
    grantedOrigin: number | null
    granted: number | null
    totalUsed: number | null
    prevPrevKurikoshi: number | null
    prevKurikoshi: number | null
    kurikoshiBeforeJiko: number | null
    jiko: number | null
    kurikoshi: number | null
    month01: number | null
    month02: number | null
    month03: number | null
    month04: number | null
    month05: number | null
    month06: number | null
    month07: number | null
    month08: number | null
    month09: number | null
    month10: number | null
    month11: number | null
    month12: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnnualYukyuMaxAggregateOutputType = {
    email: string | null
    ki: number | null
    standardDate: string | null
    start: string | null
    end: string | null
    grantedOrigin: number | null
    granted: number | null
    totalUsed: number | null
    prevPrevKurikoshi: number | null
    prevKurikoshi: number | null
    kurikoshiBeforeJiko: number | null
    jiko: number | null
    kurikoshi: number | null
    month01: number | null
    month02: number | null
    month03: number | null
    month04: number | null
    month05: number | null
    month06: number | null
    month07: number | null
    month08: number | null
    month09: number | null
    month10: number | null
    month11: number | null
    month12: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnnualYukyuCountAggregateOutputType = {
    email: number
    ki: number
    standardDate: number
    start: number
    end: number
    grantedOrigin: number
    granted: number
    totalUsed: number
    prevPrevKurikoshi: number
    prevKurikoshi: number
    kurikoshiBeforeJiko: number
    jiko: number
    kurikoshi: number
    month01: number
    month02: number
    month03: number
    month04: number
    month05: number
    month06: number
    month07: number
    month08: number
    month09: number
    month10: number
    month11: number
    month12: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnnualYukyuAvgAggregateInputType = {
    ki?: true
    grantedOrigin?: true
    granted?: true
    totalUsed?: true
    prevPrevKurikoshi?: true
    prevKurikoshi?: true
    kurikoshiBeforeJiko?: true
    jiko?: true
    kurikoshi?: true
    month01?: true
    month02?: true
    month03?: true
    month04?: true
    month05?: true
    month06?: true
    month07?: true
    month08?: true
    month09?: true
    month10?: true
    month11?: true
    month12?: true
  }

  export type AnnualYukyuSumAggregateInputType = {
    ki?: true
    grantedOrigin?: true
    granted?: true
    totalUsed?: true
    prevPrevKurikoshi?: true
    prevKurikoshi?: true
    kurikoshiBeforeJiko?: true
    jiko?: true
    kurikoshi?: true
    month01?: true
    month02?: true
    month03?: true
    month04?: true
    month05?: true
    month06?: true
    month07?: true
    month08?: true
    month09?: true
    month10?: true
    month11?: true
    month12?: true
  }

  export type AnnualYukyuMinAggregateInputType = {
    email?: true
    ki?: true
    standardDate?: true
    start?: true
    end?: true
    grantedOrigin?: true
    granted?: true
    totalUsed?: true
    prevPrevKurikoshi?: true
    prevKurikoshi?: true
    kurikoshiBeforeJiko?: true
    jiko?: true
    kurikoshi?: true
    month01?: true
    month02?: true
    month03?: true
    month04?: true
    month05?: true
    month06?: true
    month07?: true
    month08?: true
    month09?: true
    month10?: true
    month11?: true
    month12?: true
    created_at?: true
    updated_at?: true
  }

  export type AnnualYukyuMaxAggregateInputType = {
    email?: true
    ki?: true
    standardDate?: true
    start?: true
    end?: true
    grantedOrigin?: true
    granted?: true
    totalUsed?: true
    prevPrevKurikoshi?: true
    prevKurikoshi?: true
    kurikoshiBeforeJiko?: true
    jiko?: true
    kurikoshi?: true
    month01?: true
    month02?: true
    month03?: true
    month04?: true
    month05?: true
    month06?: true
    month07?: true
    month08?: true
    month09?: true
    month10?: true
    month11?: true
    month12?: true
    created_at?: true
    updated_at?: true
  }

  export type AnnualYukyuCountAggregateInputType = {
    email?: true
    ki?: true
    standardDate?: true
    start?: true
    end?: true
    grantedOrigin?: true
    granted?: true
    totalUsed?: true
    prevPrevKurikoshi?: true
    prevKurikoshi?: true
    kurikoshiBeforeJiko?: true
    jiko?: true
    kurikoshi?: true
    month01?: true
    month02?: true
    month03?: true
    month04?: true
    month05?: true
    month06?: true
    month07?: true
    month08?: true
    month09?: true
    month10?: true
    month11?: true
    month12?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnnualYukyuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnualYukyu to aggregate.
     */
    where?: AnnualYukyuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnualYukyus to fetch.
     */
    orderBy?: AnnualYukyuOrderByWithRelationInput | AnnualYukyuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnualYukyuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnualYukyus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnualYukyus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnualYukyus
    **/
    _count?: true | AnnualYukyuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnualYukyuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnualYukyuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnualYukyuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnualYukyuMaxAggregateInputType
  }

  export type GetAnnualYukyuAggregateType<T extends AnnualYukyuAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnualYukyu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnualYukyu[P]>
      : GetScalarType<T[P], AggregateAnnualYukyu[P]>
  }




  export type AnnualYukyuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnualYukyuWhereInput
    orderBy?: AnnualYukyuOrderByWithAggregationInput | AnnualYukyuOrderByWithAggregationInput[]
    by: AnnualYukyuScalarFieldEnum[] | AnnualYukyuScalarFieldEnum
    having?: AnnualYukyuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnualYukyuCountAggregateInputType | true
    _avg?: AnnualYukyuAvgAggregateInputType
    _sum?: AnnualYukyuSumAggregateInputType
    _min?: AnnualYukyuMinAggregateInputType
    _max?: AnnualYukyuMaxAggregateInputType
  }

  export type AnnualYukyuGroupByOutputType = {
    email: string
    ki: number
    standardDate: string
    start: string
    end: string
    grantedOrigin: number
    granted: number
    totalUsed: number
    prevPrevKurikoshi: number
    prevKurikoshi: number
    kurikoshiBeforeJiko: number
    jiko: number
    kurikoshi: number
    month01: number
    month02: number
    month03: number
    month04: number
    month05: number
    month06: number
    month07: number
    month08: number
    month09: number
    month10: number
    month11: number
    month12: number
    created_at: Date
    updated_at: Date
    _count: AnnualYukyuCountAggregateOutputType | null
    _avg: AnnualYukyuAvgAggregateOutputType | null
    _sum: AnnualYukyuSumAggregateOutputType | null
    _min: AnnualYukyuMinAggregateOutputType | null
    _max: AnnualYukyuMaxAggregateOutputType | null
  }

  type GetAnnualYukyuGroupByPayload<T extends AnnualYukyuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnualYukyuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnualYukyuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnualYukyuGroupByOutputType[P]>
            : GetScalarType<T[P], AnnualYukyuGroupByOutputType[P]>
        }
      >
    >


  export type AnnualYukyuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    ki?: boolean
    standardDate?: boolean
    start?: boolean
    end?: boolean
    grantedOrigin?: boolean
    granted?: boolean
    totalUsed?: boolean
    prevPrevKurikoshi?: boolean
    prevKurikoshi?: boolean
    kurikoshiBeforeJiko?: boolean
    jiko?: boolean
    kurikoshi?: boolean
    month01?: boolean
    month02?: boolean
    month03?: boolean
    month04?: boolean
    month05?: boolean
    month06?: boolean
    month07?: boolean
    month08?: boolean
    month09?: boolean
    month10?: boolean
    month11?: boolean
    month12?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["annualYukyu"]>

  export type AnnualYukyuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    ki?: boolean
    standardDate?: boolean
    start?: boolean
    end?: boolean
    grantedOrigin?: boolean
    granted?: boolean
    totalUsed?: boolean
    prevPrevKurikoshi?: boolean
    prevKurikoshi?: boolean
    kurikoshiBeforeJiko?: boolean
    jiko?: boolean
    kurikoshi?: boolean
    month01?: boolean
    month02?: boolean
    month03?: boolean
    month04?: boolean
    month05?: boolean
    month06?: boolean
    month07?: boolean
    month08?: boolean
    month09?: boolean
    month10?: boolean
    month11?: boolean
    month12?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["annualYukyu"]>

  export type AnnualYukyuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    ki?: boolean
    standardDate?: boolean
    start?: boolean
    end?: boolean
    grantedOrigin?: boolean
    granted?: boolean
    totalUsed?: boolean
    prevPrevKurikoshi?: boolean
    prevKurikoshi?: boolean
    kurikoshiBeforeJiko?: boolean
    jiko?: boolean
    kurikoshi?: boolean
    month01?: boolean
    month02?: boolean
    month03?: boolean
    month04?: boolean
    month05?: boolean
    month06?: boolean
    month07?: boolean
    month08?: boolean
    month09?: boolean
    month10?: boolean
    month11?: boolean
    month12?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["annualYukyu"]>

  export type AnnualYukyuSelectScalar = {
    email?: boolean
    ki?: boolean
    standardDate?: boolean
    start?: boolean
    end?: boolean
    grantedOrigin?: boolean
    granted?: boolean
    totalUsed?: boolean
    prevPrevKurikoshi?: boolean
    prevKurikoshi?: boolean
    kurikoshiBeforeJiko?: boolean
    jiko?: boolean
    kurikoshi?: boolean
    month01?: boolean
    month02?: boolean
    month03?: boolean
    month04?: boolean
    month05?: boolean
    month06?: boolean
    month07?: boolean
    month08?: boolean
    month09?: boolean
    month10?: boolean
    month11?: boolean
    month12?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AnnualYukyuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "ki" | "standardDate" | "start" | "end" | "grantedOrigin" | "granted" | "totalUsed" | "prevPrevKurikoshi" | "prevKurikoshi" | "kurikoshiBeforeJiko" | "jiko" | "kurikoshi" | "month01" | "month02" | "month03" | "month04" | "month05" | "month06" | "month07" | "month08" | "month09" | "month10" | "month11" | "month12" | "created_at" | "updated_at", ExtArgs["result"]["annualYukyu"]>

  export type $AnnualYukyuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnualYukyu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      ki: number
      standardDate: string
      start: string
      end: string
      grantedOrigin: number
      granted: number
      totalUsed: number
      prevPrevKurikoshi: number
      prevKurikoshi: number
      kurikoshiBeforeJiko: number
      jiko: number
      kurikoshi: number
      month01: number
      month02: number
      month03: number
      month04: number
      month05: number
      month06: number
      month07: number
      month08: number
      month09: number
      month10: number
      month11: number
      month12: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["annualYukyu"]>
    composites: {}
  }

  type AnnualYukyuGetPayload<S extends boolean | null | undefined | AnnualYukyuDefaultArgs> = $Result.GetResult<Prisma.$AnnualYukyuPayload, S>

  type AnnualYukyuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnualYukyuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnualYukyuCountAggregateInputType | true
    }

  export interface AnnualYukyuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnualYukyu'], meta: { name: 'AnnualYukyu' } }
    /**
     * Find zero or one AnnualYukyu that matches the filter.
     * @param {AnnualYukyuFindUniqueArgs} args - Arguments to find a AnnualYukyu
     * @example
     * // Get one AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnualYukyuFindUniqueArgs>(args: SelectSubset<T, AnnualYukyuFindUniqueArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnualYukyu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnualYukyuFindUniqueOrThrowArgs} args - Arguments to find a AnnualYukyu
     * @example
     * // Get one AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnualYukyuFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnualYukyuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnualYukyu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuFindFirstArgs} args - Arguments to find a AnnualYukyu
     * @example
     * // Get one AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnualYukyuFindFirstArgs>(args?: SelectSubset<T, AnnualYukyuFindFirstArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnualYukyu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuFindFirstOrThrowArgs} args - Arguments to find a AnnualYukyu
     * @example
     * // Get one AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnualYukyuFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnualYukyuFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnualYukyus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnualYukyus
     * const annualYukyus = await prisma.annualYukyu.findMany()
     * 
     * // Get first 10 AnnualYukyus
     * const annualYukyus = await prisma.annualYukyu.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const annualYukyuWithEmailOnly = await prisma.annualYukyu.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends AnnualYukyuFindManyArgs>(args?: SelectSubset<T, AnnualYukyuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnualYukyu.
     * @param {AnnualYukyuCreateArgs} args - Arguments to create a AnnualYukyu.
     * @example
     * // Create one AnnualYukyu
     * const AnnualYukyu = await prisma.annualYukyu.create({
     *   data: {
     *     // ... data to create a AnnualYukyu
     *   }
     * })
     * 
     */
    create<T extends AnnualYukyuCreateArgs>(args: SelectSubset<T, AnnualYukyuCreateArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnualYukyus.
     * @param {AnnualYukyuCreateManyArgs} args - Arguments to create many AnnualYukyus.
     * @example
     * // Create many AnnualYukyus
     * const annualYukyu = await prisma.annualYukyu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnualYukyuCreateManyArgs>(args?: SelectSubset<T, AnnualYukyuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnualYukyus and returns the data saved in the database.
     * @param {AnnualYukyuCreateManyAndReturnArgs} args - Arguments to create many AnnualYukyus.
     * @example
     * // Create many AnnualYukyus
     * const annualYukyu = await prisma.annualYukyu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnualYukyus and only return the `email`
     * const annualYukyuWithEmailOnly = await prisma.annualYukyu.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnualYukyuCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnualYukyuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnualYukyu.
     * @param {AnnualYukyuDeleteArgs} args - Arguments to delete one AnnualYukyu.
     * @example
     * // Delete one AnnualYukyu
     * const AnnualYukyu = await prisma.annualYukyu.delete({
     *   where: {
     *     // ... filter to delete one AnnualYukyu
     *   }
     * })
     * 
     */
    delete<T extends AnnualYukyuDeleteArgs>(args: SelectSubset<T, AnnualYukyuDeleteArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnualYukyu.
     * @param {AnnualYukyuUpdateArgs} args - Arguments to update one AnnualYukyu.
     * @example
     * // Update one AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnualYukyuUpdateArgs>(args: SelectSubset<T, AnnualYukyuUpdateArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnualYukyus.
     * @param {AnnualYukyuDeleteManyArgs} args - Arguments to filter AnnualYukyus to delete.
     * @example
     * // Delete a few AnnualYukyus
     * const { count } = await prisma.annualYukyu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnualYukyuDeleteManyArgs>(args?: SelectSubset<T, AnnualYukyuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnualYukyus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnualYukyus
     * const annualYukyu = await prisma.annualYukyu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnualYukyuUpdateManyArgs>(args: SelectSubset<T, AnnualYukyuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnualYukyus and returns the data updated in the database.
     * @param {AnnualYukyuUpdateManyAndReturnArgs} args - Arguments to update many AnnualYukyus.
     * @example
     * // Update many AnnualYukyus
     * const annualYukyu = await prisma.annualYukyu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnualYukyus and only return the `email`
     * const annualYukyuWithEmailOnly = await prisma.annualYukyu.updateManyAndReturn({
     *   select: { email: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnualYukyuUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnualYukyuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnualYukyu.
     * @param {AnnualYukyuUpsertArgs} args - Arguments to update or create a AnnualYukyu.
     * @example
     * // Update or create a AnnualYukyu
     * const annualYukyu = await prisma.annualYukyu.upsert({
     *   create: {
     *     // ... data to create a AnnualYukyu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnualYukyu we want to update
     *   }
     * })
     */
    upsert<T extends AnnualYukyuUpsertArgs>(args: SelectSubset<T, AnnualYukyuUpsertArgs<ExtArgs>>): Prisma__AnnualYukyuClient<$Result.GetResult<Prisma.$AnnualYukyuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnualYukyus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuCountArgs} args - Arguments to filter AnnualYukyus to count.
     * @example
     * // Count the number of AnnualYukyus
     * const count = await prisma.annualYukyu.count({
     *   where: {
     *     // ... the filter for the AnnualYukyus we want to count
     *   }
     * })
    **/
    count<T extends AnnualYukyuCountArgs>(
      args?: Subset<T, AnnualYukyuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnualYukyuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnualYukyu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnualYukyuAggregateArgs>(args: Subset<T, AnnualYukyuAggregateArgs>): Prisma.PrismaPromise<GetAnnualYukyuAggregateType<T>>

    /**
     * Group by AnnualYukyu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnualYukyuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnualYukyuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnualYukyuGroupByArgs['orderBy'] }
        : { orderBy?: AnnualYukyuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnualYukyuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnualYukyuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnualYukyu model
   */
  readonly fields: AnnualYukyuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnualYukyu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnualYukyuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnnualYukyu model
   */
  interface AnnualYukyuFieldRefs {
    readonly email: FieldRef<"AnnualYukyu", 'String'>
    readonly ki: FieldRef<"AnnualYukyu", 'Int'>
    readonly standardDate: FieldRef<"AnnualYukyu", 'String'>
    readonly start: FieldRef<"AnnualYukyu", 'String'>
    readonly end: FieldRef<"AnnualYukyu", 'String'>
    readonly grantedOrigin: FieldRef<"AnnualYukyu", 'Int'>
    readonly granted: FieldRef<"AnnualYukyu", 'Int'>
    readonly totalUsed: FieldRef<"AnnualYukyu", 'Int'>
    readonly prevPrevKurikoshi: FieldRef<"AnnualYukyu", 'Int'>
    readonly prevKurikoshi: FieldRef<"AnnualYukyu", 'Int'>
    readonly kurikoshiBeforeJiko: FieldRef<"AnnualYukyu", 'Int'>
    readonly jiko: FieldRef<"AnnualYukyu", 'Int'>
    readonly kurikoshi: FieldRef<"AnnualYukyu", 'Int'>
    readonly month01: FieldRef<"AnnualYukyu", 'Int'>
    readonly month02: FieldRef<"AnnualYukyu", 'Int'>
    readonly month03: FieldRef<"AnnualYukyu", 'Int'>
    readonly month04: FieldRef<"AnnualYukyu", 'Int'>
    readonly month05: FieldRef<"AnnualYukyu", 'Int'>
    readonly month06: FieldRef<"AnnualYukyu", 'Int'>
    readonly month07: FieldRef<"AnnualYukyu", 'Int'>
    readonly month08: FieldRef<"AnnualYukyu", 'Int'>
    readonly month09: FieldRef<"AnnualYukyu", 'Int'>
    readonly month10: FieldRef<"AnnualYukyu", 'Int'>
    readonly month11: FieldRef<"AnnualYukyu", 'Int'>
    readonly month12: FieldRef<"AnnualYukyu", 'Int'>
    readonly created_at: FieldRef<"AnnualYukyu", 'DateTime'>
    readonly updated_at: FieldRef<"AnnualYukyu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnnualYukyu findUnique
   */
  export type AnnualYukyuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter, which AnnualYukyu to fetch.
     */
    where: AnnualYukyuWhereUniqueInput
  }

  /**
   * AnnualYukyu findUniqueOrThrow
   */
  export type AnnualYukyuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter, which AnnualYukyu to fetch.
     */
    where: AnnualYukyuWhereUniqueInput
  }

  /**
   * AnnualYukyu findFirst
   */
  export type AnnualYukyuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter, which AnnualYukyu to fetch.
     */
    where?: AnnualYukyuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnualYukyus to fetch.
     */
    orderBy?: AnnualYukyuOrderByWithRelationInput | AnnualYukyuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnualYukyus.
     */
    cursor?: AnnualYukyuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnualYukyus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnualYukyus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnualYukyus.
     */
    distinct?: AnnualYukyuScalarFieldEnum | AnnualYukyuScalarFieldEnum[]
  }

  /**
   * AnnualYukyu findFirstOrThrow
   */
  export type AnnualYukyuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter, which AnnualYukyu to fetch.
     */
    where?: AnnualYukyuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnualYukyus to fetch.
     */
    orderBy?: AnnualYukyuOrderByWithRelationInput | AnnualYukyuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnualYukyus.
     */
    cursor?: AnnualYukyuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnualYukyus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnualYukyus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnualYukyus.
     */
    distinct?: AnnualYukyuScalarFieldEnum | AnnualYukyuScalarFieldEnum[]
  }

  /**
   * AnnualYukyu findMany
   */
  export type AnnualYukyuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter, which AnnualYukyus to fetch.
     */
    where?: AnnualYukyuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnualYukyus to fetch.
     */
    orderBy?: AnnualYukyuOrderByWithRelationInput | AnnualYukyuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnualYukyus.
     */
    cursor?: AnnualYukyuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnualYukyus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnualYukyus.
     */
    skip?: number
    distinct?: AnnualYukyuScalarFieldEnum | AnnualYukyuScalarFieldEnum[]
  }

  /**
   * AnnualYukyu create
   */
  export type AnnualYukyuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * The data needed to create a AnnualYukyu.
     */
    data: XOR<AnnualYukyuCreateInput, AnnualYukyuUncheckedCreateInput>
  }

  /**
   * AnnualYukyu createMany
   */
  export type AnnualYukyuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnualYukyus.
     */
    data: AnnualYukyuCreateManyInput | AnnualYukyuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnualYukyu createManyAndReturn
   */
  export type AnnualYukyuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * The data used to create many AnnualYukyus.
     */
    data: AnnualYukyuCreateManyInput | AnnualYukyuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnualYukyu update
   */
  export type AnnualYukyuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * The data needed to update a AnnualYukyu.
     */
    data: XOR<AnnualYukyuUpdateInput, AnnualYukyuUncheckedUpdateInput>
    /**
     * Choose, which AnnualYukyu to update.
     */
    where: AnnualYukyuWhereUniqueInput
  }

  /**
   * AnnualYukyu updateMany
   */
  export type AnnualYukyuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnualYukyus.
     */
    data: XOR<AnnualYukyuUpdateManyMutationInput, AnnualYukyuUncheckedUpdateManyInput>
    /**
     * Filter which AnnualYukyus to update
     */
    where?: AnnualYukyuWhereInput
    /**
     * Limit how many AnnualYukyus to update.
     */
    limit?: number
  }

  /**
   * AnnualYukyu updateManyAndReturn
   */
  export type AnnualYukyuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * The data used to update AnnualYukyus.
     */
    data: XOR<AnnualYukyuUpdateManyMutationInput, AnnualYukyuUncheckedUpdateManyInput>
    /**
     * Filter which AnnualYukyus to update
     */
    where?: AnnualYukyuWhereInput
    /**
     * Limit how many AnnualYukyus to update.
     */
    limit?: number
  }

  /**
   * AnnualYukyu upsert
   */
  export type AnnualYukyuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * The filter to search for the AnnualYukyu to update in case it exists.
     */
    where: AnnualYukyuWhereUniqueInput
    /**
     * In case the AnnualYukyu found by the `where` argument doesn't exist, create a new AnnualYukyu with this data.
     */
    create: XOR<AnnualYukyuCreateInput, AnnualYukyuUncheckedCreateInput>
    /**
     * In case the AnnualYukyu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnualYukyuUpdateInput, AnnualYukyuUncheckedUpdateInput>
  }

  /**
   * AnnualYukyu delete
   */
  export type AnnualYukyuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
    /**
     * Filter which AnnualYukyu to delete.
     */
    where: AnnualYukyuWhereUniqueInput
  }

  /**
   * AnnualYukyu deleteMany
   */
  export type AnnualYukyuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnualYukyus to delete
     */
    where?: AnnualYukyuWhereInput
    /**
     * Limit how many AnnualYukyus to delete.
     */
    limit?: number
  }

  /**
   * AnnualYukyu without action
   */
  export type AnnualYukyuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnualYukyu
     */
    select?: AnnualYukyuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnualYukyu
     */
    omit?: AnnualYukyuOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    email: 'email',
    name: 'name',
    userNo: 'userNo',
    enter_date: 'enter_date',
    quit_date: 'quit_date',
    work_day_per_week: 'work_day_per_week',
    file_id: 'file_id',
    is_admin: 'is_admin',
    is_removed: 'is_removed',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserManagerScalarFieldEnum: {
    userEmail: 'userEmail',
    managerEmail: 'managerEmail',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserManagerScalarFieldEnum = (typeof UserManagerScalarFieldEnum)[keyof typeof UserManagerScalarFieldEnum]


  export const HolidaysScalarFieldEnum: {
    date: 'date',
    day_of_week: 'day_of_week',
    name: 'name',
    memo: 'memo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type HolidaysScalarFieldEnum = (typeof HolidaysScalarFieldEnum)[keyof typeof HolidaysScalarFieldEnum]


  export const KintaiScalarFieldEnum: {
    email: 'email',
    date: 'date',
    type: 'type',
    is_holiday: 'is_holiday',
    paid_hours: 'paid_hours',
    start: 'start',
    end: 'end',
    break: 'break',
    work_hours: 'work_hours',
    late_night_work_hours: 'late_night_work_hours',
    ki: 'ki',
    yyyymm: 'yyyymm',
    memo: 'memo',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type KintaiScalarFieldEnum = (typeof KintaiScalarFieldEnum)[keyof typeof KintaiScalarFieldEnum]


  export const AnnualYukyuScalarFieldEnum: {
    email: 'email',
    ki: 'ki',
    standardDate: 'standardDate',
    start: 'start',
    end: 'end',
    grantedOrigin: 'grantedOrigin',
    granted: 'granted',
    totalUsed: 'totalUsed',
    prevPrevKurikoshi: 'prevPrevKurikoshi',
    prevKurikoshi: 'prevKurikoshi',
    kurikoshiBeforeJiko: 'kurikoshiBeforeJiko',
    jiko: 'jiko',
    kurikoshi: 'kurikoshi',
    month01: 'month01',
    month02: 'month02',
    month03: 'month03',
    month04: 'month04',
    month05: 'month05',
    month06: 'month06',
    month07: 'month07',
    month08: 'month08',
    month09: 'month09',
    month10: 'month10',
    month11: 'month11',
    month12: 'month12',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnnualYukyuScalarFieldEnum = (typeof AnnualYukyuScalarFieldEnum)[keyof typeof AnnualYukyuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'HolidayType'
   */
  export type EnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType'>
    


  /**
   * Reference to a field of type 'HolidayType[]'
   */
  export type ListEnumHolidayTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HolidayType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    userNo?: IntFilter<"User"> | number
    enter_date?: StringFilter<"User"> | string
    quit_date?: StringNullableFilter<"User"> | string | null
    work_day_per_week?: IntFilter<"User"> | number
    file_id?: StringFilter<"User"> | string
    is_admin?: BoolFilter<"User"> | boolean
    is_removed?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    managers?: UserManagerListRelationFilter
    subordinates?: UserManagerListRelationFilter
    kintais?: KintaiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    email?: SortOrder
    name?: SortOrder
    userNo?: SortOrder
    enter_date?: SortOrder
    quit_date?: SortOrderInput | SortOrder
    work_day_per_week?: SortOrder
    file_id?: SortOrder
    is_admin?: SortOrder
    is_removed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    managers?: UserManagerOrderByRelationAggregateInput
    subordinates?: UserManagerOrderByRelationAggregateInput
    kintais?: KintaiOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    userNo?: number
    file_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    enter_date?: StringFilter<"User"> | string
    quit_date?: StringNullableFilter<"User"> | string | null
    work_day_per_week?: IntFilter<"User"> | number
    is_admin?: BoolFilter<"User"> | boolean
    is_removed?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    managers?: UserManagerListRelationFilter
    subordinates?: UserManagerListRelationFilter
    kintais?: KintaiListRelationFilter
  }, "email" | "userNo" | "file_id">

  export type UserOrderByWithAggregationInput = {
    email?: SortOrder
    name?: SortOrder
    userNo?: SortOrder
    enter_date?: SortOrder
    quit_date?: SortOrderInput | SortOrder
    work_day_per_week?: SortOrder
    file_id?: SortOrder
    is_admin?: SortOrder
    is_removed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    userNo?: IntWithAggregatesFilter<"User"> | number
    enter_date?: StringWithAggregatesFilter<"User"> | string
    quit_date?: StringNullableWithAggregatesFilter<"User"> | string | null
    work_day_per_week?: IntWithAggregatesFilter<"User"> | number
    file_id?: StringWithAggregatesFilter<"User"> | string
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    is_removed?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserManagerWhereInput = {
    AND?: UserManagerWhereInput | UserManagerWhereInput[]
    OR?: UserManagerWhereInput[]
    NOT?: UserManagerWhereInput | UserManagerWhereInput[]
    userEmail?: StringFilter<"UserManager"> | string
    managerEmail?: StringFilter<"UserManager"> | string
    created_at?: DateTimeFilter<"UserManager"> | Date | string
    updated_at?: DateTimeFilter<"UserManager"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserManagerOrderByWithRelationInput = {
    userEmail?: SortOrder
    managerEmail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
  }

  export type UserManagerWhereUniqueInput = Prisma.AtLeast<{
    userEmail_managerEmail?: UserManagerUserEmailManagerEmailCompoundUniqueInput
    AND?: UserManagerWhereInput | UserManagerWhereInput[]
    OR?: UserManagerWhereInput[]
    NOT?: UserManagerWhereInput | UserManagerWhereInput[]
    userEmail?: StringFilter<"UserManager"> | string
    managerEmail?: StringFilter<"UserManager"> | string
    created_at?: DateTimeFilter<"UserManager"> | Date | string
    updated_at?: DateTimeFilter<"UserManager"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    manager?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userEmail_managerEmail">

  export type UserManagerOrderByWithAggregationInput = {
    userEmail?: SortOrder
    managerEmail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserManagerCountOrderByAggregateInput
    _max?: UserManagerMaxOrderByAggregateInput
    _min?: UserManagerMinOrderByAggregateInput
  }

  export type UserManagerScalarWhereWithAggregatesInput = {
    AND?: UserManagerScalarWhereWithAggregatesInput | UserManagerScalarWhereWithAggregatesInput[]
    OR?: UserManagerScalarWhereWithAggregatesInput[]
    NOT?: UserManagerScalarWhereWithAggregatesInput | UserManagerScalarWhereWithAggregatesInput[]
    userEmail?: StringWithAggregatesFilter<"UserManager"> | string
    managerEmail?: StringWithAggregatesFilter<"UserManager"> | string
    created_at?: DateTimeWithAggregatesFilter<"UserManager"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"UserManager"> | Date | string
  }

  export type HolidaysWhereInput = {
    AND?: HolidaysWhereInput | HolidaysWhereInput[]
    OR?: HolidaysWhereInput[]
    NOT?: HolidaysWhereInput | HolidaysWhereInput[]
    date?: StringFilter<"Holidays"> | string
    day_of_week?: StringFilter<"Holidays"> | string
    name?: StringNullableFilter<"Holidays"> | string | null
    memo?: StringNullableFilter<"Holidays"> | string | null
    created_at?: DateTimeFilter<"Holidays"> | Date | string
    updated_at?: DateTimeFilter<"Holidays"> | Date | string
  }

  export type HolidaysOrderByWithRelationInput = {
    date?: SortOrder
    day_of_week?: SortOrder
    name?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HolidaysWhereUniqueInput = Prisma.AtLeast<{
    date?: string
    AND?: HolidaysWhereInput | HolidaysWhereInput[]
    OR?: HolidaysWhereInput[]
    NOT?: HolidaysWhereInput | HolidaysWhereInput[]
    day_of_week?: StringFilter<"Holidays"> | string
    name?: StringNullableFilter<"Holidays"> | string | null
    memo?: StringNullableFilter<"Holidays"> | string | null
    created_at?: DateTimeFilter<"Holidays"> | Date | string
    updated_at?: DateTimeFilter<"Holidays"> | Date | string
  }, "date">

  export type HolidaysOrderByWithAggregationInput = {
    date?: SortOrder
    day_of_week?: SortOrder
    name?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: HolidaysCountOrderByAggregateInput
    _max?: HolidaysMaxOrderByAggregateInput
    _min?: HolidaysMinOrderByAggregateInput
  }

  export type HolidaysScalarWhereWithAggregatesInput = {
    AND?: HolidaysScalarWhereWithAggregatesInput | HolidaysScalarWhereWithAggregatesInput[]
    OR?: HolidaysScalarWhereWithAggregatesInput[]
    NOT?: HolidaysScalarWhereWithAggregatesInput | HolidaysScalarWhereWithAggregatesInput[]
    date?: StringWithAggregatesFilter<"Holidays"> | string
    day_of_week?: StringWithAggregatesFilter<"Holidays"> | string
    name?: StringNullableWithAggregatesFilter<"Holidays"> | string | null
    memo?: StringNullableWithAggregatesFilter<"Holidays"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Holidays"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Holidays"> | Date | string
  }

  export type KintaiWhereInput = {
    AND?: KintaiWhereInput | KintaiWhereInput[]
    OR?: KintaiWhereInput[]
    NOT?: KintaiWhereInput | KintaiWhereInput[]
    email?: StringFilter<"Kintai"> | string
    date?: StringFilter<"Kintai"> | string
    type?: EnumHolidayTypeNullableFilter<"Kintai"> | $Enums.HolidayType | null
    is_holiday?: BoolFilter<"Kintai"> | boolean
    paid_hours?: StringFilter<"Kintai"> | string
    start?: StringFilter<"Kintai"> | string
    end?: StringFilter<"Kintai"> | string
    break?: StringFilter<"Kintai"> | string
    work_hours?: StringFilter<"Kintai"> | string
    late_night_work_hours?: StringFilter<"Kintai"> | string
    ki?: IntFilter<"Kintai"> | number
    yyyymm?: StringFilter<"Kintai"> | string
    memo?: StringNullableFilter<"Kintai"> | string | null
    created_at?: DateTimeFilter<"Kintai"> | Date | string
    updated_at?: DateTimeFilter<"Kintai"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type KintaiOrderByWithRelationInput = {
    email?: SortOrder
    date?: SortOrder
    type?: SortOrderInput | SortOrder
    is_holiday?: SortOrder
    paid_hours?: SortOrder
    start?: SortOrder
    end?: SortOrder
    break?: SortOrder
    work_hours?: SortOrder
    late_night_work_hours?: SortOrder
    ki?: SortOrder
    yyyymm?: SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type KintaiWhereUniqueInput = Prisma.AtLeast<{
    email_date?: KintaiEmailDateCompoundUniqueInput
    AND?: KintaiWhereInput | KintaiWhereInput[]
    OR?: KintaiWhereInput[]
    NOT?: KintaiWhereInput | KintaiWhereInput[]
    email?: StringFilter<"Kintai"> | string
    date?: StringFilter<"Kintai"> | string
    type?: EnumHolidayTypeNullableFilter<"Kintai"> | $Enums.HolidayType | null
    is_holiday?: BoolFilter<"Kintai"> | boolean
    paid_hours?: StringFilter<"Kintai"> | string
    start?: StringFilter<"Kintai"> | string
    end?: StringFilter<"Kintai"> | string
    break?: StringFilter<"Kintai"> | string
    work_hours?: StringFilter<"Kintai"> | string
    late_night_work_hours?: StringFilter<"Kintai"> | string
    ki?: IntFilter<"Kintai"> | number
    yyyymm?: StringFilter<"Kintai"> | string
    memo?: StringNullableFilter<"Kintai"> | string | null
    created_at?: DateTimeFilter<"Kintai"> | Date | string
    updated_at?: DateTimeFilter<"Kintai"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "email_date">

  export type KintaiOrderByWithAggregationInput = {
    email?: SortOrder
    date?: SortOrder
    type?: SortOrderInput | SortOrder
    is_holiday?: SortOrder
    paid_hours?: SortOrder
    start?: SortOrder
    end?: SortOrder
    break?: SortOrder
    work_hours?: SortOrder
    late_night_work_hours?: SortOrder
    ki?: SortOrder
    yyyymm?: SortOrder
    memo?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: KintaiCountOrderByAggregateInput
    _avg?: KintaiAvgOrderByAggregateInput
    _max?: KintaiMaxOrderByAggregateInput
    _min?: KintaiMinOrderByAggregateInput
    _sum?: KintaiSumOrderByAggregateInput
  }

  export type KintaiScalarWhereWithAggregatesInput = {
    AND?: KintaiScalarWhereWithAggregatesInput | KintaiScalarWhereWithAggregatesInput[]
    OR?: KintaiScalarWhereWithAggregatesInput[]
    NOT?: KintaiScalarWhereWithAggregatesInput | KintaiScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"Kintai"> | string
    date?: StringWithAggregatesFilter<"Kintai"> | string
    type?: EnumHolidayTypeNullableWithAggregatesFilter<"Kintai"> | $Enums.HolidayType | null
    is_holiday?: BoolWithAggregatesFilter<"Kintai"> | boolean
    paid_hours?: StringWithAggregatesFilter<"Kintai"> | string
    start?: StringWithAggregatesFilter<"Kintai"> | string
    end?: StringWithAggregatesFilter<"Kintai"> | string
    break?: StringWithAggregatesFilter<"Kintai"> | string
    work_hours?: StringWithAggregatesFilter<"Kintai"> | string
    late_night_work_hours?: StringWithAggregatesFilter<"Kintai"> | string
    ki?: IntWithAggregatesFilter<"Kintai"> | number
    yyyymm?: StringWithAggregatesFilter<"Kintai"> | string
    memo?: StringNullableWithAggregatesFilter<"Kintai"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Kintai"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Kintai"> | Date | string
  }

  export type AnnualYukyuWhereInput = {
    AND?: AnnualYukyuWhereInput | AnnualYukyuWhereInput[]
    OR?: AnnualYukyuWhereInput[]
    NOT?: AnnualYukyuWhereInput | AnnualYukyuWhereInput[]
    email?: StringFilter<"AnnualYukyu"> | string
    ki?: IntFilter<"AnnualYukyu"> | number
    standardDate?: StringFilter<"AnnualYukyu"> | string
    start?: StringFilter<"AnnualYukyu"> | string
    end?: StringFilter<"AnnualYukyu"> | string
    grantedOrigin?: IntFilter<"AnnualYukyu"> | number
    granted?: IntFilter<"AnnualYukyu"> | number
    totalUsed?: IntFilter<"AnnualYukyu"> | number
    prevPrevKurikoshi?: IntFilter<"AnnualYukyu"> | number
    prevKurikoshi?: IntFilter<"AnnualYukyu"> | number
    kurikoshiBeforeJiko?: IntFilter<"AnnualYukyu"> | number
    jiko?: IntFilter<"AnnualYukyu"> | number
    kurikoshi?: IntFilter<"AnnualYukyu"> | number
    month01?: IntFilter<"AnnualYukyu"> | number
    month02?: IntFilter<"AnnualYukyu"> | number
    month03?: IntFilter<"AnnualYukyu"> | number
    month04?: IntFilter<"AnnualYukyu"> | number
    month05?: IntFilter<"AnnualYukyu"> | number
    month06?: IntFilter<"AnnualYukyu"> | number
    month07?: IntFilter<"AnnualYukyu"> | number
    month08?: IntFilter<"AnnualYukyu"> | number
    month09?: IntFilter<"AnnualYukyu"> | number
    month10?: IntFilter<"AnnualYukyu"> | number
    month11?: IntFilter<"AnnualYukyu"> | number
    month12?: IntFilter<"AnnualYukyu"> | number
    created_at?: DateTimeFilter<"AnnualYukyu"> | Date | string
    updated_at?: DateTimeFilter<"AnnualYukyu"> | Date | string
  }

  export type AnnualYukyuOrderByWithRelationInput = {
    email?: SortOrder
    ki?: SortOrder
    standardDate?: SortOrder
    start?: SortOrder
    end?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnnualYukyuWhereUniqueInput = Prisma.AtLeast<{
    email_ki?: AnnualYukyuEmailKiCompoundUniqueInput
    AND?: AnnualYukyuWhereInput | AnnualYukyuWhereInput[]
    OR?: AnnualYukyuWhereInput[]
    NOT?: AnnualYukyuWhereInput | AnnualYukyuWhereInput[]
    email?: StringFilter<"AnnualYukyu"> | string
    ki?: IntFilter<"AnnualYukyu"> | number
    standardDate?: StringFilter<"AnnualYukyu"> | string
    start?: StringFilter<"AnnualYukyu"> | string
    end?: StringFilter<"AnnualYukyu"> | string
    grantedOrigin?: IntFilter<"AnnualYukyu"> | number
    granted?: IntFilter<"AnnualYukyu"> | number
    totalUsed?: IntFilter<"AnnualYukyu"> | number
    prevPrevKurikoshi?: IntFilter<"AnnualYukyu"> | number
    prevKurikoshi?: IntFilter<"AnnualYukyu"> | number
    kurikoshiBeforeJiko?: IntFilter<"AnnualYukyu"> | number
    jiko?: IntFilter<"AnnualYukyu"> | number
    kurikoshi?: IntFilter<"AnnualYukyu"> | number
    month01?: IntFilter<"AnnualYukyu"> | number
    month02?: IntFilter<"AnnualYukyu"> | number
    month03?: IntFilter<"AnnualYukyu"> | number
    month04?: IntFilter<"AnnualYukyu"> | number
    month05?: IntFilter<"AnnualYukyu"> | number
    month06?: IntFilter<"AnnualYukyu"> | number
    month07?: IntFilter<"AnnualYukyu"> | number
    month08?: IntFilter<"AnnualYukyu"> | number
    month09?: IntFilter<"AnnualYukyu"> | number
    month10?: IntFilter<"AnnualYukyu"> | number
    month11?: IntFilter<"AnnualYukyu"> | number
    month12?: IntFilter<"AnnualYukyu"> | number
    created_at?: DateTimeFilter<"AnnualYukyu"> | Date | string
    updated_at?: DateTimeFilter<"AnnualYukyu"> | Date | string
  }, "email_ki">

  export type AnnualYukyuOrderByWithAggregationInput = {
    email?: SortOrder
    ki?: SortOrder
    standardDate?: SortOrder
    start?: SortOrder
    end?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AnnualYukyuCountOrderByAggregateInput
    _avg?: AnnualYukyuAvgOrderByAggregateInput
    _max?: AnnualYukyuMaxOrderByAggregateInput
    _min?: AnnualYukyuMinOrderByAggregateInput
    _sum?: AnnualYukyuSumOrderByAggregateInput
  }

  export type AnnualYukyuScalarWhereWithAggregatesInput = {
    AND?: AnnualYukyuScalarWhereWithAggregatesInput | AnnualYukyuScalarWhereWithAggregatesInput[]
    OR?: AnnualYukyuScalarWhereWithAggregatesInput[]
    NOT?: AnnualYukyuScalarWhereWithAggregatesInput | AnnualYukyuScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"AnnualYukyu"> | string
    ki?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    standardDate?: StringWithAggregatesFilter<"AnnualYukyu"> | string
    start?: StringWithAggregatesFilter<"AnnualYukyu"> | string
    end?: StringWithAggregatesFilter<"AnnualYukyu"> | string
    grantedOrigin?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    granted?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    totalUsed?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    prevPrevKurikoshi?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    prevKurikoshi?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    kurikoshiBeforeJiko?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    jiko?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    kurikoshi?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month01?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month02?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month03?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month04?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month05?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month06?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month07?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month08?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month09?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month10?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month11?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    month12?: IntWithAggregatesFilter<"AnnualYukyu"> | number
    created_at?: DateTimeWithAggregatesFilter<"AnnualYukyu"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AnnualYukyu"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerCreateNestedManyWithoutUserInput
    subordinates?: UserManagerCreateNestedManyWithoutManagerInput
    kintais?: KintaiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserManagerUncheckedCreateNestedManyWithoutManagerInput
    kintais?: KintaiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUpdateManyWithoutUserNestedInput
    subordinates?: UserManagerUpdateManyWithoutManagerNestedInput
    kintais?: KintaiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userNo?: IntFieldUpdateOperationsInput | number
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserManagerUncheckedUpdateManyWithoutManagerNestedInput
    kintais?: KintaiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userNo?: IntFieldUpdateOperationsInput | number
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutManagersInput
    manager: UserCreateNestedOneWithoutSubordinatesInput
  }

  export type UserManagerUncheckedCreateInput = {
    userEmail: string
    managerEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutManagersNestedInput
    manager?: UserUpdateOneRequiredWithoutSubordinatesNestedInput
  }

  export type UserManagerUncheckedUpdateInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    managerEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerCreateManyInput = {
    userEmail: string
    managerEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerUncheckedUpdateManyInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    managerEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidaysCreateInput = {
    date: string
    day_of_week: string
    name?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HolidaysUncheckedCreateInput = {
    date: string
    day_of_week: string
    name?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HolidaysUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    day_of_week?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidaysUncheckedUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    day_of_week?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidaysCreateManyInput = {
    date: string
    day_of_week: string
    name?: string | null
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type HolidaysUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    day_of_week?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HolidaysUncheckedUpdateManyInput = {
    date?: StringFieldUpdateOperationsInput | string
    day_of_week?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiCreateInput = {
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutKintaisInput
  }

  export type KintaiUncheckedCreateInput = {
    email: string
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KintaiUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutKintaisNestedInput
  }

  export type KintaiUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiCreateManyInput = {
    email: string
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KintaiUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnualYukyuCreateInput = {
    email: string
    ki: number
    standardDate: string
    start: string
    end: string
    grantedOrigin: number
    granted: number
    totalUsed?: number
    prevPrevKurikoshi?: number
    prevKurikoshi?: number
    kurikoshiBeforeJiko: number
    jiko: number
    kurikoshi: number
    month01?: number
    month02?: number
    month03?: number
    month04?: number
    month05?: number
    month06?: number
    month07?: number
    month08?: number
    month09?: number
    month10?: number
    month11?: number
    month12?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnnualYukyuUncheckedCreateInput = {
    email: string
    ki: number
    standardDate: string
    start: string
    end: string
    grantedOrigin: number
    granted: number
    totalUsed?: number
    prevPrevKurikoshi?: number
    prevKurikoshi?: number
    kurikoshiBeforeJiko: number
    jiko: number
    kurikoshi: number
    month01?: number
    month02?: number
    month03?: number
    month04?: number
    month05?: number
    month06?: number
    month07?: number
    month08?: number
    month09?: number
    month10?: number
    month11?: number
    month12?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnnualYukyuUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    standardDate?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    grantedOrigin?: IntFieldUpdateOperationsInput | number
    granted?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    prevPrevKurikoshi?: IntFieldUpdateOperationsInput | number
    prevKurikoshi?: IntFieldUpdateOperationsInput | number
    kurikoshiBeforeJiko?: IntFieldUpdateOperationsInput | number
    jiko?: IntFieldUpdateOperationsInput | number
    kurikoshi?: IntFieldUpdateOperationsInput | number
    month01?: IntFieldUpdateOperationsInput | number
    month02?: IntFieldUpdateOperationsInput | number
    month03?: IntFieldUpdateOperationsInput | number
    month04?: IntFieldUpdateOperationsInput | number
    month05?: IntFieldUpdateOperationsInput | number
    month06?: IntFieldUpdateOperationsInput | number
    month07?: IntFieldUpdateOperationsInput | number
    month08?: IntFieldUpdateOperationsInput | number
    month09?: IntFieldUpdateOperationsInput | number
    month10?: IntFieldUpdateOperationsInput | number
    month11?: IntFieldUpdateOperationsInput | number
    month12?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnualYukyuUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    standardDate?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    grantedOrigin?: IntFieldUpdateOperationsInput | number
    granted?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    prevPrevKurikoshi?: IntFieldUpdateOperationsInput | number
    prevKurikoshi?: IntFieldUpdateOperationsInput | number
    kurikoshiBeforeJiko?: IntFieldUpdateOperationsInput | number
    jiko?: IntFieldUpdateOperationsInput | number
    kurikoshi?: IntFieldUpdateOperationsInput | number
    month01?: IntFieldUpdateOperationsInput | number
    month02?: IntFieldUpdateOperationsInput | number
    month03?: IntFieldUpdateOperationsInput | number
    month04?: IntFieldUpdateOperationsInput | number
    month05?: IntFieldUpdateOperationsInput | number
    month06?: IntFieldUpdateOperationsInput | number
    month07?: IntFieldUpdateOperationsInput | number
    month08?: IntFieldUpdateOperationsInput | number
    month09?: IntFieldUpdateOperationsInput | number
    month10?: IntFieldUpdateOperationsInput | number
    month11?: IntFieldUpdateOperationsInput | number
    month12?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnualYukyuCreateManyInput = {
    email: string
    ki: number
    standardDate: string
    start: string
    end: string
    grantedOrigin: number
    granted: number
    totalUsed?: number
    prevPrevKurikoshi?: number
    prevKurikoshi?: number
    kurikoshiBeforeJiko: number
    jiko: number
    kurikoshi: number
    month01?: number
    month02?: number
    month03?: number
    month04?: number
    month05?: number
    month06?: number
    month07?: number
    month08?: number
    month09?: number
    month10?: number
    month11?: number
    month12?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnnualYukyuUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    standardDate?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    grantedOrigin?: IntFieldUpdateOperationsInput | number
    granted?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    prevPrevKurikoshi?: IntFieldUpdateOperationsInput | number
    prevKurikoshi?: IntFieldUpdateOperationsInput | number
    kurikoshiBeforeJiko?: IntFieldUpdateOperationsInput | number
    jiko?: IntFieldUpdateOperationsInput | number
    kurikoshi?: IntFieldUpdateOperationsInput | number
    month01?: IntFieldUpdateOperationsInput | number
    month02?: IntFieldUpdateOperationsInput | number
    month03?: IntFieldUpdateOperationsInput | number
    month04?: IntFieldUpdateOperationsInput | number
    month05?: IntFieldUpdateOperationsInput | number
    month06?: IntFieldUpdateOperationsInput | number
    month07?: IntFieldUpdateOperationsInput | number
    month08?: IntFieldUpdateOperationsInput | number
    month09?: IntFieldUpdateOperationsInput | number
    month10?: IntFieldUpdateOperationsInput | number
    month11?: IntFieldUpdateOperationsInput | number
    month12?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnualYukyuUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    standardDate?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    grantedOrigin?: IntFieldUpdateOperationsInput | number
    granted?: IntFieldUpdateOperationsInput | number
    totalUsed?: IntFieldUpdateOperationsInput | number
    prevPrevKurikoshi?: IntFieldUpdateOperationsInput | number
    prevKurikoshi?: IntFieldUpdateOperationsInput | number
    kurikoshiBeforeJiko?: IntFieldUpdateOperationsInput | number
    jiko?: IntFieldUpdateOperationsInput | number
    kurikoshi?: IntFieldUpdateOperationsInput | number
    month01?: IntFieldUpdateOperationsInput | number
    month02?: IntFieldUpdateOperationsInput | number
    month03?: IntFieldUpdateOperationsInput | number
    month04?: IntFieldUpdateOperationsInput | number
    month05?: IntFieldUpdateOperationsInput | number
    month06?: IntFieldUpdateOperationsInput | number
    month07?: IntFieldUpdateOperationsInput | number
    month08?: IntFieldUpdateOperationsInput | number
    month09?: IntFieldUpdateOperationsInput | number
    month10?: IntFieldUpdateOperationsInput | number
    month11?: IntFieldUpdateOperationsInput | number
    month12?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserManagerListRelationFilter = {
    every?: UserManagerWhereInput
    some?: UserManagerWhereInput
    none?: UserManagerWhereInput
  }

  export type KintaiListRelationFilter = {
    every?: KintaiWhereInput
    some?: KintaiWhereInput
    none?: KintaiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserManagerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KintaiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    userNo?: SortOrder
    enter_date?: SortOrder
    quit_date?: SortOrder
    work_day_per_week?: SortOrder
    file_id?: SortOrder
    is_admin?: SortOrder
    is_removed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userNo?: SortOrder
    work_day_per_week?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    userNo?: SortOrder
    enter_date?: SortOrder
    quit_date?: SortOrder
    work_day_per_week?: SortOrder
    file_id?: SortOrder
    is_admin?: SortOrder
    is_removed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    email?: SortOrder
    name?: SortOrder
    userNo?: SortOrder
    enter_date?: SortOrder
    quit_date?: SortOrder
    work_day_per_week?: SortOrder
    file_id?: SortOrder
    is_admin?: SortOrder
    is_removed?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userNo?: SortOrder
    work_day_per_week?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserManagerUserEmailManagerEmailCompoundUniqueInput = {
    userEmail: string
    managerEmail: string
  }

  export type UserManagerCountOrderByAggregateInput = {
    userEmail?: SortOrder
    managerEmail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserManagerMaxOrderByAggregateInput = {
    userEmail?: SortOrder
    managerEmail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserManagerMinOrderByAggregateInput = {
    userEmail?: SortOrder
    managerEmail?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HolidaysCountOrderByAggregateInput = {
    date?: SortOrder
    day_of_week?: SortOrder
    name?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HolidaysMaxOrderByAggregateInput = {
    date?: SortOrder
    day_of_week?: SortOrder
    name?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type HolidaysMinOrderByAggregateInput = {
    date?: SortOrder
    day_of_week?: SortOrder
    name?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumHolidayTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHolidayTypeNullableFilter<$PrismaModel> | $Enums.HolidayType | null
  }

  export type KintaiEmailDateCompoundUniqueInput = {
    email: string
    date: string
  }

  export type KintaiCountOrderByAggregateInput = {
    email?: SortOrder
    date?: SortOrder
    type?: SortOrder
    is_holiday?: SortOrder
    paid_hours?: SortOrder
    start?: SortOrder
    end?: SortOrder
    break?: SortOrder
    work_hours?: SortOrder
    late_night_work_hours?: SortOrder
    ki?: SortOrder
    yyyymm?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KintaiAvgOrderByAggregateInput = {
    ki?: SortOrder
  }

  export type KintaiMaxOrderByAggregateInput = {
    email?: SortOrder
    date?: SortOrder
    type?: SortOrder
    is_holiday?: SortOrder
    paid_hours?: SortOrder
    start?: SortOrder
    end?: SortOrder
    break?: SortOrder
    work_hours?: SortOrder
    late_night_work_hours?: SortOrder
    ki?: SortOrder
    yyyymm?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KintaiMinOrderByAggregateInput = {
    email?: SortOrder
    date?: SortOrder
    type?: SortOrder
    is_holiday?: SortOrder
    paid_hours?: SortOrder
    start?: SortOrder
    end?: SortOrder
    break?: SortOrder
    work_hours?: SortOrder
    late_night_work_hours?: SortOrder
    ki?: SortOrder
    yyyymm?: SortOrder
    memo?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type KintaiSumOrderByAggregateInput = {
    ki?: SortOrder
  }

  export type EnumHolidayTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHolidayTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeNullableFilter<$PrismaModel>
  }

  export type AnnualYukyuEmailKiCompoundUniqueInput = {
    email: string
    ki: number
  }

  export type AnnualYukyuCountOrderByAggregateInput = {
    email?: SortOrder
    ki?: SortOrder
    standardDate?: SortOrder
    start?: SortOrder
    end?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnnualYukyuAvgOrderByAggregateInput = {
    ki?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
  }

  export type AnnualYukyuMaxOrderByAggregateInput = {
    email?: SortOrder
    ki?: SortOrder
    standardDate?: SortOrder
    start?: SortOrder
    end?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnnualYukyuMinOrderByAggregateInput = {
    email?: SortOrder
    ki?: SortOrder
    standardDate?: SortOrder
    start?: SortOrder
    end?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnnualYukyuSumOrderByAggregateInput = {
    ki?: SortOrder
    grantedOrigin?: SortOrder
    granted?: SortOrder
    totalUsed?: SortOrder
    prevPrevKurikoshi?: SortOrder
    prevKurikoshi?: SortOrder
    kurikoshiBeforeJiko?: SortOrder
    jiko?: SortOrder
    kurikoshi?: SortOrder
    month01?: SortOrder
    month02?: SortOrder
    month03?: SortOrder
    month04?: SortOrder
    month05?: SortOrder
    month06?: SortOrder
    month07?: SortOrder
    month08?: SortOrder
    month09?: SortOrder
    month10?: SortOrder
    month11?: SortOrder
    month12?: SortOrder
  }

  export type UserManagerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput> | UserManagerCreateWithoutUserInput[] | UserManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutUserInput | UserManagerCreateOrConnectWithoutUserInput[]
    createMany?: UserManagerCreateManyUserInputEnvelope
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
  }

  export type UserManagerCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput> | UserManagerCreateWithoutManagerInput[] | UserManagerUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutManagerInput | UserManagerCreateOrConnectWithoutManagerInput[]
    createMany?: UserManagerCreateManyManagerInputEnvelope
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
  }

  export type KintaiCreateNestedManyWithoutUserInput = {
    create?: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput> | KintaiCreateWithoutUserInput[] | KintaiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KintaiCreateOrConnectWithoutUserInput | KintaiCreateOrConnectWithoutUserInput[]
    createMany?: KintaiCreateManyUserInputEnvelope
    connect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
  }

  export type UserManagerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput> | UserManagerCreateWithoutUserInput[] | UserManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutUserInput | UserManagerCreateOrConnectWithoutUserInput[]
    createMany?: UserManagerCreateManyUserInputEnvelope
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
  }

  export type UserManagerUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput> | UserManagerCreateWithoutManagerInput[] | UserManagerUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutManagerInput | UserManagerCreateOrConnectWithoutManagerInput[]
    createMany?: UserManagerCreateManyManagerInputEnvelope
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
  }

  export type KintaiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput> | KintaiCreateWithoutUserInput[] | KintaiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KintaiCreateOrConnectWithoutUserInput | KintaiCreateOrConnectWithoutUserInput[]
    createMany?: KintaiCreateManyUserInputEnvelope
    connect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserManagerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput> | UserManagerCreateWithoutUserInput[] | UserManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutUserInput | UserManagerCreateOrConnectWithoutUserInput[]
    upsert?: UserManagerUpsertWithWhereUniqueWithoutUserInput | UserManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserManagerCreateManyUserInputEnvelope
    set?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    disconnect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    delete?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    update?: UserManagerUpdateWithWhereUniqueWithoutUserInput | UserManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserManagerUpdateManyWithWhereWithoutUserInput | UserManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
  }

  export type UserManagerUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput> | UserManagerCreateWithoutManagerInput[] | UserManagerUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutManagerInput | UserManagerCreateOrConnectWithoutManagerInput[]
    upsert?: UserManagerUpsertWithWhereUniqueWithoutManagerInput | UserManagerUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserManagerCreateManyManagerInputEnvelope
    set?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    disconnect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    delete?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    update?: UserManagerUpdateWithWhereUniqueWithoutManagerInput | UserManagerUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserManagerUpdateManyWithWhereWithoutManagerInput | UserManagerUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
  }

  export type KintaiUpdateManyWithoutUserNestedInput = {
    create?: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput> | KintaiCreateWithoutUserInput[] | KintaiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KintaiCreateOrConnectWithoutUserInput | KintaiCreateOrConnectWithoutUserInput[]
    upsert?: KintaiUpsertWithWhereUniqueWithoutUserInput | KintaiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KintaiCreateManyUserInputEnvelope
    set?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    disconnect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    delete?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    connect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    update?: KintaiUpdateWithWhereUniqueWithoutUserInput | KintaiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KintaiUpdateManyWithWhereWithoutUserInput | KintaiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KintaiScalarWhereInput | KintaiScalarWhereInput[]
  }

  export type UserManagerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput> | UserManagerCreateWithoutUserInput[] | UserManagerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutUserInput | UserManagerCreateOrConnectWithoutUserInput[]
    upsert?: UserManagerUpsertWithWhereUniqueWithoutUserInput | UserManagerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserManagerCreateManyUserInputEnvelope
    set?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    disconnect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    delete?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    update?: UserManagerUpdateWithWhereUniqueWithoutUserInput | UserManagerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserManagerUpdateManyWithWhereWithoutUserInput | UserManagerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
  }

  export type UserManagerUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput> | UserManagerCreateWithoutManagerInput[] | UserManagerUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserManagerCreateOrConnectWithoutManagerInput | UserManagerCreateOrConnectWithoutManagerInput[]
    upsert?: UserManagerUpsertWithWhereUniqueWithoutManagerInput | UserManagerUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserManagerCreateManyManagerInputEnvelope
    set?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    disconnect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    delete?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    connect?: UserManagerWhereUniqueInput | UserManagerWhereUniqueInput[]
    update?: UserManagerUpdateWithWhereUniqueWithoutManagerInput | UserManagerUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserManagerUpdateManyWithWhereWithoutManagerInput | UserManagerUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
  }

  export type KintaiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput> | KintaiCreateWithoutUserInput[] | KintaiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KintaiCreateOrConnectWithoutUserInput | KintaiCreateOrConnectWithoutUserInput[]
    upsert?: KintaiUpsertWithWhereUniqueWithoutUserInput | KintaiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KintaiCreateManyUserInputEnvelope
    set?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    disconnect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    delete?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    connect?: KintaiWhereUniqueInput | KintaiWhereUniqueInput[]
    update?: KintaiUpdateWithWhereUniqueWithoutUserInput | KintaiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KintaiUpdateManyWithWhereWithoutUserInput | KintaiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KintaiScalarWhereInput | KintaiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutManagersInput = {
    create?: XOR<UserCreateWithoutManagersInput, UserUncheckedCreateWithoutManagersInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutManagersNestedInput = {
    create?: XOR<UserCreateWithoutManagersInput, UserUncheckedCreateWithoutManagersInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagersInput
    upsert?: UserUpsertWithoutManagersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagersInput, UserUpdateWithoutManagersInput>, UserUncheckedUpdateWithoutManagersInput>
  }

  export type UserUpdateOneRequiredWithoutSubordinatesNestedInput = {
    create?: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubordinatesInput
    upsert?: UserUpsertWithoutSubordinatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubordinatesInput, UserUpdateWithoutSubordinatesInput>, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserCreateNestedOneWithoutKintaisInput = {
    create?: XOR<UserCreateWithoutKintaisInput, UserUncheckedCreateWithoutKintaisInput>
    connectOrCreate?: UserCreateOrConnectWithoutKintaisInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumHolidayTypeFieldUpdateOperationsInput = {
    set?: $Enums.HolidayType | null
  }

  export type UserUpdateOneRequiredWithoutKintaisNestedInput = {
    create?: XOR<UserCreateWithoutKintaisInput, UserUncheckedCreateWithoutKintaisInput>
    connectOrCreate?: UserCreateOrConnectWithoutKintaisInput
    upsert?: UserUpsertWithoutKintaisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKintaisInput, UserUpdateWithoutKintaisInput>, UserUncheckedUpdateWithoutKintaisInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumHolidayTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHolidayTypeNullableFilter<$PrismaModel> | $Enums.HolidayType | null
  }

  export type NestedEnumHolidayTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HolidayType | EnumHolidayTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.HolidayType[] | ListEnumHolidayTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumHolidayTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.HolidayType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumHolidayTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumHolidayTypeNullableFilter<$PrismaModel>
  }

  export type UserManagerCreateWithoutUserInput = {
    created_at?: Date | string
    updated_at?: Date | string
    manager: UserCreateNestedOneWithoutSubordinatesInput
  }

  export type UserManagerUncheckedCreateWithoutUserInput = {
    managerEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerCreateOrConnectWithoutUserInput = {
    where: UserManagerWhereUniqueInput
    create: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput>
  }

  export type UserManagerCreateManyUserInputEnvelope = {
    data: UserManagerCreateManyUserInput | UserManagerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserManagerCreateWithoutManagerInput = {
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutManagersInput
  }

  export type UserManagerUncheckedCreateWithoutManagerInput = {
    userEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerCreateOrConnectWithoutManagerInput = {
    where: UserManagerWhereUniqueInput
    create: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput>
  }

  export type UserManagerCreateManyManagerInputEnvelope = {
    data: UserManagerCreateManyManagerInput | UserManagerCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type KintaiCreateWithoutUserInput = {
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KintaiUncheckedCreateWithoutUserInput = {
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KintaiCreateOrConnectWithoutUserInput = {
    where: KintaiWhereUniqueInput
    create: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput>
  }

  export type KintaiCreateManyUserInputEnvelope = {
    data: KintaiCreateManyUserInput | KintaiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserManagerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserManagerWhereUniqueInput
    update: XOR<UserManagerUpdateWithoutUserInput, UserManagerUncheckedUpdateWithoutUserInput>
    create: XOR<UserManagerCreateWithoutUserInput, UserManagerUncheckedCreateWithoutUserInput>
  }

  export type UserManagerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserManagerWhereUniqueInput
    data: XOR<UserManagerUpdateWithoutUserInput, UserManagerUncheckedUpdateWithoutUserInput>
  }

  export type UserManagerUpdateManyWithWhereWithoutUserInput = {
    where: UserManagerScalarWhereInput
    data: XOR<UserManagerUpdateManyMutationInput, UserManagerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserManagerScalarWhereInput = {
    AND?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
    OR?: UserManagerScalarWhereInput[]
    NOT?: UserManagerScalarWhereInput | UserManagerScalarWhereInput[]
    userEmail?: StringFilter<"UserManager"> | string
    managerEmail?: StringFilter<"UserManager"> | string
    created_at?: DateTimeFilter<"UserManager"> | Date | string
    updated_at?: DateTimeFilter<"UserManager"> | Date | string
  }

  export type UserManagerUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserManagerWhereUniqueInput
    update: XOR<UserManagerUpdateWithoutManagerInput, UserManagerUncheckedUpdateWithoutManagerInput>
    create: XOR<UserManagerCreateWithoutManagerInput, UserManagerUncheckedCreateWithoutManagerInput>
  }

  export type UserManagerUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserManagerWhereUniqueInput
    data: XOR<UserManagerUpdateWithoutManagerInput, UserManagerUncheckedUpdateWithoutManagerInput>
  }

  export type UserManagerUpdateManyWithWhereWithoutManagerInput = {
    where: UserManagerScalarWhereInput
    data: XOR<UserManagerUpdateManyMutationInput, UserManagerUncheckedUpdateManyWithoutManagerInput>
  }

  export type KintaiUpsertWithWhereUniqueWithoutUserInput = {
    where: KintaiWhereUniqueInput
    update: XOR<KintaiUpdateWithoutUserInput, KintaiUncheckedUpdateWithoutUserInput>
    create: XOR<KintaiCreateWithoutUserInput, KintaiUncheckedCreateWithoutUserInput>
  }

  export type KintaiUpdateWithWhereUniqueWithoutUserInput = {
    where: KintaiWhereUniqueInput
    data: XOR<KintaiUpdateWithoutUserInput, KintaiUncheckedUpdateWithoutUserInput>
  }

  export type KintaiUpdateManyWithWhereWithoutUserInput = {
    where: KintaiScalarWhereInput
    data: XOR<KintaiUpdateManyMutationInput, KintaiUncheckedUpdateManyWithoutUserInput>
  }

  export type KintaiScalarWhereInput = {
    AND?: KintaiScalarWhereInput | KintaiScalarWhereInput[]
    OR?: KintaiScalarWhereInput[]
    NOT?: KintaiScalarWhereInput | KintaiScalarWhereInput[]
    email?: StringFilter<"Kintai"> | string
    date?: StringFilter<"Kintai"> | string
    type?: EnumHolidayTypeNullableFilter<"Kintai"> | $Enums.HolidayType | null
    is_holiday?: BoolFilter<"Kintai"> | boolean
    paid_hours?: StringFilter<"Kintai"> | string
    start?: StringFilter<"Kintai"> | string
    end?: StringFilter<"Kintai"> | string
    break?: StringFilter<"Kintai"> | string
    work_hours?: StringFilter<"Kintai"> | string
    late_night_work_hours?: StringFilter<"Kintai"> | string
    ki?: IntFilter<"Kintai"> | number
    yyyymm?: StringFilter<"Kintai"> | string
    memo?: StringNullableFilter<"Kintai"> | string | null
    created_at?: DateTimeFilter<"Kintai"> | Date | string
    updated_at?: DateTimeFilter<"Kintai"> | Date | string
  }

  export type UserCreateWithoutManagersInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subordinates?: UserManagerCreateNestedManyWithoutManagerInput
    kintais?: KintaiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutManagersInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subordinates?: UserManagerUncheckedCreateNestedManyWithoutManagerInput
    kintais?: KintaiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutManagersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagersInput, UserUncheckedCreateWithoutManagersInput>
  }

  export type UserCreateWithoutSubordinatesInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerCreateNestedManyWithoutUserInput
    kintais?: KintaiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubordinatesInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerUncheckedCreateNestedManyWithoutUserInput
    kintais?: KintaiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubordinatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
  }

  export type UserUpsertWithoutManagersInput = {
    update: XOR<UserUpdateWithoutManagersInput, UserUncheckedUpdateWithoutManagersInput>
    create: XOR<UserCreateWithoutManagersInput, UserUncheckedCreateWithoutManagersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagersInput, UserUncheckedUpdateWithoutManagersInput>
  }

  export type UserUpdateWithoutManagersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserManagerUpdateManyWithoutManagerNestedInput
    kintais?: KintaiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutManagersInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userNo?: IntFieldUpdateOperationsInput | number
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subordinates?: UserManagerUncheckedUpdateManyWithoutManagerNestedInput
    kintais?: KintaiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutSubordinatesInput = {
    update: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<UserCreateWithoutSubordinatesInput, UserUncheckedCreateWithoutSubordinatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubordinatesInput, UserUncheckedUpdateWithoutSubordinatesInput>
  }

  export type UserUpdateWithoutSubordinatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUpdateManyWithoutUserNestedInput
    kintais?: KintaiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubordinatesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userNo?: IntFieldUpdateOperationsInput | number
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUncheckedUpdateManyWithoutUserNestedInput
    kintais?: KintaiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutKintaisInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerCreateNestedManyWithoutUserInput
    subordinates?: UserManagerCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutKintaisInput = {
    email: string
    name: string
    userNo?: number
    enter_date: string
    quit_date?: string | null
    work_day_per_week?: number
    file_id: string
    is_admin?: boolean
    is_removed?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    managers?: UserManagerUncheckedCreateNestedManyWithoutUserInput
    subordinates?: UserManagerUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutKintaisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKintaisInput, UserUncheckedCreateWithoutKintaisInput>
  }

  export type UserUpsertWithoutKintaisInput = {
    update: XOR<UserUpdateWithoutKintaisInput, UserUncheckedUpdateWithoutKintaisInput>
    create: XOR<UserCreateWithoutKintaisInput, UserUncheckedCreateWithoutKintaisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKintaisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKintaisInput, UserUncheckedUpdateWithoutKintaisInput>
  }

  export type UserUpdateWithoutKintaisInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUpdateManyWithoutUserNestedInput
    subordinates?: UserManagerUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutKintaisInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userNo?: IntFieldUpdateOperationsInput | number
    enter_date?: StringFieldUpdateOperationsInput | string
    quit_date?: NullableStringFieldUpdateOperationsInput | string | null
    work_day_per_week?: IntFieldUpdateOperationsInput | number
    file_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    is_removed?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    managers?: UserManagerUncheckedUpdateManyWithoutUserNestedInput
    subordinates?: UserManagerUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserManagerCreateManyUserInput = {
    managerEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerCreateManyManagerInput = {
    userEmail: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type KintaiCreateManyUserInput = {
    date: string
    type?: $Enums.HolidayType | null
    is_holiday: boolean
    paid_hours?: string
    start?: string
    end?: string
    break?: string
    work_hours?: string
    late_night_work_hours?: string
    ki?: number
    yyyymm?: string
    memo?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserManagerUpdateWithoutUserInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    manager?: UserUpdateOneRequiredWithoutSubordinatesNestedInput
  }

  export type UserManagerUncheckedUpdateWithoutUserInput = {
    managerEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerUncheckedUpdateManyWithoutUserInput = {
    managerEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerUpdateWithoutManagerInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutManagersNestedInput
  }

  export type UserManagerUncheckedUpdateWithoutManagerInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserManagerUncheckedUpdateManyWithoutManagerInput = {
    userEmail?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiUncheckedUpdateWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KintaiUncheckedUpdateManyWithoutUserInput = {
    date?: StringFieldUpdateOperationsInput | string
    type?: NullableEnumHolidayTypeFieldUpdateOperationsInput | $Enums.HolidayType | null
    is_holiday?: BoolFieldUpdateOperationsInput | boolean
    paid_hours?: StringFieldUpdateOperationsInput | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    break?: StringFieldUpdateOperationsInput | string
    work_hours?: StringFieldUpdateOperationsInput | string
    late_night_work_hours?: StringFieldUpdateOperationsInput | string
    ki?: IntFieldUpdateOperationsInput | number
    yyyymm?: StringFieldUpdateOperationsInput | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}