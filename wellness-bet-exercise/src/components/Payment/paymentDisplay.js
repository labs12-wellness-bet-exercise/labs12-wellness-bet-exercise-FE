import React from "react";
import Payment from "./paymentProof";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";
import Popup from "reactjs-popup";
import "./payment.css";

class PaymentDisplay extends React.Component {
  state = [];
  render() {
    return (
      <div>
        {/* <Popup trigger={<button> Trigger</button>} position="bottom center">
        <div className='popUp'>
            <h3>Popup content here !!</h3>
            <Image cloudName="demo" publicId="sample" />
        </div>
        </Popup> */}
        <Popup trigger={<button className="button"> See Proof Of Payment </button>} modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Proof of Payment </div>
              <div className="content">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
                quibusdam voluptates delectus doloremque, explicabo tempore
                dicta adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur sit commodi beatae optio voluptatum sed eius cumque,
                delectus saepe repudiandae explicabo nemo nam libero ad,
                doloribus, voluptas rem alias. Vitae?
              </div>
              <Image cloudName="demo" publicId="sample" />
              <div className="actions">
                <Popup
                  trigger={<button className="button"> Approve Payment </button>}
                  position="top center"
                  closeOnDocumentClick
                >
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Beatae magni omnis delectus nemo, maxime molestiae dolorem
                    numquam mollitia, voluptate ea, accusamus excepturi deleniti
                    ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                  </span>
                </Popup>
                <button
                  className="button"
                  onClick={() => {
                    console.log("modal closed ");
                    close();
                  }}
                >
                  close modal
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  }
}

export default PaymentDisplay;
