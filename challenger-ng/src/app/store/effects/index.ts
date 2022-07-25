import { CollectionsEffects } from './collection/collections.effects';
import { PhotoEffects } from './photo/photo.effects';
import { PhotosEffects } from './photos/photos.effects';
import { SearchEffects } from './search/search.effects';
import { TopicsEffects } from './topics/topics.effects';
import { StatsEffects } from './stats/stats.effects';

export const appEffects = [CollectionsEffects, PhotoEffects, PhotosEffects, SearchEffects, TopicsEffects, StatsEffects];
