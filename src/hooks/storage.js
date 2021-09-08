import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss-final';

function useStorage() {
  const [items, setItems] = useState([]);
  const [curId, setCurId] = useState(0);
  const nextItem = () => {
    if (curId == 3) {
      setCurId(0)
    } else {
      setCurId(curId + 1)
    }
  };
  const prevItem = () => {
    if (curId == 0) {
      setCurId(3)
    } else {
      setCurId(curId - 1)
    }
  };

  return [curId, nextItem, prevItem];
}

export default useStorage;