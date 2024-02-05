import ServisesProductList from 'Container/Components/ServisesProductList/ServisesProductList'

interface Props {
    addProductToCart: (count: number, price: number) => void
}

const ServisesSection = ({ addProductToCart }: Props) => {
    return <ServisesProductList addProductToCart={addProductToCart} />
}
export default ServisesSection
