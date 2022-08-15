import React,{Suspense} from 'react';
const SumTwoNum = React.lazy(() => import("./Sum2Num"));

export default function Reactlazy() {
  return (
    <div>
        <Suspense fallback={<h2>Loading....</h2>}>
            <SumTwoNum/>
        </Suspense>
    </div>
  )
}
