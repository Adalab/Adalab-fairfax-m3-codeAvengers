import React from 'react';

class Preview extends React.Component {
    render() {
        return (
            <div>
                <section className="section__card">
                    <div className="card__box">
                        <button className="card__reset"><i className="far fa-trash-alt"></i>Reset</button>
                        <div className="card__box--header">
                            <div className="card__box--text">
                                <h3 className="card__name resultName">Nombre Apellido</h3>
                                <p className="card__job-title resultJob">Front-end developer</p>
                            </div>
                        </div>
                        <div className="card__photo js__profile-image"></div>
                        <ul className="card__list">
                            <li className="list__item list__item--email"></li>
                            <li className="list__item list__item--phone"></li>
                            <li className="list__item list__item--linkelind"></li>
                            <li className="list__item list__item--github"></li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Preview;