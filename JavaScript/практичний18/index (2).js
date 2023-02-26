import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {name: 'Іван', age: 25, show: false, mass : ['Коля', 'Вася', 'Петя'], hrefs: [
                {href: '1.html', text: 'посилання 1'},
                {href: '2.html', text: 'посилання 2'},
                {href: '3.html', text: 'посилання 3'},
            ]
        };
    }

    showMessage() {
        alert('hello!');
    }

    showName() {
        alert("" + this.state.name);
    }

    changeAge() {
        this.setState({age: 30});
    }

    changeName() {
        this.setState({name: 'Коля'});
    }

    changeStateShow() {
        this.setState({show: !this.state.show});
    }


    render() {
        if (this.state.show) {
            var message = <p>ім’я: {this.state.name}, вік: {this.state.age}</p>
            var textButton = "Сховати"
        } else var textButton = "Показати";

        const rez9 = this.state.mass.map(function (item, index) {
            return <li>{item} - {index+1}</li>;
        });

        const rez11 = this.state.hrefs.map(function (item, index) {
            return <li> <a href = {item.href}> {item.text}</a> </li>;
        });

        return <div>
            <div>
                ім’я: {this.state.name}, вік: {this.state.age}
            </div>
            <hr/>

            <div onClick={this.showMessage}>
                zd2
            </div>
            <hr/>

            <div onClick={this.showName.bind(this)}>
                zd3
            </div>
            <hr/>

            <div>
                <p onClick={this.changeName.bind(this)}> ім’я: {this.state.name} </p>
                <p onClick={this.changeAge.bind(this)}> вік: {this.state.age} </p>
            </div>
            <hr/>

            <div>
                <p>{this.state.show ? 'Привіт' : 'Пока'}, {this.state.name}!</p>
            </div>
            <hr/>

            <div>
                {message}
                <button onClick={this.changeStateShow.bind(this)}>{textButton}</button>
            </div>
            <hr/>

            <div>
                <ul>
                    {rez9}
                </ul>
            </div>
            <hr/>

            <div>
                <ul>
                    {rez11}
                </ul>
            </div>
            <hr/>


        </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));