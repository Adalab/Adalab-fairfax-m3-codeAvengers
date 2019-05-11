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
                                <h3 className="card__name resultName">{this.props.newName.name}</h3>
                                <p className="card__job-title resultJob">{this.props.newName.job}</p>
                            </div>
                        </div>
                        <div className="card__photo js__profile-image"></div>
                        <ul className="card__list">
                            <li className="list__item list__item--email">
                                <a href="mailto:${value}" class="card__list--link far fa-envelope email__icon" target="_blank">email</a>
                            </li>
                            <li className="list__item list__item--phone">
                                <a href="tel:${value}" class="card__list--link fas fa-mobile-alt phone__icon" target="_blank">mobile</a>
                            </li>
                            <li className="list__item list__item--linkelind">
                                <a href="https://www.linkedin.com/in/${value}" class="card__list--link fab fa-linkedin-in linkedin__icon" target="_blank">linkedin</a>
                            </li>
                            <li className="list__item list__item--github">
                                <a href="https://github.com/${value}" class="card__list--link fab fa-github-alt github__icon" target="_blank">github</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default Preview;