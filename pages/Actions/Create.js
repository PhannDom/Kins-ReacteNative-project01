export default createProduct = function(data) {

    return fetch('https://kins-node.herokuapp.com/products', {
        method: 'POST',
        
        body: JSON.stringify(data),
        headers: {
        	'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}