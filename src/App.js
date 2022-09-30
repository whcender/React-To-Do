import React from "react";


// create class component

const list = {
  listx: ["elmahdy", "ahmed", "mohamed"],
}


// local hosta json ile kaydetme



class App extends React.Component {



  handleSubmit = (e) => {
    e.preventDefault();
    const valuex = e.target.txtt.value
    if (valuex !== "") {
      list.listx.push(valuex)
      e.target.txtt.value = ""
      this.setState({})
    }
  }

  clearItem = () => {
    list.listx = [];
    this.setState({ list });
  }

  deleteItem = (e) => {
    list.listx.splice(e, 1);
    this.setState({ list });
  }
  render() {



    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header">
            <h1>list</h1>
            <p>buraya liste elemanlarını yazabilirsiniz</p>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {list.listx.map((item, sayı) => {
                return <li className="list-group-item" key={sayı}>{item}  <button className="btn btn-danger btn-sm float-right" onClick={() => {
                  this.deleteItem(sayı)
                }}>X</button></li>
              })}
            </ul>
            {list.listx.length > 0 
              ? <button className="btn btn-outline-danger float-right btn-sm mt-3" onClick={this.clearItem}>clear</button>
              : <p className="text-center alert alert-warning">Add Item To Start</p>
            }
            
          </div>
          <div className="card-footer">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input className="form-control" type="text" name="txtt" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">ekle</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;