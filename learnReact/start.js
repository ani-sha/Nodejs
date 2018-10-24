const element = (
  <h1 className="greeting">
    Hello.
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello'
);

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello'
  }
};

//Updating render element

function tick () {
  const element = (
    <div>
      <h1>Hello</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element,document.getElementById('root'));
}

setInterval(tick,1000);

//Rendering a component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="SARA" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

//Composing Components
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return(
    <div>
      <Welcome name="Anisha" />
      <Welcome name="Aquib" />
      <Welcome name="Ankit" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//class instead of function

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  render(
    return(
      <div>
        <h1>Hello</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  );
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
