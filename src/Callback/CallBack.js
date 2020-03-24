import React, { useState, useMemo, useCallback, useEffect } from "react";

const CallBack = () => {
  const [callbackCount, setCallbackCount] = useState(0);
  const [memoCount, setMemoCount] = useState(0);

  const memoFunction = useMemo(() => {
    console.log(memoCount, "memo called");
    return memoCount;
  }, [memoCount]);

  const callbackFunction = useCallback(() => {
    console.log(callbackCount, "callback called");
    return callbackCount;
  }, [callbackCount]);

  //useMemo(memoFunction, [memoCount]);

  return (
    <>
      <ChildComponent action={callbackFunction} />

      <button onClick={() => setCallbackCount(callbackCount + 1)}>
        Change callback count
      </button>

      <button onClick={() => setMemoCount(memoCount + 1)}>
        Change memo count
      </button>

      <Child2Component action={memoFunction} />
    </>
  );
};

const ChildComponent = ({ action }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let val = action();
    setValue(val);
  }, [action]);

  return <>Child : {value}</>;
};

const Child2Component = ({ action }) => {
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    let val = action;
    setValue2(val);
  }, [action]);

  return <>Child : {value2}</>;
};
export default CallBack;
