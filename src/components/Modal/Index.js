import React from 'react';  
import './modalStyles.css'
import { Button, Modal} from 'react-bootstrap';  
import GoogleMap from '../Maps/GoogleMap';
// import latLang from '../Maps/GoogleMap'

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
          <Modal.Header closeButton><h1>Tag The Location</h1></Modal.Header>  
          <div className="modalBody">
          <Modal.Body>
              <GoogleMap googleprops={this.props}/>
            </Modal.Body>  
            </div>
          <Modal.Footer>  
            <Button onClick={
            // () => addLocationToPost(latLang),
            ()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save Location</Button>  
          </Modal.Footer>  
        </Modal>  
      </div>  
    )  
  }  
}  
export default ModalMap;  