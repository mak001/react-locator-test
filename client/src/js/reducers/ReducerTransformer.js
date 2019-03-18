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
            if (state === undefined) {
                return originalReducer(state, {type, payload});
            }
            // keeps markerOpen in the state. Disappears if another action is run
            return {
                ...originalReducer(state, {type, payload}),
                markerOpen: state.markerOpen,
            };
        }
    }
};

export default MyReducerTransformer;
