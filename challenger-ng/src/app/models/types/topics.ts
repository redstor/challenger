export enum TopicOrderByEnum {
  latest = 'latest',
  featured = 'featured',
  oldest = 'oldest',
  position = 'position'
}

export const TopicOptions = {
  perPage: 20,
  orderBy: TopicOrderByEnum.featured
};
