import * as Observable from "rxjs/observable/fromPromise";
import firApp from '../stores/FirebaseStore';
import * as Rx from "rxjs";

export const INITIALIZE_APP_SUCCESS = 'INITIALIZE_FIREBASE_APP_SUCCESS';
export const SYNC_SUCCESS = 'FIREBASE_SYNC_SUCCESS';

export const initializeAppSuccess = (state) => ({
    type: INITIALIZE_APP_SUCCESS,
    state,
});

export const syncSuccess = () => ({
    type: SYNC_SUCCESS,
});

export const updateFirebaseEpic = (action$, state$) => {

    const saveData$ = action$
        .filter(action => action.type !== SYNC_SUCCESS)
        .mergeMap(action => {
            return Observable.fromPromise(
                firApp.database()
                    .ref()
                    .child('user1')
                    .set(state$.getState())
            ).map(syncSuccess);
    });

    const loadData$ = Observable
        .fromPromise(firApp.database()
            .ref()
            .child('user1')
            .once("value")
            .then(data => {
                console.log(data.val());
                return data.val();
            })).map(initializeAppSuccess);

    const loadNSave$ = Rx.Observable.concat(loadData$, saveData$);

    if(state$.getState().appLoaded.firebase) {
        return saveData$;
    } else {
        return loadNSave$;
    }
}