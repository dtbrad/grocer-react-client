import React from 'react';
import { Table } from 'react-bootstrap';
import BasketsTableRow from './BasketsTableRow';

const BasketsTable = ({ oldestDate, newestDate, tableData, desc, loadSpendingTable }) => {
  const basketsTableContent = tableData.map(basket => (
    <BasketsTableRow key={basket.id} basket={basket} />
  ));

  return (
    <Table hover>
      <thead>
        <tr style={{ color: '#07C' }}>
          <th
            role="button"
            onClick={() => loadSpendingTable({ oldestDate, newestDate, resourceName: 'baskets', currentPage: 1, desc: !desc, sortCategory: 'sort_date' })}
          > Date
          </th>
          <th
            role="button"
            onClick={() => loadSpendingTable({ oldestDate, newestDate, resourceName: 'baskets', currentPage: 1, desc: !desc, sortCategory: 'sort_items' })}
          > Items
          </th>
          <th
            role="button"
            onClick={() => loadSpendingTable({ oldestDate, newestDate, resourceName: 'baskets', currentPage: 1, desc: !desc, sortCategory: 'sort_total' })}
          > Total
          </th>
        </tr>
      </thead>
      <tbody>
        {basketsTableContent}
      </tbody>
    </Table>
  );
};

export default BasketsTable;
