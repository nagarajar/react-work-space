let heading = React.createElement('h1',{id: 'bg-light'}, "This is react header");
let paragraph = React.createElement('p',{id: 'bg-light'}, "This is react paragraph");

//so we need add the heading and paragraph in one element
let wraper = React.createElement('div',{}, [heading,paragraph]);


let rootElement = document.getElementById('root');

let root = ReactDOM.createRoot(rootElement);

//You passed a second argument to root.render(...) but it only accepts one argument.
//root.render(heading, paragraph);
//root.render(heading);
root.render(wraper);