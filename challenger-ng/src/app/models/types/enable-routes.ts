export enum RouteTypes {
  collections = 'collections',
  collection = 'collection',
  photo = 'photo',
  search = 'search',
  topics = 'topics',
  topic = 'topic',
  stats = 'stats',
  users = 'users',
}

export const EnableRoutes: RouteTypes[] = [
  RouteTypes.collections,
  RouteTypes.collection,
  RouteTypes.photo,
  RouteTypes.search,
  RouteTypes.topics,
  RouteTypes.topic,
  RouteTypes.stats,
  RouteTypes.users
];
