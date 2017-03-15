import React, {
	Component
} from 'react';

import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight
} from 'react-native';


class Login extends Component{

	constructor(props) {
	    super(props)

	    this.state = {
	      username: '',
	      password: '',
	    }
	}

	onButtonPress(){
		this.props.navigator.push({
			id : 'Dashboard',
			data : this.state.username,
			gestures: null
		});
	}

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.largetext}>
					Login Screen
				</Text>
				<TextInput
					style={{alignSelf: 'stretch'}}
		        	placeholder="Username"
		          	onChangeText={(username) => this.setState({username})}
		          	value={this.state.username}
		          	></TextInput>
		        <TextInput
		        	value={this.state.password}
		          	style={{alignSelf: 'stretch'}}
		          	secureTextEntry={true}
		          	placeholder="Password"
		          	onChangeText={(password) => this.setState({password})}></TextInput>
				<TouchableHighlight onPress={this.onButtonPress.bind(this)} style={styles.button}>
					<Text style={styles.buttontext}> Login </Text>
				</TouchableHighlight>
			</View>
		)
	}

}


const styles = StyleSheet.create({
	red: {
    	color: 'red',
  	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		padding: 10,
	},
	button: {
		height: 50,
		backgroundColor: '#48BBEC',
		alignSelf: 'stretch',
		alignItems: 'center',
		marginTop: 10,
		justifyContent: 'center'
	},
	buttontext: {
		fontSize: 22,
		color: '#FFF',
		alignSelf: 'center'
	},
	largetext: {
		flex: 1,
		fontSize: 52,
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20
	}
});

module.exports = Login;
