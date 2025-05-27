
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model QuestionTag
 * 
 */
export type QuestionTag = $Result.DefaultSelection<Prisma.$QuestionTagPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model StudyProgress
 * 
 */
export type StudyProgress = $Result.DefaultSelection<Prisma.$StudyProgressPayload>
/**
 * Model UserQuestionOrder
 * 
 */
export type UserQuestionOrder = $Result.DefaultSelection<Prisma.$UserQuestionOrderPayload>
/**
 * Model UserPreference
 * 
 */
export type UserPreference = $Result.DefaultSelection<Prisma.$UserPreferencePayload>
/**
 * Model QuizSession
 * 
 */
export type QuizSession = $Result.DefaultSelection<Prisma.$QuizSessionPayload>
/**
 * Model QuizQuestionResult
 * 
 */
export type QuizQuestionResult = $Result.DefaultSelection<Prisma.$QuizQuestionResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  CODING: 'CODING',
  THEORY: 'THEORY'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const DifficultyLevel: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const Theme: {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  SYSTEM: 'SYSTEM'
};

export type Theme = (typeof Theme)[keyof typeof Theme]


export const OrderType: {
  CUSTOM: 'CUSTOM',
  DEFAULT: 'DEFAULT'
};

export type OrderType = (typeof OrderType)[keyof typeof OrderType]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type Theme = $Enums.Theme

export const Theme: typeof $Enums.Theme

export type OrderType = $Enums.OrderType

