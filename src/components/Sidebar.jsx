import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
import { PiTargetBold } from 'react-icons/pi';
import { IoIosPaper } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-40 h-screen bg-[#1e2a34] text-white">
      <div className="px-3 py-[18px] bg-[#111827] flex items-center gap-2">
        <div className="col-span-1">
          <TiThMenu style={{ fontSize: "23px", color: "gray", cursor: "pointer" }} />
        </div>
        <Link to="/casino">
          <div
            className="h-9 w-[77px] rounded flex justify-center items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            style={{
              backgroundImage: 'url("image/casino-poker-cards-en.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}
          >
            <span>CASINO</span>
          </div>
        </Link>
        <Link to="/spots">
          <div
            className="w-[77px] h-9 rounded flex justify-center items-center"
            style={{
              backgroundImage: 'url("image/sports-balls-orange-en (1).png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}
          >
            <span>SPORTS</span>
          </div>
        </Link>
      </div>
      <div className="h-full p-6 px-3 overflow-y-auto mb-5">
        <ul className="space-y-2 font-medium bg-[#1a2c38] rounded shadow text-[14px]">
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Favourites</span>
            </Link>
          </li>
          <li>
            <Link to="/recent" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M13 3a9 9 0 0 0-9 9H1l4 4 4-4H6a7 7 0 1 1 7 7 7 7 0 0 1-5-2.05L7.35 18.6A8.963 8.963 0 0 0 13 21c5 0 9-4 9-9s-4-9-9-9z" />
              </svg>
              <span className="flex-1 ms-3">Recent</span>
            </Link>
          </li>
          <li>
            <Link to="/challenges" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <PiTargetBold style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Challenges</span>
            </Link>
          </li>
          <li>
            <Link to="/games" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <IoIosPaper style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">My Bets</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium bg-[#1a2c38] rounded shadow mt-5 text-[14px]">
          <h2 className="pl-3 py-2 border-b-[2px] border-slate-400">Games</h2>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Stake Originals</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Stake Exclusives</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Slots</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Live Casino</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Game Shows</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">New Releases</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Stake Poker</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Bonus Buy</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Enhanced RTP</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Table Games</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Roulette</span>
            </Link>
          </li>
        </ul>
        <ul className='space-y-2 font-medium bg-[#1a2c38] rounded shadow mt-5 text-[14px]'>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Providers</span>
            </Link>
          </li>
        </ul>
        <ul className='space-y-2 font-medium bg-[#1a2c38] rounded shadow mt-5 text-[14px]'>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Promotions</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Affiliate</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">VIP Club</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Forum</span>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium bg-[#1a2c38] rounded shadow mt-5 text-[14px]">
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Sponsorships</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Responsible Gambling</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Live Support</span>
            </Link>
          </li>
          <li>
            <Link to="/favourite" className="flex items-center p-2 rounded-lg hover:bg-[#213743]">
              <FaRegStar style={{ fontSize: '18px' }} />
              <span className="flex-1 ms-3">Language: English</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
