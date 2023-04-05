import React from 'react';
import ReactDOM from 'react-dom';


class User extends React.Component  {
    
    handleClick = () => {
        const { firstName, showMessage1 } = this.props;
        showMessage1(firstName);
      };

    handleClick1 = () => {
        const { index, showMessage2 } = this.props;
        showMessage2(index);
      };
    
    handleClick2 = () => {
        const { index, deleteUser } = this.props;
        deleteUser(index);
      };
    
    render() {
      const { firstName, lastName, age, showMessage } = this.props;
  
      return (
        <tr>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{age}</td>
          <td>
          <a href="#" onClick={showMessage}>Put "!"</a>
          </td>
          <td>
          <a href="#" onClick={this.handleClick}>Put "name"</a>
          </td>
          <td>
          <a href="#" onClick={this.handleClick1}>Put "index"</a>
          </td>
          <td>
          <a href="#" onClick={this.handleClick2}>Put delete</a>
          </td>
        </tr>
      );
    }
  }

  //6
  class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editIndex: null,
        editText: '',
      };
      this.handleEditClick = this.handleEditClick.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInputBlur = this.handleInputBlur.bind(this);
    }
  
    handleEditClick(index) {
      this.setState({
        editIndex: index,
        editText: this.props.items[index],
      });
    }
  
    handleInputChange(event) {
      this.setState({ editText: event.target.value });
    }
  
    handleInputBlur() {
      this.props.onEdit(this.state.editIndex, this.state.editText);
      this.setState({ editIndex: null, editText: '' });
    }
  
    render() {
      return (
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>
              {this.state.editIndex === index ? (
                <input
                  type="text"
                  value={this.state.editText}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputBlur}
                  autoFocus
                />
              ) : (
                <React.Fragment>
                  {item}{' '}
                  <button onClick={() => this.handleEditClick(index)}>Edit</button>
                </React.Fragment>
              )}
            </li>
          ))}
        </ul>
      );
    }
  }

