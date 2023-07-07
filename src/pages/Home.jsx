import React from 'react';
import TradingOverview from 'components/containers/Home/TradingOverview';
import TradingControl from 'components/containers/Home/TradingControl';
import Positions from 'components/containers/Home/Positions';
import ChartDesktopImage from 'assets/images/chart/desktop.png';
import ChartMobileImage from 'assets/images/chart/mobile.png';

const Home = () => {
  return <div className='flex'>
    <div>
      <TradingOverview />
      <img src={ChartDesktopImage} className="w-full hidden lg:block" />
      <img src={ChartMobileImage} className="w-full block lg:hidden" />
      <Positions />
    </div>
    <TradingControl />
  </div>
}

export default Home;