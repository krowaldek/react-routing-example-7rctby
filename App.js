import React, {useSyncExternalStore} from 'react';
import Header from './Header';
import Main from './Main';
import { useLocation, Link, useHistory } from 'react-router-dom';
import useHash from './useHash';
import usePathname from './usePathname';

function useHistorySelector(selector) {
  const history = useHistory();
  return useSyncExternalStore(history.listen, () =>
    selector(history)
  );
}

function CurrentPathname() {
  const pathname = useHistorySelector(
    (history) => history.location.pathname
  );
  console.log('CurrentPathname rerender');
  return <div>{pathname}</div>;
}

function CurrentHash() {
  const innerHash = useHistorySelector(
    (history) => history.location.hash
  );
  console.log('CurrentHash rerender');
  return <div>{innerHash}</div>;
}

function Links() {
  return (
    <div>
      <Link to="#link1">#link1</Link>
      <Link to="#link2">#link2</Link>
      <Link to="#link3">#link3</Link>
    </div>
  );
}

const App = () => (
  <div>
    <CurrentPathname />
    <CurrentHash />
    <Links />
  </div>
);

export default App;
