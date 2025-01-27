import React from 'react';
import Image from 'next/future/image';

const Intro = () => {
  return (
    <div className="grid grid-cols-[max-content_auto] gap-3 max-w-2xl px-8 mx-auto ">
      <Image
        className="rounded-lg self-center"
        src={'/images/anurag.jpg'}
        width={150}
        height={150}
        alt="Anuarg Pradhan pic"
      />
      <div className="self-end">
        <h1 className="m-0 font-semibold text-2xl">Anuarg Pradhan</h1>
        <p className="m-0">Full stack/Android developer</p>
        <p className="m-0">Documenting my journey here</p>
      </div>
    </div>
  );
};

export default Intro;
