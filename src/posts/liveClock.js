import React from 'react';

//credits: https://reactjs.org/docs/state-and-lifecycle.html

//declare component Clock
export default class Clock extends React.Component {

  //every declared component will have a constructor
  constructor(props) {

    //every constructor will have a super(), state variable declarations + assignments
    super(props);
    this.state = {date: new Date()};
  }

  //makes it trigger every 1000ms (1s) -> live clock
  //somehow, timerID can do this
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //kind of like a destructor for componentDidMount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //this method's whole responsibility is to create a new date everytime componentDidMount calls it
  //it uses setState to do this to the state variable we declared earlier
  tick() {
    this.setState({
      date: new Date()
    });
  }

  //everytime this component is called (every second in this case), I think the page renders and only relevant things are changed every second, which is what makes JavaScript so cool
  //each component is allowed one render()
  render() {
    return (
      <div>
        <h1>Live Clock</h1>
        <h3>Today is {this.state.date.toDateString()}.</h3>
        <h3>The time is {this.state.date.toLocaleTimeString()}.</h3>
      </div>
    );
  }
}
