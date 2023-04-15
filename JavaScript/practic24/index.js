import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//---------------------------------------------------------------------------------------------------------1
class App1 extends React.Component {

  constructor() {
      super();
      this.state = {
          employee: [{name: 'Dana', surname: 'Kokit', worked: 23, salary: 23000},
              {name: 'Mimo', surname: 'Oza', worked: 1, salary:1100},
              {name: 'Vasya', surname: 'Tifany', worked: 256, salary: 1000},
              {name: 'Fifi', surname: 'Didona', worked: 11, salary: 12000}]
      };
  }

  handleChange = (index, event) => {
      this.state.employee[index][event.target.name] = event.target.value;
      this.setState({employee: this.state.employee})
  }

  render() {
      const rows = this.state.employee.map((item, index) => {
          return <tr>
              <AppList1 key={index} name={item.name} surname={item.surname} worked={item.worked} salary={item.salary}
                        index={index} parentFunc={this.handleChange}/>
          </tr>
      });

      return (<div>
              <table border={1}>
                  <tr>
                      <th>Name</th>
                      <th>Surname</th>
                      <th>Worked days</th>
                      <th>Rate per day</th>
                      <th>Salary</th>
                  </tr>
                  {rows}
              </table>
              <AppSum1 employee={this.state.employee}/>
          </div>
      );
  }
}

class AppList1 extends React.Component {

  constructor() {
      super();
  }

  render() {
      return (<React.Fragment>
              <td>{this.props.name}</td>
              <td>{this.props.surname}</td>
              <td><input type="text" name="worked" value={this.props.worked} onChange={this.props.parentFunc.bind(this, this.props.index)} /></td>
              <td><input type="text" name="salary" value={this.props.salary} onChange={this.props.parentFunc.bind(this, this.props.index)} /></td>
              <td>{this.props.worked * this.props.salary}</td>
          </React.Fragment>
      );
  }
}

class AppSum1 extends React.Component {

  constructor() {
      super();
  }

