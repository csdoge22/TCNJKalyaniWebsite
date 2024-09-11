const TLComponent = (props : any) => {
    return (
        <>
            <tr>
                <td>{props.month+' '+props.day+' '+props.year}</td>
                <td>{props.description}</td>
            </tr>
        </>
    )
}
export default TLComponent;