export const OrderType: typeof $Enums.OrderType

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
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionTag`: Exposes CRUD operations for the **QuestionTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTags
    * const questionTags = await prisma.questionTag.findMany()
    * ```
    */
  get questionTag(): Prisma.QuestionTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studyProgress`: Exposes CRUD operations for the **StudyProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudyProgresses
    * const studyProgresses = await prisma.studyProgress.findMany()
    * ```
    */
  get studyProgress(): Prisma.StudyProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuestionOrder`: Exposes CRUD operations for the **UserQuestionOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestionOrders
    * const userQuestionOrders = await prisma.userQuestionOrder.findMany()
    * ```
    */
  get userQuestionOrder(): Prisma.UserQuestionOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreference`: Exposes CRUD operations for the **UserPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreference.findMany()
    * ```
    */
  get userPreference(): Prisma.UserPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizSession`: Exposes CRUD operations for the **QuizSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizSessions
    * const quizSessions = await prisma.quizSession.findMany()
    * ```
    */
  get quizSession(): Prisma.QuizSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quizQuestionResult`: Exposes CRUD operations for the **QuizQuestionResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuizQuestionResults
    * const quizQuestionResults = await prisma.quizQuestionResult.findMany()
    * ```
    */
  get quizQuestionResult(): Prisma.QuizQuestionResultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Question: 'Question',
    Tag: 'Tag',
    QuestionTag: 'QuestionTag',
    Note: 'Note',
    StudyProgress: 'StudyProgress',
    UserQuestionOrder: 'UserQuestionOrder',
    UserPreference: 'UserPreference',
    QuizSession: 'QuizSession',
    QuizQuestionResult: 'QuizQuestionResult'
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
      modelProps: "user" | "question" | "tag" | "questionTag" | "note" | "studyProgress" | "userQuestionOrder" | "userPreference" | "quizSession" | "quizQuestionResult"
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
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      QuestionTag: {
        payload: Prisma.$QuestionTagPayload<ExtArgs>
        fields: Prisma.QuestionTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          findFirst: {
            args: Prisma.QuestionTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          findMany: {
            args: Prisma.QuestionTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>[]
          }
          create: {
            args: Prisma.QuestionTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          createMany: {
            args: Prisma.QuestionTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>[]
          }
          delete: {
            args: Prisma.QuestionTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          update: {
            args: Prisma.QuestionTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          deleteMany: {
            args: Prisma.QuestionTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>[]
          }
          upsert: {
            args: Prisma.QuestionTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTagPayload>
          }
          aggregate: {
            args: Prisma.QuestionTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionTag>
          }
          groupBy: {
            args: Prisma.QuestionTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTagCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTagCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      StudyProgress: {
        payload: Prisma.$StudyProgressPayload<ExtArgs>
        fields: Prisma.StudyProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudyProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudyProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          findFirst: {
            args: Prisma.StudyProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudyProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          findMany: {
            args: Prisma.StudyProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>[]
          }
          create: {
            args: Prisma.StudyProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          createMany: {
            args: Prisma.StudyProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudyProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>[]
          }
          delete: {
            args: Prisma.StudyProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          update: {
            args: Prisma.StudyProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          deleteMany: {
            args: Prisma.StudyProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudyProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudyProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>[]
          }
          upsert: {
            args: Prisma.StudyProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudyProgressPayload>
          }
          aggregate: {
            args: Prisma.StudyProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudyProgress>
          }
          groupBy: {
            args: Prisma.StudyProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudyProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudyProgressCountArgs<ExtArgs>
            result: $Utils.Optional<StudyProgressCountAggregateOutputType> | number
          }
        }
      }
      UserQuestionOrder: {
        payload: Prisma.$UserQuestionOrderPayload<ExtArgs>
        fields: Prisma.UserQuestionOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestionOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestionOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          findFirst: {
            args: Prisma.UserQuestionOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestionOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          findMany: {
            args: Prisma.UserQuestionOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>[]
          }
          create: {
            args: Prisma.UserQuestionOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          createMany: {
            args: Prisma.UserQuestionOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserQuestionOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>[]
          }
          delete: {
            args: Prisma.UserQuestionOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          update: {
            args: Prisma.UserQuestionOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestionOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestionOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserQuestionOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>[]
          }
          upsert: {
            args: Prisma.UserQuestionOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionOrderPayload>
          }
          aggregate: {
            args: Prisma.UserQuestionOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuestionOrder>
          }
          groupBy: {
            args: Prisma.UserQuestionOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestionOrderCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionOrderCountAggregateOutputType> | number
          }
        }
      }
      UserPreference: {
        payload: Prisma.$UserPreferencePayload<ExtArgs>
        fields: Prisma.UserPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          findMany: {
            args: Prisma.UserPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          create: {
            args: Prisma.UserPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          createMany: {
            args: Prisma.UserPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          update: {
            args: Prisma.UserPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreference>
          }
          groupBy: {
            args: Prisma.UserPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferenceCountAggregateOutputType> | number
          }
        }
      }
      QuizSession: {
        payload: Prisma.$QuizSessionPayload<ExtArgs>
        fields: Prisma.QuizSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findFirst: {
            args: Prisma.QuizSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          findMany: {
            args: Prisma.QuizSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          create: {
            args: Prisma.QuizSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          createMany: {
            args: Prisma.QuizSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          delete: {
            args: Prisma.QuizSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          update: {
            args: Prisma.QuizSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          deleteMany: {
            args: Prisma.QuizSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>[]
          }
          upsert: {
            args: Prisma.QuizSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizSessionPayload>
          }
          aggregate: {
            args: Prisma.QuizSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizSession>
          }
          groupBy: {
            args: Prisma.QuizSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizSessionCountArgs<ExtArgs>
            result: $Utils.Optional<QuizSessionCountAggregateOutputType> | number
          }
        }
      }
      QuizQuestionResult: {
        payload: Prisma.$QuizQuestionResultPayload<ExtArgs>
        fields: Prisma.QuizQuestionResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizQuestionResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizQuestionResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          findFirst: {
            args: Prisma.QuizQuestionResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizQuestionResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          findMany: {
            args: Prisma.QuizQuestionResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>[]
          }
          create: {
            args: Prisma.QuizQuestionResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          createMany: {
            args: Prisma.QuizQuestionResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizQuestionResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>[]
          }
          delete: {
            args: Prisma.QuizQuestionResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          update: {
            args: Prisma.QuizQuestionResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          deleteMany: {
            args: Prisma.QuizQuestionResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizQuestionResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizQuestionResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>[]
          }
          upsert: {
            args: Prisma.QuizQuestionResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizQuestionResultPayload>
          }
          aggregate: {
            args: Prisma.QuizQuestionResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuizQuestionResult>
          }
          groupBy: {
            args: Prisma.QuizQuestionResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizQuestionResultCountArgs<ExtArgs>
            result: $Utils.Optional<QuizQuestionResultCountAggregateOutputType> | number
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
    question?: QuestionOmit
    tag?: TagOmit
    questionTag?: QuestionTagOmit
    note?: NoteOmit
    studyProgress?: StudyProgressOmit
    userQuestionOrder?: UserQuestionOrderOmit
    userPreference?: UserPreferenceOmit
    quizSession?: QuizSessionOmit
    quizQuestionResult?: QuizQuestionResultOmit
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
    questions: number
    notes: number
    studyProgress: number
    quizSessions: number
    questionOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UserCountOutputTypeCountQuestionsArgs
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    studyProgress?: boolean | UserCountOutputTypeCountStudyProgressArgs
    quizSessions?: boolean | UserCountOutputTypeCountQuizSessionsArgs
    questionOrders?: boolean | UserCountOutputTypeCountQuestionOrdersArgs
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
  export type UserCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionOrderWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    tags: number
    notes: number
    studyProgress: number
    quizResults: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | QuestionCountOutputTypeCountTagsArgs
    notes?: boolean | QuestionCountOutputTypeCountNotesArgs
    studyProgress?: boolean | QuestionCountOutputTypeCountStudyProgressArgs
    quizResults?: boolean | QuestionCountOutputTypeCountQuizResultsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTagWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountStudyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyProgressWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuizResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionResultWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    questions: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TagCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTagWhereInput
  }


  /**
   * Count Type QuizSessionCountOutputType
   */

  export type QuizSessionCountOutputType = {
    questionResults: number
  }

  export type QuizSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionResults?: boolean | QuizSessionCountOutputTypeCountQuestionResultsArgs
  }

  // Custom InputTypes
  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSessionCountOutputType
     */
    select?: QuizSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizSessionCountOutputType without action
   */
  export type QuizSessionCountOutputTypeCountQuestionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | User$questionsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    studyProgress?: boolean | User$studyProgressArgs<ExtArgs>
    quizSessions?: boolean | User$quizSessionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    questionOrders?: boolean | User$questionOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | User$questionsArgs<ExtArgs>
    notes?: boolean | User$notesArgs<ExtArgs>
    studyProgress?: boolean | User$studyProgressArgs<ExtArgs>
    quizSessions?: boolean | User$quizSessionsArgs<ExtArgs>
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    questionOrders?: boolean | User$questionOrdersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      studyProgress: Prisma.$StudyProgressPayload<ExtArgs>[]
      quizSessions: Prisma.$QuizSessionPayload<ExtArgs>[]
      preferences: Prisma.$UserPreferencePayload<ExtArgs> | null
      questionOrders: Prisma.$UserQuestionOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    questions<T extends User$questionsArgs<ExtArgs> = {}>(args?: Subset<T, User$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends User$notesArgs<ExtArgs> = {}>(args?: Subset<T, User$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyProgress<T extends User$studyProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$studyProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizSessions<T extends User$quizSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$quizSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questionOrders<T extends User$questionOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$questionOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.questions
   */
  export type User$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.notes
   */
  export type User$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * User.studyProgress
   */
  export type User$studyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    where?: StudyProgressWhereInput
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    cursor?: StudyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyProgressScalarFieldEnum | StudyProgressScalarFieldEnum[]
  }

  /**
   * User.quizSessions
   */
  export type User$quizSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    cursor?: QuizSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    where?: UserPreferenceWhereInput
  }

  /**
   * User.questionOrders
   */
  export type User$questionOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    where?: UserQuestionOrderWhereInput
    orderBy?: UserQuestionOrderOrderByWithRelationInput | UserQuestionOrderOrderByWithRelationInput[]
    cursor?: UserQuestionOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestionOrderScalarFieldEnum | UserQuestionOrderScalarFieldEnum[]
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
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type QuestionSumAggregateOutputType = {
    viewCount: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    question: string | null
    answer: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.DifficultyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    viewCount: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    question: string | null
    answer: string | null
    type: $Enums.QuestionType | null
    difficulty: $Enums.DifficultyLevel | null
    createdAt: Date | null
    updatedAt: Date | null
    isPublic: boolean | null
    viewCount: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    userId: number
    question: number
    answer: number
    type: number
    difficulty: number
    createdAt: number
    updatedAt: number
    isPublic: number
    viewCount: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    viewCount?: true
  }

  export type QuestionSumAggregateInputType = {
    viewCount?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    viewCount?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    viewCount?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    userId?: true
    question?: true
    answer?: true
    type?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    isPublic?: true
    viewCount?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt: Date
    updatedAt: Date
    isPublic: boolean
    viewCount: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    viewCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    notes?: boolean | Question$notesArgs<ExtArgs>
    studyProgress?: boolean | Question$studyProgressArgs<ExtArgs>
    quizResults?: boolean | Question$quizResultsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    viewCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    viewCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    userId?: boolean
    question?: boolean
    answer?: boolean
    type?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isPublic?: boolean
    viewCount?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "question" | "answer" | "type" | "difficulty" | "createdAt" | "updatedAt" | "isPublic" | "viewCount", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Question$tagsArgs<ExtArgs>
    notes?: boolean | Question$notesArgs<ExtArgs>
    studyProgress?: boolean | Question$studyProgressArgs<ExtArgs>
    quizResults?: boolean | Question$quizResultsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$QuestionTagPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      studyProgress: Prisma.$StudyProgressPayload<ExtArgs>[]
      quizResults: Prisma.$QuizQuestionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      question: string
      answer: string
      type: $Enums.QuestionType
      difficulty: $Enums.DifficultyLevel
      createdAt: Date
      updatedAt: Date
      isPublic: boolean
      viewCount: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Question$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Question$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Question$notesArgs<ExtArgs> = {}>(args?: Subset<T, Question$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studyProgress<T extends Question$studyProgressArgs<ExtArgs> = {}>(args?: Subset<T, Question$studyProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizResults<T extends Question$quizResultsArgs<ExtArgs> = {}>(args?: Subset<T, Question$quizResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly userId: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'QuestionType'>
    readonly difficulty: FieldRef<"Question", 'DifficultyLevel'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly isPublic: FieldRef<"Question", 'Boolean'>
    readonly viewCount: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.tags
   */
  export type Question$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    where?: QuestionTagWhereInput
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    cursor?: QuestionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[]
  }

  /**
   * Question.notes
   */
  export type Question$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Question.studyProgress
   */
  export type Question$studyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    where?: StudyProgressWhereInput
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    cursor?: StudyProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudyProgressScalarFieldEnum | StudyProgressScalarFieldEnum[]
  }

  /**
   * Question.quizResults
   */
  export type Question$quizResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    where?: QuizQuestionResultWhereInput
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    cursor?: QuizQuestionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionResultScalarFieldEnum | QuizQuestionResultScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    questions?: boolean | Tag$questionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Tag$questionsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      questions: Prisma.$QuestionTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Tag$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.questions
   */
  export type Tag$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    where?: QuestionTagWhereInput
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    cursor?: QuestionTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model QuestionTag
   */

  export type AggregateQuestionTag = {
    _count: QuestionTagCountAggregateOutputType | null
    _min: QuestionTagMinAggregateOutputType | null
    _max: QuestionTagMaxAggregateOutputType | null
  }

  export type QuestionTagMinAggregateOutputType = {
    questionId: string | null
    tagId: string | null
  }

  export type QuestionTagMaxAggregateOutputType = {
    questionId: string | null
    tagId: string | null
  }

  export type QuestionTagCountAggregateOutputType = {
    questionId: number
    tagId: number
    _all: number
  }


  export type QuestionTagMinAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type QuestionTagMaxAggregateInputType = {
    questionId?: true
    tagId?: true
  }

  export type QuestionTagCountAggregateInputType = {
    questionId?: true
    tagId?: true
    _all?: true
  }

  export type QuestionTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTag to aggregate.
     */
    where?: QuestionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTags
    **/
    _count?: true | QuestionTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTagMaxAggregateInputType
  }

  export type GetQuestionTagAggregateType<T extends QuestionTagAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionTag[P]>
      : GetScalarType<T[P], AggregateQuestionTag[P]>
  }




  export type QuestionTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTagWhereInput
    orderBy?: QuestionTagOrderByWithAggregationInput | QuestionTagOrderByWithAggregationInput[]
    by: QuestionTagScalarFieldEnum[] | QuestionTagScalarFieldEnum
    having?: QuestionTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTagCountAggregateInputType | true
    _min?: QuestionTagMinAggregateInputType
    _max?: QuestionTagMaxAggregateInputType
  }

  export type QuestionTagGroupByOutputType = {
    questionId: string
    tagId: string
    _count: QuestionTagCountAggregateOutputType | null
    _min: QuestionTagMinAggregateOutputType | null
    _max: QuestionTagMaxAggregateOutputType | null
  }

  type GetQuestionTagGroupByPayload<T extends QuestionTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTagGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTagGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    tagId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTag"]>

  export type QuestionTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    tagId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTag"]>

  export type QuestionTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    tagId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTag"]>

  export type QuestionTagSelectScalar = {
    questionId?: boolean
    tagId?: boolean
  }

  export type QuestionTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionId" | "tagId", ExtArgs["result"]["questionTag"]>
  export type QuestionTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type QuestionTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type QuestionTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $QuestionTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionTag"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      questionId: string
      tagId: string
    }, ExtArgs["result"]["questionTag"]>
    composites: {}
  }

  type QuestionTagGetPayload<S extends boolean | null | undefined | QuestionTagDefaultArgs> = $Result.GetResult<Prisma.$QuestionTagPayload, S>

  type QuestionTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionTagCountAggregateInputType | true
    }

  export interface QuestionTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionTag'], meta: { name: 'QuestionTag' } }
    /**
     * Find zero or one QuestionTag that matches the filter.
     * @param {QuestionTagFindUniqueArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTagFindUniqueArgs>(args: SelectSubset<T, QuestionTagFindUniqueArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTagFindUniqueOrThrowArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTagFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindFirstArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTagFindFirstArgs>(args?: SelectSubset<T, QuestionTagFindFirstArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindFirstOrThrowArgs} args - Arguments to find a QuestionTag
     * @example
     * // Get one QuestionTag
     * const questionTag = await prisma.questionTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTagFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTags
     * const questionTags = await prisma.questionTag.findMany()
     * 
     * // Get first 10 QuestionTags
     * const questionTags = await prisma.questionTag.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const questionTagWithQuestionIdOnly = await prisma.questionTag.findMany({ select: { questionId: true } })
     * 
     */
    findMany<T extends QuestionTagFindManyArgs>(args?: SelectSubset<T, QuestionTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionTag.
     * @param {QuestionTagCreateArgs} args - Arguments to create a QuestionTag.
     * @example
     * // Create one QuestionTag
     * const QuestionTag = await prisma.questionTag.create({
     *   data: {
     *     // ... data to create a QuestionTag
     *   }
     * })
     * 
     */
    create<T extends QuestionTagCreateArgs>(args: SelectSubset<T, QuestionTagCreateArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionTags.
     * @param {QuestionTagCreateManyArgs} args - Arguments to create many QuestionTags.
     * @example
     * // Create many QuestionTags
     * const questionTag = await prisma.questionTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTagCreateManyArgs>(args?: SelectSubset<T, QuestionTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionTags and returns the data saved in the database.
     * @param {QuestionTagCreateManyAndReturnArgs} args - Arguments to create many QuestionTags.
     * @example
     * // Create many QuestionTags
     * const questionTag = await prisma.questionTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionTags and only return the `questionId`
     * const questionTagWithQuestionIdOnly = await prisma.questionTag.createManyAndReturn({
     *   select: { questionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionTagCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionTag.
     * @param {QuestionTagDeleteArgs} args - Arguments to delete one QuestionTag.
     * @example
     * // Delete one QuestionTag
     * const QuestionTag = await prisma.questionTag.delete({
     *   where: {
     *     // ... filter to delete one QuestionTag
     *   }
     * })
     * 
     */
    delete<T extends QuestionTagDeleteArgs>(args: SelectSubset<T, QuestionTagDeleteArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionTag.
     * @param {QuestionTagUpdateArgs} args - Arguments to update one QuestionTag.
     * @example
     * // Update one QuestionTag
     * const questionTag = await prisma.questionTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTagUpdateArgs>(args: SelectSubset<T, QuestionTagUpdateArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionTags.
     * @param {QuestionTagDeleteManyArgs} args - Arguments to filter QuestionTags to delete.
     * @example
     * // Delete a few QuestionTags
     * const { count } = await prisma.questionTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTagDeleteManyArgs>(args?: SelectSubset<T, QuestionTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTags
     * const questionTag = await prisma.questionTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTagUpdateManyArgs>(args: SelectSubset<T, QuestionTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTags and returns the data updated in the database.
     * @param {QuestionTagUpdateManyAndReturnArgs} args - Arguments to update many QuestionTags.
     * @example
     * // Update many QuestionTags
     * const questionTag = await prisma.questionTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionTags and only return the `questionId`
     * const questionTagWithQuestionIdOnly = await prisma.questionTag.updateManyAndReturn({
     *   select: { questionId: true },
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
    updateManyAndReturn<T extends QuestionTagUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionTag.
     * @param {QuestionTagUpsertArgs} args - Arguments to update or create a QuestionTag.
     * @example
     * // Update or create a QuestionTag
     * const questionTag = await prisma.questionTag.upsert({
     *   create: {
     *     // ... data to create a QuestionTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTag we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTagUpsertArgs>(args: SelectSubset<T, QuestionTagUpsertArgs<ExtArgs>>): Prisma__QuestionTagClient<$Result.GetResult<Prisma.$QuestionTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagCountArgs} args - Arguments to filter QuestionTags to count.
     * @example
     * // Count the number of QuestionTags
     * const count = await prisma.questionTag.count({
     *   where: {
     *     // ... the filter for the QuestionTags we want to count
     *   }
     * })
    **/
    count<T extends QuestionTagCountArgs>(
      args?: Subset<T, QuestionTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionTagAggregateArgs>(args: Subset<T, QuestionTagAggregateArgs>): Prisma.PrismaPromise<GetQuestionTagAggregateType<T>>

    /**
     * Group by QuestionTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTagGroupByArgs} args - Group by arguments.
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
      T extends QuestionTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTagGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionTag model
   */
  readonly fields: QuestionTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionTag model
   */
  interface QuestionTagFieldRefs {
    readonly questionId: FieldRef<"QuestionTag", 'String'>
    readonly tagId: FieldRef<"QuestionTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuestionTag findUnique
   */
  export type QuestionTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTag to fetch.
     */
    where: QuestionTagWhereUniqueInput
  }

  /**
   * QuestionTag findUniqueOrThrow
   */
  export type QuestionTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTag to fetch.
     */
    where: QuestionTagWhereUniqueInput
  }

  /**
   * QuestionTag findFirst
   */
  export type QuestionTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTag to fetch.
     */
    where?: QuestionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTags.
     */
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[]
  }

  /**
   * QuestionTag findFirstOrThrow
   */
  export type QuestionTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTag to fetch.
     */
    where?: QuestionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTags.
     */
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[]
  }

  /**
   * QuestionTag findMany
   */
  export type QuestionTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTags to fetch.
     */
    where?: QuestionTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTags to fetch.
     */
    orderBy?: QuestionTagOrderByWithRelationInput | QuestionTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTags.
     */
    cursor?: QuestionTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTags.
     */
    skip?: number
    distinct?: QuestionTagScalarFieldEnum | QuestionTagScalarFieldEnum[]
  }

  /**
   * QuestionTag create
   */
  export type QuestionTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionTag.
     */
    data: XOR<QuestionTagCreateInput, QuestionTagUncheckedCreateInput>
  }

  /**
   * QuestionTag createMany
   */
  export type QuestionTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTags.
     */
    data: QuestionTagCreateManyInput | QuestionTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionTag createManyAndReturn
   */
  export type QuestionTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionTags.
     */
    data: QuestionTagCreateManyInput | QuestionTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTag update
   */
  export type QuestionTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionTag.
     */
    data: XOR<QuestionTagUpdateInput, QuestionTagUncheckedUpdateInput>
    /**
     * Choose, which QuestionTag to update.
     */
    where: QuestionTagWhereUniqueInput
  }

  /**
   * QuestionTag updateMany
   */
  export type QuestionTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTags.
     */
    data: XOR<QuestionTagUpdateManyMutationInput, QuestionTagUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTags to update
     */
    where?: QuestionTagWhereInput
    /**
     * Limit how many QuestionTags to update.
     */
    limit?: number
  }

  /**
   * QuestionTag updateManyAndReturn
   */
  export type QuestionTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * The data used to update QuestionTags.
     */
    data: XOR<QuestionTagUpdateManyMutationInput, QuestionTagUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTags to update
     */
    where?: QuestionTagWhereInput
    /**
     * Limit how many QuestionTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTag upsert
   */
  export type QuestionTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionTag to update in case it exists.
     */
    where: QuestionTagWhereUniqueInput
    /**
     * In case the QuestionTag found by the `where` argument doesn't exist, create a new QuestionTag with this data.
     */
    create: XOR<QuestionTagCreateInput, QuestionTagUncheckedCreateInput>
    /**
     * In case the QuestionTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTagUpdateInput, QuestionTagUncheckedUpdateInput>
  }

  /**
   * QuestionTag delete
   */
  export type QuestionTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
    /**
     * Filter which QuestionTag to delete.
     */
    where: QuestionTagWhereUniqueInput
  }

  /**
   * QuestionTag deleteMany
   */
  export type QuestionTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTags to delete
     */
    where?: QuestionTagWhereInput
    /**
     * Limit how many QuestionTags to delete.
     */
    limit?: number
  }

  /**
   * QuestionTag without action
   */
  export type QuestionTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTag
     */
    select?: QuestionTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTag
     */
    omit?: QuestionTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTagInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    position: number | null
  }

  export type NoteSumAggregateOutputType = {
    position: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    position: number | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    userId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    position: number | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    questionId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    position: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    position?: true
  }

  export type NoteSumAggregateInputType = {
    position?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    position?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    position?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    questionId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    position?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    questionId: string
    userId: string
    content: string
    createdAt: Date
    updatedAt: Date
    position: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    questionId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    position?: boolean
  }

  export type NoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "userId" | "content" | "createdAt" | "updatedAt" | "position", ExtArgs["result"]["note"]>
  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      userId: string
      content: string
      createdAt: Date
      updatedAt: Date
      position: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NoteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends NoteUpdateManyAndReturnArgs>(args: SelectSubset<T, NoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
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
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Note model
   */
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly questionId: FieldRef<"Note", 'String'>
    readonly userId: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
    readonly position: FieldRef<"Note", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Note updateManyAndReturn
   */
  export type NoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Note
     */
    omit?: NoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model StudyProgress
   */

  export type AggregateStudyProgress = {
    _count: StudyProgressCountAggregateOutputType | null
    _avg: StudyProgressAvgAggregateOutputType | null
    _sum: StudyProgressSumAggregateOutputType | null
    _min: StudyProgressMinAggregateOutputType | null
    _max: StudyProgressMaxAggregateOutputType | null
  }

  export type StudyProgressAvgAggregateOutputType = {
    studyCount: number | null
  }

  export type StudyProgressSumAggregateOutputType = {
    studyCount: number | null
  }

  export type StudyProgressMinAggregateOutputType = {
    userId: string | null
    questionId: string | null
    isStudied: boolean | null
    lastStudiedAt: Date | null
    studyCount: number | null
  }

  export type StudyProgressMaxAggregateOutputType = {
    userId: string | null
    questionId: string | null
    isStudied: boolean | null
    lastStudiedAt: Date | null
    studyCount: number | null
  }

  export type StudyProgressCountAggregateOutputType = {
    userId: number
    questionId: number
    isStudied: number
    lastStudiedAt: number
    studyCount: number
    _all: number
  }


  export type StudyProgressAvgAggregateInputType = {
    studyCount?: true
  }

  export type StudyProgressSumAggregateInputType = {
    studyCount?: true
  }

  export type StudyProgressMinAggregateInputType = {
    userId?: true
    questionId?: true
    isStudied?: true
    lastStudiedAt?: true
    studyCount?: true
  }

  export type StudyProgressMaxAggregateInputType = {
    userId?: true
    questionId?: true
    isStudied?: true
    lastStudiedAt?: true
    studyCount?: true
  }

  export type StudyProgressCountAggregateInputType = {
    userId?: true
    questionId?: true
    isStudied?: true
    lastStudiedAt?: true
    studyCount?: true
    _all?: true
  }

  export type StudyProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyProgress to aggregate.
     */
    where?: StudyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyProgresses to fetch.
     */
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudyProgresses
    **/
    _count?: true | StudyProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudyProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudyProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudyProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudyProgressMaxAggregateInputType
  }

  export type GetStudyProgressAggregateType<T extends StudyProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateStudyProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudyProgress[P]>
      : GetScalarType<T[P], AggregateStudyProgress[P]>
  }




  export type StudyProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudyProgressWhereInput
    orderBy?: StudyProgressOrderByWithAggregationInput | StudyProgressOrderByWithAggregationInput[]
    by: StudyProgressScalarFieldEnum[] | StudyProgressScalarFieldEnum
    having?: StudyProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudyProgressCountAggregateInputType | true
    _avg?: StudyProgressAvgAggregateInputType
    _sum?: StudyProgressSumAggregateInputType
    _min?: StudyProgressMinAggregateInputType
    _max?: StudyProgressMaxAggregateInputType
  }

  export type StudyProgressGroupByOutputType = {
    userId: string
    questionId: string
    isStudied: boolean
    lastStudiedAt: Date | null
    studyCount: number
    _count: StudyProgressCountAggregateOutputType | null
    _avg: StudyProgressAvgAggregateOutputType | null
    _sum: StudyProgressSumAggregateOutputType | null
    _min: StudyProgressMinAggregateOutputType | null
    _max: StudyProgressMaxAggregateOutputType | null
  }

  type GetStudyProgressGroupByPayload<T extends StudyProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudyProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudyProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudyProgressGroupByOutputType[P]>
            : GetScalarType<T[P], StudyProgressGroupByOutputType[P]>
        }
      >
    >


  export type StudyProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    questionId?: boolean
    isStudied?: boolean
    lastStudiedAt?: boolean
    studyCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyProgress"]>

  export type StudyProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    questionId?: boolean
    isStudied?: boolean
    lastStudiedAt?: boolean
    studyCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyProgress"]>

  export type StudyProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    questionId?: boolean
    isStudied?: boolean
    lastStudiedAt?: boolean
    studyCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studyProgress"]>

  export type StudyProgressSelectScalar = {
    userId?: boolean
    questionId?: boolean
    isStudied?: boolean
    lastStudiedAt?: boolean
    studyCount?: boolean
  }

  export type StudyProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "questionId" | "isStudied" | "lastStudiedAt" | "studyCount", ExtArgs["result"]["studyProgress"]>
  export type StudyProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type StudyProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type StudyProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $StudyProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudyProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      questionId: string
      isStudied: boolean
      lastStudiedAt: Date | null
      studyCount: number
    }, ExtArgs["result"]["studyProgress"]>
    composites: {}
  }

  type StudyProgressGetPayload<S extends boolean | null | undefined | StudyProgressDefaultArgs> = $Result.GetResult<Prisma.$StudyProgressPayload, S>

  type StudyProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudyProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudyProgressCountAggregateInputType | true
    }

  export interface StudyProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudyProgress'], meta: { name: 'StudyProgress' } }
    /**
     * Find zero or one StudyProgress that matches the filter.
     * @param {StudyProgressFindUniqueArgs} args - Arguments to find a StudyProgress
     * @example
     * // Get one StudyProgress
     * const studyProgress = await prisma.studyProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudyProgressFindUniqueArgs>(args: SelectSubset<T, StudyProgressFindUniqueArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudyProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudyProgressFindUniqueOrThrowArgs} args - Arguments to find a StudyProgress
     * @example
     * // Get one StudyProgress
     * const studyProgress = await prisma.studyProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudyProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, StudyProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressFindFirstArgs} args - Arguments to find a StudyProgress
     * @example
     * // Get one StudyProgress
     * const studyProgress = await prisma.studyProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudyProgressFindFirstArgs>(args?: SelectSubset<T, StudyProgressFindFirstArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudyProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressFindFirstOrThrowArgs} args - Arguments to find a StudyProgress
     * @example
     * // Get one StudyProgress
     * const studyProgress = await prisma.studyProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudyProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, StudyProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudyProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudyProgresses
     * const studyProgresses = await prisma.studyProgress.findMany()
     * 
     * // Get first 10 StudyProgresses
     * const studyProgresses = await prisma.studyProgress.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const studyProgressWithUserIdOnly = await prisma.studyProgress.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends StudyProgressFindManyArgs>(args?: SelectSubset<T, StudyProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudyProgress.
     * @param {StudyProgressCreateArgs} args - Arguments to create a StudyProgress.
     * @example
     * // Create one StudyProgress
     * const StudyProgress = await prisma.studyProgress.create({
     *   data: {
     *     // ... data to create a StudyProgress
     *   }
     * })
     * 
     */
    create<T extends StudyProgressCreateArgs>(args: SelectSubset<T, StudyProgressCreateArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudyProgresses.
     * @param {StudyProgressCreateManyArgs} args - Arguments to create many StudyProgresses.
     * @example
     * // Create many StudyProgresses
     * const studyProgress = await prisma.studyProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudyProgressCreateManyArgs>(args?: SelectSubset<T, StudyProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudyProgresses and returns the data saved in the database.
     * @param {StudyProgressCreateManyAndReturnArgs} args - Arguments to create many StudyProgresses.
     * @example
     * // Create many StudyProgresses
     * const studyProgress = await prisma.studyProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudyProgresses and only return the `userId`
     * const studyProgressWithUserIdOnly = await prisma.studyProgress.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudyProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, StudyProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudyProgress.
     * @param {StudyProgressDeleteArgs} args - Arguments to delete one StudyProgress.
     * @example
     * // Delete one StudyProgress
     * const StudyProgress = await prisma.studyProgress.delete({
     *   where: {
     *     // ... filter to delete one StudyProgress
     *   }
     * })
     * 
     */
    delete<T extends StudyProgressDeleteArgs>(args: SelectSubset<T, StudyProgressDeleteArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudyProgress.
     * @param {StudyProgressUpdateArgs} args - Arguments to update one StudyProgress.
     * @example
     * // Update one StudyProgress
     * const studyProgress = await prisma.studyProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudyProgressUpdateArgs>(args: SelectSubset<T, StudyProgressUpdateArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudyProgresses.
     * @param {StudyProgressDeleteManyArgs} args - Arguments to filter StudyProgresses to delete.
     * @example
     * // Delete a few StudyProgresses
     * const { count } = await prisma.studyProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudyProgressDeleteManyArgs>(args?: SelectSubset<T, StudyProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudyProgresses
     * const studyProgress = await prisma.studyProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudyProgressUpdateManyArgs>(args: SelectSubset<T, StudyProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudyProgresses and returns the data updated in the database.
     * @param {StudyProgressUpdateManyAndReturnArgs} args - Arguments to update many StudyProgresses.
     * @example
     * // Update many StudyProgresses
     * const studyProgress = await prisma.studyProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudyProgresses and only return the `userId`
     * const studyProgressWithUserIdOnly = await prisma.studyProgress.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends StudyProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, StudyProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudyProgress.
     * @param {StudyProgressUpsertArgs} args - Arguments to update or create a StudyProgress.
     * @example
     * // Update or create a StudyProgress
     * const studyProgress = await prisma.studyProgress.upsert({
     *   create: {
     *     // ... data to create a StudyProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudyProgress we want to update
     *   }
     * })
     */
    upsert<T extends StudyProgressUpsertArgs>(args: SelectSubset<T, StudyProgressUpsertArgs<ExtArgs>>): Prisma__StudyProgressClient<$Result.GetResult<Prisma.$StudyProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressCountArgs} args - Arguments to filter StudyProgresses to count.
     * @example
     * // Count the number of StudyProgresses
     * const count = await prisma.studyProgress.count({
     *   where: {
     *     // ... the filter for the StudyProgresses we want to count
     *   }
     * })
    **/
    count<T extends StudyProgressCountArgs>(
      args?: Subset<T, StudyProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudyProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudyProgressAggregateArgs>(args: Subset<T, StudyProgressAggregateArgs>): Prisma.PrismaPromise<GetStudyProgressAggregateType<T>>

    /**
     * Group by StudyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudyProgressGroupByArgs} args - Group by arguments.
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
      T extends StudyProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudyProgressGroupByArgs['orderBy'] }
        : { orderBy?: StudyProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudyProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudyProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudyProgress model
   */
  readonly fields: StudyProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudyProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudyProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudyProgress model
   */
  interface StudyProgressFieldRefs {
    readonly userId: FieldRef<"StudyProgress", 'String'>
    readonly questionId: FieldRef<"StudyProgress", 'String'>
    readonly isStudied: FieldRef<"StudyProgress", 'Boolean'>
    readonly lastStudiedAt: FieldRef<"StudyProgress", 'DateTime'>
    readonly studyCount: FieldRef<"StudyProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudyProgress findUnique
   */
  export type StudyProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgress to fetch.
     */
    where: StudyProgressWhereUniqueInput
  }

  /**
   * StudyProgress findUniqueOrThrow
   */
  export type StudyProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgress to fetch.
     */
    where: StudyProgressWhereUniqueInput
  }

  /**
   * StudyProgress findFirst
   */
  export type StudyProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgress to fetch.
     */
    where?: StudyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyProgresses to fetch.
     */
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyProgresses.
     */
    cursor?: StudyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyProgresses.
     */
    distinct?: StudyProgressScalarFieldEnum | StudyProgressScalarFieldEnum[]
  }

  /**
   * StudyProgress findFirstOrThrow
   */
  export type StudyProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgress to fetch.
     */
    where?: StudyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyProgresses to fetch.
     */
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudyProgresses.
     */
    cursor?: StudyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudyProgresses.
     */
    distinct?: StudyProgressScalarFieldEnum | StudyProgressScalarFieldEnum[]
  }

  /**
   * StudyProgress findMany
   */
  export type StudyProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter, which StudyProgresses to fetch.
     */
    where?: StudyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudyProgresses to fetch.
     */
    orderBy?: StudyProgressOrderByWithRelationInput | StudyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudyProgresses.
     */
    cursor?: StudyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudyProgresses.
     */
    skip?: number
    distinct?: StudyProgressScalarFieldEnum | StudyProgressScalarFieldEnum[]
  }

  /**
   * StudyProgress create
   */
  export type StudyProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a StudyProgress.
     */
    data: XOR<StudyProgressCreateInput, StudyProgressUncheckedCreateInput>
  }

  /**
   * StudyProgress createMany
   */
  export type StudyProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudyProgresses.
     */
    data: StudyProgressCreateManyInput | StudyProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudyProgress createManyAndReturn
   */
  export type StudyProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * The data used to create many StudyProgresses.
     */
    data: StudyProgressCreateManyInput | StudyProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyProgress update
   */
  export type StudyProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a StudyProgress.
     */
    data: XOR<StudyProgressUpdateInput, StudyProgressUncheckedUpdateInput>
    /**
     * Choose, which StudyProgress to update.
     */
    where: StudyProgressWhereUniqueInput
  }

  /**
   * StudyProgress updateMany
   */
  export type StudyProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudyProgresses.
     */
    data: XOR<StudyProgressUpdateManyMutationInput, StudyProgressUncheckedUpdateManyInput>
    /**
     * Filter which StudyProgresses to update
     */
    where?: StudyProgressWhereInput
    /**
     * Limit how many StudyProgresses to update.
     */
    limit?: number
  }

  /**
   * StudyProgress updateManyAndReturn
   */
  export type StudyProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * The data used to update StudyProgresses.
     */
    data: XOR<StudyProgressUpdateManyMutationInput, StudyProgressUncheckedUpdateManyInput>
    /**
     * Filter which StudyProgresses to update
     */
    where?: StudyProgressWhereInput
    /**
     * Limit how many StudyProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudyProgress upsert
   */
  export type StudyProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the StudyProgress to update in case it exists.
     */
    where: StudyProgressWhereUniqueInput
    /**
     * In case the StudyProgress found by the `where` argument doesn't exist, create a new StudyProgress with this data.
     */
    create: XOR<StudyProgressCreateInput, StudyProgressUncheckedCreateInput>
    /**
     * In case the StudyProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudyProgressUpdateInput, StudyProgressUncheckedUpdateInput>
  }

  /**
   * StudyProgress delete
   */
  export type StudyProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
    /**
     * Filter which StudyProgress to delete.
     */
    where: StudyProgressWhereUniqueInput
  }

  /**
   * StudyProgress deleteMany
   */
  export type StudyProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudyProgresses to delete
     */
    where?: StudyProgressWhereInput
    /**
     * Limit how many StudyProgresses to delete.
     */
    limit?: number
  }

  /**
   * StudyProgress without action
   */
  export type StudyProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudyProgress
     */
    select?: StudyProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudyProgress
     */
    omit?: StudyProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudyProgressInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestionOrder
   */

  export type AggregateUserQuestionOrder = {
    _count: UserQuestionOrderCountAggregateOutputType | null
    _min: UserQuestionOrderMinAggregateOutputType | null
    _max: UserQuestionOrderMaxAggregateOutputType | null
  }

  export type UserQuestionOrderMinAggregateOutputType = {
    userId: string | null
    orderType: $Enums.OrderType | null
    updatedAt: Date | null
  }

  export type UserQuestionOrderMaxAggregateOutputType = {
    userId: string | null
    orderType: $Enums.OrderType | null
    updatedAt: Date | null
  }

  export type UserQuestionOrderCountAggregateOutputType = {
    userId: number
    orderType: number
    questionIds: number
    updatedAt: number
    _all: number
  }


  export type UserQuestionOrderMinAggregateInputType = {
    userId?: true
    orderType?: true
    updatedAt?: true
  }

  export type UserQuestionOrderMaxAggregateInputType = {
    userId?: true
    orderType?: true
    updatedAt?: true
  }

  export type UserQuestionOrderCountAggregateInputType = {
    userId?: true
    orderType?: true
    questionIds?: true
    updatedAt?: true
    _all?: true
  }

  export type UserQuestionOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestionOrder to aggregate.
     */
    where?: UserQuestionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionOrders to fetch.
     */
    orderBy?: UserQuestionOrderOrderByWithRelationInput | UserQuestionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestionOrders
    **/
    _count?: true | UserQuestionOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestionOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestionOrderMaxAggregateInputType
  }

  export type GetUserQuestionOrderAggregateType<T extends UserQuestionOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestionOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestionOrder[P]>
      : GetScalarType<T[P], AggregateUserQuestionOrder[P]>
  }




  export type UserQuestionOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionOrderWhereInput
    orderBy?: UserQuestionOrderOrderByWithAggregationInput | UserQuestionOrderOrderByWithAggregationInput[]
    by: UserQuestionOrderScalarFieldEnum[] | UserQuestionOrderScalarFieldEnum
    having?: UserQuestionOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestionOrderCountAggregateInputType | true
    _min?: UserQuestionOrderMinAggregateInputType
    _max?: UserQuestionOrderMaxAggregateInputType
  }

  export type UserQuestionOrderGroupByOutputType = {
    userId: string
    orderType: $Enums.OrderType
    questionIds: string[]
    updatedAt: Date
    _count: UserQuestionOrderCountAggregateOutputType | null
    _min: UserQuestionOrderMinAggregateOutputType | null
    _max: UserQuestionOrderMaxAggregateOutputType | null
  }

  type GetUserQuestionOrderGroupByPayload<T extends UserQuestionOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestionOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestionOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestionOrderGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestionOrderGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestionOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    orderType?: boolean
    questionIds?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestionOrder"]>

  export type UserQuestionOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    orderType?: boolean
    questionIds?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestionOrder"]>

  export type UserQuestionOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    orderType?: boolean
    questionIds?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestionOrder"]>

  export type UserQuestionOrderSelectScalar = {
    userId?: boolean
    orderType?: boolean
    questionIds?: boolean
    updatedAt?: boolean
  }

  export type UserQuestionOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "orderType" | "questionIds" | "updatedAt", ExtArgs["result"]["userQuestionOrder"]>
  export type UserQuestionOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserQuestionOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserQuestionOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserQuestionOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestionOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      orderType: $Enums.OrderType
      questionIds: string[]
      updatedAt: Date
    }, ExtArgs["result"]["userQuestionOrder"]>
    composites: {}
  }

  type UserQuestionOrderGetPayload<S extends boolean | null | undefined | UserQuestionOrderDefaultArgs> = $Result.GetResult<Prisma.$UserQuestionOrderPayload, S>

  type UserQuestionOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestionOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestionOrderCountAggregateInputType | true
    }

  export interface UserQuestionOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestionOrder'], meta: { name: 'UserQuestionOrder' } }
    /**
     * Find zero or one UserQuestionOrder that matches the filter.
     * @param {UserQuestionOrderFindUniqueArgs} args - Arguments to find a UserQuestionOrder
     * @example
     * // Get one UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestionOrderFindUniqueArgs>(args: SelectSubset<T, UserQuestionOrderFindUniqueArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuestionOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestionOrderFindUniqueOrThrowArgs} args - Arguments to find a UserQuestionOrder
     * @example
     * // Get one UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestionOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestionOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestionOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderFindFirstArgs} args - Arguments to find a UserQuestionOrder
     * @example
     * // Get one UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestionOrderFindFirstArgs>(args?: SelectSubset<T, UserQuestionOrderFindFirstArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestionOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderFindFirstOrThrowArgs} args - Arguments to find a UserQuestionOrder
     * @example
     * // Get one UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestionOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestionOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuestionOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestionOrders
     * const userQuestionOrders = await prisma.userQuestionOrder.findMany()
     * 
     * // Get first 10 UserQuestionOrders
     * const userQuestionOrders = await prisma.userQuestionOrder.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userQuestionOrderWithUserIdOnly = await prisma.userQuestionOrder.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserQuestionOrderFindManyArgs>(args?: SelectSubset<T, UserQuestionOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuestionOrder.
     * @param {UserQuestionOrderCreateArgs} args - Arguments to create a UserQuestionOrder.
     * @example
     * // Create one UserQuestionOrder
     * const UserQuestionOrder = await prisma.userQuestionOrder.create({
     *   data: {
     *     // ... data to create a UserQuestionOrder
     *   }
     * })
     * 
     */
    create<T extends UserQuestionOrderCreateArgs>(args: SelectSubset<T, UserQuestionOrderCreateArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuestionOrders.
     * @param {UserQuestionOrderCreateManyArgs} args - Arguments to create many UserQuestionOrders.
     * @example
     * // Create many UserQuestionOrders
     * const userQuestionOrder = await prisma.userQuestionOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestionOrderCreateManyArgs>(args?: SelectSubset<T, UserQuestionOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserQuestionOrders and returns the data saved in the database.
     * @param {UserQuestionOrderCreateManyAndReturnArgs} args - Arguments to create many UserQuestionOrders.
     * @example
     * // Create many UserQuestionOrders
     * const userQuestionOrder = await prisma.userQuestionOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserQuestionOrders and only return the `userId`
     * const userQuestionOrderWithUserIdOnly = await prisma.userQuestionOrder.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserQuestionOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, UserQuestionOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserQuestionOrder.
     * @param {UserQuestionOrderDeleteArgs} args - Arguments to delete one UserQuestionOrder.
     * @example
     * // Delete one UserQuestionOrder
     * const UserQuestionOrder = await prisma.userQuestionOrder.delete({
     *   where: {
     *     // ... filter to delete one UserQuestionOrder
     *   }
     * })
     * 
     */
    delete<T extends UserQuestionOrderDeleteArgs>(args: SelectSubset<T, UserQuestionOrderDeleteArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuestionOrder.
     * @param {UserQuestionOrderUpdateArgs} args - Arguments to update one UserQuestionOrder.
     * @example
     * // Update one UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestionOrderUpdateArgs>(args: SelectSubset<T, UserQuestionOrderUpdateArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuestionOrders.
     * @param {UserQuestionOrderDeleteManyArgs} args - Arguments to filter UserQuestionOrders to delete.
     * @example
     * // Delete a few UserQuestionOrders
     * const { count } = await prisma.userQuestionOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestionOrderDeleteManyArgs>(args?: SelectSubset<T, UserQuestionOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestionOrders
     * const userQuestionOrder = await prisma.userQuestionOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestionOrderUpdateManyArgs>(args: SelectSubset<T, UserQuestionOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestionOrders and returns the data updated in the database.
     * @param {UserQuestionOrderUpdateManyAndReturnArgs} args - Arguments to update many UserQuestionOrders.
     * @example
     * // Update many UserQuestionOrders
     * const userQuestionOrder = await prisma.userQuestionOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserQuestionOrders and only return the `userId`
     * const userQuestionOrderWithUserIdOnly = await prisma.userQuestionOrder.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserQuestionOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, UserQuestionOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserQuestionOrder.
     * @param {UserQuestionOrderUpsertArgs} args - Arguments to update or create a UserQuestionOrder.
     * @example
     * // Update or create a UserQuestionOrder
     * const userQuestionOrder = await prisma.userQuestionOrder.upsert({
     *   create: {
     *     // ... data to create a UserQuestionOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestionOrder we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestionOrderUpsertArgs>(args: SelectSubset<T, UserQuestionOrderUpsertArgs<ExtArgs>>): Prisma__UserQuestionOrderClient<$Result.GetResult<Prisma.$UserQuestionOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuestionOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderCountArgs} args - Arguments to filter UserQuestionOrders to count.
     * @example
     * // Count the number of UserQuestionOrders
     * const count = await prisma.userQuestionOrder.count({
     *   where: {
     *     // ... the filter for the UserQuestionOrders we want to count
     *   }
     * })
    **/
    count<T extends UserQuestionOrderCountArgs>(
      args?: Subset<T, UserQuestionOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestionOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQuestionOrderAggregateArgs>(args: Subset<T, UserQuestionOrderAggregateArgs>): Prisma.PrismaPromise<GetUserQuestionOrderAggregateType<T>>

    /**
     * Group by UserQuestionOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionOrderGroupByArgs} args - Group by arguments.
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
      T extends UserQuestionOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestionOrderGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestionOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserQuestionOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestionOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestionOrder model
   */
  readonly fields: UserQuestionOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestionOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestionOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserQuestionOrder model
   */
  interface UserQuestionOrderFieldRefs {
    readonly userId: FieldRef<"UserQuestionOrder", 'String'>
    readonly orderType: FieldRef<"UserQuestionOrder", 'OrderType'>
    readonly questionIds: FieldRef<"UserQuestionOrder", 'String[]'>
    readonly updatedAt: FieldRef<"UserQuestionOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestionOrder findUnique
   */
  export type UserQuestionOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestionOrder to fetch.
     */
    where: UserQuestionOrderWhereUniqueInput
  }

  /**
   * UserQuestionOrder findUniqueOrThrow
   */
  export type UserQuestionOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestionOrder to fetch.
     */
    where: UserQuestionOrderWhereUniqueInput
  }

  /**
   * UserQuestionOrder findFirst
   */
  export type UserQuestionOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestionOrder to fetch.
     */
    where?: UserQuestionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionOrders to fetch.
     */
    orderBy?: UserQuestionOrderOrderByWithRelationInput | UserQuestionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestionOrders.
     */
    cursor?: UserQuestionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestionOrders.
     */
    distinct?: UserQuestionOrderScalarFieldEnum | UserQuestionOrderScalarFieldEnum[]
  }

  /**
   * UserQuestionOrder findFirstOrThrow
   */
  export type UserQuestionOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestionOrder to fetch.
     */
    where?: UserQuestionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionOrders to fetch.
     */
    orderBy?: UserQuestionOrderOrderByWithRelationInput | UserQuestionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestionOrders.
     */
    cursor?: UserQuestionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestionOrders.
     */
    distinct?: UserQuestionOrderScalarFieldEnum | UserQuestionOrderScalarFieldEnum[]
  }

  /**
   * UserQuestionOrder findMany
   */
  export type UserQuestionOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestionOrders to fetch.
     */
    where?: UserQuestionOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestionOrders to fetch.
     */
    orderBy?: UserQuestionOrderOrderByWithRelationInput | UserQuestionOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestionOrders.
     */
    cursor?: UserQuestionOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestionOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestionOrders.
     */
    skip?: number
    distinct?: UserQuestionOrderScalarFieldEnum | UserQuestionOrderScalarFieldEnum[]
  }

  /**
   * UserQuestionOrder create
   */
  export type UserQuestionOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuestionOrder.
     */
    data: XOR<UserQuestionOrderCreateInput, UserQuestionOrderUncheckedCreateInput>
  }

  /**
   * UserQuestionOrder createMany
   */
  export type UserQuestionOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestionOrders.
     */
    data: UserQuestionOrderCreateManyInput | UserQuestionOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestionOrder createManyAndReturn
   */
  export type UserQuestionOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * The data used to create many UserQuestionOrders.
     */
    data: UserQuestionOrderCreateManyInput | UserQuestionOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestionOrder update
   */
  export type UserQuestionOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuestionOrder.
     */
    data: XOR<UserQuestionOrderUpdateInput, UserQuestionOrderUncheckedUpdateInput>
    /**
     * Choose, which UserQuestionOrder to update.
     */
    where: UserQuestionOrderWhereUniqueInput
  }

  /**
   * UserQuestionOrder updateMany
   */
  export type UserQuestionOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestionOrders.
     */
    data: XOR<UserQuestionOrderUpdateManyMutationInput, UserQuestionOrderUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestionOrders to update
     */
    where?: UserQuestionOrderWhereInput
    /**
     * Limit how many UserQuestionOrders to update.
     */
    limit?: number
  }

  /**
   * UserQuestionOrder updateManyAndReturn
   */
  export type UserQuestionOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * The data used to update UserQuestionOrders.
     */
    data: XOR<UserQuestionOrderUpdateManyMutationInput, UserQuestionOrderUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestionOrders to update
     */
    where?: UserQuestionOrderWhereInput
    /**
     * Limit how many UserQuestionOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserQuestionOrder upsert
   */
  export type UserQuestionOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuestionOrder to update in case it exists.
     */
    where: UserQuestionOrderWhereUniqueInput
    /**
     * In case the UserQuestionOrder found by the `where` argument doesn't exist, create a new UserQuestionOrder with this data.
     */
    create: XOR<UserQuestionOrderCreateInput, UserQuestionOrderUncheckedCreateInput>
    /**
     * In case the UserQuestionOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestionOrderUpdateInput, UserQuestionOrderUncheckedUpdateInput>
  }

  /**
   * UserQuestionOrder delete
   */
  export type UserQuestionOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
    /**
     * Filter which UserQuestionOrder to delete.
     */
    where: UserQuestionOrderWhereUniqueInput
  }

  /**
   * UserQuestionOrder deleteMany
   */
  export type UserQuestionOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestionOrders to delete
     */
    where?: UserQuestionOrderWhereInput
    /**
     * Limit how many UserQuestionOrders to delete.
     */
    limit?: number
  }

  /**
   * UserQuestionOrder without action
   */
  export type UserQuestionOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestionOrder
     */
    select?: UserQuestionOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestionOrder
     */
    omit?: UserQuestionOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionOrderInclude<ExtArgs> | null
  }


  /**
   * Model UserPreference
   */

  export type AggregateUserPreference = {
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  export type UserPreferenceMinAggregateOutputType = {
    userId: string | null
    theme: $Enums.Theme | null
    lastActiveTab: string | null
  }

  export type UserPreferenceMaxAggregateOutputType = {
    userId: string | null
    theme: $Enums.Theme | null
    lastActiveTab: string | null
  }

  export type UserPreferenceCountAggregateOutputType = {
    userId: number
    theme: number
    filters: number
    selectedTags: number
    lastActiveTab: number
    _all: number
  }


  export type UserPreferenceMinAggregateInputType = {
    userId?: true
    theme?: true
    lastActiveTab?: true
  }

  export type UserPreferenceMaxAggregateInputType = {
    userId?: true
    theme?: true
    lastActiveTab?: true
  }

  export type UserPreferenceCountAggregateInputType = {
    userId?: true
    theme?: true
    filters?: true
    selectedTags?: true
    lastActiveTab?: true
    _all?: true
  }

  export type UserPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreference to aggregate.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type GetUserPreferenceAggregateType<T extends UserPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreference[P]>
      : GetScalarType<T[P], AggregateUserPreference[P]>
  }




  export type UserPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferenceWhereInput
    orderBy?: UserPreferenceOrderByWithAggregationInput | UserPreferenceOrderByWithAggregationInput[]
    by: UserPreferenceScalarFieldEnum[] | UserPreferenceScalarFieldEnum
    having?: UserPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferenceCountAggregateInputType | true
    _min?: UserPreferenceMinAggregateInputType
    _max?: UserPreferenceMaxAggregateInputType
  }

  export type UserPreferenceGroupByOutputType = {
    userId: string
    theme: $Enums.Theme
    filters: JsonValue | null
    selectedTags: string[]
    lastActiveTab: string | null
    _count: UserPreferenceCountAggregateOutputType | null
    _min: UserPreferenceMinAggregateOutputType | null
    _max: UserPreferenceMaxAggregateOutputType | null
  }

  type GetUserPreferenceGroupByPayload<T extends UserPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    theme?: boolean
    filters?: boolean
    selectedTags?: boolean
    lastActiveTab?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    theme?: boolean
    filters?: boolean
    selectedTags?: boolean
    lastActiveTab?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    theme?: boolean
    filters?: boolean
    selectedTags?: boolean
    lastActiveTab?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreference"]>

  export type UserPreferenceSelectScalar = {
    userId?: boolean
    theme?: boolean
    filters?: boolean
    selectedTags?: boolean
    lastActiveTab?: boolean
  }

  export type UserPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "theme" | "filters" | "selectedTags" | "lastActiveTab", ExtArgs["result"]["userPreference"]>
  export type UserPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      theme: $Enums.Theme
      filters: Prisma.JsonValue | null
      selectedTags: string[]
      lastActiveTab: string | null
    }, ExtArgs["result"]["userPreference"]>
    composites: {}
  }

  type UserPreferenceGetPayload<S extends boolean | null | undefined | UserPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencePayload, S>

  type UserPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferenceCountAggregateInputType | true
    }

  export interface UserPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreference'], meta: { name: 'UserPreference' } }
    /**
     * Find zero or one UserPreference that matches the filter.
     * @param {UserPreferenceFindUniqueArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferenceFindUniqueArgs>(args: SelectSubset<T, UserPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferenceFindFirstArgs>(args?: SelectSubset<T, UserPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserPreference
     * @example
     * // Get one UserPreference
     * const userPreference = await prisma.userPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreference.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreference.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPreferenceWithUserIdOnly = await prisma.userPreference.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPreferenceFindManyArgs>(args?: SelectSubset<T, UserPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreference.
     * @param {UserPreferenceCreateArgs} args - Arguments to create a UserPreference.
     * @example
     * // Create one UserPreference
     * const UserPreference = await prisma.userPreference.create({
     *   data: {
     *     // ... data to create a UserPreference
     *   }
     * })
     * 
     */
    create<T extends UserPreferenceCreateArgs>(args: SelectSubset<T, UserPreferenceCreateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferenceCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferenceCreateManyArgs>(args?: SelectSubset<T, UserPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreference = await prisma.userPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `userId`
     * const userPreferenceWithUserIdOnly = await prisma.userPreference.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreference.
     * @param {UserPreferenceDeleteArgs} args - Arguments to delete one UserPreference.
     * @example
     * // Delete one UserPreference
     * const UserPreference = await prisma.userPreference.delete({
     *   where: {
     *     // ... filter to delete one UserPreference
     *   }
     * })
     * 
     */
    delete<T extends UserPreferenceDeleteArgs>(args: SelectSubset<T, UserPreferenceDeleteArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreference.
     * @param {UserPreferenceUpdateArgs} args - Arguments to update one UserPreference.
     * @example
     * // Update one UserPreference
     * const userPreference = await prisma.userPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferenceUpdateArgs>(args: SelectSubset<T, UserPreferenceUpdateArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferenceDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferenceUpdateManyArgs>(args: SelectSubset<T, UserPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreference = await prisma.userPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `userId`
     * const userPreferenceWithUserIdOnly = await prisma.userPreference.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreference.
     * @param {UserPreferenceUpsertArgs} args - Arguments to update or create a UserPreference.
     * @example
     * // Update or create a UserPreference
     * const userPreference = await prisma.userPreference.upsert({
     *   create: {
     *     // ... data to create a UserPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferenceUpsertArgs>(args: SelectSubset<T, UserPreferenceUpsertArgs<ExtArgs>>): Prisma__UserPreferenceClient<$Result.GetResult<Prisma.$UserPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreference.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferenceCountArgs>(
      args?: Subset<T, UserPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferenceAggregateArgs>(args: Subset<T, UserPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserPreferenceAggregateType<T>>

    /**
     * Group by UserPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreference model
   */
  readonly fields: UserPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserPreference model
   */
  interface UserPreferenceFieldRefs {
    readonly userId: FieldRef<"UserPreference", 'String'>
    readonly theme: FieldRef<"UserPreference", 'Theme'>
    readonly filters: FieldRef<"UserPreference", 'Json'>
    readonly selectedTags: FieldRef<"UserPreference", 'String[]'>
    readonly lastActiveTab: FieldRef<"UserPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserPreference findUnique
   */
  export type UserPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findUniqueOrThrow
   */
  export type UserPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference findFirst
   */
  export type UserPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findFirstOrThrow
   */
  export type UserPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreference to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference findMany
   */
  export type UserPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferenceOrderByWithRelationInput | UserPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferenceScalarFieldEnum | UserPreferenceScalarFieldEnum[]
  }

  /**
   * UserPreference create
   */
  export type UserPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreference.
     */
    data: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
  }

  /**
   * UserPreference createMany
   */
  export type UserPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreference createManyAndReturn
   */
  export type UserPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferenceCreateManyInput | UserPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference update
   */
  export type UserPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreference.
     */
    data: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserPreference to update.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference updateMany
   */
  export type UserPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreference updateManyAndReturn
   */
  export type UserPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferenceUpdateManyMutationInput, UserPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreference upsert
   */
  export type UserPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreference to update in case it exists.
     */
    where: UserPreferenceWhereUniqueInput
    /**
     * In case the UserPreference found by the `where` argument doesn't exist, create a new UserPreference with this data.
     */
    create: XOR<UserPreferenceCreateInput, UserPreferenceUncheckedCreateInput>
    /**
     * In case the UserPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferenceUpdateInput, UserPreferenceUncheckedUpdateInput>
  }

  /**
   * UserPreference delete
   */
  export type UserPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserPreference to delete.
     */
    where: UserPreferenceWhereUniqueInput
  }

  /**
   * UserPreference deleteMany
   */
  export type UserPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferenceWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreference without action
   */
  export type UserPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreference
     */
    select?: UserPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreference
     */
    omit?: UserPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model QuizSession
   */

  export type AggregateQuizSession = {
    _count: QuizSessionCountAggregateOutputType | null
    _avg: QuizSessionAvgAggregateOutputType | null
    _sum: QuizSessionSumAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  export type QuizSessionAvgAggregateOutputType = {
    questionCount: number | null
  }

  export type QuizSessionSumAggregateOutputType = {
    questionCount: number | null
  }

  export type QuizSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    questionCount: number | null
    questionType: $Enums.QuestionType | null
    difficultyMode: $Enums.DifficultyLevel | null
    completed: boolean | null
  }

  export type QuizSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    questionCount: number | null
    questionType: $Enums.QuestionType | null
    difficultyMode: $Enums.DifficultyLevel | null
    completed: boolean | null
  }

  export type QuizSessionCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    questionCount: number
    questionType: number
    difficultyMode: number
    completed: number
    _all: number
  }


  export type QuizSessionAvgAggregateInputType = {
    questionCount?: true
  }

  export type QuizSessionSumAggregateInputType = {
    questionCount?: true
  }

  export type QuizSessionMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    questionCount?: true
    questionType?: true
    difficultyMode?: true
    completed?: true
  }

  export type QuizSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    questionCount?: true
    questionType?: true
    difficultyMode?: true
    completed?: true
  }

  export type QuizSessionCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    questionCount?: true
    questionType?: true
    difficultyMode?: true
    completed?: true
    _all?: true
  }

  export type QuizSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSession to aggregate.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizSessions
    **/
    _count?: true | QuizSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizSessionMaxAggregateInputType
  }

  export type GetQuizSessionAggregateType<T extends QuizSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizSession[P]>
      : GetScalarType<T[P], AggregateQuizSession[P]>
  }




  export type QuizSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizSessionWhereInput
    orderBy?: QuizSessionOrderByWithAggregationInput | QuizSessionOrderByWithAggregationInput[]
    by: QuizSessionScalarFieldEnum[] | QuizSessionScalarFieldEnum
    having?: QuizSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizSessionCountAggregateInputType | true
    _avg?: QuizSessionAvgAggregateInputType
    _sum?: QuizSessionSumAggregateInputType
    _min?: QuizSessionMinAggregateInputType
    _max?: QuizSessionMaxAggregateInputType
  }

  export type QuizSessionGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date | null
    questionCount: number
    questionType: $Enums.QuestionType | null
    difficultyMode: $Enums.DifficultyLevel | null
    completed: boolean
    _count: QuizSessionCountAggregateOutputType | null
    _avg: QuizSessionAvgAggregateOutputType | null
    _sum: QuizSessionSumAggregateOutputType | null
    _min: QuizSessionMinAggregateOutputType | null
    _max: QuizSessionMaxAggregateOutputType | null
  }

  type GetQuizSessionGroupByPayload<T extends QuizSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
            : GetScalarType<T[P], QuizSessionGroupByOutputType[P]>
        }
      >
    >


  export type QuizSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    questionCount?: boolean
    questionType?: boolean
    difficultyMode?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    questionResults?: boolean | QuizSession$questionResultsArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    questionCount?: boolean
    questionType?: boolean
    difficultyMode?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    questionCount?: boolean
    questionType?: boolean
    difficultyMode?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizSession"]>

  export type QuizSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    questionCount?: boolean
    questionType?: boolean
    difficultyMode?: boolean
    completed?: boolean
  }

  export type QuizSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startTime" | "endTime" | "questionCount" | "questionType" | "difficultyMode" | "completed", ExtArgs["result"]["quizSession"]>
  export type QuizSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    questionResults?: boolean | QuizSession$questionResultsArgs<ExtArgs>
    _count?: boolean | QuizSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuizSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuizSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      questionResults: Prisma.$QuizQuestionResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date | null
      questionCount: number
      questionType: $Enums.QuestionType | null
      difficultyMode: $Enums.DifficultyLevel | null
      completed: boolean
    }, ExtArgs["result"]["quizSession"]>
    composites: {}
  }

  type QuizSessionGetPayload<S extends boolean | null | undefined | QuizSessionDefaultArgs> = $Result.GetResult<Prisma.$QuizSessionPayload, S>

  type QuizSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizSessionCountAggregateInputType | true
    }

  export interface QuizSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizSession'], meta: { name: 'QuizSession' } }
    /**
     * Find zero or one QuizSession that matches the filter.
     * @param {QuizSessionFindUniqueArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizSessionFindUniqueArgs>(args: SelectSubset<T, QuizSessionFindUniqueArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizSessionFindUniqueOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizSessionFindFirstArgs>(args?: SelectSubset<T, QuizSessionFindFirstArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindFirstOrThrowArgs} args - Arguments to find a QuizSession
     * @example
     * // Get one QuizSession
     * const quizSession = await prisma.quizSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizSessions
     * const quizSessions = await prisma.quizSession.findMany()
     * 
     * // Get first 10 QuizSessions
     * const quizSessions = await prisma.quizSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizSessionFindManyArgs>(args?: SelectSubset<T, QuizSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizSession.
     * @param {QuizSessionCreateArgs} args - Arguments to create a QuizSession.
     * @example
     * // Create one QuizSession
     * const QuizSession = await prisma.quizSession.create({
     *   data: {
     *     // ... data to create a QuizSession
     *   }
     * })
     * 
     */
    create<T extends QuizSessionCreateArgs>(args: SelectSubset<T, QuizSessionCreateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizSessions.
     * @param {QuizSessionCreateManyArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizSessionCreateManyArgs>(args?: SelectSubset<T, QuizSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizSessions and returns the data saved in the database.
     * @param {QuizSessionCreateManyAndReturnArgs} args - Arguments to create many QuizSessions.
     * @example
     * // Create many QuizSessions
     * const quizSession = await prisma.quizSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizSession.
     * @param {QuizSessionDeleteArgs} args - Arguments to delete one QuizSession.
     * @example
     * // Delete one QuizSession
     * const QuizSession = await prisma.quizSession.delete({
     *   where: {
     *     // ... filter to delete one QuizSession
     *   }
     * })
     * 
     */
    delete<T extends QuizSessionDeleteArgs>(args: SelectSubset<T, QuizSessionDeleteArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizSession.
     * @param {QuizSessionUpdateArgs} args - Arguments to update one QuizSession.
     * @example
     * // Update one QuizSession
     * const quizSession = await prisma.quizSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizSessionUpdateArgs>(args: SelectSubset<T, QuizSessionUpdateArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizSessions.
     * @param {QuizSessionDeleteManyArgs} args - Arguments to filter QuizSessions to delete.
     * @example
     * // Delete a few QuizSessions
     * const { count } = await prisma.quizSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizSessionDeleteManyArgs>(args?: SelectSubset<T, QuizSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizSessionUpdateManyArgs>(args: SelectSubset<T, QuizSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizSessions and returns the data updated in the database.
     * @param {QuizSessionUpdateManyAndReturnArgs} args - Arguments to update many QuizSessions.
     * @example
     * // Update many QuizSessions
     * const quizSession = await prisma.quizSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizSessions and only return the `id`
     * const quizSessionWithIdOnly = await prisma.quizSession.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends QuizSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizSession.
     * @param {QuizSessionUpsertArgs} args - Arguments to update or create a QuizSession.
     * @example
     * // Update or create a QuizSession
     * const quizSession = await prisma.quizSession.upsert({
     *   create: {
     *     // ... data to create a QuizSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizSession we want to update
     *   }
     * })
     */
    upsert<T extends QuizSessionUpsertArgs>(args: SelectSubset<T, QuizSessionUpsertArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionCountArgs} args - Arguments to filter QuizSessions to count.
     * @example
     * // Count the number of QuizSessions
     * const count = await prisma.quizSession.count({
     *   where: {
     *     // ... the filter for the QuizSessions we want to count
     *   }
     * })
    **/
    count<T extends QuizSessionCountArgs>(
      args?: Subset<T, QuizSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizSessionAggregateArgs>(args: Subset<T, QuizSessionAggregateArgs>): Prisma.PrismaPromise<GetQuizSessionAggregateType<T>>

    /**
     * Group by QuizSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizSessionGroupByArgs} args - Group by arguments.
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
      T extends QuizSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizSessionGroupByArgs['orderBy'] }
        : { orderBy?: QuizSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizSession model
   */
  readonly fields: QuizSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionResults<T extends QuizSession$questionResultsArgs<ExtArgs> = {}>(args?: Subset<T, QuizSession$questionResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the QuizSession model
   */
  interface QuizSessionFieldRefs {
    readonly id: FieldRef<"QuizSession", 'String'>
    readonly userId: FieldRef<"QuizSession", 'String'>
    readonly startTime: FieldRef<"QuizSession", 'DateTime'>
    readonly endTime: FieldRef<"QuizSession", 'DateTime'>
    readonly questionCount: FieldRef<"QuizSession", 'Int'>
    readonly questionType: FieldRef<"QuizSession", 'QuestionType'>
    readonly difficultyMode: FieldRef<"QuizSession", 'DifficultyLevel'>
    readonly completed: FieldRef<"QuizSession", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * QuizSession findUnique
   */
  export type QuizSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findUniqueOrThrow
   */
  export type QuizSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession findFirst
   */
  export type QuizSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findFirstOrThrow
   */
  export type QuizSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSession to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizSessions.
     */
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession findMany
   */
  export type QuizSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter, which QuizSessions to fetch.
     */
    where?: QuizSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizSessions to fetch.
     */
    orderBy?: QuizSessionOrderByWithRelationInput | QuizSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizSessions.
     */
    cursor?: QuizSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizSessions.
     */
    skip?: number
    distinct?: QuizSessionScalarFieldEnum | QuizSessionScalarFieldEnum[]
  }

  /**
   * QuizSession create
   */
  export type QuizSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizSession.
     */
    data: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
  }

  /**
   * QuizSession createMany
   */
  export type QuizSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizSession createManyAndReturn
   */
  export type QuizSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to create many QuizSessions.
     */
    data: QuizSessionCreateManyInput | QuizSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession update
   */
  export type QuizSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizSession.
     */
    data: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
    /**
     * Choose, which QuizSession to update.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession updateMany
   */
  export type QuizSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
  }

  /**
   * QuizSession updateManyAndReturn
   */
  export type QuizSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * The data used to update QuizSessions.
     */
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyInput>
    /**
     * Filter which QuizSessions to update
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizSession upsert
   */
  export type QuizSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizSession to update in case it exists.
     */
    where: QuizSessionWhereUniqueInput
    /**
     * In case the QuizSession found by the `where` argument doesn't exist, create a new QuizSession with this data.
     */
    create: XOR<QuizSessionCreateInput, QuizSessionUncheckedCreateInput>
    /**
     * In case the QuizSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizSessionUpdateInput, QuizSessionUncheckedUpdateInput>
  }

  /**
   * QuizSession delete
   */
  export type QuizSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
    /**
     * Filter which QuizSession to delete.
     */
    where: QuizSessionWhereUniqueInput
  }

  /**
   * QuizSession deleteMany
   */
  export type QuizSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizSessions to delete
     */
    where?: QuizSessionWhereInput
    /**
     * Limit how many QuizSessions to delete.
     */
    limit?: number
  }

  /**
   * QuizSession.questionResults
   */
  export type QuizSession$questionResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    where?: QuizQuestionResultWhereInput
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    cursor?: QuizQuestionResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizQuestionResultScalarFieldEnum | QuizQuestionResultScalarFieldEnum[]
  }

  /**
   * QuizSession without action
   */
  export type QuizSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizSession
     */
    select?: QuizSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizSession
     */
    omit?: QuizSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizSessionInclude<ExtArgs> | null
  }


  /**
   * Model QuizQuestionResult
   */

  export type AggregateQuizQuestionResult = {
    _count: QuizQuestionResultCountAggregateOutputType | null
    _avg: QuizQuestionResultAvgAggregateOutputType | null
    _sum: QuizQuestionResultSumAggregateOutputType | null
    _min: QuizQuestionResultMinAggregateOutputType | null
    _max: QuizQuestionResultMaxAggregateOutputType | null
  }

  export type QuizQuestionResultAvgAggregateOutputType = {
    timeSpentMs: number | null
    position: number | null
  }

  export type QuizQuestionResultSumAggregateOutputType = {
    timeSpentMs: number | null
    position: number | null
  }

  export type QuizQuestionResultMinAggregateOutputType = {
    quizSessionId: string | null
    questionId: string | null
    timeSpentMs: number | null
    position: number | null
  }

  export type QuizQuestionResultMaxAggregateOutputType = {
    quizSessionId: string | null
    questionId: string | null
    timeSpentMs: number | null
    position: number | null
  }

  export type QuizQuestionResultCountAggregateOutputType = {
    quizSessionId: number
    questionId: number
    timeSpentMs: number
    position: number
    _all: number
  }


  export type QuizQuestionResultAvgAggregateInputType = {
    timeSpentMs?: true
    position?: true
  }

  export type QuizQuestionResultSumAggregateInputType = {
    timeSpentMs?: true
    position?: true
  }

  export type QuizQuestionResultMinAggregateInputType = {
    quizSessionId?: true
    questionId?: true
    timeSpentMs?: true
    position?: true
  }

  export type QuizQuestionResultMaxAggregateInputType = {
    quizSessionId?: true
    questionId?: true
    timeSpentMs?: true
    position?: true
  }

  export type QuizQuestionResultCountAggregateInputType = {
    quizSessionId?: true
    questionId?: true
    timeSpentMs?: true
    position?: true
    _all?: true
  }

  export type QuizQuestionResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestionResult to aggregate.
     */
    where?: QuizQuestionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionResults to fetch.
     */
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizQuestionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuizQuestionResults
    **/
    _count?: true | QuizQuestionResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuizQuestionResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuizQuestionResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizQuestionResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizQuestionResultMaxAggregateInputType
  }

  export type GetQuizQuestionResultAggregateType<T extends QuizQuestionResultAggregateArgs> = {
        [P in keyof T & keyof AggregateQuizQuestionResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuizQuestionResult[P]>
      : GetScalarType<T[P], AggregateQuizQuestionResult[P]>
  }




  export type QuizQuestionResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizQuestionResultWhereInput
    orderBy?: QuizQuestionResultOrderByWithAggregationInput | QuizQuestionResultOrderByWithAggregationInput[]
    by: QuizQuestionResultScalarFieldEnum[] | QuizQuestionResultScalarFieldEnum
    having?: QuizQuestionResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizQuestionResultCountAggregateInputType | true
    _avg?: QuizQuestionResultAvgAggregateInputType
    _sum?: QuizQuestionResultSumAggregateInputType
    _min?: QuizQuestionResultMinAggregateInputType
    _max?: QuizQuestionResultMaxAggregateInputType
  }

  export type QuizQuestionResultGroupByOutputType = {
    quizSessionId: string
    questionId: string
    timeSpentMs: number
    position: number
    _count: QuizQuestionResultCountAggregateOutputType | null
    _avg: QuizQuestionResultAvgAggregateOutputType | null
    _sum: QuizQuestionResultSumAggregateOutputType | null
    _min: QuizQuestionResultMinAggregateOutputType | null
    _max: QuizQuestionResultMaxAggregateOutputType | null
  }

  type GetQuizQuestionResultGroupByPayload<T extends QuizQuestionResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizQuestionResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizQuestionResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizQuestionResultGroupByOutputType[P]>
            : GetScalarType<T[P], QuizQuestionResultGroupByOutputType[P]>
        }
      >
    >


  export type QuizQuestionResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quizSessionId?: boolean
    questionId?: boolean
    timeSpentMs?: boolean
    position?: boolean
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestionResult"]>

  export type QuizQuestionResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quizSessionId?: boolean
    questionId?: boolean
    timeSpentMs?: boolean
    position?: boolean
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestionResult"]>

  export type QuizQuestionResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quizSessionId?: boolean
    questionId?: boolean
    timeSpentMs?: boolean
    position?: boolean
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quizQuestionResult"]>

  export type QuizQuestionResultSelectScalar = {
    quizSessionId?: boolean
    questionId?: boolean
    timeSpentMs?: boolean
    position?: boolean
  }

  export type QuizQuestionResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"quizSessionId" | "questionId" | "timeSpentMs" | "position", ExtArgs["result"]["quizQuestionResult"]>
  export type QuizQuestionResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuizQuestionResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuizQuestionResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quizSession?: boolean | QuizSessionDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuizQuestionResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuizQuestionResult"
    objects: {
      quizSession: Prisma.$QuizSessionPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quizSessionId: string
      questionId: string
      timeSpentMs: number
      position: number
    }, ExtArgs["result"]["quizQuestionResult"]>
    composites: {}
  }

  type QuizQuestionResultGetPayload<S extends boolean | null | undefined | QuizQuestionResultDefaultArgs> = $Result.GetResult<Prisma.$QuizQuestionResultPayload, S>

  type QuizQuestionResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizQuestionResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizQuestionResultCountAggregateInputType | true
    }

  export interface QuizQuestionResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuizQuestionResult'], meta: { name: 'QuizQuestionResult' } }
    /**
     * Find zero or one QuizQuestionResult that matches the filter.
     * @param {QuizQuestionResultFindUniqueArgs} args - Arguments to find a QuizQuestionResult
     * @example
     * // Get one QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizQuestionResultFindUniqueArgs>(args: SelectSubset<T, QuizQuestionResultFindUniqueArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuizQuestionResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizQuestionResultFindUniqueOrThrowArgs} args - Arguments to find a QuizQuestionResult
     * @example
     * // Get one QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizQuestionResultFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizQuestionResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestionResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultFindFirstArgs} args - Arguments to find a QuizQuestionResult
     * @example
     * // Get one QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizQuestionResultFindFirstArgs>(args?: SelectSubset<T, QuizQuestionResultFindFirstArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuizQuestionResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultFindFirstOrThrowArgs} args - Arguments to find a QuizQuestionResult
     * @example
     * // Get one QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizQuestionResultFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizQuestionResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuizQuestionResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuizQuestionResults
     * const quizQuestionResults = await prisma.quizQuestionResult.findMany()
     * 
     * // Get first 10 QuizQuestionResults
     * const quizQuestionResults = await prisma.quizQuestionResult.findMany({ take: 10 })
     * 
     * // Only select the `quizSessionId`
     * const quizQuestionResultWithQuizSessionIdOnly = await prisma.quizQuestionResult.findMany({ select: { quizSessionId: true } })
     * 
     */
    findMany<T extends QuizQuestionResultFindManyArgs>(args?: SelectSubset<T, QuizQuestionResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuizQuestionResult.
     * @param {QuizQuestionResultCreateArgs} args - Arguments to create a QuizQuestionResult.
     * @example
     * // Create one QuizQuestionResult
     * const QuizQuestionResult = await prisma.quizQuestionResult.create({
     *   data: {
     *     // ... data to create a QuizQuestionResult
     *   }
     * })
     * 
     */
    create<T extends QuizQuestionResultCreateArgs>(args: SelectSubset<T, QuizQuestionResultCreateArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuizQuestionResults.
     * @param {QuizQuestionResultCreateManyArgs} args - Arguments to create many QuizQuestionResults.
     * @example
     * // Create many QuizQuestionResults
     * const quizQuestionResult = await prisma.quizQuestionResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizQuestionResultCreateManyArgs>(args?: SelectSubset<T, QuizQuestionResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuizQuestionResults and returns the data saved in the database.
     * @param {QuizQuestionResultCreateManyAndReturnArgs} args - Arguments to create many QuizQuestionResults.
     * @example
     * // Create many QuizQuestionResults
     * const quizQuestionResult = await prisma.quizQuestionResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuizQuestionResults and only return the `quizSessionId`
     * const quizQuestionResultWithQuizSessionIdOnly = await prisma.quizQuestionResult.createManyAndReturn({
     *   select: { quizSessionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizQuestionResultCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizQuestionResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuizQuestionResult.
     * @param {QuizQuestionResultDeleteArgs} args - Arguments to delete one QuizQuestionResult.
     * @example
     * // Delete one QuizQuestionResult
     * const QuizQuestionResult = await prisma.quizQuestionResult.delete({
     *   where: {
     *     // ... filter to delete one QuizQuestionResult
     *   }
     * })
     * 
     */
    delete<T extends QuizQuestionResultDeleteArgs>(args: SelectSubset<T, QuizQuestionResultDeleteArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuizQuestionResult.
     * @param {QuizQuestionResultUpdateArgs} args - Arguments to update one QuizQuestionResult.
     * @example
     * // Update one QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizQuestionResultUpdateArgs>(args: SelectSubset<T, QuizQuestionResultUpdateArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuizQuestionResults.
     * @param {QuizQuestionResultDeleteManyArgs} args - Arguments to filter QuizQuestionResults to delete.
     * @example
     * // Delete a few QuizQuestionResults
     * const { count } = await prisma.quizQuestionResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizQuestionResultDeleteManyArgs>(args?: SelectSubset<T, QuizQuestionResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuizQuestionResults
     * const quizQuestionResult = await prisma.quizQuestionResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizQuestionResultUpdateManyArgs>(args: SelectSubset<T, QuizQuestionResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuizQuestionResults and returns the data updated in the database.
     * @param {QuizQuestionResultUpdateManyAndReturnArgs} args - Arguments to update many QuizQuestionResults.
     * @example
     * // Update many QuizQuestionResults
     * const quizQuestionResult = await prisma.quizQuestionResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuizQuestionResults and only return the `quizSessionId`
     * const quizQuestionResultWithQuizSessionIdOnly = await prisma.quizQuestionResult.updateManyAndReturn({
     *   select: { quizSessionId: true },
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
    updateManyAndReturn<T extends QuizQuestionResultUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizQuestionResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuizQuestionResult.
     * @param {QuizQuestionResultUpsertArgs} args - Arguments to update or create a QuizQuestionResult.
     * @example
     * // Update or create a QuizQuestionResult
     * const quizQuestionResult = await prisma.quizQuestionResult.upsert({
     *   create: {
     *     // ... data to create a QuizQuestionResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuizQuestionResult we want to update
     *   }
     * })
     */
    upsert<T extends QuizQuestionResultUpsertArgs>(args: SelectSubset<T, QuizQuestionResultUpsertArgs<ExtArgs>>): Prisma__QuizQuestionResultClient<$Result.GetResult<Prisma.$QuizQuestionResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuizQuestionResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultCountArgs} args - Arguments to filter QuizQuestionResults to count.
     * @example
     * // Count the number of QuizQuestionResults
     * const count = await prisma.quizQuestionResult.count({
     *   where: {
     *     // ... the filter for the QuizQuestionResults we want to count
     *   }
     * })
    **/
    count<T extends QuizQuestionResultCountArgs>(
      args?: Subset<T, QuizQuestionResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizQuestionResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuizQuestionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuizQuestionResultAggregateArgs>(args: Subset<T, QuizQuestionResultAggregateArgs>): Prisma.PrismaPromise<GetQuizQuestionResultAggregateType<T>>

    /**
     * Group by QuizQuestionResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizQuestionResultGroupByArgs} args - Group by arguments.
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
      T extends QuizQuestionResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizQuestionResultGroupByArgs['orderBy'] }
        : { orderBy?: QuizQuestionResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuizQuestionResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizQuestionResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuizQuestionResult model
   */
  readonly fields: QuizQuestionResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuizQuestionResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizQuestionResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quizSession<T extends QuizSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuizSessionDefaultArgs<ExtArgs>>): Prisma__QuizSessionClient<$Result.GetResult<Prisma.$QuizSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuizQuestionResult model
   */
  interface QuizQuestionResultFieldRefs {
    readonly quizSessionId: FieldRef<"QuizQuestionResult", 'String'>
    readonly questionId: FieldRef<"QuizQuestionResult", 'String'>
    readonly timeSpentMs: FieldRef<"QuizQuestionResult", 'Int'>
    readonly position: FieldRef<"QuizQuestionResult", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuizQuestionResult findUnique
   */
  export type QuizQuestionResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestionResult to fetch.
     */
    where: QuizQuestionResultWhereUniqueInput
  }

  /**
   * QuizQuestionResult findUniqueOrThrow
   */
  export type QuizQuestionResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestionResult to fetch.
     */
    where: QuizQuestionResultWhereUniqueInput
  }

  /**
   * QuizQuestionResult findFirst
   */
  export type QuizQuestionResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestionResult to fetch.
     */
    where?: QuizQuestionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionResults to fetch.
     */
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestionResults.
     */
    cursor?: QuizQuestionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestionResults.
     */
    distinct?: QuizQuestionResultScalarFieldEnum | QuizQuestionResultScalarFieldEnum[]
  }

  /**
   * QuizQuestionResult findFirstOrThrow
   */
  export type QuizQuestionResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestionResult to fetch.
     */
    where?: QuizQuestionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionResults to fetch.
     */
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuizQuestionResults.
     */
    cursor?: QuizQuestionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuizQuestionResults.
     */
    distinct?: QuizQuestionResultScalarFieldEnum | QuizQuestionResultScalarFieldEnum[]
  }

  /**
   * QuizQuestionResult findMany
   */
  export type QuizQuestionResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter, which QuizQuestionResults to fetch.
     */
    where?: QuizQuestionResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuizQuestionResults to fetch.
     */
    orderBy?: QuizQuestionResultOrderByWithRelationInput | QuizQuestionResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuizQuestionResults.
     */
    cursor?: QuizQuestionResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuizQuestionResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuizQuestionResults.
     */
    skip?: number
    distinct?: QuizQuestionResultScalarFieldEnum | QuizQuestionResultScalarFieldEnum[]
  }

  /**
   * QuizQuestionResult create
   */
  export type QuizQuestionResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * The data needed to create a QuizQuestionResult.
     */
    data: XOR<QuizQuestionResultCreateInput, QuizQuestionResultUncheckedCreateInput>
  }

  /**
   * QuizQuestionResult createMany
   */
  export type QuizQuestionResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuizQuestionResults.
     */
    data: QuizQuestionResultCreateManyInput | QuizQuestionResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuizQuestionResult createManyAndReturn
   */
  export type QuizQuestionResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * The data used to create many QuizQuestionResults.
     */
    data: QuizQuestionResultCreateManyInput | QuizQuestionResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestionResult update
   */
  export type QuizQuestionResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * The data needed to update a QuizQuestionResult.
     */
    data: XOR<QuizQuestionResultUpdateInput, QuizQuestionResultUncheckedUpdateInput>
    /**
     * Choose, which QuizQuestionResult to update.
     */
    where: QuizQuestionResultWhereUniqueInput
  }

  /**
   * QuizQuestionResult updateMany
   */
  export type QuizQuestionResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuizQuestionResults.
     */
    data: XOR<QuizQuestionResultUpdateManyMutationInput, QuizQuestionResultUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestionResults to update
     */
    where?: QuizQuestionResultWhereInput
    /**
     * Limit how many QuizQuestionResults to update.
     */
    limit?: number
  }

  /**
   * QuizQuestionResult updateManyAndReturn
   */
  export type QuizQuestionResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * The data used to update QuizQuestionResults.
     */
    data: XOR<QuizQuestionResultUpdateManyMutationInput, QuizQuestionResultUncheckedUpdateManyInput>
    /**
     * Filter which QuizQuestionResults to update
     */
    where?: QuizQuestionResultWhereInput
    /**
     * Limit how many QuizQuestionResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuizQuestionResult upsert
   */
  export type QuizQuestionResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * The filter to search for the QuizQuestionResult to update in case it exists.
     */
    where: QuizQuestionResultWhereUniqueInput
    /**
     * In case the QuizQuestionResult found by the `where` argument doesn't exist, create a new QuizQuestionResult with this data.
     */
    create: XOR<QuizQuestionResultCreateInput, QuizQuestionResultUncheckedCreateInput>
    /**
     * In case the QuizQuestionResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizQuestionResultUpdateInput, QuizQuestionResultUncheckedUpdateInput>
  }

  /**
   * QuizQuestionResult delete
   */
  export type QuizQuestionResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
    /**
     * Filter which QuizQuestionResult to delete.
     */
    where: QuizQuestionResultWhereUniqueInput
  }

  /**
   * QuizQuestionResult deleteMany
   */
  export type QuizQuestionResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuizQuestionResults to delete
     */
    where?: QuizQuestionResultWhereInput
    /**
     * Limit how many QuizQuestionResults to delete.
     */
    limit?: number
  }

  /**
   * QuizQuestionResult without action
   */
  export type QuizQuestionResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizQuestionResult
     */
    select?: QuizQuestionResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuizQuestionResult
     */
    omit?: QuizQuestionResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizQuestionResultInclude<ExtArgs> | null
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
    id: 'id',
    username: 'username',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    question: 'question',
    answer: 'answer',
    type: 'type',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isPublic: 'isPublic',
    viewCount: 'viewCount'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const QuestionTagScalarFieldEnum: {
    questionId: 'questionId',
    tagId: 'tagId'
  };

  export type QuestionTagScalarFieldEnum = (typeof QuestionTagScalarFieldEnum)[keyof typeof QuestionTagScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    position: 'position'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const StudyProgressScalarFieldEnum: {
    userId: 'userId',
    questionId: 'questionId',
    isStudied: 'isStudied',
    lastStudiedAt: 'lastStudiedAt',
    studyCount: 'studyCount'
  };

  export type StudyProgressScalarFieldEnum = (typeof StudyProgressScalarFieldEnum)[keyof typeof StudyProgressScalarFieldEnum]


  export const UserQuestionOrderScalarFieldEnum: {
    userId: 'userId',
    orderType: 'orderType',
    questionIds: 'questionIds',
    updatedAt: 'updatedAt'
  };

  export type UserQuestionOrderScalarFieldEnum = (typeof UserQuestionOrderScalarFieldEnum)[keyof typeof UserQuestionOrderScalarFieldEnum]


  export const UserPreferenceScalarFieldEnum: {
    userId: 'userId',
    theme: 'theme',
    filters: 'filters',
    selectedTags: 'selectedTags',
    lastActiveTab: 'lastActiveTab'
  };

  export type UserPreferenceScalarFieldEnum = (typeof UserPreferenceScalarFieldEnum)[keyof typeof UserPreferenceScalarFieldEnum]


  export const QuizSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    questionCount: 'questionCount',
    questionType: 'questionType',
    difficultyMode: 'difficultyMode',
    completed: 'completed'
  };

  export type QuizSessionScalarFieldEnum = (typeof QuizSessionScalarFieldEnum)[keyof typeof QuizSessionScalarFieldEnum]


  export const QuizQuestionResultScalarFieldEnum: {
    quizSessionId: 'quizSessionId',
    questionId: 'questionId',
    timeSpentMs: 'timeSpentMs',
    position: 'position'
  };

  export type QuizQuestionResultScalarFieldEnum = (typeof QuizQuestionResultScalarFieldEnum)[keyof typeof QuizQuestionResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderType'
   */
  export type EnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType'>
    


  /**
   * Reference to a field of type 'OrderType[]'
   */
  export type ListEnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType[]'>
    


  /**
   * Reference to a field of type 'Theme'
   */
  export type EnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme'>
    


  /**
   * Reference to a field of type 'Theme[]'
   */
  export type ListEnumThemeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Theme[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    questions?: QuestionListRelationFilter
    notes?: NoteListRelationFilter
    studyProgress?: StudyProgressListRelationFilter
    quizSessions?: QuizSessionListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    questionOrders?: UserQuestionOrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    studyProgress?: StudyProgressOrderByRelationAggregateInput
    quizSessions?: QuizSessionOrderByRelationAggregateInput
    preferences?: UserPreferenceOrderByWithRelationInput
    questionOrders?: UserQuestionOrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    questions?: QuestionListRelationFilter
    notes?: NoteListRelationFilter
    studyProgress?: StudyProgressListRelationFilter
    quizSessions?: QuizSessionListRelationFilter
    preferences?: XOR<UserPreferenceNullableScalarRelationFilter, UserPreferenceWhereInput> | null
    questionOrders?: UserQuestionOrderListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    isPublic?: BoolFilter<"Question"> | boolean
    viewCount?: IntFilter<"Question"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: QuestionTagListRelationFilter
    notes?: NoteListRelationFilter
    studyProgress?: StudyProgressListRelationFilter
    quizResults?: QuizQuestionResultListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    viewCount?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: QuestionTagOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    studyProgress?: StudyProgressOrderByRelationAggregateInput
    quizResults?: QuizQuestionResultOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    userId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    isPublic?: BoolFilter<"Question"> | boolean
    viewCount?: IntFilter<"Question"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: QuestionTagListRelationFilter
    notes?: NoteListRelationFilter
    studyProgress?: StudyProgressListRelationFilter
    quizResults?: QuizQuestionResultListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    viewCount?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    userId?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
    answer?: StringWithAggregatesFilter<"Question"> | string
    type?: EnumQuestionTypeWithAggregatesFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"Question"> | $Enums.DifficultyLevel
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Question"> | boolean
    viewCount?: IntWithAggregatesFilter<"Question"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    questions?: QuestionTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    questions?: QuestionTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    questions?: QuestionTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type QuestionTagWhereInput = {
    AND?: QuestionTagWhereInput | QuestionTagWhereInput[]
    OR?: QuestionTagWhereInput[]
    NOT?: QuestionTagWhereInput | QuestionTagWhereInput[]
    questionId?: StringFilter<"QuestionTag"> | string
    tagId?: StringFilter<"QuestionTag"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type QuestionTagOrderByWithRelationInput = {
    questionId?: SortOrder
    tagId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type QuestionTagWhereUniqueInput = Prisma.AtLeast<{
    questionId_tagId?: QuestionTagQuestionIdTagIdCompoundUniqueInput
    AND?: QuestionTagWhereInput | QuestionTagWhereInput[]
    OR?: QuestionTagWhereInput[]
    NOT?: QuestionTagWhereInput | QuestionTagWhereInput[]
    questionId?: StringFilter<"QuestionTag"> | string
    tagId?: StringFilter<"QuestionTag"> | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "questionId_tagId">

  export type QuestionTagOrderByWithAggregationInput = {
    questionId?: SortOrder
    tagId?: SortOrder
    _count?: QuestionTagCountOrderByAggregateInput
    _max?: QuestionTagMaxOrderByAggregateInput
    _min?: QuestionTagMinOrderByAggregateInput
  }

  export type QuestionTagScalarWhereWithAggregatesInput = {
    AND?: QuestionTagScalarWhereWithAggregatesInput | QuestionTagScalarWhereWithAggregatesInput[]
    OR?: QuestionTagScalarWhereWithAggregatesInput[]
    NOT?: QuestionTagScalarWhereWithAggregatesInput | QuestionTagScalarWhereWithAggregatesInput[]
    questionId?: StringWithAggregatesFilter<"QuestionTag"> | string
    tagId?: StringWithAggregatesFilter<"QuestionTag"> | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    questionId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    position?: IntFilter<"Note"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
    question?: QuestionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    questionId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    position?: IntFilter<"Note"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _avg?: NoteAvgOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
    _sum?: NoteSumOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    questionId?: StringWithAggregatesFilter<"Note"> | string
    userId?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    position?: IntWithAggregatesFilter<"Note"> | number
  }

  export type StudyProgressWhereInput = {
    AND?: StudyProgressWhereInput | StudyProgressWhereInput[]
    OR?: StudyProgressWhereInput[]
    NOT?: StudyProgressWhereInput | StudyProgressWhereInput[]
    userId?: StringFilter<"StudyProgress"> | string
    questionId?: StringFilter<"StudyProgress"> | string
    isStudied?: BoolFilter<"StudyProgress"> | boolean
    lastStudiedAt?: DateTimeNullableFilter<"StudyProgress"> | Date | string | null
    studyCount?: IntFilter<"StudyProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type StudyProgressOrderByWithRelationInput = {
    userId?: SortOrder
    questionId?: SortOrder
    isStudied?: SortOrder
    lastStudiedAt?: SortOrderInput | SortOrder
    studyCount?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type StudyProgressWhereUniqueInput = Prisma.AtLeast<{
    userId_questionId?: StudyProgressUserIdQuestionIdCompoundUniqueInput
    AND?: StudyProgressWhereInput | StudyProgressWhereInput[]
    OR?: StudyProgressWhereInput[]
    NOT?: StudyProgressWhereInput | StudyProgressWhereInput[]
    userId?: StringFilter<"StudyProgress"> | string
    questionId?: StringFilter<"StudyProgress"> | string
    isStudied?: BoolFilter<"StudyProgress"> | boolean
    lastStudiedAt?: DateTimeNullableFilter<"StudyProgress"> | Date | string | null
    studyCount?: IntFilter<"StudyProgress"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "userId_questionId">

  export type StudyProgressOrderByWithAggregationInput = {
    userId?: SortOrder
    questionId?: SortOrder
    isStudied?: SortOrder
    lastStudiedAt?: SortOrderInput | SortOrder
    studyCount?: SortOrder
    _count?: StudyProgressCountOrderByAggregateInput
    _avg?: StudyProgressAvgOrderByAggregateInput
    _max?: StudyProgressMaxOrderByAggregateInput
    _min?: StudyProgressMinOrderByAggregateInput
    _sum?: StudyProgressSumOrderByAggregateInput
  }

  export type StudyProgressScalarWhereWithAggregatesInput = {
    AND?: StudyProgressScalarWhereWithAggregatesInput | StudyProgressScalarWhereWithAggregatesInput[]
    OR?: StudyProgressScalarWhereWithAggregatesInput[]
    NOT?: StudyProgressScalarWhereWithAggregatesInput | StudyProgressScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"StudyProgress"> | string
    questionId?: StringWithAggregatesFilter<"StudyProgress"> | string
    isStudied?: BoolWithAggregatesFilter<"StudyProgress"> | boolean
    lastStudiedAt?: DateTimeNullableWithAggregatesFilter<"StudyProgress"> | Date | string | null
    studyCount?: IntWithAggregatesFilter<"StudyProgress"> | number
  }

  export type UserQuestionOrderWhereInput = {
    AND?: UserQuestionOrderWhereInput | UserQuestionOrderWhereInput[]
    OR?: UserQuestionOrderWhereInput[]
    NOT?: UserQuestionOrderWhereInput | UserQuestionOrderWhereInput[]
    userId?: StringFilter<"UserQuestionOrder"> | string
    orderType?: EnumOrderTypeFilter<"UserQuestionOrder"> | $Enums.OrderType
    questionIds?: StringNullableListFilter<"UserQuestionOrder">
    updatedAt?: DateTimeFilter<"UserQuestionOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserQuestionOrderOrderByWithRelationInput = {
    userId?: SortOrder
    orderType?: SortOrder
    questionIds?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserQuestionOrderWhereUniqueInput = Prisma.AtLeast<{
    userId_orderType?: UserQuestionOrderUserIdOrderTypeCompoundUniqueInput
    AND?: UserQuestionOrderWhereInput | UserQuestionOrderWhereInput[]
    OR?: UserQuestionOrderWhereInput[]
    NOT?: UserQuestionOrderWhereInput | UserQuestionOrderWhereInput[]
    userId?: StringFilter<"UserQuestionOrder"> | string
    orderType?: EnumOrderTypeFilter<"UserQuestionOrder"> | $Enums.OrderType
    questionIds?: StringNullableListFilter<"UserQuestionOrder">
    updatedAt?: DateTimeFilter<"UserQuestionOrder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_orderType">

  export type UserQuestionOrderOrderByWithAggregationInput = {
    userId?: SortOrder
    orderType?: SortOrder
    questionIds?: SortOrder
    updatedAt?: SortOrder
    _count?: UserQuestionOrderCountOrderByAggregateInput
    _max?: UserQuestionOrderMaxOrderByAggregateInput
    _min?: UserQuestionOrderMinOrderByAggregateInput
  }

  export type UserQuestionOrderScalarWhereWithAggregatesInput = {
    AND?: UserQuestionOrderScalarWhereWithAggregatesInput | UserQuestionOrderScalarWhereWithAggregatesInput[]
    OR?: UserQuestionOrderScalarWhereWithAggregatesInput[]
    NOT?: UserQuestionOrderScalarWhereWithAggregatesInput | UserQuestionOrderScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserQuestionOrder"> | string
    orderType?: EnumOrderTypeWithAggregatesFilter<"UserQuestionOrder"> | $Enums.OrderType
    questionIds?: StringNullableListFilter<"UserQuestionOrder">
    updatedAt?: DateTimeWithAggregatesFilter<"UserQuestionOrder"> | Date | string
  }

  export type UserPreferenceWhereInput = {
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    userId?: StringFilter<"UserPreference"> | string
    theme?: EnumThemeFilter<"UserPreference"> | $Enums.Theme
    filters?: JsonNullableFilter<"UserPreference">
    selectedTags?: StringNullableListFilter<"UserPreference">
    lastActiveTab?: StringNullableFilter<"UserPreference"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferenceOrderByWithRelationInput = {
    userId?: SortOrder
    theme?: SortOrder
    filters?: SortOrderInput | SortOrder
    selectedTags?: SortOrder
    lastActiveTab?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferenceWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    OR?: UserPreferenceWhereInput[]
    NOT?: UserPreferenceWhereInput | UserPreferenceWhereInput[]
    theme?: EnumThemeFilter<"UserPreference"> | $Enums.Theme
    filters?: JsonNullableFilter<"UserPreference">
    selectedTags?: StringNullableListFilter<"UserPreference">
    lastActiveTab?: StringNullableFilter<"UserPreference"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserPreferenceOrderByWithAggregationInput = {
    userId?: SortOrder
    theme?: SortOrder
    filters?: SortOrderInput | SortOrder
    selectedTags?: SortOrder
    lastActiveTab?: SortOrderInput | SortOrder
    _count?: UserPreferenceCountOrderByAggregateInput
    _max?: UserPreferenceMaxOrderByAggregateInput
    _min?: UserPreferenceMinOrderByAggregateInput
  }

  export type UserPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserPreferenceScalarWhereWithAggregatesInput | UserPreferenceScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserPreference"> | string
    theme?: EnumThemeWithAggregatesFilter<"UserPreference"> | $Enums.Theme
    filters?: JsonNullableWithAggregatesFilter<"UserPreference">
    selectedTags?: StringNullableListFilter<"UserPreference">
    lastActiveTab?: StringNullableWithAggregatesFilter<"UserPreference"> | string | null
  }

  export type QuizSessionWhereInput = {
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    id?: StringFilter<"QuizSession"> | string
    userId?: StringFilter<"QuizSession"> | string
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    questionCount?: IntFilter<"QuizSession"> | number
    questionType?: EnumQuestionTypeNullableFilter<"QuizSession"> | $Enums.QuestionType | null
    difficultyMode?: EnumDifficultyLevelNullableFilter<"QuizSession"> | $Enums.DifficultyLevel | null
    completed?: BoolFilter<"QuizSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    questionResults?: QuizQuestionResultListRelationFilter
  }

  export type QuizSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    questionCount?: SortOrder
    questionType?: SortOrderInput | SortOrder
    difficultyMode?: SortOrderInput | SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
    questionResults?: QuizQuestionResultOrderByRelationAggregateInput
  }

  export type QuizSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizSessionWhereInput | QuizSessionWhereInput[]
    OR?: QuizSessionWhereInput[]
    NOT?: QuizSessionWhereInput | QuizSessionWhereInput[]
    userId?: StringFilter<"QuizSession"> | string
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    questionCount?: IntFilter<"QuizSession"> | number
    questionType?: EnumQuestionTypeNullableFilter<"QuizSession"> | $Enums.QuestionType | null
    difficultyMode?: EnumDifficultyLevelNullableFilter<"QuizSession"> | $Enums.DifficultyLevel | null
    completed?: BoolFilter<"QuizSession"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    questionResults?: QuizQuestionResultListRelationFilter
  }, "id">

  export type QuizSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    questionCount?: SortOrder
    questionType?: SortOrderInput | SortOrder
    difficultyMode?: SortOrderInput | SortOrder
    completed?: SortOrder
    _count?: QuizSessionCountOrderByAggregateInput
    _avg?: QuizSessionAvgOrderByAggregateInput
    _max?: QuizSessionMaxOrderByAggregateInput
    _min?: QuizSessionMinOrderByAggregateInput
    _sum?: QuizSessionSumOrderByAggregateInput
  }

  export type QuizSessionScalarWhereWithAggregatesInput = {
    AND?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    OR?: QuizSessionScalarWhereWithAggregatesInput[]
    NOT?: QuizSessionScalarWhereWithAggregatesInput | QuizSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuizSession"> | string
    userId?: StringWithAggregatesFilter<"QuizSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"QuizSession"> | Date | string | null
    questionCount?: IntWithAggregatesFilter<"QuizSession"> | number
    questionType?: EnumQuestionTypeNullableWithAggregatesFilter<"QuizSession"> | $Enums.QuestionType | null
    difficultyMode?: EnumDifficultyLevelNullableWithAggregatesFilter<"QuizSession"> | $Enums.DifficultyLevel | null
    completed?: BoolWithAggregatesFilter<"QuizSession"> | boolean
  }

  export type QuizQuestionResultWhereInput = {
    AND?: QuizQuestionResultWhereInput | QuizQuestionResultWhereInput[]
    OR?: QuizQuestionResultWhereInput[]
    NOT?: QuizQuestionResultWhereInput | QuizQuestionResultWhereInput[]
    quizSessionId?: StringFilter<"QuizQuestionResult"> | string
    questionId?: StringFilter<"QuizQuestionResult"> | string
    timeSpentMs?: IntFilter<"QuizQuestionResult"> | number
    position?: IntFilter<"QuizQuestionResult"> | number
    quizSession?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type QuizQuestionResultOrderByWithRelationInput = {
    quizSessionId?: SortOrder
    questionId?: SortOrder
    timeSpentMs?: SortOrder
    position?: SortOrder
    quizSession?: QuizSessionOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
  }

  export type QuizQuestionResultWhereUniqueInput = Prisma.AtLeast<{
    quizSessionId_questionId?: QuizQuestionResultQuizSessionIdQuestionIdCompoundUniqueInput
    AND?: QuizQuestionResultWhereInput | QuizQuestionResultWhereInput[]
    OR?: QuizQuestionResultWhereInput[]
    NOT?: QuizQuestionResultWhereInput | QuizQuestionResultWhereInput[]
    quizSessionId?: StringFilter<"QuizQuestionResult"> | string
    questionId?: StringFilter<"QuizQuestionResult"> | string
    timeSpentMs?: IntFilter<"QuizQuestionResult"> | number
    position?: IntFilter<"QuizQuestionResult"> | number
    quizSession?: XOR<QuizSessionScalarRelationFilter, QuizSessionWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "quizSessionId_questionId">

  export type QuizQuestionResultOrderByWithAggregationInput = {
    quizSessionId?: SortOrder
    questionId?: SortOrder
    timeSpentMs?: SortOrder
    position?: SortOrder
    _count?: QuizQuestionResultCountOrderByAggregateInput
    _avg?: QuizQuestionResultAvgOrderByAggregateInput
    _max?: QuizQuestionResultMaxOrderByAggregateInput
    _min?: QuizQuestionResultMinOrderByAggregateInput
    _sum?: QuizQuestionResultSumOrderByAggregateInput
  }

  export type QuizQuestionResultScalarWhereWithAggregatesInput = {
    AND?: QuizQuestionResultScalarWhereWithAggregatesInput | QuizQuestionResultScalarWhereWithAggregatesInput[]
    OR?: QuizQuestionResultScalarWhereWithAggregatesInput[]
    NOT?: QuizQuestionResultScalarWhereWithAggregatesInput | QuizQuestionResultScalarWhereWithAggregatesInput[]
    quizSessionId?: StringWithAggregatesFilter<"QuizQuestionResult"> | string
    questionId?: StringWithAggregatesFilter<"QuizQuestionResult"> | string
    timeSpentMs?: IntWithAggregatesFilter<"QuizQuestionResult"> | number
    position?: IntWithAggregatesFilter<"QuizQuestionResult"> | number
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    user: UserCreateNestedOneWithoutQuestionsInput
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput
    notes?: NoteCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput
    notes?: NoteUncheckedCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput
    notes?: NoteUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    id?: string
    name: string
    questions?: QuestionTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    questions?: QuestionTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTagCreateInput = {
    question: QuestionCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionTagUncheckedCreateInput = {
    questionId: string
    tagId: string
  }

  export type QuestionTagUpdateInput = {
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionTagUncheckedUpdateInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTagCreateManyInput = {
    questionId: string
    tagId: string
  }

  export type QuestionTagUpdateManyMutationInput = {

  }

  export type QuestionTagUncheckedUpdateManyInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
    question: QuestionCreateNestedOneWithoutNotesInput
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    questionId: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutNotesNestedInput
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type NoteCreateManyInput = {
    id?: string
    questionId: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressCreateInput = {
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
    user: UserCreateNestedOneWithoutStudyProgressInput
    question: QuestionCreateNestedOneWithoutStudyProgressInput
  }

  export type StudyProgressUncheckedCreateInput = {
    userId: string
    questionId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type StudyProgressUpdateInput = {
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudyProgressNestedInput
    question?: QuestionUpdateOneRequiredWithoutStudyProgressNestedInput
  }

  export type StudyProgressUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressCreateManyInput = {
    userId: string
    questionId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type StudyProgressUpdateManyMutationInput = {
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserQuestionOrderCreateInput = {
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutQuestionOrdersInput
  }

  export type UserQuestionOrderUncheckedCreateInput = {
    userId: string
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
  }

  export type UserQuestionOrderUpdateInput = {
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQuestionOrdersNestedInput
  }

  export type UserQuestionOrderUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionOrderCreateManyInput = {
    userId: string
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
  }

  export type UserQuestionOrderUpdateManyMutationInput = {
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionOrderUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferenceCreateInput = {
    theme?: $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceCreateselectedTagsInput | string[]
    lastActiveTab?: string | null
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferenceUncheckedCreateInput = {
    userId: string
    theme?: $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceCreateselectedTagsInput | string[]
    lastActiveTab?: string | null
  }

  export type UserPreferenceUpdateInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferenceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceCreateManyInput = {
    userId: string
    theme?: $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceCreateselectedTagsInput | string[]
    lastActiveTab?: string | null
  }

  export type UserPreferenceUpdateManyMutationInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuizSessionCreateInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
    user: UserCreateNestedOneWithoutQuizSessionsInput
    questionResults?: QuizQuestionResultCreateNestedManyWithoutQuizSessionInput
  }

  export type QuizSessionUncheckedCreateInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
    questionResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuizSessionInput
  }

  export type QuizSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuizSessionsNestedInput
    questionResults?: QuizQuestionResultUpdateManyWithoutQuizSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    questionResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuizSessionNestedInput
  }

  export type QuizSessionCreateManyInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
  }

  export type QuizSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuizQuestionResultCreateInput = {
    timeSpentMs: number
    position: number
    quizSession: QuizSessionCreateNestedOneWithoutQuestionResultsInput
    question: QuestionCreateNestedOneWithoutQuizResultsInput
  }

  export type QuizQuestionResultUncheckedCreateInput = {
    quizSessionId: string
    questionId: string
    timeSpentMs: number
    position: number
  }

  export type QuizQuestionResultUpdateInput = {
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    quizSession?: QuizSessionUpdateOneRequiredWithoutQuestionResultsNestedInput
    question?: QuestionUpdateOneRequiredWithoutQuizResultsNestedInput
  }

  export type QuizQuestionResultUncheckedUpdateInput = {
    quizSessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionResultCreateManyInput = {
    quizSessionId: string
    questionId: string
    timeSpentMs: number
    position: number
  }

  export type QuizQuestionResultUpdateManyMutationInput = {
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionResultUncheckedUpdateManyInput = {
    quizSessionId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type StudyProgressListRelationFilter = {
    every?: StudyProgressWhereInput
    some?: StudyProgressWhereInput
    none?: StudyProgressWhereInput
  }

  export type QuizSessionListRelationFilter = {
    every?: QuizSessionWhereInput
    some?: QuizSessionWhereInput
    none?: QuizSessionWhereInput
  }

  export type UserPreferenceNullableScalarRelationFilter = {
    is?: UserPreferenceWhereInput | null
    isNot?: UserPreferenceWhereInput | null
  }

  export type UserQuestionOrderListRelationFilter = {
    every?: UserQuestionOrderWhereInput
    some?: UserQuestionOrderWhereInput
    none?: UserQuestionOrderWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudyProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuestionOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionTagListRelationFilter = {
    every?: QuestionTagWhereInput
    some?: QuestionTagWhereInput
    none?: QuestionTagWhereInput
  }

  export type QuizQuestionResultListRelationFilter = {
    every?: QuizQuestionResultWhereInput
    some?: QuizQuestionResultWhereInput
    none?: QuizQuestionResultWhereInput
  }

  export type QuestionTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizQuestionResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    viewCount?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    viewCount?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    type?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isPublic?: SortOrder
    viewCount?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type QuestionTagQuestionIdTagIdCompoundUniqueInput = {
    questionId: string
    tagId: string
  }

  export type QuestionTagCountOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type QuestionTagMaxOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type QuestionTagMinOrderByAggregateInput = {
    questionId?: SortOrder
    tagId?: SortOrder
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
  }

  export type NoteAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    position?: SortOrder
  }

  export type NoteSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudyProgressUserIdQuestionIdCompoundUniqueInput = {
    userId: string
    questionId: string
  }

  export type StudyProgressCountOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    isStudied?: SortOrder
    lastStudiedAt?: SortOrder
    studyCount?: SortOrder
  }

  export type StudyProgressAvgOrderByAggregateInput = {
    studyCount?: SortOrder
  }

  export type StudyProgressMaxOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    isStudied?: SortOrder
    lastStudiedAt?: SortOrder
    studyCount?: SortOrder
  }

  export type StudyProgressMinOrderByAggregateInput = {
    userId?: SortOrder
    questionId?: SortOrder
    isStudied?: SortOrder
    lastStudiedAt?: SortOrder
    studyCount?: SortOrder
  }

  export type StudyProgressSumOrderByAggregateInput = {
    studyCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserQuestionOrderUserIdOrderTypeCompoundUniqueInput = {
    userId: string
    orderType: $Enums.OrderType
  }

  export type UserQuestionOrderCountOrderByAggregateInput = {
    userId?: SortOrder
    orderType?: SortOrder
    questionIds?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuestionOrderMaxOrderByAggregateInput = {
    userId?: SortOrder
    orderType?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserQuestionOrderMinOrderByAggregateInput = {
    userId?: SortOrder
    orderType?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type EnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UserPreferenceCountOrderByAggregateInput = {
    userId?: SortOrder
    theme?: SortOrder
    filters?: SortOrder
    selectedTags?: SortOrder
    lastActiveTab?: SortOrder
  }

  export type UserPreferenceMaxOrderByAggregateInput = {
    userId?: SortOrder
    theme?: SortOrder
    lastActiveTab?: SortOrder
  }

  export type UserPreferenceMinOrderByAggregateInput = {
    userId?: SortOrder
    theme?: SortOrder
    lastActiveTab?: SortOrder
  }

  export type EnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type EnumQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQuestionTypeNullableFilter<$PrismaModel> | $Enums.QuestionType | null
  }

  export type EnumDifficultyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel> | $Enums.DifficultyLevel | null
  }

  export type QuizSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    questionCount?: SortOrder
    questionType?: SortOrder
    difficultyMode?: SortOrder
    completed?: SortOrder
  }

  export type QuizSessionAvgOrderByAggregateInput = {
    questionCount?: SortOrder
  }

  export type QuizSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    questionCount?: SortOrder
    questionType?: SortOrder
    difficultyMode?: SortOrder
    completed?: SortOrder
  }

  export type QuizSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    questionCount?: SortOrder
    questionType?: SortOrder
    difficultyMode?: SortOrder
    completed?: SortOrder
  }

  export type QuizSessionSumOrderByAggregateInput = {
    questionCount?: SortOrder
  }

  export type EnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
  }

  export type EnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
  }

  export type QuizSessionScalarRelationFilter = {
    is?: QuizSessionWhereInput
    isNot?: QuizSessionWhereInput
  }

  export type QuizQuestionResultQuizSessionIdQuestionIdCompoundUniqueInput = {
    quizSessionId: string
    questionId: string
  }

  export type QuizQuestionResultCountOrderByAggregateInput = {
    quizSessionId?: SortOrder
    questionId?: SortOrder
    timeSpentMs?: SortOrder
    position?: SortOrder
  }

  export type QuizQuestionResultAvgOrderByAggregateInput = {
    timeSpentMs?: SortOrder
    position?: SortOrder
  }

  export type QuizQuestionResultMaxOrderByAggregateInput = {
    quizSessionId?: SortOrder
    questionId?: SortOrder
    timeSpentMs?: SortOrder
    position?: SortOrder
  }

  export type QuizQuestionResultMinOrderByAggregateInput = {
    quizSessionId?: SortOrder
    questionId?: SortOrder
    timeSpentMs?: SortOrder
    position?: SortOrder
  }

  export type QuizQuestionResultSumOrderByAggregateInput = {
    timeSpentMs?: SortOrder
    position?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type StudyProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput> | StudyProgressCreateWithoutUserInput[] | StudyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutUserInput | StudyProgressCreateOrConnectWithoutUserInput[]
    createMany?: StudyProgressCreateManyUserInputEnvelope
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
  }

  export type QuizSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput> | QuizSessionCreateWithoutUserInput[] | QuizSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutUserInput | QuizSessionCreateOrConnectWithoutUserInput[]
    createMany?: QuizSessionCreateManyUserInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type UserPreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type UserQuestionOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput> | UserQuestionOrderCreateWithoutUserInput[] | UserQuestionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionOrderCreateOrConnectWithoutUserInput | UserQuestionOrderCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionOrderCreateManyUserInputEnvelope
    connect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type StudyProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput> | StudyProgressCreateWithoutUserInput[] | StudyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutUserInput | StudyProgressCreateOrConnectWithoutUserInput[]
    createMany?: StudyProgressCreateManyUserInputEnvelope
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
  }

  export type QuizSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput> | QuizSessionCreateWithoutUserInput[] | QuizSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutUserInput | QuizSessionCreateOrConnectWithoutUserInput[]
    createMany?: QuizSessionCreateManyUserInputEnvelope
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
  }

  export type UserPreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    connect?: UserPreferenceWhereUniqueInput
  }

  export type UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput> | UserQuestionOrderCreateWithoutUserInput[] | UserQuestionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionOrderCreateOrConnectWithoutUserInput | UserQuestionOrderCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionOrderCreateManyUserInputEnvelope
    connect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type StudyProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput> | StudyProgressCreateWithoutUserInput[] | StudyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutUserInput | StudyProgressCreateOrConnectWithoutUserInput[]
    upsert?: StudyProgressUpsertWithWhereUniqueWithoutUserInput | StudyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyProgressCreateManyUserInputEnvelope
    set?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    disconnect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    delete?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    update?: StudyProgressUpdateWithWhereUniqueWithoutUserInput | StudyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyProgressUpdateManyWithWhereWithoutUserInput | StudyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
  }

  export type QuizSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput> | QuizSessionCreateWithoutUserInput[] | QuizSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutUserInput | QuizSessionCreateOrConnectWithoutUserInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutUserInput | QuizSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizSessionCreateManyUserInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutUserInput | QuizSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutUserInput | QuizSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type UserPreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestionOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput> | UserQuestionOrderCreateWithoutUserInput[] | UserQuestionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionOrderCreateOrConnectWithoutUserInput | UserQuestionOrderCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionOrderUpsertWithWhereUniqueWithoutUserInput | UserQuestionOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionOrderCreateManyUserInputEnvelope
    set?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    disconnect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    delete?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    connect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    update?: UserQuestionOrderUpdateWithWhereUniqueWithoutUserInput | UserQuestionOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionOrderUpdateManyWithWhereWithoutUserInput | UserQuestionOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionOrderScalarWhereInput | UserQuestionOrderScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput> | NoteCreateWithoutUserInput[] | NoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutUserInput | NoteCreateOrConnectWithoutUserInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutUserInput | NoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NoteCreateManyUserInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutUserInput | NoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutUserInput | NoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type StudyProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput> | StudyProgressCreateWithoutUserInput[] | StudyProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutUserInput | StudyProgressCreateOrConnectWithoutUserInput[]
    upsert?: StudyProgressUpsertWithWhereUniqueWithoutUserInput | StudyProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudyProgressCreateManyUserInputEnvelope
    set?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    disconnect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    delete?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    update?: StudyProgressUpdateWithWhereUniqueWithoutUserInput | StudyProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudyProgressUpdateManyWithWhereWithoutUserInput | StudyProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
  }

  export type QuizSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput> | QuizSessionCreateWithoutUserInput[] | QuizSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuizSessionCreateOrConnectWithoutUserInput | QuizSessionCreateOrConnectWithoutUserInput[]
    upsert?: QuizSessionUpsertWithWhereUniqueWithoutUserInput | QuizSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuizSessionCreateManyUserInputEnvelope
    set?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    disconnect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    delete?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    connect?: QuizSessionWhereUniqueInput | QuizSessionWhereUniqueInput[]
    update?: QuizSessionUpdateWithWhereUniqueWithoutUserInput | QuizSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuizSessionUpdateManyWithWhereWithoutUserInput | QuizSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
  }

  export type UserPreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferenceCreateOrConnectWithoutUserInput
    upsert?: UserPreferenceUpsertWithoutUserInput
    disconnect?: UserPreferenceWhereInput | boolean
    delete?: UserPreferenceWhereInput | boolean
    connect?: UserPreferenceWhereUniqueInput
    update?: XOR<XOR<UserPreferenceUpdateToOneWithWhereWithoutUserInput, UserPreferenceUpdateWithoutUserInput>, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput> | UserQuestionOrderCreateWithoutUserInput[] | UserQuestionOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionOrderCreateOrConnectWithoutUserInput | UserQuestionOrderCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionOrderUpsertWithWhereUniqueWithoutUserInput | UserQuestionOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionOrderCreateManyUserInputEnvelope
    set?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    disconnect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    delete?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    connect?: UserQuestionOrderWhereUniqueInput | UserQuestionOrderWhereUniqueInput[]
    update?: UserQuestionOrderUpdateWithWhereUniqueWithoutUserInput | UserQuestionOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionOrderUpdateManyWithWhereWithoutUserInput | UserQuestionOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionOrderScalarWhereInput | UserQuestionOrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionTagCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput> | QuestionTagCreateWithoutQuestionInput[] | QuestionTagUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutQuestionInput | QuestionTagCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTagCreateManyQuestionInputEnvelope
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutQuestionInput = {
    create?: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput> | NoteCreateWithoutQuestionInput[] | NoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutQuestionInput | NoteCreateOrConnectWithoutQuestionInput[]
    createMany?: NoteCreateManyQuestionInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type StudyProgressCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput> | StudyProgressCreateWithoutQuestionInput[] | StudyProgressUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutQuestionInput | StudyProgressCreateOrConnectWithoutQuestionInput[]
    createMany?: StudyProgressCreateManyQuestionInputEnvelope
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
  }

  export type QuizQuestionResultCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput> | QuizQuestionResultCreateWithoutQuestionInput[] | QuizQuestionResultUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuestionInput | QuizQuestionResultCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizQuestionResultCreateManyQuestionInputEnvelope
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
  }

  export type QuestionTagUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput> | QuestionTagCreateWithoutQuestionInput[] | QuestionTagUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutQuestionInput | QuestionTagCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTagCreateManyQuestionInputEnvelope
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput> | NoteCreateWithoutQuestionInput[] | NoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutQuestionInput | NoteCreateOrConnectWithoutQuestionInput[]
    createMany?: NoteCreateManyQuestionInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type StudyProgressUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput> | StudyProgressCreateWithoutQuestionInput[] | StudyProgressUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutQuestionInput | StudyProgressCreateOrConnectWithoutQuestionInput[]
    createMany?: StudyProgressCreateManyQuestionInputEnvelope
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
  }

  export type QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput> | QuizQuestionResultCreateWithoutQuestionInput[] | QuizQuestionResultUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuestionInput | QuizQuestionResultCreateOrConnectWithoutQuestionInput[]
    createMany?: QuizQuestionResultCreateManyQuestionInputEnvelope
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionsInput
    upsert?: UserUpsertWithoutQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionsInput, UserUpdateWithoutQuestionsInput>, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionTagUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput> | QuestionTagCreateWithoutQuestionInput[] | QuestionTagUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutQuestionInput | QuestionTagCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTagUpsertWithWhereUniqueWithoutQuestionInput | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTagCreateManyQuestionInputEnvelope
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    update?: QuestionTagUpdateWithWhereUniqueWithoutQuestionInput | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTagUpdateManyWithWhereWithoutQuestionInput | QuestionTagUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput> | NoteCreateWithoutQuestionInput[] | NoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutQuestionInput | NoteCreateOrConnectWithoutQuestionInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutQuestionInput | NoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: NoteCreateManyQuestionInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutQuestionInput | NoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutQuestionInput | NoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type StudyProgressUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput> | StudyProgressCreateWithoutQuestionInput[] | StudyProgressUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutQuestionInput | StudyProgressCreateOrConnectWithoutQuestionInput[]
    upsert?: StudyProgressUpsertWithWhereUniqueWithoutQuestionInput | StudyProgressUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudyProgressCreateManyQuestionInputEnvelope
    set?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    disconnect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    delete?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    update?: StudyProgressUpdateWithWhereUniqueWithoutQuestionInput | StudyProgressUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudyProgressUpdateManyWithWhereWithoutQuestionInput | StudyProgressUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
  }

  export type QuizQuestionResultUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput> | QuizQuestionResultCreateWithoutQuestionInput[] | QuizQuestionResultUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuestionInput | QuizQuestionResultCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizQuestionResultUpsertWithWhereUniqueWithoutQuestionInput | QuizQuestionResultUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizQuestionResultCreateManyQuestionInputEnvelope
    set?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    disconnect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    delete?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    update?: QuizQuestionResultUpdateWithWhereUniqueWithoutQuestionInput | QuizQuestionResultUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizQuestionResultUpdateManyWithWhereWithoutQuestionInput | QuizQuestionResultUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
  }

  export type QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput> | QuestionTagCreateWithoutQuestionInput[] | QuestionTagUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutQuestionInput | QuestionTagCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTagUpsertWithWhereUniqueWithoutQuestionInput | QuestionTagUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTagCreateManyQuestionInputEnvelope
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    update?: QuestionTagUpdateWithWhereUniqueWithoutQuestionInput | QuestionTagUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTagUpdateManyWithWhereWithoutQuestionInput | QuestionTagUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput> | NoteCreateWithoutQuestionInput[] | NoteUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutQuestionInput | NoteCreateOrConnectWithoutQuestionInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutQuestionInput | NoteUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: NoteCreateManyQuestionInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutQuestionInput | NoteUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutQuestionInput | NoteUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput> | StudyProgressCreateWithoutQuestionInput[] | StudyProgressUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: StudyProgressCreateOrConnectWithoutQuestionInput | StudyProgressCreateOrConnectWithoutQuestionInput[]
    upsert?: StudyProgressUpsertWithWhereUniqueWithoutQuestionInput | StudyProgressUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: StudyProgressCreateManyQuestionInputEnvelope
    set?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    disconnect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    delete?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    connect?: StudyProgressWhereUniqueInput | StudyProgressWhereUniqueInput[]
    update?: StudyProgressUpdateWithWhereUniqueWithoutQuestionInput | StudyProgressUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: StudyProgressUpdateManyWithWhereWithoutQuestionInput | StudyProgressUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
  }

  export type QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput> | QuizQuestionResultCreateWithoutQuestionInput[] | QuizQuestionResultUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuestionInput | QuizQuestionResultCreateOrConnectWithoutQuestionInput[]
    upsert?: QuizQuestionResultUpsertWithWhereUniqueWithoutQuestionInput | QuizQuestionResultUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuizQuestionResultCreateManyQuestionInputEnvelope
    set?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    disconnect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    delete?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    update?: QuizQuestionResultUpdateWithWhereUniqueWithoutQuestionInput | QuizQuestionResultUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuizQuestionResultUpdateManyWithWhereWithoutQuestionInput | QuizQuestionResultUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
  }

  export type QuestionTagCreateNestedManyWithoutTagInput = {
    create?: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput> | QuestionTagCreateWithoutTagInput[] | QuestionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutTagInput | QuestionTagCreateOrConnectWithoutTagInput[]
    createMany?: QuestionTagCreateManyTagInputEnvelope
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
  }

  export type QuestionTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput> | QuestionTagCreateWithoutTagInput[] | QuestionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutTagInput | QuestionTagCreateOrConnectWithoutTagInput[]
    createMany?: QuestionTagCreateManyTagInputEnvelope
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
  }

  export type QuestionTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput> | QuestionTagCreateWithoutTagInput[] | QuestionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutTagInput | QuestionTagCreateOrConnectWithoutTagInput[]
    upsert?: QuestionTagUpsertWithWhereUniqueWithoutTagInput | QuestionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: QuestionTagCreateManyTagInputEnvelope
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    update?: QuestionTagUpdateWithWhereUniqueWithoutTagInput | QuestionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: QuestionTagUpdateManyWithWhereWithoutTagInput | QuestionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
  }

  export type QuestionTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput> | QuestionTagCreateWithoutTagInput[] | QuestionTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: QuestionTagCreateOrConnectWithoutTagInput | QuestionTagCreateOrConnectWithoutTagInput[]
    upsert?: QuestionTagUpsertWithWhereUniqueWithoutTagInput | QuestionTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: QuestionTagCreateManyTagInputEnvelope
    set?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    disconnect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    delete?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    connect?: QuestionTagWhereUniqueInput | QuestionTagWhereUniqueInput[]
    update?: QuestionTagUpdateWithWhereUniqueWithoutTagInput | QuestionTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: QuestionTagUpdateManyWithWhereWithoutTagInput | QuestionTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutTagsInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    connect?: QuestionWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput
    connect?: TagWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTagsInput
    upsert?: QuestionUpsertWithoutTagsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTagsInput, QuestionUpdateWithoutTagsInput>, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TagCreateOrConnectWithoutQuestionsInput
    upsert?: TagUpsertWithoutQuestionsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutQuestionsInput, TagUpdateWithoutQuestionsInput>, TagUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionCreateNestedOneWithoutNotesInput = {
    create?: XOR<QuestionCreateWithoutNotesInput, QuestionUncheckedCreateWithoutNotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutNotesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotesInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<QuestionCreateWithoutNotesInput, QuestionUncheckedCreateWithoutNotesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutNotesInput
    upsert?: QuestionUpsertWithoutNotesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutNotesInput, QuestionUpdateWithoutNotesInput>, QuestionUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotesInput
    upsert?: UserUpsertWithoutNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotesInput, UserUpdateWithoutNotesInput>, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserCreateNestedOneWithoutStudyProgressInput = {
    create?: XOR<UserCreateWithoutStudyProgressInput, UserUncheckedCreateWithoutStudyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyProgressInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutStudyProgressInput = {
    create?: XOR<QuestionCreateWithoutStudyProgressInput, QuestionUncheckedCreateWithoutStudyProgressInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudyProgressInput
    connect?: QuestionWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutStudyProgressNestedInput = {
    create?: XOR<UserCreateWithoutStudyProgressInput, UserUncheckedCreateWithoutStudyProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudyProgressInput
    upsert?: UserUpsertWithoutStudyProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudyProgressInput, UserUpdateWithoutStudyProgressInput>, UserUncheckedUpdateWithoutStudyProgressInput>
  }

  export type QuestionUpdateOneRequiredWithoutStudyProgressNestedInput = {
    create?: XOR<QuestionCreateWithoutStudyProgressInput, QuestionUncheckedCreateWithoutStudyProgressInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutStudyProgressInput
    upsert?: QuestionUpsertWithoutStudyProgressInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutStudyProgressInput, QuestionUpdateWithoutStudyProgressInput>, QuestionUncheckedUpdateWithoutStudyProgressInput>
  }

  export type UserQuestionOrderCreatequestionIdsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutQuestionOrdersInput = {
    create?: XOR<UserCreateWithoutQuestionOrdersInput, UserUncheckedCreateWithoutQuestionOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType
  }

  export type UserQuestionOrderUpdatequestionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutQuestionOrdersNestedInput = {
    create?: XOR<UserCreateWithoutQuestionOrdersInput, UserUncheckedCreateWithoutQuestionOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionOrdersInput
    upsert?: UserUpsertWithoutQuestionOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionOrdersInput, UserUpdateWithoutQuestionOrdersInput>, UserUncheckedUpdateWithoutQuestionOrdersInput>
  }

  export type UserPreferenceCreateselectedTagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumThemeFieldUpdateOperationsInput = {
    set?: $Enums.Theme
  }

  export type UserPreferenceUpdateselectedTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutQuizSessionsInput = {
    create?: XOR<UserCreateWithoutQuizSessionsInput, UserUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuizQuestionResultCreateNestedManyWithoutQuizSessionInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput> | QuizQuestionResultCreateWithoutQuizSessionInput[] | QuizQuestionResultUncheckedCreateWithoutQuizSessionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuizSessionInput | QuizQuestionResultCreateOrConnectWithoutQuizSessionInput[]
    createMany?: QuizQuestionResultCreateManyQuizSessionInputEnvelope
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
  }

  export type QuizQuestionResultUncheckedCreateNestedManyWithoutQuizSessionInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput> | QuizQuestionResultCreateWithoutQuizSessionInput[] | QuizQuestionResultUncheckedCreateWithoutQuizSessionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuizSessionInput | QuizQuestionResultCreateOrConnectWithoutQuizSessionInput[]
    createMany?: QuizQuestionResultCreateManyQuizSessionInputEnvelope
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
  }

  export type NullableEnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType | null
  }

  export type NullableEnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel | null
  }

  export type UserUpdateOneRequiredWithoutQuizSessionsNestedInput = {
    create?: XOR<UserCreateWithoutQuizSessionsInput, UserUncheckedCreateWithoutQuizSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuizSessionsInput
    upsert?: UserUpsertWithoutQuizSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuizSessionsInput, UserUpdateWithoutQuizSessionsInput>, UserUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type QuizQuestionResultUpdateManyWithoutQuizSessionNestedInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput> | QuizQuestionResultCreateWithoutQuizSessionInput[] | QuizQuestionResultUncheckedCreateWithoutQuizSessionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuizSessionInput | QuizQuestionResultCreateOrConnectWithoutQuizSessionInput[]
    upsert?: QuizQuestionResultUpsertWithWhereUniqueWithoutQuizSessionInput | QuizQuestionResultUpsertWithWhereUniqueWithoutQuizSessionInput[]
    createMany?: QuizQuestionResultCreateManyQuizSessionInputEnvelope
    set?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    disconnect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    delete?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    update?: QuizQuestionResultUpdateWithWhereUniqueWithoutQuizSessionInput | QuizQuestionResultUpdateWithWhereUniqueWithoutQuizSessionInput[]
    updateMany?: QuizQuestionResultUpdateManyWithWhereWithoutQuizSessionInput | QuizQuestionResultUpdateManyWithWhereWithoutQuizSessionInput[]
    deleteMany?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
  }

  export type QuizQuestionResultUncheckedUpdateManyWithoutQuizSessionNestedInput = {
    create?: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput> | QuizQuestionResultCreateWithoutQuizSessionInput[] | QuizQuestionResultUncheckedCreateWithoutQuizSessionInput[]
    connectOrCreate?: QuizQuestionResultCreateOrConnectWithoutQuizSessionInput | QuizQuestionResultCreateOrConnectWithoutQuizSessionInput[]
    upsert?: QuizQuestionResultUpsertWithWhereUniqueWithoutQuizSessionInput | QuizQuestionResultUpsertWithWhereUniqueWithoutQuizSessionInput[]
    createMany?: QuizQuestionResultCreateManyQuizSessionInputEnvelope
    set?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    disconnect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    delete?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    connect?: QuizQuestionResultWhereUniqueInput | QuizQuestionResultWhereUniqueInput[]
    update?: QuizQuestionResultUpdateWithWhereUniqueWithoutQuizSessionInput | QuizQuestionResultUpdateWithWhereUniqueWithoutQuizSessionInput[]
    updateMany?: QuizQuestionResultUpdateManyWithWhereWithoutQuizSessionInput | QuizQuestionResultUpdateManyWithWhereWithoutQuizSessionInput[]
    deleteMany?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
  }

  export type QuizSessionCreateNestedOneWithoutQuestionResultsInput = {
    create?: XOR<QuizSessionCreateWithoutQuestionResultsInput, QuizSessionUncheckedCreateWithoutQuestionResultsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuestionResultsInput
    connect?: QuizSessionWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutQuizResultsInput = {
    create?: XOR<QuestionCreateWithoutQuizResultsInput, QuestionUncheckedCreateWithoutQuizResultsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizResultsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuizSessionUpdateOneRequiredWithoutQuestionResultsNestedInput = {
    create?: XOR<QuizSessionCreateWithoutQuestionResultsInput, QuizSessionUncheckedCreateWithoutQuestionResultsInput>
    connectOrCreate?: QuizSessionCreateOrConnectWithoutQuestionResultsInput
    upsert?: QuizSessionUpsertWithoutQuestionResultsInput
    connect?: QuizSessionWhereUniqueInput
    update?: XOR<XOR<QuizSessionUpdateToOneWithWhereWithoutQuestionResultsInput, QuizSessionUpdateWithoutQuestionResultsInput>, QuizSessionUncheckedUpdateWithoutQuestionResultsInput>
  }

  export type QuestionUpdateOneRequiredWithoutQuizResultsNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizResultsInput, QuestionUncheckedCreateWithoutQuizResultsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizResultsInput
    upsert?: QuestionUpsertWithoutQuizResultsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuizResultsInput, QuestionUpdateWithoutQuizResultsInput>, QuestionUncheckedUpdateWithoutQuizResultsInput>
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

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type NestedEnumThemeFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeFilter<$PrismaModel> | $Enums.Theme
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

  export type NestedEnumThemeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Theme | EnumThemeFieldRefInput<$PrismaModel>
    in?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Theme[] | ListEnumThemeFieldRefInput<$PrismaModel>
    not?: NestedEnumThemeWithAggregatesFilter<$PrismaModel> | $Enums.Theme
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumThemeFilter<$PrismaModel>
    _max?: NestedEnumThemeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumQuestionTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQuestionTypeNullableFilter<$PrismaModel> | $Enums.QuestionType | null
  }

  export type NestedEnumDifficultyLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel> | $Enums.DifficultyLevel | null
  }

  export type NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumQuestionTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDifficultyLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelNullableFilter<$PrismaModel>
  }

  export type QuestionCreateWithoutUserInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput
    notes?: NoteCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput
    notes?: NoteUncheckedCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
    question: QuestionCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutUserInput = {
    id?: string
    questionId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type NoteCreateOrConnectWithoutUserInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteCreateManyUserInputEnvelope = {
    data: NoteCreateManyUserInput | NoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudyProgressCreateWithoutUserInput = {
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
    question: QuestionCreateNestedOneWithoutStudyProgressInput
  }

  export type StudyProgressUncheckedCreateWithoutUserInput = {
    questionId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type StudyProgressCreateOrConnectWithoutUserInput = {
    where: StudyProgressWhereUniqueInput
    create: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput>
  }

  export type StudyProgressCreateManyUserInputEnvelope = {
    data: StudyProgressCreateManyUserInput | StudyProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuizSessionCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
    questionResults?: QuizQuestionResultCreateNestedManyWithoutQuizSessionInput
  }

  export type QuizSessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
    questionResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuizSessionInput
  }

  export type QuizSessionCreateOrConnectWithoutUserInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput>
  }

  export type QuizSessionCreateManyUserInputEnvelope = {
    data: QuizSessionCreateManyUserInput | QuizSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferenceCreateWithoutUserInput = {
    theme?: $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceCreateselectedTagsInput | string[]
    lastActiveTab?: string | null
  }

  export type UserPreferenceUncheckedCreateWithoutUserInput = {
    theme?: $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceCreateselectedTagsInput | string[]
    lastActiveTab?: string | null
  }

  export type UserPreferenceCreateOrConnectWithoutUserInput = {
    where: UserPreferenceWhereUniqueInput
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionOrderCreateWithoutUserInput = {
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
  }

  export type UserQuestionOrderUncheckedCreateWithoutUserInput = {
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
  }

  export type UserQuestionOrderCreateOrConnectWithoutUserInput = {
    where: UserQuestionOrderWhereUniqueInput
    create: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionOrderCreateManyUserInputEnvelope = {
    data: UserQuestionOrderCreateManyUserInput | UserQuestionOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    type?: EnumQuestionTypeFilter<"Question"> | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFilter<"Question"> | $Enums.DifficultyLevel
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    isPublic?: BoolFilter<"Question"> | boolean
    viewCount?: IntFilter<"Question"> | number
  }

  export type NoteUpsertWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
    create: XOR<NoteCreateWithoutUserInput, NoteUncheckedCreateWithoutUserInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutUserInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutUserInput, NoteUncheckedUpdateWithoutUserInput>
  }

  export type NoteUpdateManyWithWhereWithoutUserInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutUserInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    questionId?: StringFilter<"Note"> | string
    userId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    position?: IntFilter<"Note"> | number
  }

  export type StudyProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: StudyProgressWhereUniqueInput
    update: XOR<StudyProgressUpdateWithoutUserInput, StudyProgressUncheckedUpdateWithoutUserInput>
    create: XOR<StudyProgressCreateWithoutUserInput, StudyProgressUncheckedCreateWithoutUserInput>
  }

  export type StudyProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: StudyProgressWhereUniqueInput
    data: XOR<StudyProgressUpdateWithoutUserInput, StudyProgressUncheckedUpdateWithoutUserInput>
  }

  export type StudyProgressUpdateManyWithWhereWithoutUserInput = {
    where: StudyProgressScalarWhereInput
    data: XOR<StudyProgressUpdateManyMutationInput, StudyProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type StudyProgressScalarWhereInput = {
    AND?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
    OR?: StudyProgressScalarWhereInput[]
    NOT?: StudyProgressScalarWhereInput | StudyProgressScalarWhereInput[]
    userId?: StringFilter<"StudyProgress"> | string
    questionId?: StringFilter<"StudyProgress"> | string
    isStudied?: BoolFilter<"StudyProgress"> | boolean
    lastStudiedAt?: DateTimeNullableFilter<"StudyProgress"> | Date | string | null
    studyCount?: IntFilter<"StudyProgress"> | number
  }

  export type QuizSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuizSessionWhereUniqueInput
    update: XOR<QuizSessionUpdateWithoutUserInput, QuizSessionUncheckedUpdateWithoutUserInput>
    create: XOR<QuizSessionCreateWithoutUserInput, QuizSessionUncheckedCreateWithoutUserInput>
  }

  export type QuizSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuizSessionWhereUniqueInput
    data: XOR<QuizSessionUpdateWithoutUserInput, QuizSessionUncheckedUpdateWithoutUserInput>
  }

  export type QuizSessionUpdateManyWithWhereWithoutUserInput = {
    where: QuizSessionScalarWhereInput
    data: XOR<QuizSessionUpdateManyMutationInput, QuizSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuizSessionScalarWhereInput = {
    AND?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    OR?: QuizSessionScalarWhereInput[]
    NOT?: QuizSessionScalarWhereInput | QuizSessionScalarWhereInput[]
    id?: StringFilter<"QuizSession"> | string
    userId?: StringFilter<"QuizSession"> | string
    startTime?: DateTimeFilter<"QuizSession"> | Date | string
    endTime?: DateTimeNullableFilter<"QuizSession"> | Date | string | null
    questionCount?: IntFilter<"QuizSession"> | number
    questionType?: EnumQuestionTypeNullableFilter<"QuizSession"> | $Enums.QuestionType | null
    difficultyMode?: EnumDifficultyLevelNullableFilter<"QuizSession"> | $Enums.DifficultyLevel | null
    completed?: BoolFilter<"QuizSession"> | boolean
  }

  export type UserPreferenceUpsertWithoutUserInput = {
    update: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferenceCreateWithoutUserInput, UserPreferenceUncheckedCreateWithoutUserInput>
    where?: UserPreferenceWhereInput
  }

  export type UserPreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferenceWhereInput
    data: XOR<UserPreferenceUpdateWithoutUserInput, UserPreferenceUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferenceUpdateWithoutUserInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferenceUncheckedUpdateWithoutUserInput = {
    theme?: EnumThemeFieldUpdateOperationsInput | $Enums.Theme
    filters?: NullableJsonNullValueInput | InputJsonValue
    selectedTags?: UserPreferenceUpdateselectedTagsInput | string[]
    lastActiveTab?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserQuestionOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestionOrderWhereUniqueInput
    update: XOR<UserQuestionOrderUpdateWithoutUserInput, UserQuestionOrderUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestionOrderCreateWithoutUserInput, UserQuestionOrderUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestionOrderWhereUniqueInput
    data: XOR<UserQuestionOrderUpdateWithoutUserInput, UserQuestionOrderUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestionOrderUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestionOrderScalarWhereInput
    data: XOR<UserQuestionOrderUpdateManyMutationInput, UserQuestionOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestionOrderScalarWhereInput = {
    AND?: UserQuestionOrderScalarWhereInput | UserQuestionOrderScalarWhereInput[]
    OR?: UserQuestionOrderScalarWhereInput[]
    NOT?: UserQuestionOrderScalarWhereInput | UserQuestionOrderScalarWhereInput[]
    userId?: StringFilter<"UserQuestionOrder"> | string
    orderType?: EnumOrderTypeFilter<"UserQuestionOrder"> | $Enums.OrderType
    questionIds?: StringNullableListFilter<"UserQuestionOrder">
    updatedAt?: DateTimeFilter<"UserQuestionOrder"> | Date | string
  }

  export type UserCreateWithoutQuestionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionTagCreateWithoutQuestionInput = {
    tag: TagCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionTagUncheckedCreateWithoutQuestionInput = {
    tagId: string
  }

  export type QuestionTagCreateOrConnectWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput
    create: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTagCreateManyQuestionInputEnvelope = {
    data: QuestionTagCreateManyQuestionInput | QuestionTagCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutQuestionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
    user: UserCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutQuestionInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type NoteCreateOrConnectWithoutQuestionInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput>
  }

  export type NoteCreateManyQuestionInputEnvelope = {
    data: NoteCreateManyQuestionInput | NoteCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type StudyProgressCreateWithoutQuestionInput = {
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
    user: UserCreateNestedOneWithoutStudyProgressInput
  }

  export type StudyProgressUncheckedCreateWithoutQuestionInput = {
    userId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type StudyProgressCreateOrConnectWithoutQuestionInput = {
    where: StudyProgressWhereUniqueInput
    create: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput>
  }

  export type StudyProgressCreateManyQuestionInputEnvelope = {
    data: StudyProgressCreateManyQuestionInput | StudyProgressCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuizQuestionResultCreateWithoutQuestionInput = {
    timeSpentMs: number
    position: number
    quizSession: QuizSessionCreateNestedOneWithoutQuestionResultsInput
  }

  export type QuizQuestionResultUncheckedCreateWithoutQuestionInput = {
    quizSessionId: string
    timeSpentMs: number
    position: number
  }

  export type QuizQuestionResultCreateOrConnectWithoutQuestionInput = {
    where: QuizQuestionResultWhereUniqueInput
    create: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput>
  }

  export type QuizQuestionResultCreateManyQuestionInputEnvelope = {
    data: QuizQuestionResultCreateManyQuestionInput | QuizQuestionResultCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuestionsInput = {
    update: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UserCreateWithoutQuestionsInput, UserUncheckedCreateWithoutQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionsInput, UserUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionTagUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput
    update: XOR<QuestionTagUpdateWithoutQuestionInput, QuestionTagUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionTagCreateWithoutQuestionInput, QuestionTagUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTagUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTagWhereUniqueInput
    data: XOR<QuestionTagUpdateWithoutQuestionInput, QuestionTagUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionTagUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionTagScalarWhereInput
    data: XOR<QuestionTagUpdateManyMutationInput, QuestionTagUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionTagScalarWhereInput = {
    AND?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
    OR?: QuestionTagScalarWhereInput[]
    NOT?: QuestionTagScalarWhereInput | QuestionTagScalarWhereInput[]
    questionId?: StringFilter<"QuestionTag"> | string
    tagId?: StringFilter<"QuestionTag"> | string
  }

  export type NoteUpsertWithWhereUniqueWithoutQuestionInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutQuestionInput, NoteUncheckedUpdateWithoutQuestionInput>
    create: XOR<NoteCreateWithoutQuestionInput, NoteUncheckedCreateWithoutQuestionInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutQuestionInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutQuestionInput, NoteUncheckedUpdateWithoutQuestionInput>
  }

  export type NoteUpdateManyWithWhereWithoutQuestionInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutQuestionInput>
  }

  export type StudyProgressUpsertWithWhereUniqueWithoutQuestionInput = {
    where: StudyProgressWhereUniqueInput
    update: XOR<StudyProgressUpdateWithoutQuestionInput, StudyProgressUncheckedUpdateWithoutQuestionInput>
    create: XOR<StudyProgressCreateWithoutQuestionInput, StudyProgressUncheckedCreateWithoutQuestionInput>
  }

  export type StudyProgressUpdateWithWhereUniqueWithoutQuestionInput = {
    where: StudyProgressWhereUniqueInput
    data: XOR<StudyProgressUpdateWithoutQuestionInput, StudyProgressUncheckedUpdateWithoutQuestionInput>
  }

  export type StudyProgressUpdateManyWithWhereWithoutQuestionInput = {
    where: StudyProgressScalarWhereInput
    data: XOR<StudyProgressUpdateManyMutationInput, StudyProgressUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizQuestionResultUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuizQuestionResultWhereUniqueInput
    update: XOR<QuizQuestionResultUpdateWithoutQuestionInput, QuizQuestionResultUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuizQuestionResultCreateWithoutQuestionInput, QuizQuestionResultUncheckedCreateWithoutQuestionInput>
  }

  export type QuizQuestionResultUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuizQuestionResultWhereUniqueInput
    data: XOR<QuizQuestionResultUpdateWithoutQuestionInput, QuizQuestionResultUncheckedUpdateWithoutQuestionInput>
  }

  export type QuizQuestionResultUpdateManyWithWhereWithoutQuestionInput = {
    where: QuizQuestionResultScalarWhereInput
    data: XOR<QuizQuestionResultUpdateManyMutationInput, QuizQuestionResultUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuizQuestionResultScalarWhereInput = {
    AND?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
    OR?: QuizQuestionResultScalarWhereInput[]
    NOT?: QuizQuestionResultScalarWhereInput | QuizQuestionResultScalarWhereInput[]
    quizSessionId?: StringFilter<"QuizQuestionResult"> | string
    questionId?: StringFilter<"QuizQuestionResult"> | string
    timeSpentMs?: IntFilter<"QuizQuestionResult"> | number
    position?: IntFilter<"QuizQuestionResult"> | number
  }

  export type QuestionTagCreateWithoutTagInput = {
    question: QuestionCreateNestedOneWithoutTagsInput
  }

  export type QuestionTagUncheckedCreateWithoutTagInput = {
    questionId: string
  }

  export type QuestionTagCreateOrConnectWithoutTagInput = {
    where: QuestionTagWhereUniqueInput
    create: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput>
  }

  export type QuestionTagCreateManyTagInputEnvelope = {
    data: QuestionTagCreateManyTagInput | QuestionTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type QuestionTagUpsertWithWhereUniqueWithoutTagInput = {
    where: QuestionTagWhereUniqueInput
    update: XOR<QuestionTagUpdateWithoutTagInput, QuestionTagUncheckedUpdateWithoutTagInput>
    create: XOR<QuestionTagCreateWithoutTagInput, QuestionTagUncheckedCreateWithoutTagInput>
  }

  export type QuestionTagUpdateWithWhereUniqueWithoutTagInput = {
    where: QuestionTagWhereUniqueInput
    data: XOR<QuestionTagUpdateWithoutTagInput, QuestionTagUncheckedUpdateWithoutTagInput>
  }

  export type QuestionTagUpdateManyWithWhereWithoutTagInput = {
    where: QuestionTagScalarWhereInput
    data: XOR<QuestionTagUpdateManyMutationInput, QuestionTagUncheckedUpdateManyWithoutTagInput>
  }

  export type QuestionCreateWithoutTagsInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    user: UserCreateNestedOneWithoutQuestionsInput
    notes?: NoteCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTagsInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    notes?: NoteUncheckedCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTagsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutQuestionsInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutQuestionsInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutQuestionsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionUpsertWithoutTagsInput = {
    update: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
    create: XOR<QuestionCreateWithoutTagsInput, QuestionUncheckedCreateWithoutTagsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTagsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTagsInput, QuestionUncheckedUpdateWithoutTagsInput>
  }

  export type QuestionUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    notes?: NoteUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NoteUncheckedUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type TagUpsertWithoutQuestionsInput = {
    update: XOR<TagUpdateWithoutQuestionsInput, TagUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TagCreateWithoutQuestionsInput, TagUncheckedCreateWithoutQuestionsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutQuestionsInput, TagUncheckedUpdateWithoutQuestionsInput>
  }

  export type TagUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateWithoutNotesInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    user: UserCreateNestedOneWithoutQuestionsInput
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutNotesInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutNotesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutNotesInput, QuestionUncheckedCreateWithoutNotesInput>
  }

  export type UserCreateWithoutNotesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
  }

  export type QuestionUpsertWithoutNotesInput = {
    update: XOR<QuestionUpdateWithoutNotesInput, QuestionUncheckedUpdateWithoutNotesInput>
    create: XOR<QuestionCreateWithoutNotesInput, QuestionUncheckedCreateWithoutNotesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutNotesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutNotesInput, QuestionUncheckedUpdateWithoutNotesInput>
  }

  export type QuestionUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserUpsertWithoutNotesInput = {
    update: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
    create: XOR<UserCreateWithoutNotesInput, UserUncheckedCreateWithoutNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotesInput, UserUncheckedUpdateWithoutNotesInput>
  }

  export type UserUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStudyProgressInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudyProgressInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudyProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudyProgressInput, UserUncheckedCreateWithoutStudyProgressInput>
  }

  export type QuestionCreateWithoutStudyProgressInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    user: UserCreateNestedOneWithoutQuestionsInput
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput
    notes?: NoteCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutStudyProgressInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput
    notes?: NoteUncheckedCreateNestedManyWithoutQuestionInput
    quizResults?: QuizQuestionResultUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutStudyProgressInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutStudyProgressInput, QuestionUncheckedCreateWithoutStudyProgressInput>
  }

  export type UserUpsertWithoutStudyProgressInput = {
    update: XOR<UserUpdateWithoutStudyProgressInput, UserUncheckedUpdateWithoutStudyProgressInput>
    create: XOR<UserCreateWithoutStudyProgressInput, UserUncheckedCreateWithoutStudyProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudyProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudyProgressInput, UserUncheckedUpdateWithoutStudyProgressInput>
  }

  export type UserUpdateWithoutStudyProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudyProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutStudyProgressInput = {
    update: XOR<QuestionUpdateWithoutStudyProgressInput, QuestionUncheckedUpdateWithoutStudyProgressInput>
    create: XOR<QuestionCreateWithoutStudyProgressInput, QuestionUncheckedCreateWithoutStudyProgressInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutStudyProgressInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutStudyProgressInput, QuestionUncheckedUpdateWithoutStudyProgressInput>
  }

  export type QuestionUpdateWithoutStudyProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput
    notes?: NoteUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutStudyProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutQuestionOrdersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionOrdersInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionOrdersInput, UserUncheckedCreateWithoutQuestionOrdersInput>
  }

  export type UserUpsertWithoutQuestionOrdersInput = {
    update: XOR<UserUpdateWithoutQuestionOrdersInput, UserUncheckedUpdateWithoutQuestionOrdersInput>
    create: XOR<UserCreateWithoutQuestionOrdersInput, UserUncheckedCreateWithoutQuestionOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionOrdersInput, UserUncheckedUpdateWithoutQuestionOrdersInput>
  }

  export type UserUpdateWithoutQuestionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionCreateNestedManyWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    quizSessions?: QuizSessionUncheckedCreateNestedManyWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUpdateManyWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    quizSessions?: QuizSessionUncheckedUpdateManyWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutQuizSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUserInput
    notes?: NoteCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuizSessionsInput = {
    id?: string
    username: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUserInput
    notes?: NoteUncheckedCreateNestedManyWithoutUserInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutUserInput
    preferences?: UserPreferenceUncheckedCreateNestedOneWithoutUserInput
    questionOrders?: UserQuestionOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuizSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuizSessionsInput, UserUncheckedCreateWithoutQuizSessionsInput>
  }

  export type QuizQuestionResultCreateWithoutQuizSessionInput = {
    timeSpentMs: number
    position: number
    question: QuestionCreateNestedOneWithoutQuizResultsInput
  }

  export type QuizQuestionResultUncheckedCreateWithoutQuizSessionInput = {
    questionId: string
    timeSpentMs: number
    position: number
  }

  export type QuizQuestionResultCreateOrConnectWithoutQuizSessionInput = {
    where: QuizQuestionResultWhereUniqueInput
    create: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput>
  }

  export type QuizQuestionResultCreateManyQuizSessionInputEnvelope = {
    data: QuizQuestionResultCreateManyQuizSessionInput | QuizQuestionResultCreateManyQuizSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuizSessionsInput = {
    update: XOR<UserUpdateWithoutQuizSessionsInput, UserUncheckedUpdateWithoutQuizSessionsInput>
    create: XOR<UserCreateWithoutQuizSessionsInput, UserUncheckedCreateWithoutQuizSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuizSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuizSessionsInput, UserUncheckedUpdateWithoutQuizSessionsInput>
  }

  export type UserUpdateWithoutQuizSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUserNestedInput
    notes?: NoteUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuizSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    notes?: NoteUncheckedUpdateManyWithoutUserNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutUserNestedInput
    preferences?: UserPreferenceUncheckedUpdateOneWithoutUserNestedInput
    questionOrders?: UserQuestionOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuizQuestionResultUpsertWithWhereUniqueWithoutQuizSessionInput = {
    where: QuizQuestionResultWhereUniqueInput
    update: XOR<QuizQuestionResultUpdateWithoutQuizSessionInput, QuizQuestionResultUncheckedUpdateWithoutQuizSessionInput>
    create: XOR<QuizQuestionResultCreateWithoutQuizSessionInput, QuizQuestionResultUncheckedCreateWithoutQuizSessionInput>
  }

  export type QuizQuestionResultUpdateWithWhereUniqueWithoutQuizSessionInput = {
    where: QuizQuestionResultWhereUniqueInput
    data: XOR<QuizQuestionResultUpdateWithoutQuizSessionInput, QuizQuestionResultUncheckedUpdateWithoutQuizSessionInput>
  }

  export type QuizQuestionResultUpdateManyWithWhereWithoutQuizSessionInput = {
    where: QuizQuestionResultScalarWhereInput
    data: XOR<QuizQuestionResultUpdateManyMutationInput, QuizQuestionResultUncheckedUpdateManyWithoutQuizSessionInput>
  }

  export type QuizSessionCreateWithoutQuestionResultsInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
    user: UserCreateNestedOneWithoutQuizSessionsInput
  }

  export type QuizSessionUncheckedCreateWithoutQuestionResultsInput = {
    id?: string
    userId: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
  }

  export type QuizSessionCreateOrConnectWithoutQuestionResultsInput = {
    where: QuizSessionWhereUniqueInput
    create: XOR<QuizSessionCreateWithoutQuestionResultsInput, QuizSessionUncheckedCreateWithoutQuestionResultsInput>
  }

  export type QuestionCreateWithoutQuizResultsInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    user: UserCreateNestedOneWithoutQuestionsInput
    tags?: QuestionTagCreateNestedManyWithoutQuestionInput
    notes?: NoteCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuizResultsInput = {
    id?: string
    userId: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
    tags?: QuestionTagUncheckedCreateNestedManyWithoutQuestionInput
    notes?: NoteUncheckedCreateNestedManyWithoutQuestionInput
    studyProgress?: StudyProgressUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuizResultsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizResultsInput, QuestionUncheckedCreateWithoutQuizResultsInput>
  }

  export type QuizSessionUpsertWithoutQuestionResultsInput = {
    update: XOR<QuizSessionUpdateWithoutQuestionResultsInput, QuizSessionUncheckedUpdateWithoutQuestionResultsInput>
    create: XOR<QuizSessionCreateWithoutQuestionResultsInput, QuizSessionUncheckedCreateWithoutQuestionResultsInput>
    where?: QuizSessionWhereInput
  }

  export type QuizSessionUpdateToOneWithWhereWithoutQuestionResultsInput = {
    where?: QuizSessionWhereInput
    data: XOR<QuizSessionUpdateWithoutQuestionResultsInput, QuizSessionUncheckedUpdateWithoutQuestionResultsInput>
  }

  export type QuizSessionUpdateWithoutQuestionResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutQuizSessionsNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutQuestionResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QuestionUpsertWithoutQuizResultsInput = {
    update: XOR<QuestionUpdateWithoutQuizResultsInput, QuestionUncheckedUpdateWithoutQuizResultsInput>
    create: XOR<QuestionCreateWithoutQuizResultsInput, QuestionUncheckedCreateWithoutQuizResultsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuizResultsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuizResultsInput, QuestionUncheckedUpdateWithoutQuizResultsInput>
  }

  export type QuestionUpdateWithoutQuizResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutQuestionsNestedInput
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput
    notes?: NoteUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyUserInput = {
    id?: string
    question: string
    answer: string
    type: $Enums.QuestionType
    difficulty: $Enums.DifficultyLevel
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    viewCount?: number
  }

  export type NoteCreateManyUserInput = {
    id?: string
    questionId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type StudyProgressCreateManyUserInput = {
    questionId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type QuizSessionCreateManyUserInput = {
    id?: string
    startTime?: Date | string
    endTime?: Date | string | null
    questionCount: number
    questionType?: $Enums.QuestionType | null
    difficultyMode?: $Enums.DifficultyLevel | null
    completed?: boolean
  }

  export type UserQuestionOrderCreateManyUserInput = {
    orderType: $Enums.OrderType
    questionIds?: UserQuestionOrderCreatequestionIdsInput | string[]
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUpdateManyWithoutQuestionNestedInput
    notes?: NoteUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
    tags?: QuestionTagUncheckedUpdateManyWithoutQuestionNestedInput
    notes?: NoteUncheckedUpdateManyWithoutQuestionNestedInput
    studyProgress?: StudyProgressUncheckedUpdateManyWithoutQuestionNestedInput
    quizResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    type?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    viewCount?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressUpdateWithoutUserInput = {
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutStudyProgressNestedInput
  }

  export type StudyProgressUncheckedUpdateWithoutUserInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressUncheckedUpdateManyWithoutUserInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type QuizSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    questionResults?: QuizQuestionResultUpdateManyWithoutQuizSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
    questionResults?: QuizQuestionResultUncheckedUpdateManyWithoutQuizSessionNestedInput
  }

  export type QuizSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionCount?: IntFieldUpdateOperationsInput | number
    questionType?: NullableEnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType | null
    difficultyMode?: NullableEnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel | null
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestionOrderUpdateWithoutUserInput = {
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionOrderUncheckedUpdateWithoutUserInput = {
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserQuestionOrderUncheckedUpdateManyWithoutUserInput = {
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    questionIds?: UserQuestionOrderUpdatequestionIdsInput | string[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTagCreateManyQuestionInput = {
    tagId: string
  }

  export type NoteCreateManyQuestionInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position?: number
  }

  export type StudyProgressCreateManyQuestionInput = {
    userId: string
    isStudied?: boolean
    lastStudiedAt?: Date | string | null
    studyCount?: number
  }

  export type QuizQuestionResultCreateManyQuestionInput = {
    quizSessionId: string
    timeSpentMs: number
    position: number
  }

  export type QuestionTagUpdateWithoutQuestionInput = {
    tag?: TagUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionTagUncheckedUpdateWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTagUncheckedUpdateManyWithoutQuestionInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type NoteUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type NoteUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressUpdateWithoutQuestionInput = {
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutStudyProgressNestedInput
  }

  export type StudyProgressUncheckedUpdateWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type StudyProgressUncheckedUpdateManyWithoutQuestionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isStudied?: BoolFieldUpdateOperationsInput | boolean
    lastStudiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    studyCount?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionResultUpdateWithoutQuestionInput = {
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    quizSession?: QuizSessionUpdateOneRequiredWithoutQuestionResultsNestedInput
  }

  export type QuizQuestionResultUncheckedUpdateWithoutQuestionInput = {
    quizSessionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionResultUncheckedUpdateManyWithoutQuestionInput = {
    quizSessionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionTagCreateManyTagInput = {
    questionId: string
  }

  export type QuestionTagUpdateWithoutTagInput = {
    question?: QuestionUpdateOneRequiredWithoutTagsNestedInput
  }

  export type QuestionTagUncheckedUpdateWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTagUncheckedUpdateManyWithoutTagInput = {
    questionId?: StringFieldUpdateOperationsInput | string
  }

  export type QuizQuestionResultCreateManyQuizSessionInput = {
    questionId: string
    timeSpentMs: number
    position: number
  }

  export type QuizQuestionResultUpdateWithoutQuizSessionInput = {
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutQuizResultsNestedInput
  }

  export type QuizQuestionResultUncheckedUpdateWithoutQuizSessionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
  }

  export type QuizQuestionResultUncheckedUpdateManyWithoutQuizSessionInput = {
    questionId?: StringFieldUpdateOperationsInput | string
    timeSpentMs?: IntFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
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