  render() {
      var sum = 0;
      this.props.employee.forEach(element => {
          sum += element.worked * element.salary
      });

      return (
          <div>
              Total price: {sum}
          </div>
      );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 2

class App2 extends React.Component {

  constructor() {
      super();
      this.state = {
          test: [
              {
                  question: 'What is the name of Spongebob\'s friend?',
                  answers: [
                      'Toothless',
                      'Rico',
                      'Patrick',
                      'Scrooge'
                  ],
                  right: 'Patrick'
              },
              {
                  question: 'Who played the main role in "Pirates of the Caribbean"',
                  answers: [
                      'James Stewart',
                      'Robert Pattinson',
                      'Jhonny Depp',
                      'Jason Statham'
                  ],
                  right: 'Jnonny Depp'
              },
              {
                  question: 'How many nerve cells will remain in a student after graduation?',
                  answers: [
                      '10',
                      '230',
                      '1',
                      'Nothing'
                  ],
                  right: 'Nothing'
              }
          ] };
  }

  render() {
      const tests = this.state.test.map((item, index) => {
          return <AppList2 key={index} question={item.question} answers={item.answers} right={item.right} />;
      });

      return (<div>
              {tests}
          </div>
      );
  }
}

class AppList2 extends React.Component {

  constructor() {
      super();
      this.state = {
          answered: false,
          message: '',
          className: '',
          value: ''
      }
  }

  handleChange = (event) => {
      this.setState({value: event.target.value})
  }

  acceptAnswer = () => {
      if(this.state.value == this.props.right) {
        this.setState({
          message: 'Your answer - ' + this.state.value + ', true',
          answered: true,
          style: {color: '#78A87D'}
        });
      }
      else {
        this.setState({
          message: 'Your answer ' + this.state.value + ', false , true answer - ' + this.props.right,
          answered: true,
          style: {color: '#BD2D41'}
        });
      }
      this.setState({answered: true})
  }

  render() {
      var tag;
      if(this.state.answered)
          tag = <p style={this.state.style}>{this.state.message}</p>
      else
          tag = <React.Fragment>
              <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
              <button onClick={this.acceptAnswer.bind(this)}>Скласти тест</button>
          </React.Fragment>

      const answers = this.props.answers.map((item, index) => {
          return <li>
              {item}
          </li>

      });

      return (<div>
              <p>{this.props.question}</p>
              <ul>{answers}</ul>
              {tag}
          </div>
      );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 3

class App3 extends React.Component {

  constructor() {
      super();
      this.state = {
          test: [
              {
                  question: '1.What is the largest continent on the planet?',
                  answers: [
                      'Australia',
                      'Eurasia',
                      'North America',
                      'Greenland'
                  ],
                  right: 'Eurasia',
                  userAnswer: ''
              },
              {
                  question: '2.What color is the snow?',
                  answers: [
                      'green',
                      'yellow',
                      'white',
                      'red'
                  ],
                  right: 'white',
                  userAnswer: ''
              },
              {
                  question: '3.When the tulips bloom?',
                  answers: [
                      'spring',
                      'autumn',
                      'winter',
                      'summer'
                  ],
                  right: 'spring',
                  userAnswer: ''
              }
          ], testCompleted: false };
  }

  setUserAnswer = (index, event) => {
      this.state.test[index]['userAnswer'] = event.target.value;
      this.setState({test: this.state.test})
  }

  completeTest = () => {
      this.setState({testCompleted: true})
  }

  render() {
      const tests = this.state.test.map((item, index) => {
          return <AppList3 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
      });

      var tag;
      if(this.state.testCompleted) tag = tests;
      else tag = <AppQuestion3 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


      return (<div>
              {tag}
          </div>
      );
  }
}

class AppList3 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          answered: false,
          message: '',
          className: ''
      }
      this.acceptAnswer()
  }

  handleChange = (event) => {
      this.setState({value: event.target.value})
  }

  acceptAnswer = () => {
      if(this.props.userAnswer == this.props.right) {
          this.state.className = 'correct';
          this.state.message = 'Your answer - ' + this.props.userAnswer + ', true';
      }
      else {
          this.state.className = 'incorrect';
          this.state.message = 'Your answer ' + this.props.userAnswer + ', false, true answer - ' + this.props.right;
      }
      this.setState({answered: true})
  }

  render() {
      var tag = <p className={this.state.className}>{this.state.message}</p>;

      const answers = this.props.answers.map((item, index) => {
          return <li>
              {item}
          </li>

      });

      return (<div>
              <p>{this.props.question}</p>
              <ul>{answers}</ul>
              {tag}
          </div>
      );
  }
}

class AppQuestion3 extends React.Component {

  constructor() {
      super();
      this.state = {
          questionNum: 0
      }
  }

  changeQuestion = (num) => {
      this.setState({questionNum: this.state.questionNum + num})
  }

  render() {
      const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
          return <li>
              {item}
          </li>
      })

      var answersCount = 0;
      this.props.test.map((item, index) => {
          if(item.userAnswer != '') answersCount++;
      })

      var tag;
      if(answersCount == this.props.test.length) tag = <button onClick={this.props.completeTest.bind(this)}>Check answer</button>

      return (<div>
              <p>{this.props.test[this.state.questionNum].question}</p>
              <ul>{answers}</ul>
              <input type="text" value={this.props.test[this.state.questionNum].userAnswer} onChange={this.props.setUserAnswer.bind(this, this.state.questionNum)} />
              <button onClick={this.changeQuestion.bind(this, -1)} className={this.state.questionNum == 0 ? 'btn-disable' : ''}>back</button>
              <button onClick={this.changeQuestion.bind(this, 1)} className={this.state.questionNum == this.props.test.length - 1 ? 'btn-disable' : ''}>forward</button>
              {tag}
          </div>
      );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 4

class App4 extends React.Component {

