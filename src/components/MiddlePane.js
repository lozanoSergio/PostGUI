// @flow weak
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
    }),
    middlePaper: {
        width: '73%',
        marginLeft: 350,
        marginTop: -450
    },
    cardMarginLeft: { // For items within the same section
      marginLeft: 16
    },
    cardMarginLeftTop: { // For a new section
      marginLeft: 16,
      marginTop: 16 // want a bit more space at top to clearly indicate new section...
    },
}));

function PaperSheet(props) {
    const classes = props.classes;
    return (
        <div className={classes.middlePaper}>
        <Paper className={classes.root} elevation={4}>
          <CardHeader
                title="Table"
                subheader="A somewhat short description for the table. Could include helpful info about the data, or how to query the table."
              />
          <Typography type="subheading" className={classes.cardMarginLeftTop}>
            Query Builder
          </Typography>
      </Paper>
    </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(PaperSheet);