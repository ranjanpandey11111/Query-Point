import React from 'react';

class leftNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contents: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleChange(e) {
        this.setState({
            contents: e.target.value
        });
    }

    handlePost() {
        let contents = this.state.contents;

        this.props.onPost(contents).then(
            () => {
                this.setState({
                    contents: ""
                });
            }
        );
    }


    render() {
		console.log("cv cxv cv cv ")
        return (
            <div className="container leftNav">
                <div className="card">
                    <div className="card-content">
					<label for="upload-photo">Browse...</label>
                        <input type="file" name="photo" id="upload-photo" onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
}

leftNav.propTypes = {
    onPost: React.PropTypes.func
};

leftNav.defaultProps = {
    onPost: (contents) => { console.error('onPost not defined'); }
};

export default leftNav;
