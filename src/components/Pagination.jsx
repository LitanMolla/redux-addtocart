import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from './Product';


function Items({ currentItems }) {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {currentItems &&
                    currentItems.map((item, index) => (
                        <div>
                            <Product
                                image={item.images}
                                title={item.title}
                                price={item.price}
                                id={item.id}
                                key={index}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}

function Pagination({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <div className="flex justify-between items-center mt-5 flex-col md:flex-row gap-5">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<span className='text-green-950 cursor-pointer min-w-12 h-12 flex justify-center items-center text-xl bg-white rounded-md font-semibold border border-white p-2 duration-300 hover:bg-green-950 hover:text-white'>&gt;</span>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<span className='text-green-950 cursor-pointer min-w-12 h-12 flex justify-center items-center text-xl bg-white rounded-md font-semibold border border-white p-2 duration-300 hover:bg-green-950 hover:text-white'>&lt;</span>}
                    renderOnZeroPageCount={null}
                    pageClassName=''
                    containerClassName='flex block gap-3 items-center'
                    pageLinkClassName='text-green-950 cursor-pointer min-w-12 h-12 flex justify-center items-center text-xl bg-white rounded-md font-semibold border border-white p-2 duration-300 hover:bg-green-950 hover:text-white'
                />
                <h3 className='text-xl font-medium text-yellow-500'>Products from {itemOffset + 1} to {endOffset > products.length ? products.length : endOffset} of {products.length} </h3>
            </div>
        </>
    );
}

export default Pagination;