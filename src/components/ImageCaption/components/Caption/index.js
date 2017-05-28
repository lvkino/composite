import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	height: 30%;
	width: 100%;
	background-color: rgba(0,0,0,0.4);
    display: flex;
    box-sizing: border-box;
`;

const Logo = styled.img`
    max-height: 80%;
    margin-left: 10px;
    align-self: center;
`;

const Title = styled.h2`
	color: #fff;
	font-size: 41px;
    margin: 0;
    align-self: center;
    margin-left: 10px;

    @media (max-width: 630px) {
		font-size: 6.5vw;
	}
`;


export default class Caption extends Component {

	render(){

		const { captionImg, captionTitle } = this.props;

		return (
			<Container>
				<Logo src={captionImg} />
				<Title>{captionTitle}</Title> 
			</Container>
		);
	}

}