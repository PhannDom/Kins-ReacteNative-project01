export default createUser = function(data) {

    return fetch('https://kins-node.herokuapp.com/users', {
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