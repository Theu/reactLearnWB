import React from 'react';

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch
//                     <span className="ofThe">
//                         <span className="of">of</span>
//                         <span className="the">the</span>
//                     </span>
//                     day
//                 </h1>
//                 <h3 className="tagline">
//                     <span>
//                     {this.props.tagline}
//                     </span>
//                 </h3>
//             </header>
//         )
//     }
// }

//  because I don't do anything with Header a pure function is better

const Header = (props) => {
    return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    day
                </h1>
                <h3 className="tagline">
                    <span>
                    {props.tagline}
                    </span>
                </h3>
            </header>
        )
}


export default Header;

//this refers to the component
//prop stays for props
//tagline the name of the invoched props