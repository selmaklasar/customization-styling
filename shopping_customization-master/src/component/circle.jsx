import React, { useEffect, useRef, useState } from 'react';
import styles from './circle.module.css'
 import fonts from '../fonts/mad/mad.ttf' 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faDownload } from '@fortawesome/free-solid-svg-icons';
function CanvasDownload2() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [radius, setRadius] = useState(200); // Adjust the radius as needed
  const [fontSize, setFontSize] = useState(500); // Adjust the font size as needed

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
const fontWeight=900
    // Draw text along a circle
    ctx.font = ` ${fontWeight} ${fontSize}px ${fonts}`;
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
   
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const angleStep = (2 * Math.PI) / text.length;

    for (let i = 0; i < text.length; i++) {
      const angle = (2 * Math.PI) - angleStep * i; // Subtract angle from 2π to make it clockwise
      const x = centerX - Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius; // Negate the sine value to make it go upward
      ctx.fillText(text[i], x, y);
    }
  }, [text, radius, fontSize,fonts]);

  const handleDownload = () => {
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'canvas_image.png');
    canvasRef.current.toBlob(function(blob) {
      const url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.textfield}>
       <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text" className={styles.Input_field}/><br />
       </div>
    <div className={styles.radius}>
      <input type="number" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} placeholder="Enter radius" className={styles.radius_field}/><br></br>
       </div>
    <div className={styles.fontsize}>
      <input type="number" value={fontSize} onChange={(e) => setFontSize(parseInt(e.target.value))} placeholder="Enter font size" className={styles.fontsize}/>
      </div>
      <div className={styles.canvas}>
      <canvas ref={canvasRef} width="600" height="400" style={{ border: '2px solid black' }} className={styles.canvass}></canvas><br />
     
      </div> 
      <div className={styles.download_button}>
      < FontAwesomeIcon icon={faDownload}   onClick={handleDownload}  className={styles.faDownload}  /></div>
      </div>
    
  );
}

export default CanvasDownload2;
