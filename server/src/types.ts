import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
}

export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE",
}

export interface Game {
  __typename?: "Game";
  id: Scalars["ID"];
  date: Scalars["String"];
  home: Team;
  away: Team;
  season: Scalars["Int"];
  homeScore: Scalars["Int"];
  awayScore: Scalars["Int"];
  winner: Team;
  highlights?: Maybe<Scalars["String"]>;
}

export interface GameList {
  __typename?: "GameList";
  items: Array<Maybe<Game>>;
}

export interface Query {
  __typename?: "Query";
  _empty?: Maybe<Scalars["String"]>;
  game?: Maybe<Game>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
  user?: Maybe<User>;
}

export interface QueryGameArgs {
  id?: Maybe<Scalars["ID"]>;
}

export interface QueryTeamArgs {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  abbrev?: Maybe<Scalars["String"]>;
}

export interface QueryUserArgs {
  id: Scalars["ID"];
}

export interface Team {
  __typename?: "Team";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  fullName?: Maybe<Scalars["String"]>;
  abbrev?: Maybe<Scalars["String"]>;
  conference?: Maybe<Scalars["String"]>;
  division?: Maybe<Scalars["String"]>;
  logo?: Maybe<Scalars["String"]>;
  wins?: Maybe<Scalars["Int"]>;
  losses?: Maybe<Scalars["Int"]>;
  games?: Maybe<Array<Maybe<Game>>>;
}

export interface User {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  email: Scalars["String"];
  teams?: Maybe<Array<Maybe<Team>>>;
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (
  obj: T,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Game: ResolverTypeWrapper<Game>;
  Team: ResolverTypeWrapper<Team>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  GameList: ResolverTypeWrapper<GameList>;
  CacheControlScope: CacheControlScope;
  Upload: ResolverTypeWrapper<Scalars["Upload"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  String: Scalars["String"];
  ID: Scalars["ID"];
  Game: Game;
  Team: Team;
  Int: Scalars["Int"];
  User: User;
  Boolean: Scalars["Boolean"];
  GameList: GameList;
  Upload: Scalars["Upload"];
};

export type GameResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Game"] = ResolversParentTypes["Game"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  home?: Resolver<ResolversTypes["Team"], ParentType, ContextType>;
  away?: Resolver<ResolversTypes["Team"], ParentType, ContextType>;
  season?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  homeScore?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  awayScore?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  winner?: Resolver<ResolversTypes["Team"], ParentType, ContextType>;
  highlights?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GameListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GameList"] = ResolversParentTypes["GameList"]
> = {
  items?: Resolver<
    Array<Maybe<ResolversTypes["Game"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  _empty?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  game?: Resolver<
    Maybe<ResolversTypes["Game"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGameArgs, "id">
  >;
  team?: Resolver<
    Maybe<ResolversTypes["Team"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTeamArgs, "id" | "name" | "abbrev">
  >;
  teams?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Team"]>>>,
    ParentType,
    ContextType
  >;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
};

export type TeamResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Team"] = ResolversParentTypes["Team"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fullName?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  abbrev?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  conference?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  division?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  losses?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  games?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Game"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Upload"], any> {
  name: "Upload";
}

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  teams?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Team"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Game?: GameResolvers<ContextType>;
  GameList?: GameListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
