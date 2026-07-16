
// Managed component
export default function Counter(props) {

    return (<>

        <div style={{
            border: "1px solid black",
            height: "50px",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {props.count}
        </div>
        <button onClick={() => props.setCount(props.count + 1)}>+</button>
        <button onClick={
            () => props.setCount(props.count - 1)
        }>-</button>

    </>)
}