
import React, {useEffect, useRef, useReducer} from "react";
import {Button, Paper, CircularProgress, Typography, Dialog, DialogTitle} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import UploadIcon from '@material-ui/icons/CloudUpload'
import "../App.css";
import {initialState, reducer} from '../reducer';
import lottie from 'lottie-web';

export default function App() {
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScroll = () => {
    if(window.scrollY> 1300) {

    }
  }
  const handleProcess = () => {
    let connection = new WebSocket('ws://localhost:8765');
    connection.onopen = function () {
      dispatch({type: 'connectionOpen'});
      connection.send(state.address.split(',')[1]);
    };
    connection.onerror = function () {
      dispatch({type: 'connectionError'});
    };
    connection.onmessage = function (e) {
      dispatch({type: 'connectionMessage', payload: e.data});
      inputRef.current.value = "";
    };

  };

  const handleImage = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      dispatch({type: 'readerLoadEnd', payload: reader.result});
    };
  };

  const handleDownload = () => {

  };
  // if (!load) {
  //     paperStyle.backgroundColor = 'red';
  // }

  return (
      <div>
        <h1 style={{fontSize:50,textAlign: "center"}}>Operation</h1>
        <Paper elevation={12} className={"paperStyle"} style={{}}>
          {!state.load ? <img src={state.address} alt={""}
                              style={state.processing ? {filter: 'blur(10px)'} : {filter: 'blur(0px)'}}
                              className={"imageStyle"}/> :
              <Typography variant={"h4"}
                          style={{position: 'relative', opacity: 0.4, textAlign: 'center', top: '50%'}}>Upload
                Image</Typography>
          }
          {state.processing &&
          <CircularProgress style={{position: "absolute", top: '50%', left: '50%'}} size={68}/>}
          <Dialog open={state.error} onClose={() => dispatch({type: 'handleError'})}>
            <DialogTitle>{"Server Not Running"}</DialogTitle>
          </Dialog>
        </Paper>
        <br/>

        <Button disabled={state.processing} onClick={() => inputRef.current.click()} variant={"contained"}
                color={"primary"}
                style={{marginLeft: '32vw'}}>
          <UploadIcon style={{marginRight: 5}}/>
          Upload
        </Button>

        {!state.downloadButton ?
            <Button
                disabled={state.disableSegment}
                onClick={handleProcess}
                variant={"contained"}
                color={"secondary"}
                style={{marginLeft: '20vw'}}
            >
              Segment
            </Button> :
            <Button onClick={handleDownload}
                    variant={"contained"}
                    color={"secondary"}
                    style={{marginLeft: '20vw'}}>
              <SaveIcon style={{marginRight: 5}}/>
              Download
            </Button>}
        <input
            ref={inputRef}
            onChange={handleImage}
            type="file"
            accept="image/png, image/jpeg, image/gif"
            style={{display: "none"}}
        />
      </div>
  );
}





/*
import React, {useEffect, useRef, useReducer} from "react";
import {Button, Paper, CircularProgress, Typography, Dialog, DialogTitle} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import UploadIcon from '@material-ui/icons/CloudUpload'
import "../App.css";
import {initialState, reducer} from '../reducer';
import lottie from 'lottie-web';

export default function App() {
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  let tryAnimation;
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    tryAnimation = lottie.loadAnimation({
      container: document.getElementById("try"),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path:"/try.json"
    });
    tryAnimation.setSpeed(0.8);
    return () => {
      tryAnimation.destroy();
      window.removeEventListener('scroll', handleScroll);
    }
  });
  const handleScroll = () => {
    if(window.scrollY> 1300) {
      tryAnimation.play();
    }
  };
  const handleProcess = () => {
    let connection = new WebSocket('ws://localhost:8765');
    connection.onopen = function () {
      dispatch({type: 'connectionOpen'});
      connection.send(state.address.split(',')[1]);
    };
    connection.onerror = function () {
      dispatch({type: 'connectionError'});
    };
    connection.onmessage = function (e) {
      dispatch({type: 'connectionMessage', payload: e.data});
      inputRef.current.value = "";
    };

  };

  const handleImage = e => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      dispatch({type: 'readerLoadEnd', payload: reader.result});
    };
  };

  const handleDownload = () => {

  };
  // if (!load) {
  //     paperStyle.backgroundColor = 'red';
  // }

  return (
      <div style={{ paddingBottom: '4rem'}}>
        <div style={{height: 70}}/>
        <div className={"heading"}>Try it!</div>
        <Paper elevation={7} className={"paperStyle"} style={{}}>
          {!state.load ? <img src={state.address} alt={""}
                              style={state.processing ? {filter: 'blur(10px)'} : {filter: 'blur(0px)'}}
                              className={"imageStyle"}/> :
              <Typography variant={"h4"}
                          style={{position: 'relative', opacity: 0.4, textAlign: 'center', top: '50%'}}>
                          Upload Image
              </Typography>
          }
          {state.processing &&
          <CircularProgress style={{position: "absolute", top: '50%', left: '50%'}} size={68}/>}
          <Dialog open={state.error} onClose={() => dispatch({type: 'handleError'})}>
            <DialogTitle>{"Server Not Running"}</DialogTitle>
          </Dialog>
        </Paper>
        <br/>

        <Button disabled={state.processing} onClick={() => inputRef.current.click()} variant={"contained"}
                color={"primary"}
                style={{marginLeft: '32vw'}}>
          <UploadIcon style={{marginRight: 5}}/>
          Upload
        </Button>

        {!state.downloadButton ?
            <Button
                disabled={state.disableSegment}
                onClick={handleProcess}
                variant={"contained"}
                color={"secondary"}
                style={{marginLeft: '20vw'}}
            >
              Segment
            </Button> :
            <Button onClick={handleDownload}
                    variant={"contained"}
                    color={"secondary"}
                    style={{marginLeft: '20vw'}}>
              <SaveIcon style={{marginRight: 5}}/>
              Download
            </Button>}
        <input
            ref={inputRef}
            onChange={handleImage}
            type="file"
            accept="image/png, image/jpeg, image/gif"
            style={{display: "none"}}
        />
      </div>
  );
}


 */