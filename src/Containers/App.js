import React from 'react';
import CardList from '../Components/CardList'
import { robots } from '../robots'
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css'
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            searchField: '',
            robotList: ''
        };
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
       
    }
    render () {
        let filteredList = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <>  
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredList}/>  

                </ErrorBoundary>
            </Scroll>
            </>
        );
    }
}


// const App = () => {
//     // constructor() {
//     //     super();
//     //     this.state = {
//     //         robots: robots,
//     //         searchfield: ''
//     //     }
//     // }

//     const [robotsList, setRobotsList] = React.useState(robots);
//     function onSearchChange(event){
//         let newRobotArray = [];
//         let currentInput = event.target.value;
//         let inputLen = currentInput.length;
//         if (currentInput === ''){
//             setRobotsList(robots);
//             return 
//         }
//         robotsList.forEach((robot) =>  {
//             const slicedRobotName = robot.name.slice(0, inputLen);
//             console.log(slicedRobotName, currentInput)
//             if (currentInput === slicedRobotName) {
//                 newRobotArray.push(robot);
//             }
//         });
//         setRobotsList(newRobotArray);

        
//     }
//         return (
//             <>
//             <h1>RoboFriends</h1>
//             <SearchBox searchChange={onSearchChange}/>
//             <CardList robots = {robotsList}/>
//             </>
//         );
      
    

// }


export default App;