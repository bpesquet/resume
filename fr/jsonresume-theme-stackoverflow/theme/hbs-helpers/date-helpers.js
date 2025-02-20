const moment = require('moment');

// Change locale to format dates the french way
moment.locale('fr')

const dateHelpers = {
  MY: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: date => moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY')
};

module.exports = { dateHelpers };
