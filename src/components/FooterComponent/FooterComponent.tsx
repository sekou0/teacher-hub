import React from 'react';
import styles from './FooterComponent.module.css';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const FooterComponent: React.FC = () => (
  <div className={styles.FooterComponent} data-testid="FooterComponent">
    <footer>
        <Grid container>
            <Grid item xs={12}>
                <Typography>Copyright © 2019 Dough Dough - All Rights Reserved.</Typography>
            </Grid>
        </Grid>
    </footer>
  </div>
);

export default FooterComponent;
