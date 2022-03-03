import React from 'react';
import img_Video from './img_Video/2.jpg';


function ProfilePhoto() {
  return (
    <div className="ProfilePhoto">
      <div style={{"border":"solid 1px black","max-width":"100vw"}}>
      <img src={img_Video} />
      </div>
    </div>
  );
}

export default ProfilePhoto;
