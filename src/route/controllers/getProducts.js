

function getProducts(req, res) {
    console.log('The user have authorization to see all the product', req.userId)
    res.send('All the products')
    
}

module.exports = getProducts;