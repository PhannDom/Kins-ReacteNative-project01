export default updateUser = function(id, data) {    
    return fetch('https://kins-node.herokuapp.com/users/' + id, {
        method: 'PUT',
        
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}
