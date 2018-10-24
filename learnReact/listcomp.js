function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
   <li key = {number.toString()}>
     {number}
   </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


//controlled Components

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);


//textarea

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
      this.setState({value: event.target.value});
    }

    handleSubmit(event){
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <label>
            Essay:
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);
