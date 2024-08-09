
import React, { useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import {
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import Tableitem from './Tableitem';
import { Context } from '../../context/ContextMain';
// import data from "../../tabledata"


export default function Tabing() {
  const [filter, setFilter] = useState('10');

  const [activeTab, setActiveTab] = useState('My Bets');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="flex flex-col w-full text-white">
      <div className='flex items-center justify-between' >
      <div className="flex items-center justify-between  p-3 bg-[#30383c] rounded-full ">
        <div className="flex space-x-4">
          {['My Bets', 'All Bets', 'High Rollers', 'Race Leaderboard'].map((tab) => (
            <button
              key={tab}
              className={`p-2 px-4 rounded-3xl ${activeTab === tab ? 'bg-[#394852]' : 'bg-transparent'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
      </div>
  

<div className="flex items-center space-x-4">
        <button className="p-2 px-4 bg-[#2f4553] rounded">Ghost mode off</button>
        <select
          className="p-2 bg-[#2f4553] rounded"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>


      </div>

      <div className="mt-4">
        {activeTab === 'My Bets' && (
          <Card>
            <CardBody>
            <TableHead>
        <TableRow className="text-gray-500  w-[100%] flex items-center justify-between" >
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Game
          </TableHeaderCell>
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Time
          </TableHeaderCell>
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Bet Amount
          </TableHeaderCell>
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Multiplier
          </TableHeaderCell>
          <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Payout
          </TableHeaderCell>
        </TableRow>
      </TableHead>
            </CardBody>
          </Card>
        )}
        {activeTab === 'All Bets' && (
          <Card>
            <CardBody>
            <Tableitem />
            </CardBody>
          </Card>
        )}
        {activeTab === 'High Rollers' && (
          <Card>
            <CardBody>
            <Tableitem />
            </CardBody>
          </Card>
        )}
        {activeTab === 'Race Leaderboard' && (
          <Card>
            <CardBody>
            <Tableitem />
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
}




