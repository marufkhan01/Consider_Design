import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

class Dragdrop extends Component{
    constructor(props){
        super(props);
        this.state={
            filesPreview:[],
            filesToBeSent:[],
            printcount:10,
        }
    }
    onDrop(acceptedFiles) {
        console.log('Accepted files: ', acceptedFiles[0].name);
        var filesToBeSent=this.state.filesToBeSent;
        if(filesToBeSent.length < this.state.printcount){
            filesToBeSent.push(acceptedFiles);
            var filesPreview=[];
            for(var i in filesToBeSent){
                filesPreview.push(
                    <div>
                        {filesToBeSent[i][0].name}
                    </div>
                )
            }
            this.setState({filesToBeSent,filesPreview});
        }
        else{
            alert("You have reached the limit of printing files at a time")
        }
    }
    render(){
        return(

            <div className="upp_down">
                <div className="upload_area">
                        <Dropzone onDrop={(files) => this.onDrop(files)}>
                            <div>Try dropping some files here, or click to select files to upload.</div>
                        </Dropzone>
                </div>
                <div className="display">
                Files to be printed are:
                {this.state.filesPreview}
                </div>
                <div className="download_area">

                </div>
            </div>

        );
    }
}
export default Dragdrop;