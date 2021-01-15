import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderLeft = () => {

  const router = useRouter()
  
  let bgWrapper = "bg-purple-400 md:bg-white"
  let logoTextColor = "text-purple-600 md:text-white"
  let logoBgColor = "bg-white md:bg-purple-500"
  let borderB = ""
  let borderR = "md:border-r"
  let paddingL = "pl-4"

  if (router.pathname == `/podcasts`) {
    bgWrapper
    logoTextColor
    logoBgColor
    borderB
    paddingL
    borderR
  } else if (router.pathname == '/blog') {
    bgWrapper
    logoTextColor
    logoBgColor
    borderB
    paddingL
    borderR
  } else if (router.pathname == '/studio') {
    bgWrapper
    logoTextColor
    logoBgColor
    borderB
    paddingL
    borderR
  } else if (router.pathname == '/about') {
    bgWrapper = "bg-white";
    logoTextColor = "text-white"
    logoBgColor = "bg-purple-500"
    borderB
    paddingL = "pl-0"
    borderR = ""
  } else {
    bgWrapper = "bg-white";
    logoTextColor = "text-white"
    logoBgColor = "bg-purple-500"
    borderB = "border-b"
    paddingL
    borderR
  }
  
  return (
    <Fragment>
      <Link href="/">
        <div className={`w-1/6 md:w-56 flex ${paddingL} items-center flex-shrink-0 ${borderB} ${borderR} md:border-b-0 cursor-pointer ${bgWrapper}`}>
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${logoBgColor}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 680"  className={`flex w-10 h-10 mt-2 fill-current ${logoTextColor}`}><g><g><path d="M511.548,175.051c-0.47-8.474-7.237-15.24-15.711-15.713c-25.892-1.444-52.091,0.573-77.092,5.641    c-7.97-33.39-18.898-56.379-19.434-57.494c-3.678-7.658-12.526-11.326-20.544-8.509c-1.419,0.498-31.049,11.041-64.706,33.512    c-22.125-33.052-45.098-53.924-46.945-55.577c-6.328-5.667-15.907-5.667-22.236,0c-1.838,1.646-24.606,22.332-46.636,55.117    c-33.374-22.156-62.614-32.561-64.015-33.053c-8.018-2.815-16.866,0.851-20.544,8.509c-0.538,1.119-11.507,24.196-19.482,57.693    c-25.289-5.21-51.826-7.299-78.05-5.84C7.67,159.81,0.9,166.586,0.436,175.069c-3.347,61.218,12.007,145.559,65.127,198.675    c41.68,41.687,111.052,65.594,190.393,65.594c0.011,0,0.021,0,0.032,0c0.002,0,0.004,0,0.007,0c0.003,0,0.007,0,0.011,0    c79.358-0.022,148.76-23.928,190.419-65.592C499.64,320.536,514.958,236.219,511.548,175.051z M375.276,136.493    c3.391,9.047,7.648,21.83,11.217,36.945c-14.957,4.867-29.164,10.889-42.238,17.972c-3.789-10.606-8.288-20.702-13.183-30.188    C348.111,149.706,364.244,141.516,375.276,136.493z M137.74,136.483c10.846,4.932,26.633,12.94,43.44,24.236    c-4.995,9.633-9.584,19.899-13.439,30.694c-12.801-6.935-26.691-12.85-41.307-17.663    C130.016,158.542,134.32,145.617,137.74,136.483z M89.138,350.175c-41.09-41.087-55.497-107.482-55.779-157.942    c45.962,0.2,91.946,12.453,125.454,32.456c-1.806,10.144-2.817,20.604-2.817,31.312c0,61.912,33.769,115.537,59.706,147.597    C162.863,397.191,117.182,378.225,89.138,350.175z M255.999,399.047c-21.512-23.122-66.67-79.262-66.67-143.046    c0-63.788,45.165-119.933,66.667-143.046c21.512,23.122,66.67,79.262,66.67,143.046    C322.667,319.789,277.502,375.935,255.999,399.047z M422.856,350.176c-28.012,28.015-73.67,46.971-126.544,53.399    c25.935-32.063,59.688-85.679,59.688-147.575c0-10.708-1.012-21.168-2.817-31.312c35.939-21.455,82.865-32.275,125.462-32.456    C478.408,242.643,464.02,309.016,422.856,350.176z"/></g></g></svg>
          </div>
          <span className="ml-3 font-bold hidden tracking-wide md:flex text-gray-800">
            Here Now Body
          </span>
        </div>
      </Link>
    </Fragment>
  )
};

export default HeaderLeft;