  constructor() {
      super();
      this.state = {
          test: [
              {
                  question: '1.What is the sun?',
                  answers: [
                      'galaxy',
                      'asteroid',
                      'star',
                      'planet'
                  ],
                  right: 2,
                  userAnswer: 0
              },
              {
                  question: '2.How many months in a year?',
                  answers: [
                      '11',
                      '6',
                      '13',
                      '12'
                  ],
                  right: 3,
                  userAnswer: 0
              },
              {
                  question: '3.Where is Mexico located?',
                  answers: [
                      'Europe',
                      'North America',
                      'Australia',
                      'Africa'
                  ],
                  right: 1,
                  userAnswer: 0
              }
          ], testCompleted: false };
  }

  setUserAnswer = (index, questionNum, event) => {
      console.log(index)
      this.state.test[questionNum]['userAnswer'] = index;
      this.setState({test: this.state.test})
  }

  completeTest = () => {
      this.setState({testCompleted: true})
  }

  render() {
      const tests = this.state.test.map((item, index) => {
          return <AppList4 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
      });

      var tag;
      if(this.state.testCompleted) tag = tests;
      else tag = <AppQuestion4 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


      return (<div>
              {tag}
          </div>
      );
  }
}

class AppList4 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          answered: false,
          message: '',
          className: ''
      }
      this.acceptAnswer()
  }

  handleChange = (event) => {
      this.setState({value: event.target.value})
  }

  acceptAnswer = () => {
      if(this.props.userAnswer == this.props.right) {
          this.state.className = 'correct';
          this.state.message = 'Your answer - ' + (this.props.userAnswer + 1) + ', true';
      }
      else {
          this.state.className = 'incorrect';
          this.state.message = 'Your answer ' + (this.props.userAnswer + 1) + ', false , true answer - ' + (this.props.right + 1);
      }
      this.setState({answered: true})
  }

  render() {
      var tag = <p className={this.state.className}>{this.state.message}</p>;

      const answers = this.props.answers.map((item, index) => {
          return <li>
              {item}
          </li>

      });

      return (<div>
              <p>{this.props.question}</p>
              <ul>{answers}</ul>
              {tag}
          </div>
      );
  }
}

class AppQuestion4 extends React.Component {

  constructor() {
      super();
      this.state = {
          questionNum: 0,
          option: ''
      }
  }

  changeQuestion = (num) => {
      this.setState({questionNum: this.state.questionNum + num})
  }

  handleRadioChange(index, questionNum, event) {
      this.props.setUserAnswer(index, questionNum, event);
      this.setState({option: event.target.value})
  }

  render() {
      const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
          return <li>
              <input
                  name={"answers" + this.state.questionNum}
                  id={"answers" + this.state.questionNum + index}
                  type="radio"
                  value={"option" + index}
                  checked={"option" + this.props.test[this.state.questionNum].userAnswer == "option" + index}
                  onChange={this.handleRadioChange.bind(this, index, this.state.questionNum)}
              />
              <label for={"answers" + this.state.questionNum + index}>{item}</label><br />
          </li>
      })

      return (<div>
              <p>{this.props.test[this.state.questionNum].question}</p>
              <ul>{answers}</ul>
              <button onClick={this.changeQuestion.bind(this, -1)} className={this.state.questionNum == 0 ? 'btn-disable' : ''}>back</button>
              <button onClick={this.changeQuestion.bind(this, 1)} className={this.state.questionNum == this.props.test.length - 1 ? 'btn-disable' : ''}>forward</button>
              <button onClick={this.props.completeTest.bind(this)}>Check answer</button>
          </div>
      );
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 5

class App5 extends React.Component {

  constructor() {
      super();
      this.state = {
          test: [
              {
                  question: '1.What drinks are included in the classic Mojito cocktail?',
                  answers: [
                      'vodka',
                      'beer',
                      'rum',
                      'mint'
                  ],
                  right: [2, 3],
                  userAnswer: []
              },
              {
                  question: '2.What is included in the sex on the beach cocktail?',
                  answers: [
                      'beer',
                      'vodka',
                      'tonik',
                      'juice'
                  ],
                  right: [1, 3],
                  userAnswer: []
              },
              {
                  question: '3.What\'s in the Blue Lagoon Cocktail?',
                  answers: [
                      'vodka',
                      'lemon juice',
                      'Blue Curacao',
                      'gin'
                  ],
                  right: [0, 1, 2],
                  userAnswer: []
              }
          ], testCompleted: false };
  }

