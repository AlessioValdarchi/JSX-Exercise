const hello = <h1>Hello, World!</h1>;

function getName() {
    const name = 'Alessio';
    return (<h1>hi, {name}</h1>);
}

function sum(a, b) {
    return a + b
}

const total = (
    <span>The total is {sum(20, 30)}</span>
)