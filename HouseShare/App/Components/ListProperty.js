var React = require('react-native');
var { Image,
  StyleSheet,
  Text,
  View,
  ListView
} = React;


var MOCK_DATA = [
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images: {thumbnail:
  'http://hmp.me/ol5'}},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images: {thumbnail:
  'http://hmp.me/ol6'}},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images: {thumbnail:
  'http://hmp.me/ol7'}},
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images:
  {thumbnail: 'http://hmp.me/ol5'}},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images: {thumbnail:
  'http://hmp.me/ol6'}},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images: {thumbnail:
  'http://hmp.me/ol7'}},
  {name: 'Mr. Johns Conch house', address: '12th Street, Neverland', images: {thumbnail:
  'http://hmp.me/ol5'}},
  {name: 'Mr. Pauls Mansion', address: '625, Sec-5,  Ingsoc', images: {thumbnail:
  'http://hmp.me/ol6'}},
  {name: 'Mr. Nalwayas Villa', address: '11, Heights, Oceania', images: {thumbnail:
  'http://hmp.me/ol7'}}
];


var ListProperty = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
    dataSource: ds.cloneWithRows(MOCK_DATA),
}; },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderProperty}
        style={styles.listView}/>
); },
  renderProperty: function(property) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: property.images.thumbnail}}
          style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{property.name}</Text>
          <Text style={styles.address}>{property.address}</Text>
        </View>
</View> );
}, });


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
        justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
width: 63,
    height: 91,
  },
  rightContainer: {
    flex: 1,
}, name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
}, address: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
}, });
module.exports = ListProperty;