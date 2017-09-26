export default updateProduct = function(id, data) {    
    return fetch('https://kins-node.herokuapp.com/products/' + id, {
        method: 'PUT',
        
        body: JSON.stringify(data),
        headers: {
        	'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}
