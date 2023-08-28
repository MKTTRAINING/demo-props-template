import ComponentC from "./c"

function ComponentB() {
    return (
        <div style={{border: "1px solid blue", width: "400px", padding: "10px"}}>
            <p>Component B</p>
            <ComponentC/>
        </div>
    )
}

export default ComponentB