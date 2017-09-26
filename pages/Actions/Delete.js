export default DeleteProduct = function(_id) {
    return fetch('https://kins-node.herokuapp.com/products/' + _id, {
        method: 'DELETE',
        
    }).then(res => {
        return res;
    }).catch(err => err);
}
