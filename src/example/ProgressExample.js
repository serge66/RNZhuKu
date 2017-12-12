import ProgressComponent from '../components/ProgressComponent';

var React = require('react');
var {
    View,
} = require('react-native');
var Demo = React.createClass({

        getInitialState() {
            return {
                visible: true
            };
        },

        render() {
            return (
                <View>
                    <ProgressComponent visible={this.state.visible}/>
                </View>
            );
        }
    })


export default Demo;