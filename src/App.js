import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      search: '',
      user: null,
      followers: [],

    }
  }
  change = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }
  submit = () => {
    axios.get(`https://api.github.com/users/${this.state.search}`)
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data
      })
      console.log(this.state.user)
    }).catch(err => console.log(err))
    .finally(() => {
      this.setState({
        ...this.state,
        search: '',
      })
    })
    axios.get(`https://api.github.com/users/${this.state.search}/followers`)
    .then(resp => {
      this.setState({
        ...this.state,
        followers: resp.data
      })
      console.log(this.state.followers)
    }).catch(err => console.log(err))
  }
    componentDidMount(){
      axios.get(`https://api.github.com/users/tvolchko/followers`)
      .then(resp => {
        this.setState({
          ...this.state,
          followers: resp.data
        })
        console.log(this.state.followers)
      }).catch(err => console.log(err))
      axios.get(`https://api.github.com/users/tvolchko`)
    .then(resp => {
      this.setState({
        ...this.state,
        user: resp.data
      })
      console.log(this.state.user)
    }).catch(err => console.log(err))
    }
  render() {

    return(<div>
      <div>
      <input 
        type='text'
        value={this.state.search}
        onChange={this.change}
        placeholder='Github handle'
        ></input>
      <button onClick={this.submit}>Search</button> 
      </div>
      <div>
        <User user={this.state.user} />
      </div>
      <div>
        <FollowerList follows={this.state.followers}/>
      </div>
    </div>);
  }
}

export default App;
