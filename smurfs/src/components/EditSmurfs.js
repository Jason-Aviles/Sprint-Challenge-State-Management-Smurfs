import React, { Component } from 'react';
import {connect} from 'react-redux'
import {editSmurfs,getSmurf} from '../actions'

class EditSmurf extends Component {
    state={

        name: '',
        age: '',
        height: ''

    }

    componentDidMount() {	
		this.props.getSmurf();	
		const editsmurf = this.props.smurfs.filter(smurf => {	
			return smurf.id === this.props.match.params.id;	
		});	

 		this.setState({	
			id           : this.props.match.params.id,	
			name         : editsmurf.name,	
			facility_id  : editsmurf.facility_id,	
			work_release : editsmurf.work_release,	
			skills       : editsmurf.skills,	
		});	
	}	

onInputChange=(e)=>{
this.setState({[e.currentTarget.name]:e.currentTarget.value})

}

onSubmitHandle=(e)=>[
    e.preventDefault(),
    this.props.editSmurfs(this.state).then(res => {	
        if (res) {	
            this.props.history.push('/');	
        }	
    }),	

]

    render() {
    
        
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>
                  edit name:   <input onChange={this.onInputChange}  name='name' value={this.state.name}/>
                   edit age:  <input onChange={this.onInputChange}  name='age' value={this.state.age}/>
                    edit height: <input onChange={this.onInputChange}  name='height' value={this.state.height}/>


                    <button>Edit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
   
    return{smurfs:state.smurfs}
}



export default connect(mapStateToProps,{editSmurfs,getSmurf})(EditSmurf);
