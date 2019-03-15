import Injector from 'lib/Injector';
import EnhancedMarkerContent from '../components/EnhancedMarkerContent';
import ReducerTransformer from '../reducers/ReducerTransformer';

Injector.transform('my-transform', (updater) => {
  // Applies to all text fields in AssetAdmin
  updater.component('MarkerContent.*', EnhancedMarkerContent);
  updater.reducer('locator', ReducerTransformer);
});
