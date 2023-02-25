import { useLogs } from '@usedapp/core';
import { contract } from '../../hooks/contract';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { utils } from 'ethers';
import ShortAddress from '../ShortAddress';
import { useMemo } from 'react';
import { convertToReadableGameStatus } from '../../services/convertToReadableGameStatus';

const PlinkoEvents = ({ filterFunction }) => {
  const logs = useLogs(
    { contract, event: 'Plinko', args: [] },
    {
      fromBlock: 0,
      toBlock: 'latest',
    }
  );

  const messages = useMemo(
    () =>
      logs?.value && typeof filterFunction === 'function'
        ? filterFunction(logs.value)
        : logs?.value || [],
    [logs?.value, filterFunction]
  );

  if (logs?.error) return logs.error.message;

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th>player</Th>
            <Th isNumeric>amount</Th>
            <Th isNumeric>multiplier</Th>
            <Th>BlockHash</Th>
            <Th>transactionHash</Th>
          </Tr>
        </Thead>

        <Tbody>
          {messages?.map((log) => (
            <Tr
              key={log.transactionIndex}
              background={
                convertToReadableGameStatus(log.data.status) === 'LOSE'
                  ? 'red.100'
                  : 'green.100'
              }
            >
              <Th>
                <ShortAddress>{log.data.player}</ShortAddress>
              </Th>
              <Th isNumeric>{utils.formatEther(log.data.amount)} ETH</Th>
              <Th isNumeric>{log.data.multiplier}</Th>
              <Th>{log.blockHash}</Th>
              <Th>{log.transactionHash}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PlinkoEvents;
