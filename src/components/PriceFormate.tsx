import { twMerge } from "tailwind-merge";

interface Props {
    amount: number;
    className: string

}
const PriceFormate = ({ amount, className }: Props) => {
    const priceFormate = new Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })
    return (
        <div>
            <span className={twMerge('font-medium',className)}>{priceFormate}</span>
        </div>
    );
};

export default PriceFormate;