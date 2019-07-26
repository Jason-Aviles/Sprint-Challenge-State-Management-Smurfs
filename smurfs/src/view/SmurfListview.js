import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getSmurf} from '../actions'
import SmurfItem from '../components/SmurfItem'
import AddSmurf from '../components/AddSmurf'



class SmurfListview extends Component {



    componentDidMount(){
        this.props.getSmurf()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.smurfs.map(

                    
                   ( smurf,i) => <SmurfItem key={i} smurf={smurf}   history={this.props}/>
                )}
                <AddSmurf/>
                 
            </div>
        );
    }
}

const mapStateToProps = ({smurfs}) =>{
    
    return{
      smurfs
    }
}

export default connect(mapStateToProps,{getSmurf})(SmurfListview);
