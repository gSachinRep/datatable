import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import InfoOutline from 'material-ui/svg-icons/action/info-outline';

import DataTables from '../../src';

const styles = {
  container: {
    textAlign: 'center',
  },
  component: {
    margin: '60px 20px',
  },
  titleStyle: {
    fontSize: 16,
    color: deepOrange500,
  },
  footerToolbarStyle: {
    padding: '0 100px',
  },
  tableStyle: {
    tableLayout: 'auto',
  },
  tableBodyStyle: {
    overflowX: 'auto',
  },
  tableWrapperStyle: {
    padding: 5,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Areas',
  }, {
    key: 'status',
    label: 'Status',
  }, {
    key: 'total',
    label: 'Checks',
  }, {
    key: 'passes',
    label: 'passed',
  }, {
    key: 'failed',
    label: 'Failed',
  }, {
    key: 'score',
    label: 'Score',
  }
];

var mTdata = { "evalScores": {
        "sections": [
          {
            "name": "cadetTests",
            "status": "notfound",
            "total": 0,
            "passes": 0,
            "failed": 0,
            "score": 0
          },
          {
            "name": "commanderTests",
            "status": "notfound",
            "total": 0,
            "passes": 0,
            "failed": 0,
            "score": 0
          },
          {
            "name": "eslint",
            "status": "Failed",
            "total": 8,
            "passes": 0,
            "failed": 8,
            "score": 0
          },
          {
            "name": "htmlhint",
            "status": "notfound",
            "total": 0,
            "passes": 0,
            "failed": 0,
            "score": 0
          },
          {
            "name": "smells",
            "status": "notfound",
            "total": 0,
            "passes": 0,
            "failed": 0,
            "score": 0
          }
        ],
        "finalScore": 0
      }
}

const TABLE_DATA = mTdata.evalScores.sections;

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    // this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    // this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
    // this.handleCellClick = this.handleCellClick.bind(this);
    // this.handleCellDoubleClick = this.handleCellDoubleClick.bind(this);
    // this.handleRowSelection = this.handleRowSelection.bind(this);
    // this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
    // this.handleNextPageClick = this.handleNextPageClick.bind(this);
    // this.handlePersonAddClick = this.handlePersonAddClick.bind(this);
    // this.handleInfoClick = this.handleInfoClick.bind(this);

    this.state = {
      data: TABLE_DATA,
      page: 1,
    };
  }

  // handleSortOrderChange(key, order) {
  //   console.log('key:' + key + ' order: ' + order);
  // }
  //
  // handleFilterValueChange(value) {
  //   console.log('filter value: ' + value);
  // }
  //
  // handleCellClick(rowIndex, columnIndex, row, column) {
  //   console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  // }
  //
  // handleCellDoubleClick(rowIndex, columnIndex, row, column) {
  //   console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
  // }
  //
  // handleRowSelection(selectedRows) {
  //   console.log('selectedRows: ' + selectedRows);
  // }
  //
  // handlePreviousPageClick() {
  //   console.log('handlePreviousPageClick');
  //   this.setState({
  //     data: TABLE_DATA,
  //     page: 1,
  //   });
  // }
  //
  // handleNextPageClick() {
  //   console.log('handleNextPageClick');
  //   this.setState({
  //     data: TABLE_DATA_NEXT,
  //     page: 2,
  //   });
  // }
  //
  // handlePersonAddClick() {
  //   console.log('handlePersonAddClick');
  // }
  //
  // handleInfoClick() {
  //   console.log('handleInfoClick');
  // }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Material-UI-Custom-Components</h1>
          <div style={styles.component}>
            <h2>DataTables (Basic)</h2>
            <Card style={{margin: 12, textAlign: 'left'}}>
              <CardHeader
                title='Evaluation Scores'
                titleStyle={{fontSize: 20}}
              />
              <DataTables
                height={'auto'}
                selectable={false}
                showRowHover={false}
                columns={TABLE_COLUMNS}
                data={TABLE_DATA}
                showCheckboxes={false}
                count={100}
              />
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