  setUserAnswer = (index, questionNum, event) => {
      this.state.test[questionNum]['userAnswer'].push(index);
      this.setState({test: this.state.test})
  }

  removeUserAnswer = (index, questionNum, event) => {
      var arrIndex = this.state.test[questionNum]['userAnswer'].indexOf(index);
      this.state.test[questionNum]['userAnswer'].splice(arrIndex, 1);
      this.setState({test: this.state.test})
  }

  completeTest = () => {
      this.setState({testCompleted: true})
  }

  render() {
      const tests = this.state.test.map((item, index) => {
          return <AppList5 key={index} question={item.question} answers={item.answers} right={item.right} userAnswer={item.userAnswer}/>;
      });

      var tag;
      if(this.state.testCompleted) tag = tests;
      else tag = <AppQuestion5 test = {this.state.test} setUserAnswer = {this.setUserAnswer.bind(this)} removeUserAnswer = {this.removeUserAnswer.bind(this)} completeTest = {this.completeTest.bind(this)} />


      return (<div>
              {tag}
          </div>
      );
  }
}

class AppList5 extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          answered: false,
          message: '',
          className: ''
      }
      this.acceptAnswer()
  }

  handleChange = (event) => {
      this.setState({value: event.target.value})
  }

  acceptAnswer = () => {
      if(this.arrayEquals(this.props.userAnswer.sort(function(a, b){return a - b}), this.props.right.sort(function(a, b){return a - b}))) {
          this.state.className = 'correct';
          this.state.message = 'Your answer - ' + this.props.userAnswer + ', true';
      }
      else {
          console.log(this.props.userAnswer)
          console.log(this.props.right)
          this.state.className = 'incorrect';
          this.state.message = 'Your answer ' + this.props.userAnswer + ', false, true answer - ' + this.props.right;
      }
      this.setState({answered: true})
  }

  arrayEquals(a, b) {
      return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
  }

  render() {
      var tag = <p className={this.state.className}>{this.state.message}</p>;

      const answers = this.props.answers.map((item, index) => {
          return <li>
              {item}
          </li>

      });

      return (<div>
              <p>{this.props.question}</p>
              <ul>{answers}</ul>
              {tag}
          </div>
      );
  }
}

class AppQuestion5 extends React.Component {

  constructor() {
      super();
      this.state = {
          questionNum: 0,
          option: ''
      }
  }

  changeQuestion = (num) => {
      this.setState({questionNum: this.state.questionNum + num})
  }

  handleChange(index, questionNum, event) {
      if(event.target.checked) this.props.setUserAnswer(index, questionNum, event);
      else this.props.removeUserAnswer(index, questionNum, event);
  }

