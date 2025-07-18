import Container from './Container'
import Pagination from './Pagination'

const Shop = () => {
    return (
        <>
            <Container>
                <div className="my-10 md:my-20">
                    <h2 className='text-3xl font-bold text-yellow-500 text-center uppercase mb-6'>New Launches</h2>
                    {
                        <Pagination
                            itemsPerPage={8}
                        />
                    }
                </div>
            </Container>
        </>
    )
}

export default Shop