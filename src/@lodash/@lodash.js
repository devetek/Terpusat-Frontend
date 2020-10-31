import { runInContext, setWith, clone, mixin } from 'lodash';


/**
 * You can extend Lodash with mixins
 * And use it as below
 * import _ from '@lodash'
 */
const _ = runInContext();

mixin({
  // Immutable Set for setting state
  setIn: (state, name, value) => {
    return setWith(clone(state), name, value, clone);
  },
});

export default _;
