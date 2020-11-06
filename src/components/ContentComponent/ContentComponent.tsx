import React from 'react';
import styles from './ContentComponent.module.css';

const ContentComponent: React.FC = () => (
  <div className={styles.ContentComponent} data-testid="ContentComponent">
    ContentComponent Component
  </div>
);

export default ContentComponent;
