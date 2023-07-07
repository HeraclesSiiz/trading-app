import React from 'react';
import BTCTokenIcon from 'assets/images/tokens/btc.png';
import CaretIcon from 'assets/images/icons/caret.svg';
import ArrowIcon from 'assets/images/icons/arrow.svg';
import SymbolIcon from 'assets/images/icons/symbol.svg';

const TradingOverview = () => {
  const handleClick = () => {

  }

  return <div className='flex h-[68px] border-b border-b-border'>
    <div className='flex items-center px-5 border-r border-r-border cursor-pointer' onClick={handleClick}>
      <img src={BTCTokenIcon} classname="w-10 h-10 rounded-full" alt="btc token" />
      <div className='mx-[15px]'>
        <p className='font-semibold text-base leading-[22px] lg:text-lg mb-[5px]'>BTC/USD</p>
        <p className='text-[13px] leading-4 opacity-50'>up to 100x</p>
      </div>
      <img src={CaretIcon} alt="arrow down icon" />
    </div>
    <div className='flex items-center relative px-5'>
      <img src={SymbolIcon} className="absolute w-[25px] h-[25px] top-0 left-0" alt="" />
      <span className='font-semibold text-[22px] mx-[15px]'>$30594.00</span>
      <div className='relative'>
        <img src={ArrowIcon} className="absolute top-1/2 -translate-y-1/2 left-2" alt="" />
        <span className='font-bold text-[15px] text-danger'>(<span className='ml-4 inline-flex'>1.08%</span>)</span>
      </div>
    </div>
    <div className='relative px-5 flex flex-col justify-center'>
      <span className='inline-block absolute w-[1px] h-[30px] top-1/2 -translate-y-1/2 left-0 bg-border'></span>
      <span className='text-[13px] opacity-50 mb-[5px]'>24h high</span>
      <span className='text-[15px]'>31,522.0</span>
    </div>
    <div className='relative px-5 flex flex-col justify-center'>
      <span className='inline-block absolute w-[1px] h-[30px] top-1/2 -translate-y-1/2 left-0 bg-border'></span>
      <span className='text-[13px] opacity-50 mb-[5px]'>24h low</span>
      <span className='text-[15px]'>29,887.0</span>
    </div>
  </div>
}

export default TradingOverview;