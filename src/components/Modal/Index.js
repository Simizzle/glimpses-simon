import React from 'react';  
import './modalStyles.css'
import { Button, Modal} from 'react-bootstrap';  
import GoogleMap from '../Maps/GoogleMap';
import  logo  from "../../logo/glimpses_logo-01.svg"

class ModalMap extends React.Component {  
  constructor(){  
    super();  
    this.state={  
      show:false  
    }  
  }  
  handleModal(){  
    console.log(this.props)
    this.setState({show:!this.state.show})  
  }  
  render(){  
    return (  
      <div>  
        <div className="modalClass">  
          <Button onClick={()=>this.handleModal()} >Tag Location</Button>  
        </div>  
          
        <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>
          <img src={logo} width="150px" alt="logo"/>
            <h3 align-items="center">Tag Location</h3>
            </Modal.Header>  
          <div className="modalBody">
          <Modal.Body>
              <GoogleMap googleprops={this.props}/>
            </Modal.Body>  
            </div>
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Save Location</Button>  
          </Modal.Footer>  
        </Modal>  
      </div>  
    )  
  }  
}  
export default ModalMap;  