export default function( {dispatch} ) {
  return next => action => {
      if( !action.payload || !action.payload.then ) {
            return next(action);
      }

    next(action);

  };
}
