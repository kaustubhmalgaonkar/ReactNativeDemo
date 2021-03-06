import React, {
  Component,
} from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import Labels from './../Labels';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class DrawerMenuList extends Component {
	constructor() {
	    super(...arguments);
	    this.state = {
	      dataSource: ds.cloneWithRows(this.props.routes),
	    };
	}

	render() {
	    return (
	      <View style={styles.listContainer}>
	        <ListView
	          style={styles.list}
	          dataSource={this.state.dataSource}
	          renderRow={this._renderRow.bind(this)}
	          keyboardShouldPersistTaps="always"
	          automaticallyAdjustContentInsets={false}
	          keyboardDismissMode="on-drag"></ListView>
	      </View>
	    );
	}

	_renderRow(route:any, i:number) {
	    return (
	      <View key={i}>
	        <TouchableHighlight
	          onPress={() => this.props.onPressRow(route)}>
	          <View style={styles.row} accessibilityLabel={Labels.Drawer.itemPrefix + route.title}>
	            <Text style={styles.rowTitleText}>
	              {route.title}
	            </Text>
	          </View>
	        </TouchableHighlight>
	        <View style={styles.separator}/>
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  list: {
    backgroundColor: '#eeeeee',
  },
  row: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowTitleText: {
    fontSize: 17,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#bbbbbb',
  },
});

module.exports = DrawerMenuList;