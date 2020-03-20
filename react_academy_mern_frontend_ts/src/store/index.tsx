import { createStore, applyMiddleware/*, compose */} from "redux";
import rootReducer from "../reducers/index";
//import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas";

const initialiseSagaMiddleware = createSagaMiddleware();
//const storeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
  rootReducer,
  //storeEnhancers(applyMiddleware(/*forbiddenWordsMiddleware,*/ initialiseSagaMiddleware ))
  applyMiddleware(initialiseSagaMiddleware)
);

initialiseSagaMiddleware.run(rootSaga);

export default store;
