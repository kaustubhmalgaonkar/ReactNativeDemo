import React, {
	Component
} from 'react';

import {
	Dimensions,
  	DrawerLayoutAndroid,
	View,
	Text,
	ToolbarAndroid,
	StyleSheet,
	BackAndroid
} from 'react-native';

import {ROUTES} from './../Routes';
import DrawerMenuList from './../drawermenulist/DrawerMenuList';

class Dashboard extends Component{

	componentDidMount(){
		BackAndroid.addEventListener('hardwareBackPress', () => {
			navigator = this.props.navigator;
		    if (navigator && navigator.getCurrentRoutes().length > 1) {
		        navigator.pop();
		        return true;
		    }
		    return false;
		});

		this.getUserDetailFromApi();
	}

	constructor() {
	    super(...arguments);
	    this.state = {
	      route: ROUTES[0]
	    };
	}

	async getUserDetailFromApi() {
	    try {
	      let response = await fetch('http://demo6661379.mockable.io/testing');
	      // let responseJson = await response.json();
	      console.log(await response);
	      return response;
	    } catch(error) {
	      console.error(error);
	    }
	}

	render(){
		return(
			<DrawerLayoutAndroid
		        drawerPosition={DrawerLayoutAndroid.positions.Left}
		        drawerWidth={Dimensions.get('window').width - 80}
		        keyboardDismissMode="on-drag"
		        ref={(drawer) => { this.drawer = drawer; }} 
		        renderNavigationView={this._renderNavigationView.bind(this)}>
		        <ToolbarAndroid
		          	navIcon={require('./../images/hamburger_menu.png')}
		          	onIconClicked={() => this.drawer.openDrawer()}
		          	style={styles.navBar}
		          	/*subtitle={this.state.route.title}
		          	title={this.props.data}*/
		        	title='Dashboard'/>
		        	{this._renderScene()}
		    </DrawerLayoutAndroid>
		)
	}

	_renderNavigationView() {
	    return (
	      <DrawerMenuList
	        routes={ROUTES}
	        onPressRow={this._onSelectMenuItem.bind(this)}
	      ></DrawerMenuList>
	    );
	}

	_renderScene() {
	    return (
	    	<View style={styles.container}>
	        	<Text>{this.state.route.title}</Text>
		    </View>
	    );
	}

	_onSelectMenuItem(route) {
    	this.drawer.closeDrawer();
    	this.setState({ route: route });
  	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor: '#FFFFFF',
	},
	largeText: {
		flex: 1,
		fontSize: 52,
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20
	},
	navBar: {
	    backgroundColor: '#ddd',
	    height: 56,
	},
	navBarText: {
		fontSize: 16,
	    fontWeight: '500',
	    marginVertical: 16,
	}
});

module.exports = Dashboard;