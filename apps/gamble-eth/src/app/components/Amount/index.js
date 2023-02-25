import { formatEther } from '@ethersproject/units';
import { useChainMeta, useEthers } from '@usedapp/core';

const Amount = ({ amount: amountProps, currency: currencyProps }) => {
  const { chainId } = useEthers();
  const chain = useChainMeta(chainId);

  const currency = currencyProps || chain.nativeCurrency.symbol;
  const amount = formatEther(amountProps);

  return (
    <span>
      {amount} {currency}
    </span>
  );
};

export default Amount;
