import * as fromRouter from '@ngrx/router-store';
import { DEFAULT_ROUTER_FEATURENAME, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<RouterReducerState>(DEFAULT_ROUTER_FEATURENAME);

export const {
  selectCurrentRoute, // select the current route
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(getRouterState);
