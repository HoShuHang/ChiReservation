import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = { currentDate: date };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      currentDate: date
    });
  };

  render() {
    // return <h1>Hello, {this.props.name}</h1>;
    return <div className="App">
      <header className="App-header">
      <h1> <font size="36" face="Edwardian Script ITC">Chi</font> </h1>
        <form>
          <label>
            人數 :
            <input type="text" name="name" value="1" style={{width:"30px", marginLeft:"10px", textAlign:"center"}} /> 人
          </label>
          <label style={{marginLeft:"10px"}}>
            服務 :
            <select id="services" style={{width:"100px", marginLeft:"10px"}}>
              <option value="volvo">卸睫毛</option>
              <option value="saab">日式嫁接</option> 
              <option value="opel">3d嫁接</option>
              <option value="audi">6d嫁接</option>
            </select>
          </label>
          <label style={{marginLeft:"10px"}}>
            時間 : 
              <DatePicker
                selected={this.state.currentDate}
                onChange={this.handleChange}
                dateFormat="yyyy-MM-dd"
                marginLeft="10px"
              />
          </label>
        </form>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1> <font size="36" face="Edwardian Script ITC">Chi</font> </h1>
//         <form>
//           <label>
//             人數 :
//             <input type="text" name="name" value="1" style={{width:"30px", marginLeft:"10px", textAlign:"center"}} /> 人
//           </label>
//           <label style={{marginLeft:"10px"}}>
//             服務 :
//             <select id="services" style={{width:"100px", marginLeft:"10px"}}>
//               <option value="volvo">卸睫毛</option>
//               <option value="saab">日式嫁接</option> 
//               <option value="opel">3d嫁接</option>
//               <option value="audi">6d嫁接</option>
//             </select>
//           </label>
//           <label style={{marginLeft:"10px"}}>
//             時間 :
//             <DatePicker
//               onChange={value => this.setState({ value })}
//             />
//           </label>
//         </form>
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;