  render() {
      const answers = this.props.test[this.state.questionNum].answers.map((item, index) => {
          return <li>
              {item}
              <input type="checkbox" checked={this.props.test[this.state.questionNum].userAnswer.includes(index)} onChange={this.handleChange.bind(this, index, this.state.questionNum)}/>
          </li>
      })

      return (<div>
              <p>{this.props.test[this.state.questionNum].question}</p>
              <ul>{answers}</ul>
              <button onClick={this.changeQuestion.bind(this, -1)} className={this.state.questionNum == 0 ? 'btn-disable' : ''}>back</button>
              <button onClick={this.changeQuestion.bind(this, 1)} className={this.state.questionNum == this.props.test.length - 1 ? 'btn-disable' : ''}>forward</button>
              <button onClick={this.props.completeTest.bind(this)}>Check answer</button>
          </div>
      );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 6


class App6 extends React.Component {

  constructor() {
      super();
      this.state = { notes: [], value: ''
      };
  }

  handleEditCallback = (value, index) => {
      this.state.notes[index] = value;
      this.setState({notes: this.state.notes})
  }

  handleDeleteCallback = (index) => {
      this.state.notes.splice(index, 1);
      this.setState({notes: this.state.notes})
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleButton() {
      let value = {header: 'PamPam' + (this.state.notes.length + 1), text: this.state.value, date: new Date()}
      this.state.notes.push(value);
      this.setState({notes: this.state.notes});
  }

  render() {
      const notes = this.state.notes.map((item, index) => {
          return <tr>
              <AppList6 key={index} header={item.header} text={item.text} date={item.date} index={index} parentEditCallBack={this.handleEditCallback} parentDeleteCallBack={this.handleDeleteCallback} />
          </tr>;
      });

      return (<div>
              <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
              <button onClick={this.handleButton.bind(this)}>Add</button>
              {notes}
          </div>
      );
  }
}

class AppList6 extends React.Component {

  constructor(props) {
      super(props);
      this.state = { edit: false, value: props.text, checked: false };
  }

  handleEditButton() {
      this.setState({edit: !this.state.edit})
  }

  handleDeleteButton() {
      this.props.parentDeleteCallBack(this.props.index);
  }


  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleCheck(event) {
      this.setState({checked: !this.state.checked});
  }

  saveChanges(event) {
      this.state.edit = !this.state.edit
      let value = {header: this.props.header, text: this.state.value, date: this.props.date}
      this.props.parentEditCallBack(value, this.props.index);
  }

  render() {
      const style = {
          textDecoration: this.state.checked ? 'line-through' : 'none'
      }

      let tag;
      if(!this.state.edit) tag =  <p style={style}>{this.props.text}</p>
      else tag = <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.saveChanges.bind(this)}/>

      return (<div>
              <p>{this.props.header}</p>
              {tag}
              <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck.bind(this)}/>
              <p>{this.props.date.getHours()}:{this.props.date.getMinutes()}:{this.props.date.getSeconds()}</p>
              <button onClick={this.handleEditButton.bind(this)}>Edit</button>
              <button onClick={this.handleDeleteButton.bind(this)}>Delete</button>
          </div>
      );
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// exercise number 7

class App7 extends React.Component {

  constructor() {
      super();
      this.state = {
          selectedDate: new Date(),
          notes: [],
          value: ''
      }
  }

  handleSelectedDate = (newDate) => {
      this.setState({selectedDate: newDate})
  }

  handleEditCallback = (value, index) => {
      this.state.notes[index] = value;
      this.setState({notes: this.state.notes})
  }

  handleDeleteCallback = (index) => {
      this.state.notes.splice(index, 1);
      this.setState({notes: this.state.notes})
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleButton() {
      let value = {header: 'PamPam' + (this.state.notes.length + 1), text: this.state.value, date: this.state.selectedDate}
      this.state.notes.push(value);
      this.setState({notes: this.state.notes});
  }

  render() {
      const notes = this.state.notes.map((item, index) => {
          if(this.state.selectedDate.getFullYear() == item.date.getFullYear() && this.state.selectedDate.getMonth() == item.date.getMonth() && this.state.selectedDate.getDate() == item.date.getDate())
              return <tr>
                  <AppList7 key={index} header={item.header} text={item.text} date={item.date} index={index} parentEditCallBack={this.handleEditCallback} parentDeleteCallBack={this.handleDeleteCallback} />
              </tr>;
      });

      return ( <div>
              <AppCalendar7 selectedDate={this.state.selectedDate} notes={this.state.notes} handleSelectedDate={this.handleSelectedDate}/> <br/>
              <textarea value={this.state.value} onChange={this.handleChange.bind(this)} />
              <button onClick={this.handleButton.bind(this)}>AddS</button>
              {notes}
          </div>
      );
  }
}

class AppDay7 extends React.Component {
  constructor() {
    super();
  }

  render() {
    const days = Array.from(
      { length: new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, 0).getDate() },
      (_, i) => i + 1
    );

    const rows = days.reduce(function (rows, key, index) {
      return (index % 7 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
    }, []);

    const condition =
      this.props.date.getFullYear() == this.props.selectedDate.getFullYear() &&
      this.props.date.getMonth() == this.props.selectedDate.getMonth();

    const daysTag = rows.map((row) => (
      <div style={{ display: "flex" }}>
        {row.map((day) => {
          if (condition && this.props.selectedDate.getDate() == day)
            return (
              <div
                className="datepicker-selected-day"
                onClick={() => this.props.handleSelectedDate(new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day))}
              >
                {day}
              </div>
            );
          else {
            const dayContainNotes =
              this.props.notes.filter(
                (e) =>
                  e.date.getFullYear() === this.props.date.getFullYear() &&
                  e.date.getMonth() === this.props.date.getMonth() &&
                  e.date.getDate() === day
              ).length > 0;
            if (dayContainNotes)
              return (
                <div
                  className="datepicker-day"
                  onClick={() =>
                    this.props.handleSelectedDate(new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day))
                  }
                >
                  {day}
                  <span className="datepicker-icon"></span>
                </div>
              );
            else
              return (
                <div
                  className="datepicker-day"
                  onClick={() =>
                    this.props.handleSelectedDate(new Date(this.props.date.getFullYear(), this.props.date.getMonth(), day))
                  }
                >
                  {day}
                </div>
              );
          }
        })}
      </div>
    ));

    return <div>{daysTag}</div>;
  }
}

class AppCalendar7 extends React.Component {

  constructor() {
      super();
      this.state = {
          date: new Date()
      }
  }

  changeMonth = (value) => {
      var nd = new Date(this.state.date.getTime());
      nd.setMonth(this.state.date.getMonth() + value);
      this.setState({date: nd})
  }

  render() {

      return (<div className="datepicker">
              <div className="datepicker-header">
                  <div className="datepicker-current-month">
                      <button className="datepicker-navigation" onClick={this.changeMonth.bind(this, -1)}>&#60;</button>
                      {this.state.date.toLocaleString('uk', { month: 'long' })} {this.state.date.getFullYear()}
                      <button className="datepicker-navigation" onClick={this.changeMonth.bind(this, 1)}>&#62;</button>
                  </div>
              </div>
              <AppDay7 date={this.state.date} selectedDate={this.props.selectedDate} notes={this.props.notes} handleSelectedDate={this.props.handleSelectedDate}/>
          </div>
      );
  }
}


class AppList7 extends React.Component {

  constructor(props) {
      super(props);
      this.state = { edit: false, value: props.text, checked: false };
  }

  handleEditButton() {
      this.setState({edit: !this.state.edit})
  }

  handleDeleteButton() {
      this.props.parentDeleteCallBack(this.props.index);
  }


  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleCheck(event) {
      this.setState({checked: !this.state.checked});
  }

  saveChanges(event) {
      this.state.edit = !this.state.edit
      let value = {header: this.props.header, text: this.state.value, date: this.props.date}
      this.props.parentEditCallBack(value, this.props.index);
  }

  render() {
      const style = {
          textDecoration: this.state.checked ? 'line-through' : 'none'
      }

      let tag;
      if(!this.state.edit) tag =  <p style={style}>{this.props.text}</p>
      else tag = <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} onBlur={this.saveChanges.bind(this)}/>

      return (<div>
              <p>{this.props.header}</p>
              {tag}
              <input type="checkbox" checked={this.state.checked} onChange={this.handleCheck.bind(this)}/>
              <button onClick={this.handleEditButton.bind(this)}>Edit</button>
              <button onClick={this.handleDeleteButton.bind(this)}>Delete</button>
          </div>
      );
  }
}







  class App extends React.Component  {
    constructor() {
        super();
        this.state = { };
    }

    

    render() {
      return (
          <div>
              Exercise 1
              <App1/>
              <hr color='purple'/>
              Exercise 2
              <App2/>
              <hr color='purple'/>
              Exercise 3
              <App3/>
              <hr color='purple'/>
              Exercise 4
              <App4/>
              <hr color='purple'/>
              Exercise 5
              <App5/>
              <hr color='purple'/>
              Exercise 6
              <App6/>
              <hr color='purple'/>
              Exercise 7
              <App7/>
              <hr color='purple'/>



          </div>
      );
    }
  }

ReactDOM.render(<App/>, document.getElementById("root"));