import React from 'react';

export default class CoursesPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			course: {
				title: ''
			}
		};
	}

	onTitleChange = event => {
		const course = {...this.state.course};
		course.title = event.target.value;
		this.setState({course});
	};

	render = () => {
		return (
			<div>
				<h1>Courses</h1>
				<h2>Add course</h2>
				<input 
					type="text"
					onChange={this.onTitleChange}
					value={this.state.course.title}/>
				<input 
					type="submit"
					onChange={this.onClickSave}
					value="Save"/>
			</div>);
	};
}