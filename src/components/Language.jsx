import React from "react";

class Language extends React.Component {
	render() {
		const { name, image } = this.props;
		return (
			<div className="language-item">
				<div className="language-name">{name}</div>
				<img className="language-image" src={image} />
			</div>
		);
	}
}

export default Language;
