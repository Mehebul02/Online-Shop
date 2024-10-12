import { twMerge } from "tailwind-merge";

type Props = {
  amount: number;
  className?: string; 
};

const PriceFormat = ({ amount, className }: Props) => {
  const formattedPrice = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return (
    <div>
      <span className={twMerge('font-medium', className)}>{formattedPrice}</span>
    </div>
  );
};

export default PriceFormat;
