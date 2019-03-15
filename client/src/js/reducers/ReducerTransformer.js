import ActionTypes from '../actions/ActionTypes';

const MyReducerTransformer = (originalReducer) => (globalState) => (state, { type, payload }) => {
    switch (type) {
        case ActionTypes.MARKER_CLICK: {
            return {
                ...originalReducer(state, { type, payload }),
                markerOpen: true,
            };
        }

        case ActionTypes.MARKER_CLOSE: {
            return {
                ...originalReducer(state, { type, payload }),
                markerOpen: false,
            };
        }

        default: {
            // it is important to return the originalReducer with original redux parameters.
            return originalReducer(state, { type, payload });
        }
    }
};

export default MyReducerTransformer;
