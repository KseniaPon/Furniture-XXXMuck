import './style.css'

export const Product = ({product, onSelect}) => {
    const handleClick = () => {
        onSelect(product.id)

    }
    return (
       <div className="product">     
            
            <img className='picture-main' onClick={handleClick} src={product.image} alt="product" ></img>
            <h2 className="product__name">{product.name}</h2>
            
       </div>
    )
}