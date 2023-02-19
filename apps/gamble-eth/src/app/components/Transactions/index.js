import { useLogs } from '@usedapp/core';
import { contract } from '../../hooks/contract';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { utils } from 'ethers';
import ShortAddress from '../ShortAddress';

const Transactions = ({ event }) => {
  const logs = useLogs(
    { contract, event, args: [] },
    {
      fromBlock: 0,
      toBlock: 'latest',
    }
  );

  if (logs?.error) return logs.error.message;

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>{event === 'Deposit' ? 'depositor' : 'withdrawer'}</Th>
            <Th isNumeric>amount</Th>
            <Th>BlockHash</Th>
            <Th>transactionHash</Th>
          </Tr>
        </Thead>

        <Tbody>
          {logs?.value.map((log) => (
            <Tr key={log.transactionIndex}>
              <Th>
                <ShortAddress>
                  {event === 'Deposit'
                    ? log.data.depositor
                    : log.data.withdrawer}
                </ShortAddress>
              </Th>
              <Th isNumeric>{utils.formatEther(log.data.amount)} ETH</Th>
              <Th>{log.blockHash}</Th>
              <Th>{log.transactionHash}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Transactions;
