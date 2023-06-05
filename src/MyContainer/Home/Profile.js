import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
  return (
    <>
    <div className="container">
  <div className="row">
    <div className="ml-2 mr-2">
     <a href=""> <i class="fab fa-linkedin "></i></a>
    </div>
    <div className="ml-2 mr-2">
     <a href="https://github.com/sKyi01"> <i class="fab fa-github"></i></a>
    </div>
    <div className="ml-2 mr-2">
      <a href=""><i class="fab fa-youtube"></i></a>
    </div>
    <div className="ml-2 mr-2">
      <a href=""><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</div>
<div classsName="container">

<div>
    <Typical loop={Infinity}
    steps={["Java Developer",1000,"Software Developer",1000]}>



    </Typical>
</div>

</div>

    </>
  )
}



