import React from 'react';
import './Header.css';

const Header = function (props){
 
    return(
        <div className="header">
        {props.heading}
    </div>

    )
}
// import React,{ Component} from 'react';
// class Header extends Component {
//     render() {
//         return (
//             <div className="header">
//                      {this.props.heading}
//             </div>

//         )
//     }
// }

export default Header;