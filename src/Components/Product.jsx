import { useEffect, useState } from "react"

const Product = () => {

    const [products, setProducts] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await fetch('https://api.kalpav.com/api/v1/product/category/retail')
            const res = await data.json()
            setProducts(res.response)
        }
        console.log(products)
        fetchProducts()
    }, [])

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleKeyEnter = (e) => {
        if (e.key === 'Enter') {
            handleButtonClick()
        }
    }

    const handleButtonClick = () => {
        const filteredProducts = products.filter(item => item.productCategory.productCategoryName.toLowerCase().includes(searchInput.toLowerCase()))

        setProducts(filteredProducts)
    }

    return (
        <div className="prod-container">
            <div className="input-div">
                <input type="text" placeholder="Search here..." value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyEnter} />
                <button onClick={handleButtonClick}>Search</button>
            </div>
            <div className="products">
                {products.map((item, id) => (
                    <div key={id} className="prod-div">
                        <img src={item.productCategory.productCategoryImage} alt="Image" />
                        <h2>{item.productCategory.productCategoryName}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product