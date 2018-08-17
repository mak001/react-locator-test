import Injector from 'lib/Injector';
import EnhancedMarkerContent from '../components/EnhancedMarkerContent';

Injector.transform('my-transform', (updater) => {
  // Applies to all text fields in AssetAdmin
  updater.component('MarkerContent.*', EnhancedMarkerContent);
});
