import './App.css';
const TodoLists = (props) => {

    return (
        <div className="todo_list">
            <i className="fa fa-times" aria-hidden="true"
                onClick={() => {
                    props.deleteItem(props.id)
                }}
            ></i>
            <li>{props.text}</li>
        </div>
    )
}

export default TodoLists
