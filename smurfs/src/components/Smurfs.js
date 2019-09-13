import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getSmurfs} from '../store/actions/index.js'

const Smurfs = ({getSmurfs, smurfs}) =>{
  useEffect(() => {
    getSmurfs();
  },[getSmurfs])
  console.log(smurfs)
  return(
    <div>
      {smurfs.map(smurf => {
        return(
          <div key={smurf.id}>
            <h4>{smurf.name}</h4>
            <h4>{smurf.age}</h4>
            <h4>{smurf.height}</h4>
          </div>
        )
     
      })}
    
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs

  }
}


export default connect(mapStateToProps, {getSmurfs})(Smurfs);