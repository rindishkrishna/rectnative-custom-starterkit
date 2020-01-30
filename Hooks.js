import React,{createContext,Component} from 'react';
export const Hooks =createContext();

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state={
            hi:"hello",

        };

    }
    render() {
        return (
            <Hooks.Provider value={{...this.state}}>
                {this.props.children}
                </Hooks.Provider>

        );
    }
}
export default Theme;

