import React from 'react';
import MagicButton from './MagicButton';

class MagicTable extends React.Component {
    crateTable() {
      let table = [];
      
      for(let i = 0; i < 10; i++) {
        let children = [];
        table.push(<tr><td><MagicButton/></td></tr>);
      }
      return table;
    }
    render() {
      return (
        <table>
          {this.crateTable()}
        </table>
      );
    }
}

export default MagicTable;