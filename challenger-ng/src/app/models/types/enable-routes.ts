export enum RouteTypes {
  collections = 'collections',
  collection = 'collection',
  photo = 'photo',
  search = 'search',
  topics = 'topics'
}

export const EnableRoutes: RouteTypes[] = [
  RouteTypes.collections,
  RouteTypes.collection,
  RouteTypes.photo,
  RouteTypes.search,
  RouteTypes.topics
];
