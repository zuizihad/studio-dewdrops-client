import React from 'react';
import './Promotion.css';
import promotionalImg from '../../../images/studio.jpg'
const Promotion = () => {
    return (
        <section className="promotion my-5">
            <h1 className="text-center text-white py-5" >PROMOTIONS</h1>
            <div className="d-flex justify-content-center">
                <div className="row w-75 align-items-center mb-5">
                    <div className="col-md-6">
                        <img src={promotionalImg} alt="" width="600" />
                    </div>
                    <div className="col-md-6">
                        <h1 className=" mb-5" style={{ color: 'goldenrod' }}>Let us handle your document's properly</h1>
                        <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Exercitationem voluptatibus quis qui, eveniet numquam voluptas,
                        quia nostrum unde totam ea, nam libero id iusto commodi voluptatem
                        velit perferendis soluta voluptates.
                        </p>
                        <div className="params">
                            <div className='client'>
                                <h1 className="text-white">500+ </h1>
                                <h5 className="text-white">happy client</h5>
                            </div>
                            <div className='service'>
                                <h1 className="text-white">7+</h1>
                                <h5 className="text-white">service</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Promotion;