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
export default actions = {
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text: text
        };
    }
};

store.dispatch(addTodo('algun texto'))

