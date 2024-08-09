import React, { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
// import { Context } from '../../context/ContextMain';

export default function Tableitem() {
  // const { filter, handleFilterChange } = useContext(Context);

  // const filteredData = data.slice(0, parseInt(filter));

  const data = [
    {
      workspace: 'sales_by_day_api',
      owner: 'John Doe',
      status: 'live',
      costs: '$3,509.00',
      region: 'US-West 1',
      lastEdited: '23/09/2023 13:00',
    },
    {
      workspace: 'marketing_campaign',
      owner: 'Jane Smith',
      status: 'live',
      costs: '$5,720.00',
      region: 'US-East 2',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'sales_campaign',
      owner: 'Jane Smith',
      status: 'live',
      costs: '$5,720.00',
      region: 'US-East 2',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'development_env',
      owner: 'Mike Johnson',
      status: 'live',
      costs: '$4,200.00',
      region: 'EU-West 1',
      lastEdited: '21/09/2023 14:30',
    },
    {
      workspace: 'new_workspace_1',
      owner: 'Alice Brown',
      status: 'live',
      costs: '$2,100.00',
      region: 'US-West 2',
      lastEdited: '24/09/2023 09:15',
    },
    {
      workspace: 'test_environment',
      owner: 'David Clark',
      status: 'inactive',
      costs: '$800.00',
      region: 'EU-Central 1',
      lastEdited: '25/09/2023 16:20',
    },
  ];

  return (
    <>
      <TableHead>
        <TableRow className="flex justify-between text-center text-gray-500">
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Game
          </TableHeaderCell>
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            User
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

      <Table className="mt-8">
        <TableBody className='text-white'>
          {data.map((item) => (
            <TableRow key={item.workspace}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.workspace}
              </TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.capacity}</TableCell>
              <TableCell className="text-right">{item.costs}</TableCell>
              <TableCell className="text-right">{item.lastEdited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>




    </>
  );
}






