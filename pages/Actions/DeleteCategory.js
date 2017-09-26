export default deleteCategory = function(_id) {
    return fetch('https://kins-node.herokuapp.com/categories/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}
