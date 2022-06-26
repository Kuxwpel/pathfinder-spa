import React, { Suspense } from 'react'
import Loader from "../components/Loader"

const Gallery = React.lazy(() => import("./Gallery"))


const View = () => {
  return (
    <Suspense fallback={<Loader />}>
    <Gallery /> 
    </Suspense>
  )
}

export default View