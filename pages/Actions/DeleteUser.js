export default deleteUser = function(_id) {
    return fetch('https://kins-node.herokuapp.com/users/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}
