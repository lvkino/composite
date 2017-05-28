import React, { Component } from 'react'
import styled from 'styled-components';
import Caption from './components/Caption';

const Container = styled.div`
	position: relative;
	display: inline-block;
    font-size: 0;
`;

const BackgroundImage = styled.img`
	max-width: 100%;
`;

export default class ImageCaption extends Component {

	render(){

		const { bkgImg, captionImg, captionTitle } = this.props;

		return (
			<Container>
				<BackgroundImage src={bkgImg} />
				<Caption captionImg={captionImg} captionTitle={captionTitle} />
			</Container>
		);
	}

}