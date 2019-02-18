import React,{Component} from 'react';

class Crop extends Component{
    
    crop(url){
        document.querySelector('.crop-image').src=url;
            // only allow one crop. turn it off after that
        var image;
        fabric.util.loadImage(url,function(img){//url可为本地图片或web图片
            image = new fabric.Image(img);
            image.selectable = false;
            canvas.setWidth(image.getWidth());
            canvas.setHeight(image.getHeight());
            canvas.add(image);
            canvas.centerObject(image);
            canvas.renderAll();
        });
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}