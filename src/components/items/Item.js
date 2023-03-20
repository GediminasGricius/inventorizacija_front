 function Item(props){
    return (
        <tr key={props.item.id}>
            <td>{props.item.no}</td>
            <td>{props.item.name}</td>
            <td>{props.item.location}</td>
            <td>{props.item.user.name} ( { props.item.user.email })</td>
        </tr>
    );
 }

 export default Item;