//7
class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
        checked: true,
      };
    }
  
    handleEdit = () => {
      this.setState({ isEditing: true });
    };
  
    handleSave = () => {
      const { name, price, quantity } = this.state;
      this.props.onSave(this.props.id, name, price, quantity);
      this.setState({ isEditing: false });
    };
  
    handleCancel = () => {
      this.setState({
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
      });
    };
  
    handleDelete = () => {
      this.props.onDelete(this.props.id);
    };
  
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
    };
  
    handlePriceChange = (event) => {
      this.setState({ price: event.target.value });
    };
  
    handleQuantityChange = (event) => {
      this.setState({ quantity: event.target.value });
    };

    handleCheckedChange = (event) => {
        this.setState({ checked: event.target.checked });
        this.props.onCheckedChange(this.props.id, event.target.checked);
      };
  
    render() {
      const { name, price, quantity, isEditing, checked } = this.state;
      const total = price * quantity;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{total}</td>
          <td>
            {isEditing ? (
              <div>
                <input type="text" value={name} onChange={this.handleNameChange} />
                <input type="number" value={price} onChange={this.handlePriceChange} />
                <input type="number" value={quantity} onChange={this.handleQuantityChange} />
                <button onClick={this.handleSave}>Save</button>
                <button onClick={this.handleCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
            )}
          </td>
          <td>
          <input type="checkbox" checked={checked} onChange={this.handleCheckedChange} />
        </td>
        </tr>
      );
    }
  }

  class TotalPrice extends React.Component {
    render() {
      const { products } = this.props;
      // reduce() для обчислення суми вартості продукту
      const totalPrice = products.reduce((acc, product) => {
        return product.checked ? acc + product.price * product.quantity : acc;
      }, 0);
      return (
        <div>
          <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
        </div>
      );
    }
  }
  

  class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, firstName: "Anna", lastName: "Melnychuk", age: 18 },
                { id: 2, firstName: "Sasha", lastName: "Hrutsuik", age: 20 },
                { id: 3, firstName: "Ivanka", lastName: "Stashko", age: 19 },
              ],
            items: ['Punkt 1', 'Punkt 2', 'Punkt 3'],
            products: [
                { id: 1, name: 'cucumber', price: 2.05, quantity: 7, checked: true },
                { id: 2, name: 'garlic', price: 0.55, quantity: 5, checked: true },
                { id: 3, name: 'sparzha', price: 1.75, quantity: 11, checked: true },
                { id: 4, name: 'onion', price: 2.12, quantity: 6, checked: true }
              ],
            name: '',
            price: '',
            quantity: '',
          };
          this.handleEdit = this.handleEdit.bind(this);
    }

    

    //2
    showMessage = () => {
        alert("!");
      };

    //3
    showMessage1 = (message) => {
        alert(message);
      };

    //4
    showMessage2 = (index) => {
        alert(`User index: ${index}`);
      };

    //5
    deleteUser = (index) => {
        const { users } = this.state;
        // створюється новий масив NewUser який скл. із елементів що й масив users
        // Оператор ... (spread operator) розгортає масив users і додає його елементи до нового масиву newUsers
        const newUsers = [...users];
        newUsers.splice(index, 1);
        this.setState({ users: newUsers });
      };
    
    //6
    handleEdit(index, text) {
        const newItems = [...this.state.items];
        newItems[index] = text;
        this.setState({ items: newItems });
      };

    //7
    handleSave = (id, name, price, quantity) => {
        const { products } = this.state;
        const index = products.findIndex(product => product.id === id);
        products[index].name = name;
        products[index].price = price;
        products[index].quantity = quantity;
        this.setState({ products });
      };
    
    handleDelete = (id) => {
        const { products } = this.state;
        const index = products.findIndex(product => product.id === id);
        products.splice(index, 1);
        this.setState({ products });
      };

    //8
    handleAdd = () => {
        const { products, name, price, quantity } = this.state;
        const id = products.length + 1;
        const newProduct = { id, name, price, quantity };
        this.setState({
          products: [...products, newProduct],
          name: '',
          price: '',
          quantity: '',
        });
      };
    
      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };
    
      handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
      };
    
      handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
      };

    //9-10
   
    
    handleCheckedChange = (id, checked) => {
            const { products } = this.state;
            const index = products.findIndex((product) => product.id === id);
            products[index].checked = checked;
            this.setState({ products });
        };

    render() {
      const { users, products, name, price, quantity } = this.state;
  
      return (
    <div>
            Завдання 1-5
        <br></br>
        <h3>Список</h3>
        <table border="1" color='red'>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Прізвище</th>
              <th>Вік</th>
              <th>M_2</th>
              <th>M_3</th>
              <th>M_4</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User
                key={user.id}
                index={index}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                showMessage={this.showMessage}
                showMessage1={this.showMessage1}
                showMessage2={this.showMessage2}
                deleteUser={this.deleteUser}
              />
            ))}
          </tbody>
        </table>
        <hr/>
            Завдання 6
        <List 
          items={this.state.items} 
          onEdit={this.handleEdit} 
        />
        <hr/>
            Завдання 7-10
        <h3>Список</h3>
        <table border="1">
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна</th>
            <th>Кількість</th>
            <th>Загальна</th>
            <th>Дії</th>
            <th>Вибір</th>
          </tr>
        </thead>
        <tbody>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
                onSave={this.handleSave}
                onDelete={this.handleDelete}
                onCheckedChange={this.handleCheckedChange}
              />
            ))}
          </tbody>
       </table>
       <h5>Додати продукт</h5>
          <label>Назва:</label>
          <input type="text" value={name} onChange={this.handleNameChange} />
          <label>Ціна:</label>
          <input type="number" value={price} onChange={this.handlePriceChange} />
          <label>Кількість:</label>
          <input type="number" value={quantity} onChange={this.handleQuantityChange} />
          <button onClick={this.handleAdd}>Add</button>
        <TotalPrice products={products} />

    </div>
      );
    }
  }

ReactDOM.render(<App/>, document.getElementById("root"));