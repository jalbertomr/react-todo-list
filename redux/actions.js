//var constants = {
//    ADD_TODO: 'ADD_TODO'
//}
/*
{
    //type: constants.'ADD_TODO'
    type: 'ADD_TODO',
    text: 'string que usuario teclea.'

}
*/
let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text: text
        };
    }
};

//store.dispatch(addTodo('algun texto'))

export default actions;
