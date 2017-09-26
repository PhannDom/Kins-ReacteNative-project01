export default createCategory = function(data) {

    return fetch('https://kins-node.herokuapp.com/categories', {
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