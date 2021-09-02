import * as React from 'react';

import {IComponentsProps} from '../common/interfaces';

const tableStyle = {
  table: {
    width: '100%',
  },
};

const Cell = ({children, style = {}, className}: IComponentsProps) => (
  <td style={style} className={className}>{children}</td>
);

const Row = ({children, style = {}}: IComponentsProps) => (
  <tr style={style}>
    {React.Children.map(children, (el: any) => {
      if (el.type === Cell) return el;
      return <td>{el}</td>;
    })}
  </tr>
);

const Grid = ({children, style = {}}: IComponentsProps) => (
  <table style={{...tableStyle.table, ...style}}>
    <tbody>
    {React.Children.map(children, (el: any) => {
      if (!el) return;

      // We want this content the be on it's own row.
      if (el.type === Row) return el;

      // The content is all inside a single cell (so a row)
      if (el.type === Cell) {
        return <tr>{el}</tr>;
      }

      // The content is one cell inside it's own row
      return (
        <tr>
          <td>{el}</td>
        </tr>
      );
    })}
    </tbody>
  </table>
);

Grid.Row = Row;
Grid.Cell = Cell;

export default Grid;
