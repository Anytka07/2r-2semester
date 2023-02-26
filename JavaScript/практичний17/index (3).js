import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        const text = 'текст';
        const textt = <p>текст</p>;
        const text1 = <p>текст1</p>;
        const text2 = <p>текст2</p>;
        const attr = 'block';
        const str = 'block';
        const css = {color: 'green', border: '1px solid red', borderRadius: '30px',};

        const show = Math.random() > 0.5;
        var showrez = '';

        if (show) {
            showrez = <div> текст 1 </div>;
        } else {
            showrez = <div> текст 2 </div>;
        }

        var arr = ['a', 'b', 'c', 'd', 'e'];
        const rez9 = arr.map(function (item, index) {
            return <li>{item}</li>;
        });

        function getText(){
            return <p>текст</p>;
        }
        function getNum1(){
            return 1;
        }
        function getNum2(){
            return 2;
        }

        return (
            <div>
                1
                <div> текст</div>
                <hr/>
                2
                <div> {text} </div>
                <hr/>
                3
                <div> {textt} </div>
                <hr/>
                4
                <div>
                    {text1}
                    <p>!!!</p>
                    {text2}
                </div>
                <hr/>
                5
                <div id={attr}>
                    текст
                </div>
                <hr/>
                6
                <div class={str}>
                    текст
                </div>
                <hr/>
                7
                <div style={css}>текст</div>
                <hr/>
                8 {showrez}
                <hr/>
                9 <ul> {rez9} </ul>
                <hr/>
                10
                <div>
                    {getText()}
                </div>
                <hr/>
                11
                <div>
                    текст {getNum1()+getNum2()}
                </div>

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));